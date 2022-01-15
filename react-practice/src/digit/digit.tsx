import React, {useState, useReducer } from 'react'

const Digit = props => {
  const figures = [
    [true, true, true, false, true, true, true],
    [false, true, false, false, true, false, false],
    [true, false, true, true, true, false, true],
    [true, false, true, true, false, true, true],
    [false, true, true, true, false, true, false],
    [true, true, false, true, false, true, true],
    [false, true, false, true, true, true, true],
    [true, false, true, false, false, true, false],
    [true, true, true, true, true, true, true],
    [true, true, true, true, false, true, true],
  ];
  const [num, setNum] = useState(props.n)
  const update = (state, num) => {
    return figures[num];
  };
  const [state, _] = useReducer(update, figures[props.n])
  
  return (
    <div className="Digit" style={{float: 'left', margin: 5}}>
      <div style={{width: 40, height: 90, backgroundColor: 'DimGray', position: 'relative'}}>
        <span style={{position: 'absolute', display: 'inline-block', backgroundColor: state[0] ? 'limegreen' : 'gray', width: 20, height: 10, top: 0, left: 10}}></span>
        <span style={{position: 'absolute', display: 'inline-block', backgroundColor: state[1] ? 'limegreen' : 'gray', width: 10, height: 30, top: 10, left: 0}}></span>
        <span style={{position: 'absolute', display: 'inline-block', backgroundColor: state[2] ? 'limegreen' : 'gray', width: 10, height: 30, top: 10, left: 30}}></span>
        <span style={{position: 'absolute', display: 'inline-block', backgroundColor: state[3] ? 'limegreen' : 'gray', width: 20, height: 10, top: 40, left: 10}}></span>
        <span style={{position: 'absolute', display: 'inline-block', backgroundColor: state[4] ? 'limegreen' : 'gray', width: 10, height: 30, top: 50, left: 0}}></span>
        <span style={{position: 'absolute', display: 'inline-block', backgroundColor: state[5] ? 'limegreen' : 'gray', width: 10, height: 30, top: 50, left: 30}}></span>
        <span style={{position: 'absolute', display: 'inline-block', backgroundColor: state[6] ? 'limegreen' : 'gray', width: 20, height: 10, top: 80, left: 10}}></span>
      </div>
    </div>
  );
}

export default Digit;
// vim: set expandtab ts=2 sts=2 sw=2 :

