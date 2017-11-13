import React, { Component } from 'react';
const synth = require('../../synth')

export default class SoundButton extends Component {
  constructor(props) {
    super(props);
    // this.playNote = this.playNote.bind(this);
    this.stopNote = this.stopNote.bind(this)
  }

  // playNote() {
  //   synth.play(this.props.note);
  // }

  stopNote() {
    synth.noteOff();
  }

  render() {
    return (
      <div>
        <div
          onClick={this.playNote}
          // onMouseDown={this.playNote}
          // onMouseUp={this.stopNote}
          // onMouseLeave={this.stopNote}
          >
          Start
      </div>
      </div>
    );
  }

}
