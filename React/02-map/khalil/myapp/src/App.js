import logo from './logo.svg';
import './App.css';
import Card from './view/components/Card/Card'
import React, { useState } from 'react';

let movies = [{ title: 'Deadpool', img: 'https://lumiere-a.akamaihd.net/v1/images/image_8c4aa72b.jpeg' },
{ title: 'Spiderman', img: 'https://images-na.ssl-images-amazon.com/images/I/61TUX3ObSLL._AC_.jpg' },
{ title: 'Iron Man', img: 'http://www.comicbookcritic.net/wp-content/uploads/2013/03/IRON3_5x8_Banner_v7_OL.jpg' },
{ title: 'Avengers', img: 'https://www.radtkesports.com/wp-content/uploads/1636_300_sleeavengers2sidedposter_1.png' }]

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
      </button>
        </div>

        {
          movies.map((movie, index) => {
            return (<Card
              key={index}
              title={movie.title}
              img={movie.img}
            />)
          })
        }



      </header>
    </div>
  );
}

export default App;
