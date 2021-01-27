import './App.css';
import React, { useState, useEffect } from 'react';

//components
import Screen from './components/screen.js';



function App() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('/get-companieslist')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setCompanies(data);
      })
  }, [])

  return (

    <div className="App">

      <div>
        {companies.map((list, index) => {
          return (<Screen
            key={index}
            logo={list.logo}
            name={list.name}
            par={list.par}
          />)


        })}

      </div>



    </div>


  );
}

export default App;