import React, { Component } from "react";

class Tile extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.showTile(this.props.pos)}
        style={{
          width: 98,
          height: 98,
          backgroundColor:
            !this.props.item.hidden && this.props.item.num === this.props.target
              ? "red"
              : "green",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          border: "1px solid black"
        }}
      >
        {!this.props.item.hidden && (
          <span style={{ fontSize: 32, color: "white" }}>
            {this.props.item.num}
          </span>
        )}
      </div>
    );
  }
}

export default Tile;
