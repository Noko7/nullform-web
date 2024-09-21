"use client"
import styles from './page.module.scss';
import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, useScroll } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Description from '../components/Description';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';
import Statue from '../components/Statue';
import dynamic from 'next/dynamic';
import TextSelect from '../components/TextSelect/Canvas';
import CardStack from '../components/CardStack';
import { projects } from './projectData.js';
import Lenis from 'lenis';
import Services from '../components/services';
import Sphere from '../components/sphere';
import TypingEffect from '@/components/TypingEffect';
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  const Scene = dynamic(() => import('../components/Donut/index'), {
    ssr: false,
  });

  return (
    <>
      <main className={styles.main} ref={containerRef}>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>

        <div className={styles.heroContainer}>
        <h1>NULLFORM</h1>
        {/* <TypingEffect/> */}
          <div className={styles.statueContainer}>
            <Statue /> {/* Position statue below the BLACKGRID text */}
          </div>
        
        </div>

        <Description />
        <Projects />
        <SlidingImages />
        <div className={styles.sphereContainer}>
          <Services />
          <Sphere />
        </div>
        <TextSelect />
        

        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <CardStack
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </>
  );
}
