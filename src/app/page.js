"use client";

import dynamic from 'next/dynamic';
import styles from './page.module.scss';
import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, useScroll } from 'framer-motion';
import Preloader from '../components/Preloader';
import { projects } from './projectData.js';
import Lenis from 'lenis';
import Image from 'next/image';
import { data } from '../components/ProjectScale/data';

const FloatingModel = dynamic(() => import('../components/FloatingShapes'), { ssr: false });
const Description = dynamic(() => import('../components/Description'), { ssr: false });
const Projects = dynamic(() => import('../components/Projects'), { ssr: false });
const Contact = dynamic(() => import('../components/Contact'), { ssr: false });
const Services = dynamic(() => import('../components/services'), { ssr: false });
const Sphere = dynamic(() => import('../components/sphere'), { ssr: false });
const TypingEffect = dynamic(() => import('@/components/TypingEffect'), { ssr: false });
const MovingText = dynamic(() => import('@/components/SlidingText'), { ssr: false });
const CircleEffect = dynamic(() => import('../components/CircleEffect'), { ssr: false });
const CardStack = dynamic(() => import('../components/CardStack'), { ssr: false });
const Character = dynamic(() => import('../components/TextAppearChar/Character'), { ssr: false });
const SlidingImages = dynamic(() => import('../components/SlidingImages'), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = new Lenis();
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
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

  const paragraph = "We are aguerilla force guerilla forcein the world of in the world ofidentity and design identity and designwe work at the intersection of we work at the intersection ofdesign and technology to deliver unique digital experiences like no other design and technology to deliver unique digital experiences like no other";

  return (
    <>
      <main className={styles.main} ref={containerRef}>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>

        <div className={styles.heroContainer}>
          <div className={styles.overlay}></div>

          <FloatingModel className={styles.floatingModel} />

          <div className={styles.content}>
            <h1 className={styles.heroText}>
              <img src='/Logo.png' className={styles.heroLogo} />
              nullform.
            </h1>

            <h2 className={styles.subHeroText}>
              Digital Consultancy <br /> + Creative Design Studio
            </h2>
          </div>
        </div>

        <Description />
      </main>

      <Projects />

      <SlidingImages />

      <Contact />
    </>
  );
}
