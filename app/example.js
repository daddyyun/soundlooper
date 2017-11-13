import React, { Component } from 'react';
import Key from './Key';

class SoundMachine extends Component () {
  constructor(props) {
    super(props);
    this.state = {
      context: new window.AudioContext() || new window.webkitAudioContext(),
      turns: [0, 0, 0, 0],
      currentTurn: 0,
      isPlaying: false
    };
    this.clickHandlerPlay = this.clickHandlerPlay.bind(this);
    this.tickHandler = this.tickHandler.bind(this);
  }

  componentDidMount() {
    this.clock = new WAAClock(this.state.context);
  }

  clickHandlerPlay () {
    if (!this.state.isPlaying) {
      this.setState({
        currentTurn: -1,
        isPlaying: true
      }, () => {
        this.clock.start();
        this.tickEvent = this.clock.callbackAtTime(
          this.tickHandler.bind(this),
          this.context.currentTime
        ).repeat(0.47)
      });
    } else {
      this.setState({
        isPlaying: false
      }, () => {
        this.clock.stop();
        this.tickEvent.clear();
        this.tickEvent = null;
      });
    }
  }

  tickHandler ({deadline}) {
    const {currentTurn, turns} = this.state;
    const newTurn = currentTurn + 1;
    if (turns[newTurn % turns.length]) {
      this.makeSound(this.context, deadline);
    }
    this.setState({
      currentTurn: newTurn
    })
  }

  makeSound () {
    const oscillator = this.state.context.createOscillator()
  }

  render () {
    const { turns, currentTurn, isPlaying } = this.state;

    return (
      <div>
        <div>
          {`Current Turn: ${currentTurn % turns.length}`}
        </div>
        <button onClick={() => this.clickHandlerPlay()}>
          {!isPlaying ? 'Play' : 'Stop'}
        </button>
      </div>
    )
  }
}
