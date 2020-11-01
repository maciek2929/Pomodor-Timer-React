import React from "react";
import ActualTime from "./components/ActualTime/ActualTime";
import "./App.css";
import TimeboxList from "./components/TimeboxList/TimeboxList";
import EditableTimebox from './components/EditableTimebox/EditableTimebox'

function App() {
  return (
    <div className="App">
      <ActualTime />
      <EditableTimebox/>
      <TimeboxList />
    </div>
  );
}

export default App;
