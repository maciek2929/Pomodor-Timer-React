import React from "react";

const TimeboxElement = ({
  title,
  totalTimeInMinutes,
  onDelete,
  onEdit,
  setTimebox,
  acceptChanges,
}) => {
  return (
    <div className="TimeboxElement">
      <h3>
        {title}- {totalTimeInMinutes} min
      </h3>
      <form onSubmit={acceptChanges}>
        <input type="text" />
        <input type="number" />
        <button>Zatwierdz zmiany</button>
      </form>
      <button onClick={onDelete}> Usun</button>
      <button onClick={onEdit}>zmien</button>
    </div>
  );
};

export default TimeboxElement;
