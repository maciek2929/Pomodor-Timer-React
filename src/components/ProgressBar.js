import React from "react";

const ProgressBar = ({ percent }) => {
  return (
    <div className={`ProgressBar`}>
      <div style={{ width: `${percent}%` }}></div>

      <button>Zmien tryb odliczania czasu </button>
    </div>
  );
};

export default ProgressBar;
