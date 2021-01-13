import logo from './logo.svg';
import './App.css';
import Card from './view/components/Card/Card';
import group from './view/components/Card/group';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <group>
      <Card title='The Dark Knight' img='https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg' />
        <Card title='Titanic' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp' />
        <Card title='There Will Be Blood' img='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcROAcLOROSJ7xMTiXw5eyVDt_MFRzvCuLqwIC2SP1X4MNxfsMzC' />
        <Card title='The Godfather 2' img='https://www.filmlinc.org/wp-content/uploads/2011/08/NYFF57_Retrospective_TheGodfatherPartII_02-1.jpg' />
        </group>
    
       
      </header>
    </div>
  );
}

export default App;
