import React from "react";

const ProgressBar = ({ percent }) => {
  return (
    <div className={`ProgressBar`}>
      <div style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default ProgressBar;
