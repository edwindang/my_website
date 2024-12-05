import React from 'react'

import { ButtonBack, ButtonFront } from './index'

const Button = (props) => (
  <ButtonBack>
    <ButtonFront onClick={props.onClick}>
      {props.children}
    </ButtonFront>
  </ButtonBack>
);

// Test this component
<Button onClick={() => console.log("Button clicked!")}>Click Me</Button>

/*const Button = (props) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled}>{props.children}</ButtonFront>
  </ButtonBack>
);
*/

export default Button
