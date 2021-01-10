import logo from './logo.svg';
import rabbitimg from './rabbit.jpg';
import './App.css';


const rabbit = 'arnab';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={rabbitimg} className="arnab" alt="arnab" />
        <p>
          {rabbit}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
