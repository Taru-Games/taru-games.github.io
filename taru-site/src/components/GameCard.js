import React from 'react';

const GameCard = ({ title, description, imgSrc }) => (
  <div className="game-card">
    <img src={imgSrc} alt={`${title} cover`} />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default GameCard;
