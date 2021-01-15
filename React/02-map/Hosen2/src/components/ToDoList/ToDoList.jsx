import React from "react";
import "./style.css";
export default function TODoList(props) {
  return (
    <div className="toDoList">
      {props.toDos.map((task) => {
        console.log(task);
        return (
          <div className="task" id={task.id} key={task.id}>
            <h2>{task.taskContent}</h2>
            <button className='btn'
              onClick={(e) => {
                let element = document.getElementById(task.id);
                element.parentNode.removeChild(element);
              }}
            >
               ✘ 
            </button>
            <button className='btn'
              onClick={(e) => {
                let element = document.getElementById(task.id);
                task.done = true
                element.firstChild.style.textDecoration = 'line-through wavy red';
              }}
            >
               ✔ 
            </button>
          </div>
        );
      })}
    </div>
  );
}
