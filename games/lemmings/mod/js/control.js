/*

DHTML lemmings(tm)

GNU Copyright (C) 2004 crisp - freesoftware@xs4all.nl

*/

var cheatmode = 0;
var speed = 1;
var ani_speed = 80;
var timer_speed = 60;
var paused = 0;
var kill_all = 0;
var selected_type = null;
var statusmsg = '';
var levelmsg = '';
var newlemming_timer = 0;
var release = null;
var release_speedup;
var release_rate;
var lemmings_out = 0;
var lemmings_home = 0;
var num_lemmings;
var playground;
var target;
var target_img = new Array();
var grid_width;
var target_direction = 'b';
var windowwidth = 560;

function scaleStuff () {
        function viewPort() {
                var h = window.innerHeight
                || document.documentElement.clientHeight
                || document.getElementsByTagName('body')[0].clientHeight;
                var w = window.innerWidth
                || document.documentElement.clientWidth
                || document.getElementsByTagName('body')[0].clientWidth;

                return {width : w, height : h};
        }

        var size = viewPort();
        var pb = document.getElementById("progressbar");
        pb.style.width = size.width - 150;
        windowwidth = size.width- (size.width/4);
                var b = document.getElementById ("content");
		b.style.width = "100%";
                b.style.left = "0px";
                b.style.right= "0px";
                b.style.top = "0px";
                b.style.height = ""+(size.height - 100) + "px";
}
window.onresize = scaleStuff;
document.addEventListener ('DOMContentLoaded', function (e) {
        scaleStuff ();
});

function init() {
  grid_width = state.level.base.images.field.width / 2;
// level is 160 element array.
// each entry is 515 bytes.
// each 515-byte entry is a 0 or 1.

  binlevel = decompress_level(state.level.base.encoded);

  if (binlevel.length != 160) {
    console.log('invalid length of decompressed data');
    return;
  }

  release_rate = state.level.min_release_rate;
  num_lemmings = state.level.init_lemmings;
  document.getElementById('num_more').firstChild.nodeValue = release_rate;
  document.getElementById('num_less').firstChild.nodeValue = release_rate;
  for (key in state.level.lemming_types) {
    const val = state.level.lemming_types[key];
    if (val > 0) {
        document.getElementById('num_'+key).firstChild.nodeValue = val;
    }
  }
  play_time = state.level.play_time * 25;
  document.getElementById('time').firstChild.nodeValue = format_time(Math.ceil(play_time/25));
  levelmsg = 'Save '+state.level.save_lemmings+' of '+state.level.init_lemmings+' Lemmings';
  statusmsg = levelmsg;
  status_message(0);


  playground.style.width = state.level.base.images.field.width+'px';
  init_scroll();

    for (const key in state.level.base.images) {
        if (state.level.base.images[key].type != 'doors') {
            place_image(state.level.base.images[key]);
        }
    }

  // set global target
  target = document.getElementById('target');
  target_img['b'] = new Image(); target_img['b'].src = './img/target.gif';
  target_img['l'] = new Image(); target_img['l'].src = './img/target_left.gif';
  target_img['r'] = new Image(); target_img['r'].src = './img/target_right.gif';

  // set keyup handler for target
  document.onkeyup = function() { if (target_direction != 'b') target_direction = 'b'; target.src = target_img['b'].src; }

  document.getElementById('controls').style.visibility = 'visible';
  document.getElementById('statusbar').style.visibility = 'visible';
  document.getElementById('scrollbar').style.visibility = 'hidden'; // always hidden, coz in mobiles we can swipe
  document.getElementById('scroller').style.visibility = 'hidden'; // always hidden, coz in mobiles we can swipe
  playground.style.visibility = 'visible';

  start_game();
}

function start_game() {
  for (var key in state.level.base.images) {
    if (state.level.base.images[key].type == 'doors') {
        place_image(state.level.base.images[key]);
    }
  }
  if (sounds) playsound('letsgo');
  setTimeout('timer()', 1000);

}

function toggle_pause(img) {

  paused = 1 - paused;

  if (paused == 0) {

    img.src = './img/control_pause.gif';
    if (state.user.animations != 0) start_animations();
    statusmsg = levelmsg;

  } else {

    img.src = './img/control_pause_sel.gif';
    if (state.user.animations != 0) stop_animations();
    statusmsg = 'Game paused';

  }

  status_message(0);
  if (state.user.sounds) playsound('changeop');

}

function status_message(text) {

  document.getElementById('status').firstChild.nodeValue = (text ? text : statusmsg);

}

function toggle_lemming(type) {

  if (selected_type != null) document.getElementById('lemming_'+selected_type).src = './img/control_'+selected_type+'.gif';

  if (type != selected_type) {

    document.getElementById('lemming_'+type).src = './img/control_'+type+'_sel.gif';
    selected_type = type;

  } else {

    document.getElementById('lemming_'+type).src = './img/control_'+type+'.gif';
    selected_type = null;

  }

  if (sounds) playsound('changeop');

}

function toggle_release(num) {

  if (num > 0) {

    document.getElementById('release_more').src = './img/control_more_sel.gif';

  } else {

    document.getElementById('release_less').src = './img/control_less_sel.gif';

  }

  release_speedup = 6;
  change_release(num);

  if (sounds) playsound('changeop');

}

function stop_release() {

  if (release) {
    clearTimeout(release);
    release = null;
  }
  document.getElementById('release_more').src = './img/control_more.gif';
  document.getElementById('release_less').src = './img/control_less.gif';

}

function change_release(num) {

  release_rate += num;
  newlemming_timer -= 2 * num;
  if (release_rate > 99) {
    release_rate = 99;
    release = null;
    return;
  }
  if (release_rate < state.level.min_release_rate) {
    release_rate = state.level.min_release_rate;
    release = null;
    return;
  }
  document.getElementById('num_more').firstChild.nodeValue = release_rate;

  release_speedup--;
  var release_timeout = release_speedup > 0? 200:40;

  release = setTimeout('change_release('+num+')', release_timeout);

}

function speed_up(img) {

  if (speed == 1) {

    speed = 4;
    ani_speed = 20;
    img.src = './img/control_speed_sel.gif';

  } else {

    speed = 1;
    ani_speed = 80;
    img.src = './img/control_speed.gif';

  }

  if (sounds) playsound('changeop');

}

function timer() {

  if (paused == 0) {

    if (lemmings_out == 0 && num_lemmings == 0 && num_firework == 0) {
      // setTimeout('game_over()', 500);
      setTimeout('game_over('+state.gameOverGuard+')', 500);
      return;
    }

    if (speed < play_time) {

      play_time -= speed;
      document.getElementById('time').firstChild.nodeValue = format_time(Math.ceil(play_time/25));

    } else if (play_time != 0) {

      play_time = 0;
      document.getElementById('time').firstChild.nodeValue = format_time(0);

      kill_all = 1;
      var i = lemmings.length;
      while (i-- > 0) {
        if (lemmings[i]) {
          var l = lemmings[i];
          if (lem[l.ani]['nosel'] == 0) l.countdown = 1;
        }
      }
      num_lemmings = 0;

    }

    i = lemmings.length;
    while (i-- > 0) {
      if (lemmings[i]) {
        l = lemmings[i];
        if (l.countdown > 0) {
          if (speed < l.countdown) {
            l.countdown -= speed;
            l.counter.firstChild.nodeValue = Math.ceil(l.countdown/25);
          } else {
            l.countdown = 0;
            l.removecounter();
            l.changeAnimation('explode');
            if (sounds != 0) playsound('ohno');
          }
        }
      }
    }

    if (num_lemmings > 0) {

      newlemming_timer -= speed;
      if (newlemming_timer <= 0) {
        morelemmings();
        newlemming_timer = 109-release_rate;
      }

    }

  }

  if (lemming_targetted > -1) {
    target.style.top = (lemmings[lemming_targetted].top+6)+'px';
    target.style.left = (lemmings[lemming_targetted].left)+'px';
  }

  setTimeout('timer()', timer_speed);

}

function kill_em_all(img) {

  if (kill_all == 0) {

    img.src = './img/control_nuke_sel.gif';
    num_lemmings = 0;
    kill_all = 1;

    do_countdown(0);

    if (sounds) playsound('changeop');

  }

}

function do_countdown(i) {

  do {

    if (lemmings[i]) {

      var l = lemmings[i];
      if (l.countdown == -1 && lem[l.ani]['nosel'] == 0) {
        l.startcountdown();
        setTimeout('do_countdown('+i+')',ani_speed/2);
        break;
      }

    }

  } while (++i < lemmings.length);

}

function resetControls() {
    var names = ['climb', 'float', 'explode', 'block', 'build', 'bash', 'mine', 'dig' ];
    for (var i = 0; i < names.length; i++) {
        var type = names[i];
        document.getElementById('lemming_'+type).src = './img/control_'+type+'.gif';
        document.getElementById('num_'+type).firstChild.nodeValue = '';
    }
    document.getElementById('num_more').firstChild.nodeValue = '';
    document.getElementById('num_less').firstChild.nodeValue = '';

    state.paused = 0;
    document.getElementById('pause').src = './img/control_pause.gif';

    state.kill_all = 0;
    document.getElementById('nuke').src = './img/control_nuke.gif';

    state.speed = 1;
    document.getElementById('speed').src = './img/control_speed.gif';

    selected_type = null;
}

function resetGameVals() {
    cheatmode = 1;
    speed = 1;
    ani_speed = 80;
    timer_speed = 60;
    paused = 0;
    kill_all = 0;
    selected_type = null;
    statusmsg = '';
    levelmsg = '';
    newlemming_timer = 0;
    release = null;
    lemmings_out = 0;
    lemmings_home = 0;
    target_direction = 'b';
    windowwidth = 560;
}

function isTargetNode(node) {
    return node.nodeType == Node.ELEMENT_NODE && node.nodeName == 'IMG' && node.id == 'target';
}

function resetPlayground() {
    const children = document.getElementById('playground').childNodes;
    const nodes = [];
    for(var i=0; i<children.length; i++) {
        var child = children[i];
        if (! isTargetNode(child)) {
            nodes.push(child);
        }
    }
    while (nodes.length > 0) {
        nodes.pop().remove();
    }
}


function game_over(n) {
    if (n && state.gameOverGuard != n) {
        return;
    }
    state.gameOverGuard++;

  paused = 1;
    show_result_page();
    resetPlayground();

    if (lemmings_home >= state.level.save_lemmings) {
        setHighestCompletedLevel(state.user.rating, state.user.selected_num);
    }
}

var nukekey = 0;
function keyhandler(e) {

  if (!e) e = event;

  var key = e.which || e.keyCode || 0;

  // double f12 for nuke
  if (key == 123) {
    // '{'
    nukekey++;
    if (nukekey == 2) {
      kill_em_all(document.getElementById('nuke'));
    } else {
      setTimeout('nukekey=0', 500);
    }

  } else {

    nukekey = 0;

    switch(key) {

      case 112:
        // 'p'
        // plus (f1)
        toggle_release(+1);
        stop_release();
        break;
      case 113:
        // 'q'
        // minus (f2)
        toggle_release(-1);
        stop_release();
        break;
      case 114:
        // 'r'
        toggle_lemming('climb');
        break;
      case 115:
        // 's'
        toggle_lemming('float');
        break;
      case 116:
        // 't'
        toggle_lemming('explode');
        break;
      case 117:
        // 'u'
        toggle_lemming('block');
        break;
      case 118:
        // 'v'
        toggle_lemming('build');
        break;
      case 119:
        // 'w'
        toggle_lemming('bash');
        break;
      case 120:
        // 'x'
        toggle_lemming('mine');
        break;
      case 121:
        // 'y'
        toggle_lemming('dig');
        break;
      case 122:
        // 'z'
        // pause (f11)
        toggle_pause(document.getElementById('pause'));
        break;
      // case 27:
        // end (escape)
      case 47:
        // end ('/')
        paused = 1;
        show_menu_page();
        break;
      case 49:
        // '1'
        // stop sound (1)
          stopmusic();
          state.user.music = false;
          state.user.sounds = false;
        break;
      case 50:
        // '2'
        // start sound (2)
        state.user.music = true;
        state.user.sounds = true;
        playmusic();
        break;
      case 51:
        // '3'
        // stop animations (3)
        if (state.user.animations) {
          if (paused == 0) stop_animations();
          state.user.animations = false;
        }
        break;
      case 52:
        // '4'
        // start animations (4)
        if (! state.user.animations) {
          if (paused == 0) start_animations();
          state.user.animations = true;
        }
        break;
      case 12:
        // cheat (numpad 5 - numlock off)
        if (cheatmode != 0) {
          lemmings_home = state.level.init_lemmings;
          game_over();
        }
        break;
      case 101:
        // cheat (numpad 5)
        if (cheatmode != 0) {
          lemmings_home = state.level.init_lemmings;
          game_over();
        }
        break;
      case 53:
        // cheat (mozilla)
        // Numpad-5
        if (cheatmode != 0 && e.which) {
          // lemmings_home = init_lemmings;
          lemmings_home = state.level.init_lemmings;
          game_over();
        }
        break;
      case 37:
      case 55: // '7'
        if (target_direction != 'l') {
          target_direction = 'l';
          target.src = target_img['l'].src;
          removetarget();
        }
        break;
      case 39:
      case 57: // '9'
        if (target_direction != 'r') {
          target_direction = 'r';
          target.src = target_img['r'].src;
          removetarget();
        }
        break;

    }

  }

  // cancel the event
  return cancelEvent(e);

}

function removetarget() {
  if (target_direction != 'b' && lemming_targetted != -1 &&
      lemmings[lemming_targetted] &&
      lemmings[lemming_targetted].dir != target_direction) {
    target.style.visibility = 'hidden';
    lemming_targetted = -1;

  }

}

function format_time(seconds) {

  var sec = seconds % 60;
  var min = (seconds - sec) / 60;
  if (min <= 0) min = '00';
  else if (min < 10) min = '0' + min;
  if (sec <= 0) sec = '00';
  else if (sec < 10) sec = '0' + sec;
  return 'Time: '+min+':'+sec;

}

function decompress_level(compressed) {

  var uncompressed = [];
  var i = -1, j = 0;
  var p,n,o;

  try {

    var re = /([a-z]*)(\d*)(,?)(\d*)/g

    var matched = re.exec(compressed);

    while (matched[0]) {

      if (j == 0) uncompressed[++i] = [];

      if (matched[1]) {

        n = matched[1].length;
        o = 0;
        do {

          p = matched[1].charCodeAt(o) - 97;
          uncompressed[i][j++] = p;

        } while (++o < n);

        if (matched[2]) {

          n = parseInt(matched[2], 10);
          while (--n) uncompressed[i][j++] = p;
          p = 0;

        }

      } else {

        p = 0;

      }

      if (matched[3]) {

        while (j < grid_width) uncompressed[i][j++] = p;

        if (matched[4]) {

          n = parseInt(matched[4], 10)
          while (--n) {

            j = 0;
            uncompressed[++i] = [];
            while (j < grid_width) uncompressed[i][j] = uncompressed[i-1][j++];

          }

        }

        j = 0;

      }

      matched = re.exec(compressed);

    }

  } catch(e) { }

  return uncompressed;

}

function load_lem(type, dir, num, desc, nosel) {

  lem[type] = new Array();
  lem[type]['num'] = -32*(num-1);
  lem[type]['desc'] = desc;
  lem[type]['nosel'] = nosel;

  if (ie) {

    lem[type]['l'] = new Image();
    lem[type]['r'] = new Image();

    if (dir == 's') {
      lem[type]['l'].src = './img/lemming_'+type+'_s.gif';
      lem[type]['r'].src = './img/lemming_'+type+'_s.gif';
    } else {
      lem[type]['l'].src = './img/lemming_'+type+'_l.gif';
      lem[type]['r'].src = './img/lemming_'+type+'_r.gif';
    }

  } else {

    if (dir == 's') {
      lem[type]['l'] = 'url("./img/lemming_'+type+'_s.gif")';
      lem[type]['r'] = 'url("./img/lemming_'+type+'_s.gif")';
    } else {
      lem[type]['l'] = 'url("./img/lemming_'+type+'_l.gif")';
      lem[type]['r'] = 'url("./img/lemming_'+type+'_r.gif")';
    }

  }

}

var numpics;
function preload_images() {

    playground = document.getElementById('playground');

    // count images to load
    numpics = 0;

    for (let image of Object.values(state.level.base.images)) {
        numpics += (image.type == 'ani' || image.type == 'traps') ? 2 : 1;
    }

    // loop to preload
    for (let image of Object.values(state.level.base.images)) {

        var ani = new Image();
        ani.loaded = false;
        ani.onload = imgloaded;
        ani.onerror = imgloadederr;
        ani.onabort = imgloadedabort;
        ani.src = './levels/'+image.type+'/'+image.file;
        image.ani = ani;

        if (image.type == 'ani' || image.type == 'traps') {

            var gfx = new Image();
            gfx.loaded = false;
            gfx.onload = imgloaded;
            gfx.onerror = imgloadederr;
            gfx.onabort = imgloadedabort;

            gfx.src = './levels/gfx/'+image.file;
            image.gfx = gfx;
        }

        var img = new Image();
        img.loaded = false;
        img.onload = imgloaded;
        img.onerror = imgloadederr;
        img.onabort = imgloadedabort;
        img.src = image.ani.src;

        image.img = img; // More properties will be added to 'img' later.

    }

  progress();
}

function imgloaded() {

  this.loaded = true;

}

function imgloadederr(err) {

    this.loaded = false;

    var msg = '';
    if (this.src) {
        var last_slash = this.src.lastIndexOf('/');
        if (last_slash) {
            msg = ' If ./ani'+ this.src.substring(last_slash) + ' exists, this error can probably be ignored.';
        }
    }
    console.log('Failed to load ' + this.src + '.' + msg);
}

function imgloadedabort(err) {

    this.loaded = false;
}

function progress() {

  init_music();
}

function start_animations() {

  for (let image of Object.values(state.level.base.images)) {

    if (image.type == 'ani') image.img.src = image.ani.src;

  }


}

function stop_animations() {

  for (let image of Object.values(state.level.base.images)) {

    if (image.type == 'ani') image.img.src = image.gfx.src;
  }

}

function place_image(image) {

  var ani = ((image.type == 'ani' && !state.user.animations) || image.type == 'traps') ? 'gfx' : image.type;
  var e = image.img;
  e.className = 'element';
  e.style = "image-rendering: optimizeSpeed;image-rendering: -moz-crisp-edges;";
  e.style.height = image.height+'px';
  e.style.width = image.width+'px';
  e.style.top = image.top+'px';
  e.style.left = image.left+'px';
  e.style.zIndex = image.zindex;
  playground.appendChild(e);

}
