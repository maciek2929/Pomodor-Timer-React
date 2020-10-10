import React from "react";
import { useState, useRef, useEffect } from "react";
import ProgresBar from "../ProgressBar";
import BreakCounter from "../BreakCounter/BreakCounter";
import Clock from "../Clock/Clock";

const Timebox = ({ totalTimeInSeconds }) => {
  const [elapsedTimeInSeconds, setElapsedTimeInSeconds] = useState(0);
  const [isRuning, setIsRuning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [pausesCount, setPausesCount] = useState(0);
  const countRef = useRef(0);
  // wyliczenia stopera i przeksztalcanie czasu//
  // const timeLeftInSeconds = totalTimeInSeconds - elapsedTimeInSeconds;
  // const minutesLeft = Math.floor(timeLeftInSeconds / 60);
  // const secondsLeft = Math.floor(timeLeftInSeconds % 60);
  // console.log(elapsedTimeInSeconds);
  const ProgresBarPercent = (elapsedTimeInSeconds / totalTimeInSeconds) * 100.0;

  const handleStart = () => {
    setIsRuning(true);
    setIsPaused(false);
  };

  const handleStop = () => {
    setElapsedTimeInSeconds(0);
    setIsRuning(false);
    setIsPaused(false);
    setPausesCount(0);
    clearInterval(countRef.curent);
  };

  const tooglePause = () => {
    setIsPaused((prev) => !prev);
    setIsRuning((prev) => !prev);
    setPausesCount(isPaused ? pausesCount : pausesCount + 1);
  };

  useEffect(() => {
    if (isRuning) {
      countRef.current = setInterval(() => {
        setElapsedTimeInSeconds(
          (elapsedTimeInSeconds) => elapsedTimeInSeconds + 1
        );
      }, 1000);
    }
    return () => {
      clearInterval(countRef.current);
    };
  }, [elapsedTimeInSeconds, isRuning, totalTimeInSeconds]);

  return (
    <div className="Timebox">
      <h1>Ucze sie skrotow Klawiszowych</h1>
      <Clock elapsedTimeInSeconds={elapsedTimeInSeconds} />
      <ProgresBar percent={ProgresBarPercent} />
      <BreakCounter pausesCount={pausesCount} />
      <button disabled={isRuning} onClick={handleStart}>
        Start
      </button>
      <button disabled={!isRuning} onClick={handleStop}>
        Stop
      </button>
      <button disabled={!isRuning} onClick={tooglePause}>
        Pauzuj
      </button>
    </div>
  );
};

export default Timebox;