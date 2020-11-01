import React from "react";

const TimeboxElement = ({
  title,
  totalTimeInMinutes,
  onDelete,
  onEditingTitleChange,
  onEditingTotalTimeInMinutesChange,
  isElementEditable,
  setIsElementEditable,
  onEdit
}) => {
  return (
    <div className="TimeboxElement">
      <h3>
        {title}- {totalTimeInMinutes} min
      </h3>
      <form hidden={isElementEditable === false}>
        <input type="text" onChange={onEditingTitleChange} />
        <input type="number" onChange={onEditingTotalTimeInMinutesChange} />
        <br/>
        <button onClick={onEdit}>Zatwierdz zmiany</button>
      </form>
      <button onClick={onDelete}> Usun</button>
      <button onClick={() => setIsElementEditable(true)}>zmien</button>
    </div>
  );
};

export default TimeboxElement;
