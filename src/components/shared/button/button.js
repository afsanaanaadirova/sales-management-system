import * as React from 'react';
import "./button.css"

export default function ButtonComponent(props) {
  return (
      <button onClick={props.onClick} variant="contained" className='button-component button-component--add'>{props.children}</button>
  );
}
