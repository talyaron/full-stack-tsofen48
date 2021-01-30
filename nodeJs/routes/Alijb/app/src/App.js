import "./App.css";
import Company from "./components/Company/Company";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

//components
const data = [
  {
    id: 1,
    img: "",
    title: "a",
    desc: "b",
  },
  {
    id: 2,
    img: "",
    title: "a",
    desc: "b",
  },
  {
    id: 3,
    img: "",
    title: "a",
    desc: "b",
  },
];

function App() {
  return (
    <div className="App">
      {/* כניסה */}
      <h5>כניסה</h5>
      {/*  */}
      <h1 c> על איזו חברה תרצה/י להשפיע?</h1>

      {/* list */}
      {data.map((item, index) => (
        <div key={index}>
          <Company data={item} />
        </div>
      ))}
    </div>
  );
}

export default App;
