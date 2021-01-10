import logo from './logo.svg';
import './App.css';

//components
import Card from './view/components/Card/Card';

const name = 'Mhmd';

function App() { //component
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi Ibrahim {name}!
        </p>
        <Card title='hi' img='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-flower-bouquet-1588610191.jpg?crop=1.00xw:0.892xh;0,0.108xh&resize=1200:*' />
        <Card title='bye' />
        <Card title='boohi'  />
        <Card title='ba' />
        <Card title='be' />
        <Card title='bla' />
        <Card title='blo' />

        <h2>Learn to code</h2>
      </header>
    </div>
  );
}

export default App;
