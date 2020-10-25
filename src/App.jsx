import React from "react";
import ActualTime from "./components/ActualTime/ActualTime";
import "./App.css";
import TimeboxList from "./components/TimeboxList/TimeboxList";

function App() {
  return (
    <div className="App">
      <ActualTime style={{ marginBottom: "50px" }} />
      <TimeboxList />
    </div>
  );
}

export default App;

// w propsach przekazywalem totalTime in sexonds do Timeboxa//
