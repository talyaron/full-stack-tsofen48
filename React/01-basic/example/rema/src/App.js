import logo from './logo.svg';
import './App.css';
import Card from './view/components/Card/Card';
import group from './view/components/Card/group';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <group>
      <Card title='mini cooper' img='https://cars.usnews.com/images/article/202011/128724/P90289697_highRes.jpg' />
        <Card title='m&ms' img='https://images-na.ssl-images-amazon.com/images/I/61-dIdk0gPL._AC_SX679_.jpg' />
        <Card title='pringles' img='https://images.heb.com/is/image/HEBGrocery/002083693' />
        <Card title='quiet places' img='https://imgproxy.natucate.com/PAd5WVIh-tjEKQM4Z6tm6W1J4Yc2JIYWrKEroD1c7mM/rs:fill/g:ce/w:3840/h:2160/aHR0cHM6Ly93d3cubmF0dWNhdGUuY29tL21lZGlhL3BhZ2VzL3JlaXNlYXJ0ZW4vNmMwODZlYmEtNzk3Yi00ZDVjLTk2YTItODhhNGM4OWUyODdlLzM3NjYwMTQ2NjMtMTU2NzQzMzYxMi8xMl9kYW5pZWxfY2FuX2JjLTIwNy5qcGc' />
        </group>
    
       
      </header>
    </div>
  );
}

export default App;
