import React from "react";
import { useState } from "react";

const ProgressBar = ({ percent }) => {
  const [barMode, setBarMode] = useState(false);
  const handleToogleMode = () => {
    setBarMode((barMode) => !barMode);
  };

  return (
    <>
      <label className="switch">
        <input
          defaultChecked={barMode}
          onClick={handleToogleMode}
          type="checkbox"
        />
        <span className="slider round"></span>
      </label>
      <div className="ProgressBar">
        <div style={{ width: `${percent}%` }}></div>
      </div>
    </>
  );
};

export default ProgressBar;
