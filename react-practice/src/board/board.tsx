import React, {useState, useEffect } from 'react'
import Line from './line'
import Letter from './letter'


const boardStyle = {
  margin: '5px auto',
  width: 500,
  height: 100,
  backgroundColor: 'black',
};


const generateBuffer = (str: string, font: {[name: string]: Letter}) => {
    const buffer = ['', '', '', '', '', '', '', '', '', '']
    if (!font) {
        return buffer;
    }
    str += '    '; //文と文の繰り返し時の隙間を作る
    str.split('').forEach(s => {
      const charCode: string = s.charCodeAt(0).toString()
      if (!(font[charCode])) {
        console.log('no kye', charCode, font[charCode])
        console.log(font)
        return
      }
      const letter = font[charCode]
      // console.log(s, letter);

      let i = 0
      for (; i < letter.bbx[3] + 2; i++) {
        buffer[i] += letter.dwidth[0] === 4 ? '0000' : '00000000';
      }
      letter.bitmap.concat().reverse().forEach(dex => {
        buffer[i++] += parseInt(dex, 16).toString(2).padStart(8, '0').substring(0, letter.dwidth[0])
      })
      for (; i < 10; i++) {
        buffer[i] += letter.dwidth[0] === 4 ? '0000' : '00000000';
      }
    })
    // console.log('buffer initialized', buffer);

    return buffer;
};

const Display = (props: {str: string, font: {[name: string]: Letter}}) => {
  const [buffer, setBuffer] = useState(generateBuffer(props.str, props.font))
  const [offset, setOffset] = useState(50)
  useEffect(() => {
    setBuffer(generateBuffer(props.str, props.font))
  }, [props]);

  useEffect(() => {
    if (Object.keys(props.font).length === 0) {
      return;
    }
    const timerId = setTimeout(() => {
      setOffset(offset - 1)
    }, 50)
    return () => clearTimeout(timerId)
  }, [offset, props.font])

  return (
    <div className="Board" style={boardStyle}>
        <Line buffer={buffer[9]} offset={offset} />
        <Line buffer={buffer[8]} offset={offset} />
        <Line buffer={buffer[7]} offset={offset} />
        <Line buffer={buffer[6]} offset={offset} />
        <Line buffer={buffer[5]} offset={offset} />
        <Line buffer={buffer[4]} offset={offset} />
        <Line buffer={buffer[3]} offset={offset} />
        <Line buffer={buffer[2]} offset={offset} />
        <Line buffer={buffer[1]} offset={offset} />
        <Line buffer={buffer[0]} offset={offset} />
    </div>
  );
}

export default Display;
// vim: set expandtab ts=2 sts=2 sw=2 :

