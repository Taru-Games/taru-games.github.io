import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Games from './pages/Games';
import Contact from './pages/Contact';
import Panel from './components/Panel';
import CampfireScene from './components/CampfireScene';


// import './styles.css';

const App = () => {
  return (
  <CampfireScene>
    <Home />
    <About />
    <Panel color="#2ecc71">Panel 3</Panel>
    <Panel color="#9b59b6">Panel 4</Panel>
  </CampfireScene>
  );
};

export default App;

var bruh = (  <div className="App">
  <Navbar />
  <section id="home">
    <Home />
  </section>
  <section id="about">
    <About />
  </section>
  <section id="games">
    <Games />
  </section>
  <section id="contact">
    <Contact />
  </section>
  <Footer />
</div>
)