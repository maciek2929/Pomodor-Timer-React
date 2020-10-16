import React from "react";


const TimeboxEdiotr = ({handleTitleChange, handleTotalTimeInMinutesChange,title,totalTimeInMinutes}) => {
  
  return (
    <div className="TimeboxEditor">
      <h1>Zegar Pomodoro</h1>
      <label>
        <br /> Co robisz ?
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>{" "}
      <br />
      <label>
        {" "}
        Przez ile czasu ?
        <input type="number" value={totalTimeInMinutes} onChange={handleTotalTimeInMinutesChange} />
        <br />
      </label>
      <button>Zacznij</button>
    </div>
  );
};

export default TimeboxEdiotr;
