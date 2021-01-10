import "./App.css";
import Ehab from "./Ehab.jpg";
function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="details">
          <h2 className="name">I'am Ehab</h2>
          <p className="about">
            I am Ehab Melhem a full stack developer and, I have a macjor B.sc
            with computer sciense at Netanya Acdmeic College, work with mern
            stack Mongo db, React js, Express js, Node js, also i hava expernse
            with Fire base
          </p>
          <p className="about">
            machine Learning Engineer, So, I am work with tensorflow,
            dialogflow, pytourch. and i have experinse with oop labguage and
            script language, like python amd java
          </p>
        </div>

        <img src={Ehab} alt="" />
      </div>
    </div>
  );
}

export default App;
