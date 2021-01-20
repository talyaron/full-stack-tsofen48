import logo from './logo.svg';
import './App.css';
import YARA from "./superlogo.png";
import React, { useState } from 'react';
//components
import Icon from './components/Icon.js';

const openkneset = [
  {date:'21.11.20',
   name:'נאום בן דקה',
   title:'סגירת מרכולים בבני ברק',
   dateSend:'',
   Courage:'',
   Wasread:'',
   content:''},
   {date:'22.11.20',
   name:'דיון בעת פגרה',
   title:'מענק לעסקים הקורסים',
   dateSend:'',
   Courage:'',
   Wasread:'',
   content:'השבוע נודע לי כי.......'}
   ]

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        
        
          <div>
            {openkneset.map((icon, index) => {
              return (<Icon
                key={index}
                date={icon.date}
                name={icon.name}
                title={icon.title}
                dateSend={icon.dateSend}
                Courage={icon.Courage}
                Wasread={icon.Wasread}
                content={icon.content}
              />)
              
            })
            }
          </div>
        
        
      </header>
     <span class="right">right</span><span class="left">left</span>
    </div> 
  );
}

export default App;
