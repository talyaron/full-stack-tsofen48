import './App.css';
import React, { useState, useEffect } from 'react';

//components
import Screen from './components/screen.js';



function App() {
  

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('/get-companies')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setCompanies(data.companies);
      })
  }, [])

  return (
    
 //   <div></div>

    
    
      <div >
        
        {companies.map((list, index) => {
          return (<Screen
            key={index}
            logo={list.logo}
            name={list.name}
            par={list.par}
          />)


        })}

    </div>



    


  );
  
}

export default App;