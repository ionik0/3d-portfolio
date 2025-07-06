import React, { useRef} from "react";
import Scene from "./scene.jsx";
import { Canvas,useFrame } from "@react-three/fiber";

import { OrbitControls, OrthographicCamera } from "@react-three/drei";

const Experience = () => {

const cameraRef = React.useRef()

useFrame(() => { 
  console.log(cameraRef.current.position);
  console.log(cameraRef.current.rotation);


});

  return (
    <Canvas>
      <OrthographicCamera ref={cameraRef} makeDefault position={[-5.091815760151335,
         4.51834729421205, 5.338096715730072]}
         rotation={[-0.8138097686916666, -0.6852967312960734, -0.41947779883392433]} 
         
         
    zoom={120} />
      /* <OrbitControls /> */
      <Scene camera={cameraRef} />
    </Canvas>
  )
}

export default Experience
