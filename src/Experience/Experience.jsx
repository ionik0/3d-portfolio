import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from './scene.jsx'

const Experience = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Scene />
    </Canvas>
  )
}

export default Experience
