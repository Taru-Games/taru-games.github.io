import React from 'react';

const GameCard = ({ title, description, imgsrc }) => (
  <div classname="game-card">
    <img src={imgsrc} alt={`${title} cover`} width="200" />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default GameCard