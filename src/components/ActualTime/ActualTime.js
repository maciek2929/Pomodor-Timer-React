import React from "react";

const ActualTime = () => {
  return (
    <div>
      <h4 style={{ float: "left", marginBottom: "10vh" }}>
        Dzisiaj jest {new Date().toISOString().slice(0, 10)}
      </h4>
    </div>
  );
};

export default ActualTime;
