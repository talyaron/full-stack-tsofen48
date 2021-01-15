import React from "react";
import "./Todo.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
function Todo({ todos, setTodos, text, id }) {
  const deletHandelr = () => {
    setTodos(
      todos.filter((elm) => {
        return elm.id !== id;
      })
    );
  };
  return (
    <div className="todo">
      <h3>{text}</h3>
      <IconButton onClick={deletHandelr} color="secondary">
        <DeleteForeverIcon />
      </IconButton>
    </div>
  );
}

export default Todo;
