import React from "react";

const TimeboxEdiotr = ({
  handleTitleChange,
  handleTotalTimeInMinutesChange,
  title,
  totalTimeInMinutes,
  onEdit,
  isEditable,
}) => {
  return (
    <div className={!isEditable ? "inactive" : "Timebox"}>
      <h1>Zegar Pomodoro</h1>
      <label>
        <br /> Co robisz ?
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>{" "}
      <br />
      <label>
        {" "}
        Przez ile czasu ?
        <input
          type="number"
          min={0}
          value={totalTimeInMinutes}
          onChange={handleTotalTimeInMinutesChange}
        />
        <br />
      </label>
      <button onClick={onEdit}>Zacznij</button>
    </div>
  );
};

export default TimeboxEdiotr;
