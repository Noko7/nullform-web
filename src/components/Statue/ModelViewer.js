'use client';
import {useEffect} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { motion } from 'framer-motion';

function Model({ mouse }) {
  const { scene } = useGLTF('./3d/statue.glb');
  const modelRef = useRef();

  useFrame(({ clock }) => {
    if (modelRef.current) {
      const elapsed = clock.getElapsedTime();
      modelRef.current.position.y = Math.sin(elapsed * 2) * 0.05 - 1;
      modelRef.current.rotation.x += (-mouse.current.y * 0.5 - modelRef.current.rotation.x) * 0.1;
      modelRef.current.rotation.y += (mouse.current.x * 0.5 - modelRef.current.rotation.y) * 0.1;
    }
  });

  return (
    <motion.primitive
      object={scene}
      ref={modelRef}
      scale={0.7}
      position={[0, -5, 0]} 
      initial={{ y: -5 }} 
      animate={{ y: -1 }} 
      transition={{ duration: 1, delay: 0.5 }}
      receiveShadow 
      castShadow 
    />
  );
}

export default function ModelViewer() {
  const mouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <directionalLight
        intensity={2}
        position={[0, 6, 5]}
        castShadow
        shadow-mapSize={{ width: 1024, height: 1024 }}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />
      <Suspense fallback={null}>
        <Model mouse={mouse} />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}


useGLTF.preload('./3d/statue.glb');
