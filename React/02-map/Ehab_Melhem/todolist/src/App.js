import { useState } from "react";
import "./App.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Result from "./Compents/Result";
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/result">
            <Result todos={todos} setTodos={setTodos} />
          </Route>

          <Route path="/">
            <div className="container">
              <form className="flex">
                <input
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  placeholder="add..."
                  type="text"
                />
                <IconButton
                  disabled={!input}
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    setTodos([...todos, { id: counter, text: input }]);
                    setInput("");
                    setCounter(counter + 1);
                  }}
                  className={input ? "iconBtn" : "iconst"}
                >
                  <AddIcon />
                </IconButton>
              </form>
              <Link to="/result">
                <button
                  disabled={!todos[0]}
                  className={todos[0] ? "btn" : "stam"}
                >
                  Go Result
                </button>
              </Link>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
