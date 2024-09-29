'use client';
import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';
import { useMotionValue, useSpring } from 'framer-motion';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

export default function Index() {
  
  const pngTexture = useLoader(THREE.TextureLoader, '/purple.png'); // Update with the correct path to your PNG file

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 75, damping: 100, mass: 10 }),
    y: useSpring(mouse.y, { stiffness: 75, damping: 100, mass: 10 }),
  };

  // Mouse movement handler
  const manageMouse = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener('mousemove', manageMouse);
    return () => window.removeEventListener('mousemove', manageMouse);
  }, []);

  return (
    <Canvas
      style={{ background: '#e0e0e2' }}
      orthographic
      camera={{ position: [0, 0, 200], zoom: 10 }}
    >
      
      <ambientLight intensity={6.5} castShadow color='#6F47C5' 
      
      
      />
      
      
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow 
      />

      
      <Model mouse={smoothMouse} />

      
      <mesh>
        <primitive attach="background" object={pngTexture} />
      </mesh>
    </Canvas>
  );
}