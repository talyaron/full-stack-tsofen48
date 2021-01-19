import './App.css';

//import images
import sadna from './images/sadna.png'
import logo from './images/logo.png';

//improt components
import Content from './components/contents/content'

function App() {
  return (
    <div className="app">
      <header>
        <img src={logo} alt='logo' />
        <span>כנסת פתוחה</span>
      </header>
      <nav>
        <ul>
          <li><a href='#'>ח"כים וסיעות</a></li>
          <li><a href='#'>ועדות</a></li>
          <li><a href='#'>כלים פרלמנטריים</a></li>
        </ul>
      </nav>

      <section>
        <div className='breadcrumb'>
          <ul>
            <li>
              <a href="#">דף הבית</a>
            </li>
            <li>/</li>
          </ul>
        </div>

        <Content /> 


      </section>

      <footer>
        <div className="foot">
          <ul>
            <li><a href='#'>ח"כים וסיעות</a></li>
            <li><a href='#'>ועדות</a></li>
            <li><a href='#'>כלים פרלמנטריים</a></li>
          </ul>
        </div>

        <p>כנסת פתוחה הוא פרוייקט שמטרתו לחשוף את פעילות הכנסת לציבור</p>

        <div className="le-footer">
          <h3>
            <img src={sadna} alt="הסדנא לידע ציבורי" />
            <span>פרוייקט של</span><a href="http://www.hasadna.org.il">הסדנא לידע ציבורי</a>
          </h3>
        </div>
      </footer>


    </div>
  );
}

export default App;
