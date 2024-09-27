import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './styles.module.scss';

export default function Paragraph({ paragraph }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  });

  return (
    <p ref={container} className={styles.giantText}>
      {paragraph.map((item, i) => {
        const start = i / paragraph.length;
        const end = start + (1 / paragraph.length);
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            isHighlighted={item.isHighlighted}
          >
            {item.text}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({ children, progress, range, isHighlighted }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={`${styles.word} ${isHighlighted ? styles.highlighted : ''}`}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
}
