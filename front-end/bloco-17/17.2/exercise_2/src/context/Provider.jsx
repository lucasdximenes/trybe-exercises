import React, { useState } from "react";
import context from "./context";

const Provider = ({ children }) => {
  const [traffic, setTraffic] = useState({
    cars: {
      red: false,
      blue: false,
      yellow: false,
    },
    trafficLight: {
      signalColor: "red",
    },
  });

  const moveCar = (car, side) => {
    setTraffic({
      ...traffic,
      cars: {
        ...traffic.cars,
        [car]: side,
      },
    });
  };

  const changeSignal = (color) => {
    setTraffic({
      ...traffic,
      trafficLight: {
        ...traffic.trafficLight,
        signalColor: color,
      },
    });
  };

  const contextType = {
    ...traffic,
    moveCar,
    changeSignal,
  };

  return <context.Provider value={contextType}>{children}</context.Provider>;
};

export default Provider;
