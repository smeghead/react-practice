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
    str.split('').forEach(s => {
      const charCode: string = s.charCodeAt(0).toString()
      if (!(font[charCode])) {
        console.log('no kye', charCode, font[charCode])
        console.log(font)
        return
      }
      const letter = font[charCode]
      console.log(s, letter);

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
    console.log('buffer initialized', buffer);

    return buffer;
};

const Display = (props: {str: string, font: any}) => {
  const [buffer, setBuffer] = useState(generateBuffer(props.str, props.font))
  useEffect(() => {
    setBuffer(generateBuffer(props.str, props.font))
  }, [props]);

  return (
    <div className="Board" style={boardStyle}>
        <Line buffer={buffer[9]} />
        <Line buffer={buffer[8]} />
        <Line buffer={buffer[7]} />
        <Line buffer={buffer[6]} />
        <Line buffer={buffer[5]} />
        <Line buffer={buffer[4]} />
        <Line buffer={buffer[3]} />
        <Line buffer={buffer[2]} />
        <Line buffer={buffer[1]} />
        <Line buffer={buffer[0]} />
    </div>
  );
}

export default Display;
// vim: set expandtab ts=2 sts=2 sw=2 :

