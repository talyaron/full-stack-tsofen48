import "./App.css";
import Header from "./Compents/Header";
import Information from "./Compents/Information";
import Navbar from "./Compents/Navbar";

function App() {
  return (
    <div className="app">
      <div className="contaner">
        <Header />
        <Navbar />
        <Information />
        <p>מה הבחינה שלך</p>
      </div>
    </div>
  );
}

export default App;
