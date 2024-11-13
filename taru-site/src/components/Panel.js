import React from 'react';
import './Panel.css';

const Panel = ({ children, color, angle }) => (
  <div className="panel" style={{ backgroundColor: color, transform: `rotate(${angle}deg) translate(400px) rotate(-${angle}deg)` }}>
    {children}
  </div>
);


export default Panel;
