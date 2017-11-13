import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DrawSound extends Component {
  constructor() {
    super()
    this.state = {
      mode: 'points'
    }
    this.audioContext = new AudioContext();
    this.mouseHandler = this.mouseHandler.bind(this)
    this.play = this.play.bind(this);
  }

  play(note, vol, detune, type = 'sine') {
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    osc.frequency.value = note;
    osc.detune.value = detune;
    gain.gain.value = 0.5
    osc.connect(gain);
    gain.connect(this.audioContext.destination);
    osc.start()
  }

  mouseHandler(event) {
    console.log('x: ', event.screenX, ' y: ', event.screenY)
    let note = (2 * event.screenX) + 150;
    let vol = (5 * event.screenY) / 12;
    let detune = (event.screenY * 1.5) - 700
    this.play(String(note), vol, detune);
  }

  render() {
    return (
      <div>
        <br />
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
          <button
            className="stopButton"
            onClick={() => window.location.reload(true)}
          >Stop
        </button>
        </div>
        <br />
        <div className="padContainer">
          {
            this.state.mode === 'points' ?
              <img
                src="http://www.fnordware.com/superpng/pnggrad16rgb.png"
                className="pad"
                onMouseDown={this.mouseHandler}
              />
              :
              <img
                src="http://www.fnordware.com/superpng/pnggrad16rgb.png"
                className="pad"
                onMouseMove={this.mouseHandler}
              />
          }
        </div>
      </div>
    );
  }
};
