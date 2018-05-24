import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import '../styles/Message.css';

const Message = (props) => (
  <div className="message-container">
    <p><Glyphicon glyph="user" /> Player Selected: <strong> {props.playerSelected} </strong></p>
    <p><Glyphicon glyph="barcode" /> Computer Selected: <strong> {props.computerSelected} </strong></p>
    <p className="message">{props.message}</p>
  </div>
);

export default Message;