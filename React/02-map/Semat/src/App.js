import logo from './logo.svg';
 import vil from './mua.jpg';
import './App.css';
import Card from './view/components/Card/Card';




function uniqueId(){
  return "id" + Math.random().toString(16).slice(2)
}

const pics = [
  {id:uniqueId(), img: 'https://www.playdosgames.com/assets/screenshots/dangerous-dave.png', title: 'Dangerous Dave' },
  {id:uniqueId(),
     img: 'https://static.retrogames.cc/screenshot/55/u/19290_8cd40ab17ee98ce1daa2cd5fc27b838172d641bd.png',
   title: 'Super Mario' },
  {id:uniqueId(),
     img: 'https://classicreload.com/sites/default/files/styles/game_image/public/skyroads-screenshot.png?itok=eEOiU8lk', 
  title: 'Sky Roads' },
  {id:uniqueId(),
     img: 'https://image.dosgamesarchive.com/screenshots/thumbnails/WOLF-01.png',
   title: 'Wolfenstein' }
]






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Childhood computer games</h1>
       


        {pics.map((pic, index) => {
         
         return (<Card
           key={pic.id}
           title={pic.title}
           img={pic.img} />)
       })
       }

      </header>
    </div>
  );
}

export default App;
