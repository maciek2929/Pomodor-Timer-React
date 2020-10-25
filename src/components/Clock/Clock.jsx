import React from "react";

const Clock = ({ elapsedTimeInSeconds }) => {
  return (
    <h1 className="Clock">
      {new Date(elapsedTimeInSeconds * 1000).toISOString().substr(11, 8)}
    </h1>
  );
};

export default Clock;
