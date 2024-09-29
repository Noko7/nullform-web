import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';
import styles from './styles.module.scss';
import useMousePosition from '../../app/utils/useMousePosition';

export default function Paragraph({ paragraph }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  });
  const { x, y } = useMousePosition(); // For tracking the mouse position

  return (
    <p ref={container} className={styles.paragraph}>
      {paragraph.map((item, i) => {
        const start = i / paragraph.length;
        const end = start + (1 / paragraph.length);
        const words = item.text.split(" ");

        return (
          <span key={i} className={item.isHighlighted ? styles.highlight : ''}>
            {words.map((word, j) => (
              <Word
                key={`${i}-${j}`}
                progress={scrollYProgress}
                range={[start, end]}
                wordIndex={j}
                totalWords={words.length}
                isHighlighted={item.isHighlighted}
                x={x}
                y={y}
              >
                {word}
              </Word>
            ))}
          </span>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range, wordIndex, totalWords, isHighlighted, x, y }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  // Mask size adjustment for hover
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 400 : 40;

  // Adjust position for each word within its range
  const start = range[0] + (wordIndex / totalWords) * (range[1] - range[0]);
  const end = range[0] + ((wordIndex + 1) / totalWords) * (range[1] - range[0]);

  return (
    <motion.span
      className={`${styles.word} ${isHighlighted ? styles.highlight : ''}`}
      style={{
        opacity: useTransform(progress, [start, end], [0, 1]),
        WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
        WebkitMaskSize: `${size}px`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </motion.span>
  );
};
