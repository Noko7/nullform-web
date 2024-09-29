import styles from './styles.module.scss'
import Text3d from './index'
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Rounded from '../../common/RoundedButton/Index'

export default function Canvas() {

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



  return (
    <>
    <div onMouseMove={manageMouseMove} className={styles.container}>

<div className={styles.logo}>
  <p>© NULLFORM TEMPLATES</p>
</div>



      <div ref={plane} className={styles.body}>
        <Text3d primary={"GET SH!T DONE"} secondary={"/Templates"} />
      </div>      
      
      <div className={styles.subText}>
        <p>Simple, Quick, Easy Web Design Templates</p>

        <div className={styles.buttonWrapper}>
          <Rounded className={styles.button}>
            <p>Learn More</p>
          </Rounded>
        </div>

      </div>

      <div ref={container} className={styles.slidingImages}>

 
</div>
{/* <motion.div style={{height}} className={styles.circleContainer}>
<div className={styles.circle}></div>
</motion.div> */}
    </div>

</>
  );
}
