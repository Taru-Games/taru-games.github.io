import React from 'react';
import GameCard from '../components/GameCard';
import GameCard1 from '../components/GameCard1';
import sbTitle from '../img/sbTitle.png'

const Games = () => (
  <div className="games">
    <h1>Our Games</h1>

    <GameCard title="Space Buckaroo" description="Experience the space frontier firsthand" imgSrc={sbTitle} />
    <GameCard1 title="Mystic Realms" description="A magical journey through enchanted lands." imgSrc="mystic.jpg" />
    <GameCard title="Skybound Saga" description="Soar through the skies in a world of floating islands." imgSrc="skybound.jpg" />
  </div>
);

export default Games;
