import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TimeboxCreator from "../TimeboxCreator/TimeboxCreator";
import TimeboxElement from "../TimeboxElement/TimeboxElement";

const TimeboxList = () => {
  const [timebox, setTimebox] = useState({
    timeboxes: [
      { title: "proboje z lista dynamicznie", totalTimeInMinutes: 15 },
      { title: "proboje z lista dynamicznie222", totalTimeInMinutes: 153 },
      { title: "proboje z lista dynamicznie333", totalTimeInMinutes: 154 },
    ],
  });

  const addTimebox = (tb) => {
    setTimebox((prev) => {
      const timeboxes = [
        ...prev.timeboxes,
        { title: "nowy", totalTimeInMinutes: 15 },
      ];
      return { timeboxes };
    });
  };

  const handleCreate = () => {
    addTimebox({ title: "tytul", totalTimeInMinutes: 15 });
  };

  const removeTimebox = (indexToRemove) => {
    setTimebox((prev) => {
      const timeboxes = prev.timeboxes.filter(
        (timebox, index) => index !== indexToRemove
      );
      return { timeboxes };
    });
  };

  return (
    <div>
      <TimeboxCreator onCreate={handleCreate} />
      {timebox.timeboxes.map((date, index) => (
        <TimeboxElement
          key={index}
          title={date.title}
          totalTimeInMinutes={date.totalTimeInMinutes}
          onDelete={() => removeTimebox(index)}
          onEdit={() => console.log("Edytuje Timebox nr", index + 1)}
        />
      ))}
    </div>
  );
};

export default TimeboxList;
