import React from "react";

const TimeboxElement = ({ title, totalTimeInMinutes, onDelete, onEdit }) => {
  return (
    <div className="TimeboxElement">
      <h3>
        {title}- {totalTimeInMinutes} min
      </h3>
      <button onClick={onDelete}> Usun</button>
      <button onClick={onEdit}>Zmien</button>
    </div>
  );
};

export default TimeboxElement;
