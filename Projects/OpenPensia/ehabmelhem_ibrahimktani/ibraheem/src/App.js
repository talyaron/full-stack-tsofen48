import "./App.css";
import Director from "./components/Director";
import Header from "./components/Header";
import SendVote from "./components/SendVote";
import p1 from "./p1.PNG";
import p2 from "./p2.PNG";
import p3 from "./p3.PNG";

const directors = [{ img : p1, name : "רונית אברמוזון רוקח", unlikeColor: false, likeColor : true },
{ img : p2, name : "עיסאווי פריג", unlikeColor: true, likeColor : false },
{ img : p3, name : " דליה לב", unlikeColor: false, likeColor : true }]

function App() {
  return (
<<<<<<< Updated upstream
    <body>
=======
>>>>>>> Stashed changes
    <div className="container">
      <Header />
      <h1 id="directir_select">בחר/י שני דירקטורים רגילים</h1>
      {/* <Director img={ p1} name={ "רונית אברמוזון רו"} unlikeColor={true } likeColor={ true} /> */}
      
      {directors.map(el => {
        return(
        <Director img={el.img}
          name={el.name}
          unlikeColor={el.unlikeColor}
          likeColor={el.likeColor} 
          />)
      })}
      <SendVote />

    </div>
<<<<<<< Updated upstream
    </body>
=======
>>>>>>> Stashed changes

  );
}



export default App;
