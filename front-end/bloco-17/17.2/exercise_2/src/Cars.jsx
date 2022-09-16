import PropTypes from "prop-types";
import React, { useContext } from "react";
import context from "./context/context";
import carBlue from "./images/carBlue.jpeg";
import carRed from "./images/carRed.jpeg";
import carYellow from "./images/carYellow.jpeg";

function Cars() {
  const {
    cars: { red, blue, yellow },
    moveCar,
  } = useContext(context);
  return (
    <div>
      <div>
        <img
          className={red ? "car-right" : "car-left"}
          src={carRed}
          alt="red car"
        />
        <button onClick={() => moveCar("red", !red)} type="button">
          Move
        </button>
      </div>
      <div>
        <img
          className={blue ? "car-right" : "car-left"}
          src={carBlue}
          alt="blue car"
        />
        <button onClick={() => moveCar("blue", !blue)} type="button">
          Move
        </button>
      </div>
      <div>
        <img
          className={yellow ? "car-right" : "car-left"}
          src={carYellow}
          alt="yellow car"
        />
        <button onClick={() => moveCar("yellow", !yellow)} type="button">
          Move
        </button>
      </div>
    </div>
  );
}

Cars.propTypes = {
  moveCar: PropTypes.func,
  blueCar: PropTypes.bool,
  redCar: PropTypes.bool,
  yellowCar: PropTypes.bool,
};

export default Cars;
