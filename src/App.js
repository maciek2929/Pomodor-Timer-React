import React from "react";
import TimeboxEditor from "./components/TimeboxEritor/TimeboxEdiotr";
import Timebox from "./components/Timebox/Timebox";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TimeboxEditor />
      <Timebox totalTimeInSeconds={10} />
    </div>
  );
}

export default App;
