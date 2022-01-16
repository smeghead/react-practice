import React, {useState, useEffect } from 'react'

const figures = [
  [true, true, true, false, true, true, true, false],
  [false, true, false, false, true, false, false, false],
  [true, false, true, true, true, false, true, false],
  [true, false, true, true, false, true, true, false],
  [false, true, true, true, false, true, false, false],
  [true, true, false, true, false, true, true, false],
  [false, true, false, true, true, true, true, false],
  [true, false, true, false, false, true, false, false],
  [true, true, true, true, true, true, true, false],
  [true, true, true, true, false, true, true, false],
  [false, false, false, false, false, false, false, true],
  [false, false, false, false, false, false, false, false],
];

const digitStyle = {
  float: 'left',
  margin: 5,
};
const barContainarStyle = {
  width: 40, 
  height: 90, 
  backgroundColor: '#333', 
  position: 'relative',
};
const barStyle = {
  position: 'absolute',
  display: 'inline-block',
};

const Digit = props => {
  console.log('Digit', props);
  const [num, setNum] = useState(props.n)
  
  useEffect(() => {
    console.log('useEffect', props);
    setNum(props.n);
  }, [props]);

  return (
    <div className="Digit" style={digitStyle}>
      <div style={barContainarStyle}>
        <span style={{...barStyle, backgroundColor: figures[num][0] ? 'limegreen' : 'DimGray', width: 20, height: 10, top: 0, left: 10}}></span>
        <span style={{...barStyle, backgroundColor: figures[num][1] ? 'limegreen' : 'DimGray', width: 10, height: 30, top: 10, left: 0}}></span>
        <span style={{...barStyle, backgroundColor: figures[num][2] ? 'limegreen' : 'DimGray', width: 10, height: 30, top: 10, left: 30}}></span>
        <span style={{...barStyle, backgroundColor: figures[num][3] ? 'limegreen' : 'DimGray', width: 20, height: 10, top: 40, left: 10}}></span>
        <span style={{...barStyle, backgroundColor: figures[num][4] ? 'limegreen' : 'DimGray', width: 10, height: 30, top: 50, left: 0}}></span>
        <span style={{...barStyle, backgroundColor: figures[num][5] ? 'limegreen' : 'DimGray', width: 10, height: 30, top: 50, left: 30}}></span>
        <span style={{...barStyle, backgroundColor: figures[num][6] ? 'limegreen' : 'DimGray', width: 20, height: 10, top: 80, left: 10}}></span>
        <span style={{...barStyle, backgroundColor: figures[num][7] ? 'limegreen' : 'DimGray', width: 10, height: 10, top: 80, left: 0}}></span>
      </div>
    </div>
  );
}

export default Digit;
// vim: set expandtab ts=2 sts=2 sw=2 :

