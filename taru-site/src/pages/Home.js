import React from 'react';
import GameCard from '../components/GameCard';

const Home = () => (
  <div className="home">
    <h1>Welcome to Taru Games</h1>
    <p>Your journey into immersive gaming starts here.</p>
    <div className="featured-games">
      <GameCard title="Adventure Quest" description="An epic RPG adventure." imgSrc="adventure.jpg" />
      <GameCard title="Mystic Realms" description="A magical journey through enchanted lands." imgSrc="mystic.jpg" />
    </div>
  </div>
);

export default Home;