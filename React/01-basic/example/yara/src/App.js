import logo from './logo.svg';
import './App.css';
import YARA from "./1074.JPG";

const img=[
  {img:'1074.JPG',title:'myimage'},
  {img:''}
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={YARA} className="App-logo" alt="logo" />
        <p>
          yara kbha.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello,im yara 19 years old . ؤ
        </a>
        {img.map((icon, index) => {
         
         return (<Icon
           key={index}
           title={icon.title}
           img={icon.img} />)
       })
       }

      </header>
    </div>
  );
}

export default App;
