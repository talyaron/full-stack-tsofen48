import "./App.css";
import Director from "./components/Director";
import Header from "./components/Header";
import SendVote from "./components/SendVote";
import { useState, useEffect } from "react";

// const directors = [{ img : p1, name : "רונית אברמוזון רוקח", unlikeColor: false, likeColor : true },
// { img : p2, name : "עיסאווי פריג", unlikeColor: true, likeColor : false },
// { img : p3, name : " דליה לב", unlikeColor: false, likeColor : true }]

function App() {
  const [directors, setDirectors] = useState([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    fetch("/voting/check-user")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        if (data.index === 1) {
          setFlag(true);
        } else {
          setFlag(false);
        }
      });
      if(flag){
    fetch("/voting/get-director-information")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setDirectors(data);
      });
  }, []);
  if (!flag) {
    return (
      <div>
        <h1>you have to sign in</h1>
      </div>
    );
  } else {
    return (
      <body>
        <div className="container">
          <Header />
          <h1 id="directir_select">בחר/י שני דירקטורים רגילים</h1>
          {/* <Director img={ p1} name={ "רונית אברמוזון רו"} unlikeColor={true } likeColor={ true} /> */}

          {directors.map((el) => {
            return (
              <Director
                img={el.img}
                name={el.name}
                unlikeColor={el.unlikeColor}
                likeColor={el.likeColor}
              />
            );
          })}
          <SendVote />
        </div>
      </body>
    );
  }
}

export default App;
