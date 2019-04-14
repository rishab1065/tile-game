import React, { Component } from "react";
import "./App.css";
import Game from "./components/game";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      inputNumber: undefined
    };
  }

  tryAgain = () => {
    this.setState({ inputNumber: undefined });
  };
  render() {
    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: "flex"
        }}
      >
        {this.state.inputNumber ? (
          <Game target={this.state.inputNumber} tryAgain={this.tryAgain} />
        ) : (
          <div style={{}}>
            <span style={{ fontSize: 20, marginRight: 10 }}>
              Enter a number between 1 & 9 -->
            </span>
            <input
              type="number"
              onChange={e => {
                this.setState({ inputNumber: parseInt(e.target.value) });
              }}
            />
          </div>
        )}
      </div>
    );
  }
}

export default App;
