import React from "react";
import TimeboxEditor from "./components/TimeboxEritor/TimeboxEdiotr";
import Timebox from "./components/Timebox/Timebox";
import ActualTime from "./components/ActualTime/ActualTime";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ActualTime style={{ marginBottom: "50px" }} />
      <TimeboxEditor style={{ marginUp: "50px" }} />
      <Timebox totalTimeInSeconds={10} />
    </div>
  );
}

export default App;
