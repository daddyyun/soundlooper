import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DrawSound extends Component {
  constructor() {
    super()
    this.state = {
      mode: 'points'
    }
    this.audioContext = new AudioContext();
    this.onMouseDown = this.onMouseDown.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.play = this.play.bind(this);
  }

  play(note, vol, detune, type = 'sine') {
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    osc.frequency.value = note;
    osc.detune.value = detune;
    osc.connect(gain);
    gain.connect(this.audioContext.destination);
    osc.start()
  }

  onMouseDown(event) {
    let note = 200 + (2 * event.screenX);
    let vol = (5 * event.screenY) / 12;
    let detune = event.screenY * 2
    this.play(String(note), vol, detune);
  }

  onMouseMove(event) {
    let note = 200 + (2 * event.screenX);
    let vol = (5 * event.screenY) / 12;
    let detune = event.screenY * 2
    this.play(String(note), vol, detune);
  }

  render() {
    return (
      <div>
        <div>
          <button
            className="pointsButton"
            onClick={() => this.setState({ mode: 'points' })}
          >Points
          </button>
          <button
            className="continuousButton"
            onClick={() => this.setState({ mode: 'continuous' })}
          >Continuous
          </button>
        </div>
        <br />
        <div>
        {
          this.state.mode === 'points' ?
            <img
              src="http://www.fnordware.com/superpng/pnggrad16rgb.png"
              className="pad"
              onMouseDown={this.onMouseDown}
            />
          :
            <img
              src="http://www.fnordware.com/superpng/pnggrad16rgb.png"
              className="pad"
              onMouseMove={this.onMouseMove}
            />
        }
        </div>
        <br />
        <button
          className="stopButton"
          onClick={() => window.location.reload(true)}
        >Stop
        </button>
      </div>
    );
  }
};
