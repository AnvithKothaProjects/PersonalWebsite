import React from 'react'
import { useBox } from '@react-three/cannon'
import * as THREE from 'three'

export default function Plane({ size, position }) {
  const [ref] = useBox(() => ({ args: [...size, -0.001], rotation: [Math.PI / 2, 0, 0], friction: 100, position: position}))
  return (
    <mesh ref={ref}>
      <planeGeometry args={size} />
      <meshStandardMaterial color="#379683" side={THREE.DoubleSide} />
    </mesh>
  )
}
