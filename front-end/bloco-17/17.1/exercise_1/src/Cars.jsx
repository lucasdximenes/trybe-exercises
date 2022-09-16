// src/Cars.jsx

import PropTypes from 'prop-types';
import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import carsContext from './context/carsContext';

function Cars() {
  return (
    <carsContext.Consumer>
      {(context) => {
        const { redCar, blueCar, yellowCar, moveCar } = context;
        return (
          <div>
            <div>
              <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
              <button onClick={() => moveCar('redCar')} type="button">
                Move
              </button>
            </div>
            <div>
              <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
              <button onClick={() => moveCar('blueCar')} type="button">
                Move
              </button>
            </div>
            <div>
              <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
              <button onClick={() => moveCar('yellowCar')} type="button">
                Move
              </button>
            </div>
          </div>
        );
      }}
    </carsContext.Consumer>
  );
}

Cars.propTypes = {
  redCar: PropTypes.bool,
  blueCar: PropTypes.bool,
  yellowCar: PropTypes.bool,
  moveCar: PropTypes.func,
};

export default Cars;
