import React, {Component} from 'react'

class Music extends Component {

  componentDidMount () {
    this.updatePlayingState()
  }

  componentDidUpdate () {
    this.updatePlayingState()
  }

  updatePlayingState () {
    const player = this.refs.player
    if (this.props.isPlaying) {
      player.play()
    } else {
      player.pause()
    }
  }

  render (props) {
    return (
      <div className='Music'>
        <audio ref='player' src='mimstris.mp3' loop='true' />
      </div>
    )
  }
}

export default Music
