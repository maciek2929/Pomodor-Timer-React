import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const TimeboxCreator = ({ onCreate }) => {
  const [elTitle, setEltitle] = useState("");
  const [elTime, setElTime] = useState(0);

  const templateTimebox = {
    id: uuidv4(),
    title: elTitle,
    totalTimeInMinutes: elTime,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(templateTimebox);
    setEltitle("");
    setElTime((prev) => prev + 4);
  };

  const handleTitleChange = (e) => {
    setEltitle(e.target.value);
  };

  const handleTimeChange = (e) => {
    setElTime(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="TimeboxCreator">
      <h1>Zegar Pomodoro</h1>
      <label>
        <br /> Co robisz ?
        <input type="text" value={elTitle} onChange={handleTitleChange} />
      </label>{" "}
      <br />
      <label>
        {" "}
        Przez ile czasu ?
        <input
          type="number"
          min={0}
          value={elTime}
          onChange={handleTimeChange}
        />
        <br />
      </label>
      <button>Utworz nowy Timebox</button>
    </form>
  );
};

export default TimeboxCreator;
