import React, { useState, useEffect } from 'react';

const ScrollButton = ({ parentRef }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    if (window.pageYOffset > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const scrollDown = () => {
    window.scrollTo({
      top: window.pageYOffset + window.innerHeight - 100,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div ref={parentRef} className="scroll-button-wrapper" data-testid="scroll-button-wrapper">
      {isVisible && (
        <button onClick={scrollDown} className="scroll-button" data-testid="scroll-button">
    <i class="fa-solid fa-chevron-down"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollButton;
