{ createLoop }   = require 'villain/loop'
Progress         = require '../progress'
Vignette         = require '../vignette'
SoundKit         = require '../soundkit'
DefaultRenderer  = require '../renderer/offscreen_2d'
{TICK_LENGTH_MS} = require '../../constants'
helpers          = require '../../helpers'
BoloWorldMixin   = require '../../world_mixin'

imageOverlay   = require '../image_overlay'
imageStyled    = require '../image_styled'

## Client world mixin

# Common logic between `BoloLocalWorld` and `BoloClientWorld`

BoloClientWorldMixin =

  start: ->
    vignette = new Vignette()
    @waitForCache vignette, =>
      @loadResources vignette, =>
        @loaded vignette

  # Wait for the applicationCache to finish downloading.
  waitForCache: (vignette, callback) ->
    # FIXME: Use applicationCache again.
    return callback() #unless applicationCache?

    vignette.message 'Checking for newer versions'
    cache = $(applicationCache)

    cache.bind 'downloading.bolo', ->
      vignette.message 'Downloading latest version'
      vignette.showProgress()
      cache.bind 'progress.bolo', (p) -> vignette.progress(p)

    cache.bind 'updateready.bolo', ->
      vignette.hideProgress()
      vignette.message 'Reloading latest version'
      location.reload()

    afterCache = ->
      vignette.hideProgress()
      cache.unbind '.bolo'
      callback()
    cache.bind 'cached.bolo', afterCache
    cache.bind 'noupdate.bolo', afterCache

  # Loads all required resources.
  loadResources: (vignette, callback) ->
    vignette.message 'Loading resources'
    progress = new Progress()

    @images = {}
    @loadImages (name) =>
      @images[name] = img = new Image()
      $(img).load progress.add()
      if location.search == '?local' && name == 'overlay'
        img.src = imageOverlay.data.split('\n').join('')
      else if location.search == '?local' && name == 'styled'
        img.src = imageStyled.data.split('\n').join('')
      else
          img.src = "images/#{name}.png"

    @soundkit = new SoundKit()
    @loadSounds (name) =>
      src = "sounds/#{name}.ogg"
      parts = name.split('_')
      for i in [1...parts.length]
        parts[i] = parts[i].substr(0, 1).toUpperCase() + parts[i].substr(1)
      methodName = parts.join('')
      @soundkit.load methodName, src, progress.add()

    unless applicationCache?
      vignette.showProgress()
      progress.on 'progress', (p) -> vignette.progress(p)
    progress.on 'complete', ->
      vignette.hideProgress()
      callback()
    progress.wrapUp()

  loadImages: (i) ->
    i 'base'
    i 'styled'
    i 'overlay'

  loadSounds: (s) ->
    s 'big_explosion_far'
    s 'big_explosion_near'
    s 'bubbles'
    s 'farming_tree_far'
    s 'farming_tree_near'
    s 'hit_tank_far'
    s 'hit_tank_near'
    s 'hit_tank_self'
    s 'man_building_far'
    s 'man_building_near'
    s 'man_dying_far'
    s 'man_dying_near'
    s 'man_lay_mine_near'
    s 'mine_explosion_far'
    s 'mine_explosion_near'
    s 'shooting_far'
    s 'shooting_near'
    s 'shooting_self'
    s 'shot_building_far'
    s 'shot_building_near'
    s 'shot_tree_far'
    s 'shot_tree_near'
    s 'tank_sinking_far'
    s 'tank_sinking_near'

  # Common initialization once the map is available.
  commonInitialization: ->
    @renderer = new DefaultRenderer(this)

    @map.world = this
    @map.setView(@renderer)

    @boloInit()

    @loop = createLoop
      rate: TICK_LENGTH_MS
      tick: () => @tick()
      frame: () => @renderer.draw()

    @increasingRange = no
    @decreasingRange = no
    @rangeAdjustTimer = 0

    @input = $('<input/>', id: 'input-dummy', type: 'text', autocomplete: 'off')
    @input.insertBefore(@renderer.canvas).focus()

    @input.add(@renderer.canvas).add('#tool-select label')
      .keydown (e) =>
        e.preventDefault()
        switch e.which
          when 90 then @increasingRange = yes
          when 88 then @decreasingRange = yes
          else @handleKeydown(e)
      .keyup (e) =>
        e.preventDefault()
        switch e.which
          when 90 then @increasingRange = no
          when 88 then @decreasingRange = no
          else @handleKeyup(e)

  # Method called when things go awry.
  failure: (message) ->
    @loop?.stop()
    $('<div/>').text(message).dialog(modal: yes, dialogClass: 'unclosable')

  # Check and rewrite the build order that the user just tried to do.
  checkBuildOrder: (action, cell) ->
    # FIXME: queue actions
    builder = @player.builder.$
    return [false] if builder.order != builder.states.inTank

    # FIXME: These should notify the user why they failed.
    return [false] if cell.mine
    [action, trees, flexible] = switch action
      when 'forest'
        if cell.base or cell.pill or not cell.isType('#') then [false]
        else ['forest', 0]
      when 'road'
        if cell.base or cell.pill or cell.isType('|', '}', 'b', '^') then [false]
        else if cell.isType('#') then ['forest', 0]
        else if cell.isType('=') then [false]
        else if cell.isType(' ') and cell.hasTankOnBoat() then [false]
        else ['road', 2]
      when 'building'
        if cell.base or cell.pill or cell.isType('b', '^') then [false]
        else if cell.isType('#') then ['forest', 0]
        else if cell.isType('}') then ['repair', 1]
        else if cell.isType('|') then [false]
        else if cell.isType(' ')
          if cell.hasTankOnBoat() then [false]
          else ['boat', 20]
        else if cell == @player.cell then [false]
        else ['building', 2]
      when 'pillbox'
        if cell.pill
          if cell.pill.armour == 16 then [false]
          else if cell.pill.armour >= 11 then ['repair', 1, yes]
          else if cell.pill.armour >=  7 then ['repair', 2, yes]
          else if cell.pill.armour >=  3 then ['repair', 3, yes]
          else if cell.pill.armour  <  3 then ['repair', 4, yes]
        else if cell.isType('#') then ['forest', 0]
        else if cell.base or cell.isType('b', '^', '|', '}', ' ') then [false]
        else if cell == @player.cell then [false]
        else ['pillbox', 4]
      when 'mine'
        if cell.base or cell.pill or cell.isType('^', ' ', '|', 'b', '}') then [false]
        else ['mine']

    return [false] unless action
    if action == 'mine'
      return [false] if @player.mines == 0
      return ['mine']
    if action == 'pill'
      pills = @player.getCarryingPillboxes()
      return [false] if pills.length == 0
    if @player.trees < trees
      return [false] unless flexible
      trees = @player.trees
    [action, trees, flexible]

helpers.extend BoloClientWorldMixin, BoloWorldMixin


## Exports
module.exports = BoloClientWorldMixin
