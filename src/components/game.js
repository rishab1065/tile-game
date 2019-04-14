import React, { Component } from "react";
import Tile from "./tile";
import { remove } from "lodash";
import Status from "./status";
class Game extends Component {
  constructor(props) {
    super();
    this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.state = {
      data: [
        { num: this.getRandomNo(), hidden: true },
        { num: this.getRandomNo(), hidden: true },
        { num: this.getRandomNo(), hidden: true },
        { num: this.getRandomNo(), hidden: true },
        { num: this.getRandomNo(), hidden: true },
        { num: this.getRandomNo(), hidden: true },
        { num: this.getRandomNo(), hidden: true },
        { num: this.getRandomNo(), hidden: true },
        { num: this.getRandomNo(), hidden: true }
      ],
      chances: 6,
      winner: false
    };
  }
  showTile = index => {
    if (!this.state.winner && this.state.chances > 0) {
      const newData = [...this.state.data];
      newData[index].hidden = false;
      const isWinner = this.props.target === newData[index].num;
      this.setState({
        data: newData,
        chances: this.state.chances - 1,
        winner: isWinner
      });
    }
  };

  getRandomNo() {
    const index = Math.floor(Math.random() * this.numbers.length);
    const reqNo = this.numbers[index];
    this.numbers.splice(index, 1);
    return reqNo;
  }
  render() {
    return (
      <div>
        {this.state.winner ? (
          <Status
            tryAgain={this.props.tryAgain}
            msg="You win"
            btnText="Play Again!!"
          />
        ) : this.state.chances === 0 ? (
          <Status
            tryAgain={this.props.tryAgain}
            msg="You lost"
            btnText="Try Again"
          />
        ) : null}
        <div>
          <div
            style={{
              marginTop: 10,
              marginBottom: 10,
              justifyContent: "space-between",
              alignContent: "center",
              display: "flex"
            }}
          >
            <span>Find number: {this.props.target}</span>
            <span>Chances Left: {this.state.chances}</span>
          </div>
          <div
            style={{
              justifyContent: "center",
              alignContent: "center",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              width: 300
            }}
          >
            {this.state.data.map((item, index) => {
              return (
                <Tile
                  item={item}
                  pos={index}
                  key={index}
                  target={this.props.target}
                  showTile={this.showTile}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
