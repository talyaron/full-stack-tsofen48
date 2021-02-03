import './App.css';
import React, { useState, useEffect } from "react";

//components
import Cards from './components/Cards.js';


let currentTabName = 'כלים פרלמנטריים';
let userType = 'לוח מעקב';


function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
 
      getStory();
      async function getStory() {
        try {
            let parliamentaryTools = await getparliamentaryTools();
           // let answer = await getAnswer(number);
            //console.log(answer);
            console.log({parliamentaryTools});
            if (parliamentaryTools) {
              console.log("ok Get story!");
              setData(parliamentaryTools);
            }
            
        } catch (e) {
          console.log("not ok Get story!");
          
            console.log(typeof e)
            console.error(e)
        }
    }
      function getparliamentaryTools() {
        return new Promise((resolve, reject) => {
            fetch('/parliamentaryTools/get-parliamentaryTools')
                .then(r => r.json())
                .then(data => {
                  if(data.success===true){
                   // console.log(data.info.parliamentaryTools);
                   console.log("Resolved!");
                    resolve(data.parliamentaryTools);
                  }else{
                    console.log("in Reject!")
                    reject(data.err)
                  }
                })
        })
    }
  }, []);

  return (
    <div className='App'>
      <header id='App-header' className='container App-header'>
        <div className='row'>
          <div id='logo' className='span4 clearfix'>
            <h1><a href='https://oknesset.org/'><img src='https://oknesset.org/static/img/oknesset-logo.png' alt='oknesset-logo' /><span className='main-title'>כנסת פתוחה</span></a></h1>
          </div>
        </div>
      
        <ul className='nav nav-pills'>
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
      <Cards tools={data} />

    </div>
  );
}

export default App;



