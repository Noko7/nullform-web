'use client';

import { useEffect, useState } from 'react';
import styles from './styles.module.scss'; // Adjust the path as needed

const TypingEffect = () => {
  const fullText = "BLACKGRID.";
  const [displayedText, setDisplayedText] = useState('');
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingInterval); // Clear the interval using the ID
        setIsBlinking(true); 
      }
    }, 200); // Typing speed (milliseconds)

    return () => clearInterval(typingInterval); // Cleanup function
  }, []);

  return (
    <h1 className={styles.typingEffect}>
      {displayedText}
      <span className={isBlinking ? styles.blink : ''}>.</span> {/* Blinking period */}
    </h1>
  );
};

export default TypingEffect;
