import React ,{ Suspense, useEffect, useState } from "react";
import { Canvas, events } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader'
import * as THREE from 'three';

const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 60, 10]}
        angle={0.12}
        penumbra={2}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
        decay={0}
      />
      <pointLight intensity={2} decay={0}/>
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={ isMobile ? [0,-3, -2.2]:[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
      
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change' , handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change' , handleMediaQueryChange);
    }
  },[])

  return (
    <Canvas 
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
