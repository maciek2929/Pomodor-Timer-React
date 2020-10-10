import React from "react";

const TimeboxEdiotr = () => {
  return (
    <div className="TimeboxEditor">
      <h1>Zegar Pomodoro</h1>
      <label>
        <br /> Co robisz ?
        <input type="text" value="Ucze sie hooksow" />
      </label>{" "}
      <br />
      <label>
        {" "}
        Przez ile czasu ?
        <input type="number" value={40} />
        <br />
      </label>
      <button>Zacznij</button>
    </div>
  );
};

export default TimeboxEdiotr;
