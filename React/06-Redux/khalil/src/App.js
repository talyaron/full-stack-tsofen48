import './App.css';
import React, { useState } from 'react';
import { Provider } from "react-redux";
import store from "./store";

//components
import Main from './components/Main';

function App() {
  const [score, setScore] = useState(0);

  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
  );
}

export default App;