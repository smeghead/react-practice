import React, {useState, useEffect } from 'react'
import Line from './line'

const boardStyle = {
  margin: '5px auto',
  width: 130,
  height: 100,
  backgroundColor: 'black',
};


const generateBuffer = (str: string, font: any) => {
    // str = 'ab';
    // const bitmap = ['60', 'A0', 'A0', '60']; // a
    // const bitmap = ['60', '80', '80', '60']; // c
    
    const buffer = ['', '', '', '', '', '', '', '', '', '']
    if (!font) {
        return buffer;
    }
    str.split('').forEach(s => {
        const charCode: string = s.charCodeAt(0).toString()
        if (! (font[charCode])) {
          console.log('no kye', charCode, font[charCode])
          console.log(font)
          return
        }
        const letter = font[charCode]
        // const bitmap = ['80', '80', 'C0', 'A0', 'A0', 'C0'];  // b
        // const bbx = [3, 6, 0, 0]
        // const dwidth = [4, 0]
        console.log(s, letter);

        let i = 0
        for (; i < letter.bbx[3]; i++) {
            buffer[i] += letter.dwidth[0] === 4 ? '0000' : '00000000';
        }
        letter.bitmap.concat().reverse().forEach(dex => {
            // console.log(dex)
            buffer[i++] += parseInt(dex, 16).toString(2).substring(0, letter.dwidth[0] === 4 ? 4 : 8)
            // console.log(buffer)
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

