import React from "react";
import "./App.css";
import TaskCreator from "./components/TaskCreator/TaskCreator";
import TaskRenderer from "./components/TaskRenderer/TaskRenderer";
function App() {
  return (
    <>
      <article className="container">
        <h1 id="main-heading">Todo Application</h1>
        <TaskCreator />
        <TaskRenderer />
      </article>
    </>
  );
}

export default App;
