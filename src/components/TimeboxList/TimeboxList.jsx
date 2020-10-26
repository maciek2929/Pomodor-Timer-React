import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TimeboxCreator from "../TimeboxCreator/TimeboxCreator";
import TimeboxElement from "../TimeboxElement/TimeboxElement";

const TimeboxList = () => {
  const [Statetimebox, setStateTimebox] = useState({
    timeboxes: [
      {
        id: uuidv4(),
        title: "proboje z lista dynamicznie",
        totalTimeInMinutes: 15,
      },
    ],
  });

  const addTimebox = (timebox) => {
    setStateTimebox((prev) => {
      const timeboxes = [...prev.timeboxes, timebox];
      return { timeboxes };
    });
  };

  const handleCreate = (createdTimebox) => {
    addTimebox(createdTimebox);
  };

  const removeTimebox = (indexToRemove) => {
    setStateTimebox((prev) => {
      const timeboxes = prev.timeboxes.filter(
        (timebox, index) => index !== indexToRemove
      );
      return { timeboxes };
    });
  };

  return (
    <div>
      <TimeboxCreator onCreate={handleCreate} />
      {Statetimebox.timeboxes.map((timebox, index) => (
        <TimeboxElement
          key={timebox.id}
          title={timebox.title}
          totalTimeInMinutes={timebox.totalTimeInMinutes}
          onDelete={() => removeTimebox(index)}
          onEdit={() => console.log("robie edycje", timebox.id)}
        />
      ))}
    </div>
  );
};

export default TimeboxList;

// change uuid to unique identyfier//
