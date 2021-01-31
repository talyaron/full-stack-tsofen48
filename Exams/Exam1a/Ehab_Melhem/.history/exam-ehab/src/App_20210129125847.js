import logo from "./logo.svg";
import "./App.css";

function App() {
  fetch("/stam")
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
    });
  return <div className="App"></div>;
}

export default App;
