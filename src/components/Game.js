import React, { Component } from "react";
import Board from "./Board";

export class Game extends Component {
  state = {
    xIsNext: true,
    stepNumber: 0,
    history: [{ spaces: Array(9).fill(null) }],
  };

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const spaces = current.spaces.slice();
    const winner = calculateWinner(spaces);
    if (winner || spaces[i]) {
      return;
    }

    spaces[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat({
        spaces: spaces,
      }),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.spaces);
    const moves = history.map((sep, move) => {
      const desc = move ? "Go to #" + move : "Start the Game";
      return (
        <li key={move}>
          <button
            onClick={() => {
              this.jumpTo(move);
            }}
          >
            {desc}
          </button>
        </li>
      );
    });
    let status;
    if (winner) {
      status = "Winner is " + winner;
    } else {
      status = "Next player is " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board onClick={(i) => this.handleClick(i)} spaces={current.spaces} />
        </div>
        <div className="game-info">
          <ul>{status}</ul>
          <ul>{moves}</ul>
        </div>
      </div>
    );
  }
}

export default Game;

function calculateWinner(spaces) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (spaces[a] && spaces[a] === spaces[b] && spaces[b] === spaces[c]) {
      return spaces[a];
    }
  }

  return null;
}
