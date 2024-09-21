import styles from './styles.module.scss'
import Text3d from './index'
import { useRef, useEffect } from 'react';

export default function Canvas() {

  const plane = useRef(null);
  const maxRotate = 45;

  const manageMouseMove = (e) => {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2; 
    const rotateY = (maxRotate * y - maxRotate / 2) * - 1;
    plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
  }

  return (
    <div onMouseMove={(e) => {manageMouseMove(e)}} className={styles.container}>
      <div ref={plane} className={styles.body}>
        <Text3d primary={"Monthly"} secondary={"Daily"}/>
        <Text3d primary={"Plans"} secondary={"Plans"}/>
        <Text3d primary={"Designed"} secondary={"Developed"}/>
        <Text3d primary={"To Your Business"} secondary={"Your clients"}/>
        
      </div>
    </div>
  )
}
