import React, { useState, useEffect, useRef } from 'react';
import './HorizontalScroll.css';

const HorizontalScroll = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const scrollToPanel = (index) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: index * window.innerWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, children.length - 1));
    } else if (event.key === 'ArrowLeft') {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  useEffect(() => {
    scrollToPanel(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="horizontal-scroll" ref={containerRef}>
      {children}
    </div>
  );
};

export default HorizontalScroll;
