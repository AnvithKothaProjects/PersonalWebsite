import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Physics, useBox, useSphere } from '@react-three/cannon';

function Box(props) {
    const mesh = useRef();
    // const [ref, api] = useBox(() => ({ }))
    useFrame(state => {
        
    })
  
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={[1, 1, 1]}>
        <boxBufferGeometry args={props.dimensions} />
        <meshStandardMaterial color={props.color} />
      </mesh>
    )
}

export default Box;