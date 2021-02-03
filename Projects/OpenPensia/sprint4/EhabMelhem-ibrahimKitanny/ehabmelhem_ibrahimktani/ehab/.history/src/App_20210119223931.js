import "./App.css";
import Header from "./Compents/Header";
import Information from "./Compents/Information";
import Navbar from "./Compents/Navbar";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
function App() {
  return (
    <div className="app">
      <div className="contaner">
        <Header />
        <Navbar />
        <Information />
        <p>מה הבחינה שלך</p>
        <ThumbUpIcon
      </div>
    </div>
  );
}

export default App;
