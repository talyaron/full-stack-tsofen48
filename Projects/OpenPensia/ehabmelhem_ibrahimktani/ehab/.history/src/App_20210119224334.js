import "./App.css";
import Header from "./Compents/Header";
import Information from "./Compents/Information";
import Navbar from "./Compents/Navbar";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
function App() {
  return (
    <div className="app">
      <div className="contaner">
        <Header />
        <Navbar />
        <Information />
        <p>מה הבחינה שלך</p>
        <div className="thumps">
          <ThumbUpIcon className="thump" />
          <ThumbDownIcon className="thump" />
        </div>
      </div>
    </div>
  );
}

export default App;
