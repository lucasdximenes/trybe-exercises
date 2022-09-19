import React from "react";
import useTimer from "./hooks/useTimer";

export default function App() {
  const { timer, randomNumber, isMultiple } = useTimer();

  return (
    <div>
      <h1>Timer</h1>
      <p>Time: {timer}</p>
      <p>Random Number: {randomNumber}</p>
      <p>{isMultiple && "Bingo"}</p>
    </div>
  );
}
