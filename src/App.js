import React from "react";

import ActualTime from "./components/ActualTime/ActualTime";
import EditableTimebox from "./components/EditableTimebox/EditableTimebox";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ActualTime style={{ marginBottom: "50px" }} />
      <EditableTimebox />
    </div>
  );
}

export default App;

// w propsach przekazywalem totalTime in sexonds do Timeboxa//
