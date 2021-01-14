import "./App.css";
import Data from "./Data";
import Education from "./Education";
import Ehab from "./Ehab.jpg";
function App() {
  const edu = [
    {
      id: 0,
      info:
        "I am Ehab Melhem a full stack developer and, I have a macjor B.sc with computer sciense at Netanya Acdmeic College, work with mern stack Mongo db, React js, Express js, Node js, also i hava expernse with Fire base",
    },
    {
      id: 1,
      info:
        " machine Learning Engineer, So, I am work with tensorflow, dialogflow, pytourch. and i have experinse with oop labguage and script language,like python amd java",
    },
  ];
  return (
    <div className="app">
      <div className="ehab__info">
        {edu.map((elment) => {
          return <Education info={elment.info} />;
        })}
      </div>

      <Data src={Ehab} />
    </div>
  );
}

export default App;
