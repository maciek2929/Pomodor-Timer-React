import React from "react";
import TimeboxEditor from "./components/TimeboxEritor/TimeboxEdiotr";
import Timebox from "./components/Timebox/Timebox";
import ActualTime from "./components/ActualTime/ActualTime";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <ActualTime /> */}
      <TimeboxEditor />
      <Timebox totalTimeInSeconds={10} />
    </div>
  );
}

export default App;
