import React, { Suspense } from 'react'
import DarkRoomFirst from './models/Dark_room_first.jsx'
import DarkRoomSecond from './models/Dark_room_second.jsx' 
import DarkRoomThird from './models/Dark_room_third.jsx'
import DarkRoomFourth from './models/Dark_room_fourth.jsx'
import { useFrame } from '@react-three/fiber'
import Room from './models/Iso_room.jsx'

const Scene = ({camera}) => {
useFrame(() => { 
  console.log(camera.current.position);
  console.log(camera.current.rotation);


});


  return (
    <Suspense >
      <DarkRoomFirst />
      <DarkRoomSecond />
      <DarkRoomThird />
      <DarkRoomFourth />
      
      <ambientLight />
      <hemisphereLight/>
      <Room />
    </Suspense>
  )
}

export default Scene