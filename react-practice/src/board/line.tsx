import React, {useState, useEffect } from 'react'

const dotStyle = {
    float: 'left',
    width: '8px',
    height: '8px',
    margin: '1px',
    borderRadius: '5px',
    background: '#333',
}

const Line = (props: {buffer: string, offset: number}) => {
  const [buffer, setBuffer] = useState<string>('')
  useEffect(() => {
    setBuffer(props.buffer)
  }, [props]);

  const lightning = (x: number, offset: number) => {
    if (! buffer) {
        return '#333';
    }
    // if (buffer.length < x) {
    //     return '#333';
    // }
    let virtualScreenBuffer = ''
    if (offset >= 0) {
      virtualScreenBuffer = '0'.repeat(offset) + buffer
    } else {
      virtualScreenBuffer = buffer.substring((offset % buffer.length) * -1)
    }
    // 繰り返し
    while (virtualScreenBuffer.length < 50) {
      virtualScreenBuffer += buffer
    }
    // console.log(virtualScreenBuffer)
    if (virtualScreenBuffer.substring(x, x + 1) === '1') {
        return 'radial-gradient(farthest-corner at 8px 8px, #ffffff 0, #fa8916 70%, #f87d02 100%)';
    }
    return '#333';
  };
  return (
    <div className="Line">
        <div className="dot-off" style={{...dotStyle, background: lightning(0, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(1, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(2, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(3, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(4, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(5, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(6, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(7, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(8, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(9, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(10, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(11, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(12, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(13, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(14, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(15, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(16, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(17, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(18, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(19, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(20, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(21, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(22, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(23, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(24, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(25, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(26, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(27, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(28, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(29, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(30, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(31, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(32, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(33, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(34, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(35, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(36, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(37, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(38, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(39, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(40, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(41, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(42, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(43, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(44, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(45, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(46, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(47, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(48, props.offset)}} />
        <div className="dot-off" style={{...dotStyle, background: lightning(49, props.offset)}} />

    </div>
  );
}

export default Line;
// vim: set expandtab ts=2 sts=2 sw=2 :

