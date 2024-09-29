"use client";
import Smile from '../components/components/smile';
import styles from './page.module.scss';
import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, useScroll, motion } from 'framer-motion';
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
import MovingText from '@/components/SlidingText';
import CircleEffect from '../components/CircleEffect';
import Image from 'next/image';
import { data } from '../components/ProjectScale/data'
import Double from '../components/ProjectScale/index';
import FloatingModel from '../components/FloatingShapes'
 import Character from '../components/TextAppearChar/Character';
 

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


  const paragraph = "We are aguerilla force guerilla forcein the world of in the world ofidentity and design identity and designwe work at the intersection of we work at the intersection ofdesign and technology to deliver unique digital experiences like no other design and technology to deliver unique digital experiences like no other"


  return (
    <>
      <main className={styles.main} ref={containerRef}>
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>

<div className={styles.heroContainer}>
        <div className={styles.overlay}></div>

        <FloatingModel className={styles.floatingModel}/>

<div className={styles.content}>
<h1 className={styles.heroText}>
  <img src='/Logo.png'  className={styles.heroLogo}/>
  nullform.
</h1>

<h2 className={styles.subHeroText}>
      Digital Consultancy <br /> + Creative Design Studio
    </h2>

</div>

        </div>
        <Description />
        </main>
   


          
         
          {/* <div className={styles.projectScale} > 
          <div className={styles.headerText}>
                    <img className={styles.downArrow} src='/assets/icons/Down.svg'/>
                    <h1>featured</h1>
                </div>
        <Double projects={[data[0], data[1]]}/>
        <Double projects={[data[2], data[3]]} reversed={true}/>
        </div> */}
          <Projects />
          {/* <Double projects={[data[0], data[1]]}/>
          <Double projects={[data[2], data[3]]} reversed={true}/> */}
   
        <SlidingImages />

         {/* <div className={styles.sphereContainer}>
    
          <Services />
          <Sphere />
        </div>   */}

<Contact/>



    </>
  );
}
