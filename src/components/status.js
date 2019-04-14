import React, { PureComponent } from "react";

class Status extends PureComponent {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <span style={{ fontSize: 32, padding: 8, textAlign: "center" }}>
          {this.props.msg}
        </span>
        <input
          style={{ padding: 8, alignSelf: "stretch" }}
          type="button"
          value={this.props.btnText}
          onClick={() => {
            this.props.tryAgain();
          }}
        />
      </div>
    );
  }
}

export default Status;
