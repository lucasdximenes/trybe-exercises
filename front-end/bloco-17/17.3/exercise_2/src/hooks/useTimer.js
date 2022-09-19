import { useState, useEffect } from "react";
import {
  TIMER_INTERVAL,
  MAX_TIMER,
  MIN_RANDOM_NUMBER,
  MAX_RANDOM_NUMBER,
  MULTIPLE_THREE,
  MULTIPLE_FIVE,
  RESET_BINGO,
} from "../constants";

const useTimer = () => {
  const [timer, setTimer] = useState(1);
  const [randomNumber, setRandomNumber] = useState(1);
  const [isMultiple, setIsMultiple] = useState(false);

  const increaseTimer = () => {
    setTimer((prevTimer) => prevTimer + 1);
  };

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(
      Math.random() * (MAX_RANDOM_NUMBER - MIN_RANDOM_NUMBER + 1) +
        MIN_RANDOM_NUMBER
    );
    setRandomNumber(randomNumber);
  };

  const checkMultiple = (num) => {
    if (num % MULTIPLE_THREE === 0 || num % MULTIPLE_FIVE === 0) {
      setIsMultiple(true);
    }
  };

  useEffect(() => {
    const timerId = setInterval(increaseTimer, TIMER_INTERVAL);
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (timer > MAX_TIMER) {
      generateRandomNumber();
      setTimer(1);
    }
    if (timer > RESET_BINGO) {
      setIsMultiple(false);
    }
  }, [timer]);

  useEffect(() => {
    checkMultiple(randomNumber);
  }, [randomNumber]);

  return { timer, randomNumber, isMultiple };
};

export default useTimer;
