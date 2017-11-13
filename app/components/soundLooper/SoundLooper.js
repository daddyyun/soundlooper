import React, { Component } from 'react';
import Cell from './Cell';

export default class SoundLooper extends Component {
  constructor() {
    super()
    this.state = {
      a: {},
      b: {},
      c: {},
      d: {},
      e: {},
      f: {},
      g: {},
      h: {}
    }
  }

  renderCell(num) {
    return (
      <Cell className="cell" />
    )
  }

  render() {
    return (
      <div>
        <div>
          <h3>Welcome To Sound Looper</h3>
        </div>
        <br />
        <div>
          <div className="boardRow">
            {this.renderCell(0)}
            {this.renderCell(1)}
            {this.renderCell(2)}
            {this.renderCell(3)}
            {this.renderCell(4)}
            {this.renderCell(5)}
            {this.renderCell(6)}
            {this.renderCell(7)}
          </div>
          <div className="boardRow">
            {this.renderCell(0)}
            {this.renderCell(1)}
            {this.renderCell(2)}
            {this.renderCell(3)}
            {this.renderCell(4)}
            {this.renderCell(5)}
            {this.renderCell(6)}
            {this.renderCell(7)}
          </div>
          <div className="boardRow">
            {this.renderCell(0)}
            {this.renderCell(1)}
            {this.renderCell(2)}
            {this.renderCell(3)}
            {this.renderCell(4)}
            {this.renderCell(5)}
            {this.renderCell(6)}
            {this.renderCell(7)}
          </div>
          <div className="boardRow">
            {this.renderCell(0)}
            {this.renderCell(1)}
            {this.renderCell(2)}
            {this.renderCell(3)}
            {this.renderCell(4)}
            {this.renderCell(5)}
            {this.renderCell(6)}
            {this.renderCell(7)}
          </div>
          <div className="boardRow">
            {this.renderCell(0)}
            {this.renderCell(1)}
            {this.renderCell(2)}
            {this.renderCell(3)}
            {this.renderCell(4)}
            {this.renderCell(5)}
            {this.renderCell(6)}
            {this.renderCell(7)}
          </div>
          <div className="boardRow">
            {this.renderCell(0)}
            {this.renderCell(1)}
            {this.renderCell(2)}
            {this.renderCell(3)}
            {this.renderCell(4)}
            {this.renderCell(5)}
            {this.renderCell(6)}
            {this.renderCell(7)}
          </div>
          <div className="boardRow">
            {this.renderCell(0)}
            {this.renderCell(1)}
            {this.renderCell(2)}
            {this.renderCell(3)}
            {this.renderCell(4)}
            {this.renderCell(5)}
            {this.renderCell(6)}
            {this.renderCell(7)}
          </div>
          <div className="boardRow">
            {this.renderCell(0)}
            {this.renderCell(1)}
            {this.renderCell(2)}
            {this.renderCell(3)}
            {this.renderCell(4)}
            {this.renderCell(5)}
            {this.renderCell(6)}
            {this.renderCell(7)}
          </div>
        </div>
      </div>
    );
  }
}
