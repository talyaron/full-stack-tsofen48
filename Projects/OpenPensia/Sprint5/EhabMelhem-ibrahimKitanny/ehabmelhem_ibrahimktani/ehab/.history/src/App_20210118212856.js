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
      </div>
    </div>
  );
}

export default App;
