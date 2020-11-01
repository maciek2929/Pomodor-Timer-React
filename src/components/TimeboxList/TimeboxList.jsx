import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TimeboxCreator from "../TimeboxCreator/TimeboxCreator";
import TimeboxElement from "../TimeboxElement/TimeboxElement";

const TimeboxList = () => {
  const [timebox, setTimebox] = useState([]);
  const [editingTimeboxTitle, setEditingTimeboxTitle] = useState("");
  const [
    editingTotalTimeInMinutesChange,
    setEditingTotalTimeInMinutesChange,
  ] = useState(null);
  const [isElementEditable, setIsElementEditable] = useState(false);

  const updatedTimeboxTemplate = {
    id: uuidv4(),
    title: editingTimeboxTitle,
    totalTimeInMinutes: editingTotalTimeInMinutesChange,
  };

  const addTimebox = (timebox) => {
    setTimebox((prev) => {
      const timeboxes = [...prev, timebox];
      return timeboxes;
    });
  };

  const handleCreate = (createdTimebox) => {
    addTimebox(createdTimebox);
  };

  const removeTimebox = (idToRemove) => {
    setTimebox((prev) => {
      const timeboxes = prev.filter((timebox) => timebox.id !== idToRemove);
      return timeboxes;
    });
  };

  const editTb = (clickedId, updatedTimebox) => {
    setTimebox((prev) => {
      const timeboxes = prev.map((timebox) =>
        timebox.id === clickedId ? updatedTimebox : timebox
      );
      return timeboxes;
    });
  };

  const handleEditingTitleChange = (e) =>
    setEditingTimeboxTitle(e.target.value);
  const handleEditingTotalTimeInMinutesChange = (e) =>
    setEditingTotalTimeInMinutesChange(e.target.value);

  return (
    <div>
      <TimeboxCreator onCreate={handleCreate} />
      {timebox.map((timebox, index) => (
        <TimeboxElement
          key={timebox.id}
          title={timebox.title}
          totalTimeInMinutes={timebox.totalTimeInMinutes}
          onDelete={() => removeTimebox(timebox.id)}
          onEdit={() => editTb(timebox.id, updatedTimeboxTemplate)}
          setTimebox={setTimebox}
          onEditingTitleChange={handleEditingTitleChange}
          onEditingTotalTimeInMinutesChange={
            handleEditingTotalTimeInMinutesChange
          }
          isElementEditable={isElementEditable}
          setIsElementEditable={setIsElementEditable}
        />
      ))}
    </div>
  );
};

export default TimeboxList;

// change uuid to unique identyfier//
