import './App.css';
import person from './images/person.jpg'
import Content from './components/contents/content'
function App() {
  return (
    <div className="App">
      <header>
        <div className="topTitle">
          <h3>הצבעות ממתינות לתשובה</h3>
          <span>&#60;</span>
        </div>
      </header>


      <section>

        <Content />
      </section>

    </div>
  );
}

export default App;
