import './App.css';

import React, {useReducer } from 'react'

const stateDefault = {
  stack: [],
  buffer: '',
  waitingNumberInput: true,
};
const update = (state, val: string) => {
  console.log('==update==');
  const stack = state.stack.slice(0);
  switch (val) {
    case '+':
      if (stack.length === 0) {
        stack.push(state.buffer);
      }
      stack.push(val);
      console.log(JSON.stringify(stack));
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

function App() {
  const [calcState, dispatch] = useReducer(update, stateDefault);

  return (
    <div className="App">
      <div>電卓</div>
      <div>
        stack:
        <span id="stack">{calcState.stack.join(' ')}</span>
      </div>
      <div>
        buffer:
        <span id="buffer">{calcState.buffer}</span>
      </div>
      <div>
        <input type="button" value="0" onClick={() => dispatch('0')} />
        <input type="button" value="1" onClick={() => dispatch('1')} />
        <input type="button" value="2" onClick={() => dispatch('2')} />
        <input type="button" value="3" onClick={() => dispatch('3')} />
        <input type="button" value="4" onClick={() => dispatch('4')} />
        <input type="button" value="5" onClick={() => dispatch('5')} />
        <input type="button" value="6" onClick={() => dispatch('6')} />
        <input type="button" value="7" onClick={() => dispatch('7')} />
        <input type="button" value="8" onClick={() => dispatch('8')} />
        <input type="button" value="9" onClick={() => dispatch('9')} />
        <input type="button" value="." onClick={() => dispatch('.')} />
        <input type="button" value="+" onClick={() => dispatch('+')} />
        <input type="button" value="=" onClick={() => dispatch('=')} />

      </div>
    </div>
  );
}

export default App;
// vim: set expandtab ts=2 sts=2 sw=2 :
