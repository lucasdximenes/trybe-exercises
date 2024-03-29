// src/Cars.jsx
import context from "./context/context";
import PropTypes from "prop-types";
import React from "react";
import carBlue from "./images/carBlue.jpeg";
import carRed from "./images/carRed.jpeg";
import carYellow from "./images/carYellow.jpeg";

function Cars() {
  return (
    <context.Consumer>
      {(context) => {
        const {
          cars: { red, blue, yellow },
          moveCar,
        } = context;
        return (
          <div>
            <div>
              <img
                className={red ? "car-right" : "car-left"}
                src={carRed}
                alt="red car"
              />
              <button onClick={() => moveCar("red")} type="button">
                Move
              </button>
            </div>
            <div>
              <img
                className={blue ? "car-right" : "car-left"}
                src={carBlue}
                alt="blue car"
              />
              <button onClick={() => moveCar("blue")} type="button">
                Move
              </button>
            </div>
            <div>
              <img
                className={yellow ? "car-right" : "car-left"}
                src={carYellow}
                alt="yellow car"
              />
              <button onClick={() => moveCar("yellow")} type="button">
                Move
              </button>
            </div>
          </div>
        );
      }}
    </context.Consumer>
  );
}

Cars.propTypes = {
  moveCar: PropTypes.func,
  red: PropTypes.bool,
  blue: PropTypes.bool,
  yellow: PropTypes.bool,
};

export default Cars;
