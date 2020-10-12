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
  const countRefTimeElapsed = useRef(0);
  const timeLeftInSeconds = totalTimeInSeconds - elapsedTimeInSeconds;
  const ProgresBarPercent = (elapsedTimeInSeconds / totalTimeInSeconds) * 100.0;

  const handleStart = () => {
    setIsRuning(true);
    setIsPaused(false);
  };

  const handleStop = () => {
    clearInterval(countRefTimeElapsed.curent);
    setElapsedTimeInSeconds(0);
    setIsRuning(false);
    setIsPaused(false);
    setPausesCount(0);
  };

  const tooglePause = () => {
    setIsPaused((prev) => !prev);
    setIsRuning((prev) => !prev);
    setPausesCount(isPaused ? pausesCount : pausesCount + 1);
  };

  useEffect(() => {
    if (isRuning) {
      countRefTimeElapsed.current = setInterval(() => {
        setElapsedTimeInSeconds(
          (elapsedTimeInSeconds) => elapsedTimeInSeconds + 1
        );
      }, 1000);
    }
    if (elapsedTimeInSeconds >= totalTimeInSeconds) {
      alert("Czas wlasnie sie skonczyl KONIECC!!!!!!");
      handleStop();
    }
    return () => {
      clearInterval(countRefTimeElapsed.current);
    };
  }, [elapsedTimeInSeconds, isRuning, totalTimeInSeconds]);

  return (
    <div className="Timebox">
      <h1>Ucze sie skrotow Klawiszowych</h1>
      <Clock elapsedTimeInSeconds={timeLeftInSeconds} />
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

//kotek sra
