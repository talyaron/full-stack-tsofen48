import logo from './logo.svg';
import './App.css';
import YARA from "./superlogo.png";
import React, { useState } from 'react';
//components
import Icon from './components/Icon.js';



function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <span class="right"><img className="back" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIGlkPSJTX1ByZXZpb3VzQXJ0Ym9hcmRfMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgdmVyc2lvbj0iMS4xIgoJeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKCXg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4Igo+Cgk8ZyBpZD0iTGF5ZXIlMjAxIj4KCQk8cGF0aCBkPSJNIDIuMDQxNyA5Ljk2MDcgQyAxLjc2MiAxMC4yNTA4IDEuNzYyIDEwLjcyMTUgMi4wNTIgMTEuMDIwMyBMIDguODY5NCAxNy43ODc5IEMgOS4xNjkyIDE4LjA2ODEgOS42Mzk5IDE4LjA2ODEgOS45Mzg3IDE3Ljc4NzkgQyAxMC4yMjg4IDE3LjQ4ODEgMTAuMjI4OCAxNy4wMTgzIDkuOTM4NyAxNi43MjgzIEwgNC40NjE5IDExLjMwMzUgTCAxOS44MjkzIDExLjMwMzUgQyAyMC4yNDM3IDExLjMwMzUgMjAuNTc5MyAxMC45Njc3IDIwLjU3OTMgMTAuNTUzNSBDIDIwLjU3OTMgMTAuMTM5MyAyMC4yNDM3IDkuODAzNSAxOS44MjkzIDkuODAzNSBMIDQuMzQxOCA5LjgwMzUgTCA5LjkyMzEgNC4zMTYyIEMgMTAuMjEzMSA0LjAxNjQgMTAuMjEzMSAzLjU0NjcgOS45MjMxIDMuMjU2NiBDIDkuNjI0MyAyLjk2NjYgOS4xNTM2IDIuOTY2NiA4Ljg1MzggMy4yNTY2IEwgMi4wNDE3IDkuOTYwNyBaIiBmaWxsPSIjNzA3MDcwIi8+Cgk8L2c+Cjwvc3ZnPgo="/></span>
        <span class="center">
        <h5>
        בנק הפועלים
        </h5>
        </span> 
      </header>
      <span class="right"><img className="back" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIGlkPSJTX1ByZXZpb3VzQXJ0Ym9hcmRfMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgdmVyc2lvbj0iMS4xIgoJeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKCXg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4Igo+Cgk8ZyBpZD0iTGF5ZXIlMjAxIj4KCQk8cGF0aCBkPSJNIDIuMDQxNyA5Ljk2MDcgQyAxLjc2MiAxMC4yNTA4IDEuNzYyIDEwLjcyMTUgMi4wNTIgMTEuMDIwMyBMIDguODY5NCAxNy43ODc5IEMgOS4xNjkyIDE4LjA2ODEgOS42Mzk5IDE4LjA2ODEgOS45Mzg3IDE3Ljc4NzkgQyAxMC4yMjg4IDE3LjQ4ODEgMTAuMjI4OCAxNy4wMTgzIDkuOTM4NyAxNi43MjgzIEwgNC40NjE5IDExLjMwMzUgTCAxOS44MjkzIDExLjMwMzUgQyAyMC4yNDM3IDExLjMwMzUgMjAuNTc5MyAxMC45Njc3IDIwLjU3OTMgMTAuNTUzNSBDIDIwLjU3OTMgMTAuMTM5MyAyMC4yNDM3IDkuODAzNSAxOS44MjkzIDkuODAzNSBMIDQuMzQxOCA5LjgwMzUgTCA5LjkyMzEgNC4zMTYyIEMgMTAuMjEzMSA0LjAxNjQgMTAuMjEzMSAzLjU0NjcgOS45MjMxIDMuMjU2NiBDIDkuNjI0MyAyLjk2NjYgOS4xNTM2IDIuOTY2NiA4Ljg1MzggMy4yNTY2IEwgMi4wNDE3IDkuOTYwNyBaIiBmaWxsPSIjNzA3MDcwIi8+Cgk8L2c+Cjwvc3ZnPgo="/></span>
        <span class="center">
        <h5>
        בנק הפועלים
        </h5>
        </span> 
    </div> 
  );
}

export default App;
