import React, { useRef } from 'react'
import styles from './styles.module.scss'
import gsap from 'gsap';
import { useScroll, useTransform, motion } from 'framer-motion';
export default function Index({primary, secondary}) {


    const plane = useRef(null);
    const maxRotate = 45;
  
    const manageMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      const perspective = window.innerWidth * 4;
      const rotateX = maxRotate * x - maxRotate / 2;
      const rotateY = (maxRotate * y - maxRotate / 2) * -1;
      plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
    };
  
  
  
      const container = useRef(null);
      const { scrollYProgress } = useScroll({
          target: container,
          offset: ["start end", "end start"]
      })
  
      const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
      const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
      const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])
  
  






    const text1 = useRef(null);
    const text2 = useRef(null);
    
    return (
        <>
        <div className={styles.textContainer}>
            <p className={styles.primary} ref={text1}>{primary}</p>
 
            <p className={styles.secondary} ref={text2}>{secondary}</p>
 
        </div>

<div>
    
</div>

</>
    )
}
