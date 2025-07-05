import React, { Suspense } from 'react'
import Room from './models/Iso_room.jsx'

const Scene = () => {
  return (
    <Suspense fallback={null}>
      <ambientLight />
      <hemisphereLight/>
      <Room />
    </Suspense>
  )
}

export default Scene