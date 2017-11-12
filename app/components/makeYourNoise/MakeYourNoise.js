import React, { Component } from 'react';
import SoundButton from './SoundButton';
const synth = require('../../synth')


export default class MakeYourNoise extends Component {
  constructor() {
    super()
    this.state = { x: 0, y: 0 };
    this.onMouseMove = this.onMouseMove.bind(this)
  }

  onMouseMove(e) {
    console.log('X = ', e.screenX, 'Y = ', e.screenY)
    this.setState({ x: e.screenX, y: e.screenY });
    synth.play(String(e.screenX));
  }

  render() {
    const { x } = this.state
    console.log('X in render = ', x)
    const xStr = x.toString()
    return (

      <div>
        <div>
          <h3>Welcome To MAKE YOUR NOISE</h3>
        </div>
        <div onMouseMove={this.onMouseMove}>
          <SoundButton note={xStr}/>
        </div>
      </div>
    );
  }
};
