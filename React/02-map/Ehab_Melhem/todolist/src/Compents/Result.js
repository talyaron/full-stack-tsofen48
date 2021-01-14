import React from "react";
import "./Result.css";
import Todo from "./Todo";
import IconButton from "@material-ui/core/IconButton";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Link } from "react-router-dom";

function Result({ todos, setTodos }) {
  return (
    <div className="result">
      <div className="header">
        <h1>{todos[0] ? "the result is:" : "there are no results:"}</h1>
        <Link to="/">
          <IconButton>
            Home
            <ArrowRightAltIcon />
          </IconButton>
        </Link>
      </div>

      {todos.map((elm) => (
        <Todo text={elm.text} id={elm.id} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}

export default Result;
