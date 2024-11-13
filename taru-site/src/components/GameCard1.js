import React from 'react';
import sbTitle from '../img/sbTitle.png'

const GameCard1 = ({ title, description, imgsrc }) => (
  <div classname="game-card">
    <img src={sbTitle} alt={`${title} cover`} width="200" />
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
)

export default GameCard1