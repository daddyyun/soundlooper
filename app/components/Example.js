import React, { Component } from 'react';

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = { x: 0, y: 0 };
    this.onMouseMove = this.onMouseMove.bind(this)
  }

  onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
  }

  render() {
    const { x, y } = this.state;
    return <div onMouseMove={this.onMouseMove}>
      <h1>Mouse coordinates: { x } { y }</h1>
    </div>;
  }
}
