import './App.css';
import person from './images/person.jpg'
import Content from './components/contents/content'
function App() {
  return (
    <div className="App">
      <header>
        <div className="topTitle">
          <h3>בנק הפועלים</h3>
          <span>&#60;</span>
        </div>

        <div className='image'>
          <img src={person} alt=''/>
          <h2>עיסאווי פריג’</h2>
        </div>
      </header>


      <section>
        <div className='navbar'>
          <div className="buttons">סיכום פרטים</div>
          <div className="buttons borderBottom">עוד מידע</div>
          <div className="buttons">נתוני הצבעה</div>
        </div>

        <div className="btn">
          <a href='/'>יש לך מידע? לחצ/י כאן</a>
        </div>

        <Content />
      </section>

    </div>
  );
}

export default App;
