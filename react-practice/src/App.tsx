import './App.css';

import React, {useReducer, useState} from 'react'
import Display from './digit/display'
import Buttons from './button/buttons'
import Board from './board/board'


const init = async function() {
  let bdf = '';
  await fetch('misaki_gothic.bdf')
  .then(response => response.text())
  .then(data => {
      bdf = data;
  })
  console.log('loaded', bdf.length, new Date())
  const font: any = {}
  let letter: any = {encoding: '', dwidth: [], bbx: [], bitmap: []}
  let bitmap: any[] = []
  let bitmapLines = false
  bdf.split(/\n/).forEach(line => {
      const columns = line.split(/\s+/);
      switch (columns[0]) {
          case 'STARTCHAR':
              bitmapLines = false;
              break
          case 'ENCODING':
              letter.encoding = columns[1]
              break
          case 'DWIDTH':
              letter.dwidth = [Number(columns[1]), Number(columns[1])]
              break
          case 'BBX':
              letter.bbx = [Number(columns[1]), Number(columns[2]), Number(columns[3]), Number(columns[4])]
              break
          case 'BITMAP':
              bitmapLines = true
              break
          case 'ENDCHAR':
              letter.bitmap = bitmap
              font[letter.encoding] = JSON.parse(JSON.stringify(letter))
              letter = {}
              bitmap = []
              break
          default:
              if (bitmapLines) {
                  //console.log('BITMAP add', columns[0])
                  bitmap.push(columns[0])
              }
      }
  })
  //console.log(font)
  console.log('font initialized', new Date(), Object.keys(font));

  return font
}
let font = {}
init().then(f => {
  font = f
});



type AppState = {
  stack: string[];
  buffer: string;
  waitingNumberInput: boolean;
}

const stateDefault: AppState = {
  stack: [],
  buffer: '',
  waitingNumberInput: true,
};
const update = (state: AppState, val: string) => {
  const stack = state.stack.slice(0);
  switch (val) {
    case '+':
      if (stack.length === 0) {
        stack.push(state.buffer);
      }
      stack.push(val);
      return {stack: stack, buffer: state.buffer, waitingNumberInput: true};
    case '=':
      stack.push(state.buffer);
      const answer = eval(stack.join(''));
      return {stack: stack, buffer: answer, waitingNumberInput: true};
    default:
      const buffer = state.waitingNumberInput ? val : state.buffer + val;
      return {...state, buffer: buffer, waitingNumberInput: false};
  }
};

const App = () => {
  const [calcState, dispatch] = useReducer(update, stateDefault);
  const [displayString, setDisplayString] = useState('');

  return (
    <div className="App">
      <div>電卓</div>
      <div>
        stack:
        <span id="stack">{calcState.stack.join(' ')}</span>
      </div>
      <Display n={calcState.buffer} />
      <Buttons dispatch={dispatch} />
      <input type="text" onChange={e => setDisplayString(e.target.value)} />
      <Board str={displayString} font={font} />
    </div>
  );
}

export default App;
// vim: set expandtab ts=2 sts=2 sw=2 :
