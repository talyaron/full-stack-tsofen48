import "./App.css";
import React, { useState } from "react";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [userInput, setUserInput] = useState("");
  const [userTasks, setUserTasks] = useState([]);
  let randomId = () => {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  };
  return (
    <div className="App">
      <div className="title">
        <h3 className="toDoTitle">To Do List</h3>
      </div>

      <div className="taskInputContainer">
        <input
          className="taskInput"
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          value={userInput}
          placeholder="add your task here.."
        />
        <button
          className="addTaskBtn"
          onClick={(e) => {
            let taskToSave = userInput;
            taskToSave = taskToSave.trim();
            if (taskToSave != '') {
              setUserTasks([
                ...userTasks,
                { id: randomId(), taskContent: taskToSave, done: false },
              ]);
              setUserInput('');
            }
          }}
        >
          {" "}
          +
        </button>
      </div>
      <ToDoList toDos={userTasks}></ToDoList>
      {/* {JSON.stringify(userTasks)} */}
    </div>
  );
}

export default App;
