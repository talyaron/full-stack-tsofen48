import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SuggestionFrom from "./components/SuggestionFrom/SuggestionFrom";

export default function App() {


  return (
    <div className="container">

      <Router>
        <div>
     

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>

            <Route path="/submitSuggestion">
              <SuggestionFrom></SuggestionFrom>
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}  
