import React, { Component } from "react";
import PropTypes from "prop-types";
import Child from "./Child";

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: "kg",
    };
  }

  changeUnit = (items) => {
    this.setState({ unit: items });
  };
  render() {
    return (
      <div>
        <Child unit={this.state.unit} changeUnit={this.changeUnit} />
      </div>
    );
  }
}

componentName.propTypes = {};

export default componentName;
