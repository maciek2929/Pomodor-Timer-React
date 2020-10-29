import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TimeboxCreator from "../TimeboxCreator/TimeboxCreator";
import TimeboxElement from "../TimeboxElement/TimeboxElement";

const TimeboxList = () => {
 const [timebox, setTimebox] = useState([])

  const addTimebox = (timebox) => {
    setTimebox((prev) => {
      const timeboxes = [...prev, timebox];
      return  timeboxes ;
    });
  };

  const handleCreate = (createdTimebox) => {
    addTimebox(createdTimebox);
  };

  const removeTimebox = (idToRemove) => {
    setTimebox((prev) => {
      const timeboxes = prev.filter(
        (timebox) => timebox.id !== idToRemove
      );
      return timeboxes ;
    });
  };

  return (
    <div>
      <TimeboxCreator onCreate={handleCreate} />
      {timebox.map((timebox, index) => (
        <TimeboxElement
          key={timebox.id}
          title={timebox.title}
          totalTimeInMinutes={timebox.totalTimeInMinutes}
          onDelete={() => removeTimebox(timebox.id)}
          onEdit={() => console.log("robie edycje", timebox.id)}
        />
      ))}
    </div>
  );
};

export default TimeboxList;

// change uuid to unique identyfier//
