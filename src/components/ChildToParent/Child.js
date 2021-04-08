import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.unit}</h3>
        <button onClick={() => this.props.changeUnit("lbs")}>Click</button>
      </div>
    );
  }
}

export default Child;
