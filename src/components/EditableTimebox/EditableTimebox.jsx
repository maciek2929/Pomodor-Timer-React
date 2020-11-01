import React from "react";
import TimeBoxEditor from "../TimeboxEditor/TimeboxEdiotr";
import Timebox from "../Timebox/Timebox";
import { useState } from "react";

const EditableTimebox = () => {
  const [title, setTitle] = useState("Nadrzedny tytul");
  const [totalTimeInMinutes, setTotalTimeInMinutes] = useState(0);
  const [isEditable, setIsEditable] = useState(true);

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditable((isEditable) => !isEditable);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTotalTimeInMinutesChange = (e) => {
    setTotalTimeInMinutes(e.target.value);
  };

  return (
    <div>
      <TimeBoxEditor
        handleTitleChange={handleTitleChange}
        handleTotalTimeInMinutesChange={handleTotalTimeInMinutesChange}
        title={title}
        totalTimeInMinutes={totalTimeInMinutes}
        isEditable={isEditable}
        onEdit={handleEdit}
      />
      <Timebox
        title={title}
        totalTimeInMinutes={totalTimeInMinutes}
        isEditable={isEditable}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default EditableTimebox;
