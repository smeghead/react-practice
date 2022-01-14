import './App.css';

import React, {useState } from 'react'


function App() {
  const [display, setDisplay] = useState('0');
  const [buffer, setBuffer] = useState([]);
  const [displayIsEmpty, setDisplayIsEmpty] = useState(true);
  const [bufferIsEmpty, setBufferIsEmpty] = useState(true);

  const update = (val: string) => {
    const buf = buffer;
    switch (val) {
      case '+':
        if (bufferIsEmpty) {
          buf.push(display);
        }
        buf.push(val);
        setBuffer(buf);
        setDisplayIsEmpty(true);
        break;
      case '=':
        buf.push(display);
        setBuffer(buf);
        const answer = eval(buffer.join(''));
        setDisplay(answer);
        setDisplayIsEmpty(true);
        setBufferIsEmpty(false);
        break;
      default:
        setDisplay(displayIsEmpty ? val : display + val);
        setDisplayIsEmpty(false);
        break;
    }
  };

  return (
    <div className="App">
      <div>電卓</div>
      <div>
        buffer:
        <span id="buffer">{buffer.join(' ')}</span>
      </div>
      <div>
        <input id="display" type="text" value={display} />
      </div>
      <div>
        <input type="button" value="0" onClick={() => update('0')} />
        <input type="button" value="1" onClick={() => update('1')} />
        <input type="button" value="2" onClick={() => update('2')} />
        <input type="button" value="3" onClick={() => update('3')} />
        <input type="button" value="4" onClick={() => update('4')} />
        <input type="button" value="5" onClick={() => update('5')} />
        <input type="button" value="6" onClick={() => update('6')} />
        <input type="button" value="7" onClick={() => update('7')} />
        <input type="button" value="8" onClick={() => update('8')} />
        <input type="button" value="9" onClick={() => update('9')} />
        <input type="button" value="." onClick={() => update('.')} />
        <input type="button" value="+" onClick={() => update('+')} />
        <input type="button" value="=" onClick={() => update('=')} />

      </div>
    </div>
  );
}

export default App;
// vim: set expandtab ts=2 sts=2 sw=2 :
