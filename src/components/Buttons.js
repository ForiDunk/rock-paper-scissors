import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

 const Buttons = (props) => (
  <div>
    <ButtonGroup bsSize="large">
      <Button bsStyle="danger" onClick={props.onClick}>Rock</Button>
      <Button bsStyle="danger" onClick={props.onClick}>Paper</Button>
      <Button bsStyle="danger" onClick={props.onClick}>Scissors</Button>
    </ButtonGroup>
  </div>
);

export default Buttons;