import './App.css';
import React from 'react';
//components
import Cards from './components/Cards.js';

//change font family

let cards = getCardsFromDataBase();

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='company-name'>
          בנק הפועלים
        </div>
        <img className='candidate-img' src='https://www.lego.com/cdn/cs/set/assets/blt0bf03ae97678db52/Batman2_App_Sidekick-Tall1.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1' />
        <div className='candidate-name'>
          עיסאווי פריג'
        </div>
        <nav>
          <ul>
            <li className='non-active-nav'>
              <a href='#' /> סיכום פרטים
          </li>
            <li className='active-nav'>
              <a href='#' />עוד מידע
          </li>
            <li className='non-active-nav'>
              <a href='#' /> נתוני הצבעה
          </li>
          </ul>
        </nav>
      </header>

      <body className='content'>
        <button className='add-info-btn'> <a href='#' />יש לך מידע? לחצ/י כאן</button>
        <Cards cards={cards} />
        
      </body>

    </div>
  );
}

export default App;

function getCardsFromDataBase() {
  return [
    {
      title: 'עיסאווי פריג – ויקיפדיה',
      subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
      link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
      title: 'עיסאווי פריג – ויקיפדיה',
      subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
      link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
      title: 'עיסאווי פריג – ויקיפדיה',
      subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
      link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
      title: 'עיסאווי פריג – ויקיפדיה',
      subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
      link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
      title: 'עיסאווי פריג – ויקיפדיה',
      subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
      link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
      title: 'עיסאווי פריג – ויקיפדיה',
      subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
      link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    }
  ];
}