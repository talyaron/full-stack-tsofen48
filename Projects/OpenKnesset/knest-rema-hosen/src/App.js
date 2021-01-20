import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SuggestionFrom from "./components/SuggestionFrom/SuggestionFrom";
import ToolHistoryTakanonFutureDiv from "./components/ToolHistoryTakanonFutureDiv/ToolHistoryTakanonFutureDiv";
import Header from "./components/Header/Header";

export default function App() {


  return (
    <div className="container">

      <Router>
        <div>
     

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>

            <Route path="/submitSuggestion">
             <Header></Header>
              <ToolHistoryTakanonFutureDiv className='ToolHistoryTakanonFutureDiv'></ToolHistoryTakanonFutureDiv>
              <SuggestionFrom></SuggestionFrom>
              
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}  
