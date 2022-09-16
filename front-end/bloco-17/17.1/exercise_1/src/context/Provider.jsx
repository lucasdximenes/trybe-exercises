import React, { Component } from 'react';
import PropTypes from 'prop-types';
import carsContext from './carsContext';

class Provider extends Component {
  state = {
    redCar: false,
    blueCar: false,
    yellowCar: false,
  };

  moveCar = (car) => {
    this.setState((prevState) => ({ [car]: !prevState[car] }));
  };

  render() {
    const { children } = this.props;
    const contextType = {
      ...this.state,
      moveCar: this.moveCar,
    };
    return <carsContext.Provider value={contextType}>{children}</carsContext.Provider>;
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
