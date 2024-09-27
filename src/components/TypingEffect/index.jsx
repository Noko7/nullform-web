'use client';

import { useEffect, useState } from 'react';
import styles from './styles.module.scss'; 

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
        clearInterval(typingInterval); 
        setIsBlinking(true); 
      }
    }, 200); 

    return () => clearInterval(typingInterval); 
  }, []);

  return (
    <h1 className={styles.typingEffect}>
      {displayedText}
      <span className={isBlinking ? styles.blink : ''}>.</span> 
    </h1>
  );
};

export default TypingEffect;
