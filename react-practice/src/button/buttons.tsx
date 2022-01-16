import React from 'react'

const buttonsStyle = {
  margin: '5px auto',
  width: 300,
  backgroundColor: '#333',
  textAlign: 'center' as 'center',
};

const buttonStyle = {
  width: 80,
  margin: 5,
  fontSize: 25,
  fontWeight: 'bold',
  color: 'White',
  textShadow: '1px 1px 1px #333',
  backgroundColor: 'LightGray',
};
const functionButtonStyle = {
  ...buttonStyle,
  backgroundColor: 'DimGray',
};

const Buttons = (props: any) => {
  console.log('Buttons', props);
  
  return (
    <div className="Buttons" style={buttonsStyle}>
        <input type="button" style={buttonStyle} value="7" onClick={() => props.dispatch('7')} />
        <input type="button" style={buttonStyle} value="8" onClick={() => props.dispatch('8')} />
        <input type="button" style={buttonStyle} value="9" onClick={() => props.dispatch('9')} />

        <input type="button" style={buttonStyle} value="4" onClick={() => props.dispatch('4')} />
        <input type="button" style={buttonStyle} value="5" onClick={() => props.dispatch('5')} />
        <input type="button" style={buttonStyle} value="6" onClick={() => props.dispatch('6')} />

        <input type="button" style={buttonStyle} value="1" onClick={() => props.dispatch('1')} />
        <input type="button" style={buttonStyle} value="2" onClick={() => props.dispatch('2')} />
        <input type="button" style={buttonStyle} value="3" onClick={() => props.dispatch('3')} />

        <input type="button" style={buttonStyle} value="0" onClick={() => props.dispatch('0')} />
        <input type="button" style={buttonStyle} value="." onClick={() => props.dispatch('.')} />
        <input type="button" style={functionButtonStyle} value="+" onClick={() => props.dispatch('+')} />
        <input type="button" style={functionButtonStyle} value="=" onClick={() => props.dispatch('=')} />
    </div>
  );
}

export default Buttons;
// vim: set expandtab ts=2 sts=2 sw=2 :


