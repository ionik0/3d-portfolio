import React, { useRef } from "react";
import Scene from "./scene.jsx";
import { Canvas, useFrame } from "@react-three/fiber";

import { OrbitControls, OrthographicCamera } from "@react-three/drei";

const Experience = () => {

  const cameraRef = React.useRef()

  useFrame(() => {
    console.log(cameraRef.current.position);
    console.log(cameraRef.current.rotation);


  });

  return (
    <Canvas>
      <OrthographicCamera
        ref={cameraRef}
        makeDefault
        position={[0, 0, 10]}
        rotation={[0, 0, 0]}
        zoom={50}
      />
      /* <OrbitControls /> */
      <Scene camera={cameraRef} />
    </Canvas>
  )
}

export default Experience
