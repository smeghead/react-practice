import React, {useState, useEffect } from 'react'

const dotStyle = {
    float: 'left',
    width: '8px',
    height: '8px',
    margin: '1px',
    borderRadius: '5px',
    background: '#333',
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
        return 'radial-gradient(farthest-corner at 8px 8px, #ffffff 0, #fa8916 70%, #f87d02 100%)';
    }
    return '#333';
  };
  return (
    <div className="Line">
        <div className="dot-off" style={{...dotStyle, background: lightning(0)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(1)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(2)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(3)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(4)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(5)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(6)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(7)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(8)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(9)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(10)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(11)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(12)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(13)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(14)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(15)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(16)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(17)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(18)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(19)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(20)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(21)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(22)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(23)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(24)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(25)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(26)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(27)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(28)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(29)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(30)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(31)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(32)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(33)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(34)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(35)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(36)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(37)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(38)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(39)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(40)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(41)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(42)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(43)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(44)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(45)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(46)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(47)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(48)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(49)}} />

    </div>
  );
}

export default Line;
// vim: set expandtab ts=2 sts=2 sw=2 :

