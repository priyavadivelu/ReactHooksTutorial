import React, { Component } from "react";
import withCounter from "./withCounter";

export class ClickCounter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.incrementCount}>
          count {this.props.count}
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter);
