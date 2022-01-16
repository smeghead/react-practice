import './App.css';

import React, {useReducer } from 'react'
import Display from './digit/display'
import Buttons from './button/buttons'

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

  return (
    <div className="App">
      <div>電卓</div>
      <div>
        stack:
        <span id="stack">{calcState.stack.join(' ')}</span>
      </div>
      <Display n={calcState.buffer} />
      <Buttons dispatch={dispatch} />
    </div>
  );
}

export default App;
// vim: set expandtab ts=2 sts=2 sw=2 :
