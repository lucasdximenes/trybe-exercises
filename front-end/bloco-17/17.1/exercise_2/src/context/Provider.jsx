import React, { Component } from "react";
import context from "./context";

class Provider extends Component {
  state = {
    cars: {
      red: false,
      blue: false,
      yellow: false,
    },
    signal: { color: "red" },
  };

  handleCar = (car) => {
    const { cars } = this.state;
    this.setState({
      cars: { ...cars, [car]: !cars[car] },
    });
  };

  handleSignal = (color) => {
    this.setState({
      signal: { color },
    });
  };

  render() {
    const { children } = this.props;
    const contextType = {
      ...this.state,
      moveCar: this.handleCar,
      changeSignal: this.handleSignal,
    };
    return <context.Provider value={contextType}>{children}</context.Provider>;
  }
}

export default Provider;
