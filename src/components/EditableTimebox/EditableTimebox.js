import React from "react";
import TimeBoxEditor from "../TimeboxEritor/TimeboxEdiotr";
import Timebox from "../Timebox/Timebox";
import { useState } from "react";

const EditableTimebox = () => {
  const [title, setTitle] = useState("Nadrzedny tytul");
  const [totalTimeInMinutes, setTotalTimeInMinutes] = useState(0);
  const [isEditable, setIsEditable] = useState(true);

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditable(false);
  };

  return (
    <div>
      <TimeBoxEditor
        handleTitleChange={(e) => setTitle(e.target.value)}
        handleTotalTimeInMinutesChange={(e) =>
          setTotalTimeInMinutes(e.target.value)
        }
        title={title}
        totalTimeInMinutes={totalTimeInMinutes}
        isEditable={isEditable}
        onEdit={handleEdit}
      />
      <Timebox title={title} totalTimeInMinutes={totalTimeInMinutes} />
    </div>
  );
};

export default EditableTimebox;
