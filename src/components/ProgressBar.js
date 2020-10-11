import React from "react";
import { useState } from "react";

const ProgressBar = ({ percent }) => {
  const [trackRemaining, setTrackRemaining] = useState(false);
  const handleTypeChange = ()=> {
    setTrackRemaining(!trackRemaining)
  }
  return (
    <div disabled={trackRemaining} className={`ProgressBar`}>
      <div style={{ width: `${percent}%` }}></div>
      
      
      <button onClick={handleTypeChange}>Zmien tryb odliczania czasu </button>
    </div>
  );
};

export default ProgressBar;
