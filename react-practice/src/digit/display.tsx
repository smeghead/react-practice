import React, {useState, useEffect } from 'react'
import Digit from './digit'

const displayStyle = {
  margin: '5px auto',
  width: 300,
  height: 100,
  backgroundColor: '#333',
};
const parseIndex = (n: string) => {
  if (n === ' ') {
    return 11;
  }
  if (n === '.') {
    return 10;
  }
  return parseInt(n, 10);
}

const Display = (props: {n: string}) => {
  const [num, setNum] = useState<string>(props.n)
  
  useEffect(() => {
    setNum(props.n);
  }, [props]);

  return (
    <div className="Display" style={displayStyle}>
      <Digit n={parseIndex(num.toString().padStart(6, ' ').substring(0, 1))} />
      <Digit n={parseIndex(num.toString().padStart(6, ' ').substring(1, 2))} />
      <Digit n={parseIndex(num.toString().padStart(6, ' ').substring(2, 3))} />
      <Digit n={parseIndex(num.toString().padStart(6, ' ').substring(3, 4))} />
      <Digit n={parseIndex(num.toString().padStart(6, ' ').substring(4, 5))} />
      <Digit n={parseIndex(num.toString().padStart(6, ' ').substring(5, 6))} />
      <br style={{clear: 'both'}} />
    </div>
  );
}

export default Display;
// vim: set expandtab ts=2 sts=2 sw=2 :

