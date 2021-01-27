import './App.css';
import React from 'react';
import { Provider } from "react-redux";
import store from "./store";

//components
import Main from './components/Main';

function App() {

  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
  );
}

export default App;