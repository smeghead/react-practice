import React, {useState, useEffect } from 'react'

const dotStyle = {
    float: 'left',
    width: '8px',
    height: '8px',
    margin: '1px',
    borderRadius: '5px',
    backgroundColor: '#333',
}

const Line = (props: {buffer: string}) => {
  const [buffer, setBuffer] = useState<string>('')
  useEffect(() => {
    setBuffer(props.buffer)
  }, [props]);

  const lightning = (x: number) => {
    if (! buffer) {
        return '#333';
    }
    if (buffer.length < x) {
        return '#333';
    }
    // console.log(bit[x])
    if (buffer.substring(x, x + 1) === '1') {
        return '#fff';
    }
    return '#333';
  };
  return (
    <div className="Line">
        <div className="dot-off" style={{...dotStyle, backgroundColor: lightning(0)}} />
        <div className="dot-off" style={{...dotStyle, backgroundColor: lightning(1)}} />
        <div className="dot-off" style={{...dotStyle, backgroundColor: lightning(2)}} />
        <div className="dot-off" style={{...dotStyle, backgroundColor: lightning(3)}} />
        <div className="dot-off" style={{...dotStyle, backgroundColor: lightning(4)}} />
        <div className="dot-off" style={{...dotStyle, backgroundColor: lightning(5)}} />
        <div className="dot-off" style={{...dotStyle, backgroundColor: lightning(6)}} />
        <div className="dot-off" style={{...dotStyle, backgroundColor: lightning(7)}} />
        <div className="dot-off" style={{...dotStyle, backgroundColor: lightning(8)}} />
        <div className="dot-off" style={{...dotStyle, backgroundColor: lightning(9)}} />
        <div className="dot-off" style={{...dotStyle, backgroundColor: lightning(10)}} />
        <div className="dot-off" style={{...dotStyle, backgroundColor: lightning(11)}} />
        <div className="dot-off" style={{...dotStyle, backgroundColor: lightning(12)}} />

    </div>
  );
}

export default Line;
// vim: set expandtab ts=2 sts=2 sw=2 :

