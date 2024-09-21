import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import AnimatedModel from './AnimatedModel';

const Index = () => {
  const sceneRef = useRef();
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ['start end', 'end ']
  });

  return (
    <div ref={sceneRef} style={{ height: '100vh', width:'100%', zIndex: 10, }}> {/* Make sure the parent has a significant height to enable scrolling */}
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
        <AnimatedModel path='./3D/TERRA.glb' scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
};

export default Index;
