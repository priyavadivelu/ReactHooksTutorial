import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    return (
      <div>
        <p onMouseOver={this.props.incrementCount}>
          Hovered {this.props.count} times
        </p>
      </div>
    );
  }
}

export default withCounter(HoverCounter);
