import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';
import styles from './styles.module.scss';

export default function Paragraph({ paragraph }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <p ref={container} className={styles.paragraph}>
      {
        paragraph.map((wordObj, i) => {
          const words = wordObj.text.split(" ");
          const start = i / paragraph.length;
          const end = start + (1 / paragraph.length);

          return (
            <span
              key={i}
              className={wordObj.indent ? styles.indent : ""}
            >
              {words.map((word, j) => (
                <Word key={j} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              ))}
            </span>
          );
        })
      }
    </p>
  );
}

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className={styles.word}>
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
