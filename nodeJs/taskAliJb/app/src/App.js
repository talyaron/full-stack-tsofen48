import logo from './logo.svg';
import './App.css';
import axios from 'axios';


function App() {

  const hitBackend = () => {
    axios.get('/testAPI')
    .then((response) => {
    console.log(response.data)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
        <button onClick={hitBackend}>Send request</button>
        </p>
      </header>
    </div>
  );
}

export default App;
