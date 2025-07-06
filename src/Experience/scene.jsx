import React, { Suspense } from 'react'

import { useFrame } from '@react-three/fiber'
import Room from './models/Iso_room.jsx'

const Scene = ({ camera }) => {
  useFrame(() => {
    console.log(camera.current.position);
    console.log(camera.current.rotation);


  });


  return (
    <Suspense >


      <ambientLight intensity={2} />
      <hemisphereLight intensity={2} />
      <Room />
    </Suspense>
  )
}

export default Scene