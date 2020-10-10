import React from "react";
const styleAv = {
    width: '30vw',
    height:'30vw',
    color:'black'
}

const ActualTime = () => {
    const [actualTime,setActualtime] = new Date().toLocaleDateString()
  return (
    <div>
      <h4 style ={styleAv}>{actualTime.curTime}</h4>
    </div>
  );
};

export default ActualTime;
