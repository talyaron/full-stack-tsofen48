import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import CompaniesLst from "./components/CompaniesLst.js";

function App() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("/get-companies")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setCompanies(data.companies);
      });
  }, []);

  function Home() {
    return (
      <div>
        {companies.map((item, index) => {
          return (
            <CompaniesLst
              key={index}
              name={item.name}
              desc={item.desc}
              logo={item.logo}
            />
          );
        })}
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
