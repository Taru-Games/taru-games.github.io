import React, { useState } from 'react';
import './CampfireScene.css';

const CampfireScene = ({ children }) => {
  const [angle, setAngle] = useState(0);
  const [activePanelIndex, setActivePanelIndex] = useState(0);

  // Total panels and rotation increment
  const panelCount = React.Children.count(children);
  const angleIncrement = 360 / panelCount
  const panelDistance = 600


  // Rotate panels and update the active panel index
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      setAngle((prevAngle) => prevAngle - angleIncrement);
      setActivePanelIndex((prevIndex) => (prevIndex + 1) % panelCount);
    } else if (event.key === 'ArrowLeft') {
      setAngle((prevAngle) => prevAngle + angleIncrement);
      setActivePanelIndex((prevIndex) => (prevIndex - 1 + panelCount) % panelCount);
    }
  };

  // Attach keydown listener
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="campfire-scene">
      {/* Campfire that adjusts layering */}
      <div className={`campfire ${activePanelIndex === 0 ? 'behind-panel' : 'in-front'}`}></div>

      {/* Rotating panels */}
      <div className="carousel" style={{ transform: `rotateY(${angle}deg)` }}>
        {React.Children.map(children, (child, index) => (
          <div
            className={`panel ${index === activePanelIndex ? 'active' : 'background'}`}
            style={{
              transform: `translate(-50%, -50%) rotateY(${index * angleIncrement}deg) translateZ(${panelDistance}px) `,
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampfireScene;
