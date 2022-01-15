import React, {useState, useEffect } from 'react'
import Digit from './digit.tsx'

const Display = props => {
  const [num, setNum] = useState(props.n)
  
  useEffect(() => {
    setNum(props.n);
  }, [props]);

  return (
    <div className="Display" style={{margin: '5px auto', width: 300, height: 100, backgroundColor: 'DimGray'}}>
      <Digit n={num.toString().padStart(6, '0').substring(0, 1)} />
      <Digit n={num.toString().padStart(6, '0').substring(1, 2)} />
      <Digit n={num.toString().padStart(6, '0').substring(2, 3)} />
      <Digit n={num.toString().padStart(6, '0').substring(3, 4)} />
      <Digit n={num.toString().padStart(6, '0').substring(4, 5)} />
      <Digit n={num.toString().padStart(6, '0').substring(5, 6)} />
      <br style={{clear: 'both'}} />
    </div>
  );
}

export default Display;
// vim: set expandtab ts=2 sts=2 sw=2 :

