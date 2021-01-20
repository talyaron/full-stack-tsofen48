import './App.css';
import React from 'react';

//components
import Cards from './components/Cards.js';
const hrefs=getHrefsFromDataBase();
const tools = getCardsFromDataBase();
let currentTabName = 'כלים פרלמנטריים';
let userType = 'לוח מעקב';

function App() {
  return (
    <div className='App'>
      <header id='App-header' class='container App-header'>
        <div class='row'>
          <div id='logo' class='span4 clearfix'>
            <h1><a href='https://oknesset.org/'><img src='https://oknesset.org/static/img/oknesset-logo.png' alt='oknesset-logo' /><span className='main-title'>כנסת פתוחה</span></a></h1>
          </div>
        </div>
      
        <ul class='nav nav-pills'>
          <li id='nav-parties'><a href='/members/index.html'>ח'כים וסיעות</a></li>
          <li id='nav-committees'><a href='/committees/index.html'>ועדות</a></li>
          <li id='nav-committees'><a href='/committees/index.html'>כלים פרלמנטריים</a></li>
        </ul>
      </header>
      <section className='secondary-nav-bar'>
        <div className='path'>
          <a href='https://oknesset.org/'> דף הבית </a>/
            <span className='current-tab-name'> {currentTabName} </span>
        </div>

        <div className='user-links'>
          <a className='disconnect' href='#'> התנתק </a>
            |
          <a className='link'> {userType} </a>
        </div>
      </section>
      <Cards tools={tools} />

    </div>
  );
}

export default App;
function getHrefsFromDataBase() {
  return [
    {
      text: "חבר כנסת",
      href: "https://he.wikipedia.org/wiki/%D7%97%D7%91%D7%A8_%D7%94%D7%9B%D7%A0%D7%A1%D7%AA"
    },
    {
      text: "סגן שר",
      href: "https://he.wikipedia.org/wiki/%D7%A1%D7%92%D7%9F_%D7%A9%D7%A8"
    },
    {
      text: "כינוס הכנסת בזמן הפגרה",
      href: "https://he.wikipedia.org/wiki/%D7%A9%D7%A8"
    }
  ];
}

function getCardsFromDataBase() {
  return [
    {
      title: "שאילה רגילה",
      content: "שאלה לשר על עניין שהתחום תפקדיו ,אותה מפנה חבר כנסת , שאינו שר או סגן שר . התשובה לשאילתה תינתן במליאת הכנסת . על השר להשיב תוך 21 ימים ."
    },
    {
      title: "נאום בן דקה",
      content: "נאום של חבר כנסת , בכל נושא ובאורך של כדקה (תלוי בטוב ליבו של יו'ר הכנסת או סגן יו'ר הכנסת המנהלים את הישיבה בפועל)"
    },
    {
      title: "כינוס הכנסת בזמן הפגרה",
      content: "הגשת דרישה ליו'ר הכנסת על ידי 25 ח'כים לכינוס מליאה מיוחדת שתדון בהצעה לסדר היום"
    }
  ];
}
