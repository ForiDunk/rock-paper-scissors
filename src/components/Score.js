import React from 'react';
import '../styles/Score.css';

const Score = (props) => (
  <div>
    <h3 className="score">Score: {props.score}</h3>
  </div>
);

export default Score;