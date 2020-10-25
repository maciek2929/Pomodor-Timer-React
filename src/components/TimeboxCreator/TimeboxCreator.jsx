import React from "react";

const TimeboxCreator = ({ onCreate }) => {
  return (
    <div>
      <h1>Zegar Pomodoro</h1>
      <label>
        <br /> Co robisz ?
        <input type="text" />
      </label>{" "}
      <br />
      <label>
        {" "}
        Przez ile czasu ?
        <input type="number" min={0} />
        <br />
      </label>
      <button onClick={onCreate}>Utworz nowy Timebox</button>
    </div>
  );
};

export default TimeboxCreator;
