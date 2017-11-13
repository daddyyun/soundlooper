import React, { Component } from 'react';
let synth = require('./synth');

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false
    };
    this.playNote = this.playNote.bind(this);
    this.stopNote = this.stopNote.bind(this);
  }

  playNote() {
    synth.play();
  }

  stopNote() {
    setTimeout(synth.noteOff(), 1000);
  }

  render() {
    return (
      <div>
        <button
          className="cell"
          onClick={() => this.setState({isClicked: !this.state.isClicked})}
          onMouseDown={this.playNote}
          onMouseUp={this.stopNote}
        >
        </button>
      </div>
    )
  }
}
