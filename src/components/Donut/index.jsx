
import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei';
export default function Index() {
  return (
    <Canvas style={{background: 'rgba(217, 217, 217, 1)'}}>
        <Model />
        <directionalLight intensity={2} position={[0, 2, 3]}/>
        <Environment preset='studio'/> 
        <OrbitControls
  enableZoom={false}       
  enablePan={true}         
  enableRotate={true}      
  maxPolarAngle={Math.PI / 2}  
  minDistance={2}         
  maxDistance={5}         
/>
    </Canvas>
  )
}
