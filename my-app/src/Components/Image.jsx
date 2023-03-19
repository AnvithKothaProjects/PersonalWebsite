import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber';
import img from '../Assets/square.png';

function Image({position, rotation, size}) {
    const texture = useLoader(THREE.TextureLoader, img)
    return (
      <mesh position={position} rotation={rotation}>
        <planeBufferGeometry attach="geometry" args={[size[0], size[1], size[2]]} />
        <meshBasicMaterial attach="material" map={texture} toneMapped={false} transparent={true} opacity={0.5}/>
      </mesh>
    )
}

export default Image;