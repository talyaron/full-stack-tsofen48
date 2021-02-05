import "./App.css";
import React, { useState, useEffect } from "react";

//components
import Screen from "./components/screen.js";

function App() {
  const [companies, setCompanies] = useState([]);
  async function fetchMoviesBadStatus(url) {
    const response = await fetch(url);

    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }

    const movies = await response.json();
    return movies;
  }

  useEffect(() => {
   fetchMoviesBadStatus("/get-companies").then(res=>console.log('asdasd',res)).catch(error => {
     console.log(error.message);
    // error.message; // 'An error has occurred: 404'
  });
    fetch("/get-companies")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setCompanies(data.companies);
      });
  }, []);

  return (
    //   <div></div>

    <div>
      {companies.map((list, index) => {
        return (
          <Screen
            key={index}
            logo={list.logo}
            name={list.name}
            par={list.par}
          />
        );
      })}
    </div>
  );
}

export default App;
