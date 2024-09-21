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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <p ref={container} className={styles.paragraph}>
      {paragraph.map((item, i) => {
        const start = i / paragraph.length;
        const end = start + (1 / paragraph.length);
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            isHighlighted={item.isHighlighted}
            x={x}
            y={y}
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          >
            {item.text}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range, isHighlighted, x, y, isHovered, setIsHovered }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  // Mask size adjustment
  const size = isHovered ? 400 : 40;

  return (
    <span 
      className={`${styles.word} ${isHighlighted ? styles.highlighted : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={styles.shadow}>{children}</span>
      <motion.span 
        className={styles.mask}
        style={{
          opacity: opacity,
          WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        {children}
      </motion.span>
    </span>
  );
}
