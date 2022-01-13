import './App.css';

import React, {useState } from 'react'


function App() {
  const [display, setDisplay] = useState('');

  return (
    <div className="App">
      <div>電卓</div>
      <div>
        <input type="text" value={display} />
      </div>
      <div>
        <input type="button" value="0" onClick={() => setDisplay(display + '0')} />
        <input type="button" value="1" onClick={() => setDisplay(display + '1')} />
        <input type="button" value="2" onClick={() => setDisplay(display + '2')} />
        <input type="button" value="3" onClick={() => setDisplay(display + '3')} />
        <input type="button" value="4" onClick={() => setDisplay(display + '4')} />
        <input type="button" value="5" onClick={() => setDisplay(display + '5')} />
        <input type="button" value="6" onClick={() => setDisplay(display + '6')} />
        <input type="button" value="7" onClick={() => setDisplay(display + '7')} />
        <input type="button" value="8" onClick={() => setDisplay(display + '8')} />
        <input type="button" value="9" onClick={() => setDisplay(display + '9')} />
        <input type="button" value="+" onClick={() => setDisplay(display + '+')} />
        <input type="button" value="=" onClick={() => setDisplay(display + '=')} />

      </div>
    </div>
  );
}

export default App;
// vim: set expandtab ts=2 sts=2 sw=2 :
