import './App.css';
import React, { useState, useEffect } from 'react';


//components
import Gifts from './components/gifts';



function App() {

  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    fetch('/get-gifts')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setGifts(data);
      })
  }, [])

  


  fetch('/get-totalprice')
  .then(r=>r.json())
  .then(data=>{
      console.log(data)
  })


  return (

    <div className="App">
    
    
         
        
      <div>

        {gifts.map((list, index) => {
          return (
            
          <Gifts
            key={index}
            price={list.price}
            logo={list.logo}
            button={list.button}
          />)


        })}

      </div>



    </div>


  );
}

export default App;