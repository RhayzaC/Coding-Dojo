import React from "react";
import "./App.css";

function App() {
  const tasks = [
    "Learn React",
    "Climb Mt. Everest",
    "Run a Marathon",
    "Feed the dogs",
  ];

  return (
    <div className="App">
      <h1>Hola Dojo!</h1>
      <h2>Things I need to do:</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}> {task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
