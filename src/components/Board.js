import React, { Component } from "react";
import Space from "./Space";

export class Board extends Component {
  renderSpace(i) {
    return (
      <Space
        value={this.props.spaces[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="border-row">
          {this.renderSpace(0)}
          {this.renderSpace(1)}
          {this.renderSpace(2)}
        </div>
        <div className="border-row">
          {this.renderSpace(3)}
          {this.renderSpace(4)}
          {this.renderSpace(5)}
        </div>
        <div className="border-row">
          {this.renderSpace(6)}
          {this.renderSpace(7)}
          {this.renderSpace(8)}
        </div>
      </div>
    );
  }
}

export default Board;
