

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={styles.container}>
      <h1 style={styles.text}>Taru Games is working hard to bring the next generation of automated playtesting to your games!</h1>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
    color: 'white',
    margin: 0,
  },
  text: {
    fontSize: '3rem',
    fontFamily: 'Arial, sans-serif',
  },
};

export default App;
