import React from 'react';
import GameCard from '../components/GameCard';

const Games = () => (
  <div className="games">
    <h1>Our Games</h1>
    <GameCard title="Adventure Quest" description="An epic RPG adventure." imgSrc="adventure.jpg" />
    <GameCard title="Mystic Realms" description="A magical journey through enchanted lands." imgSrc="mystic.jpg" />
    <GameCard title="Skybound Saga" description="Soar through the skies in a world of floating islands." imgSrc="skybound.jpg" />
  </div>
);

export default Games;
