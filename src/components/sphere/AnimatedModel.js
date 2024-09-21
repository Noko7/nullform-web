import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useScroll } from 'framer-motion';

const AnimatedModel = ({ path }) => {
  const { scene } = useGLTF(path);
  const modelRef = useRef();

  const { scrollYProgress } = useScroll();

  return (
    <motion.group
    style={{height: '90%'}}
      ref={modelRef}
      scale={5}
      rotation-y={scrollYProgress}
      initial={{ scale: 0.5 }}
      animate={{ scale: 2.9 }}
      transition={{ duration: 1 }} >
      <primitive object={scene} />
    </motion.group>
  );
};

export default AnimatedModel;
