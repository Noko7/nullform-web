import React from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';



const ThreeCanvas = ({children}) => {
  return (
    <Canvas
    camera={{position: [0,0,10], fov: 50}}
    style={{height: '100vh', width: '100%'}}
    >
        <ambientLight intensity={1}/>
        <directionalLight position={[5,5,5]}/>
        <OrbitControls/>
        {children}

    </Canvas>
  )
}

export default ThreeCanvas