import * as React from 'react';
import "./button.css"

export default function ButtonSecondaryComponent(props) {
  return (
      <button onClick={props.onClick} variant="contained" className='button-component button-component--add'>{props.children}</button>
  );
}
