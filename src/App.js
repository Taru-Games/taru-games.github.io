import React from 'react';
import './App.css';

import Header from './components/Header.js';
import Content from './components/Content.js';
import {Contact, Address} from './components/Contact.js';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='top'>
        <p>AI-synthesized human data for game developers to drive player engagement!</p>
      </div>
      <main>
        <Content />
        <Address />
      </main>
    </div>
  );
}

export default App;
