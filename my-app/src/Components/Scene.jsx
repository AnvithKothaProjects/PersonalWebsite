import React, { useRef, useState, Suspense } from 'react';
import Box from './Box';
import Plane from './Plane';
import Ball from './Ball';
import Model from './Model';
import Image from './Image';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Physics, useBox, useSphere } from '@react-three/cannon';

function Scene(props) {
    var list = [];

    return (
        <Canvas onCreated={({ gl }) => gl.setClearColor('lightblue')}
        camera={{ position: [0, 8, -5.5], rotation: [Math.PI/3.5 ,Math.PI,0]}}>
            <Suspense fallback={null}>
                <Physics  gravity={[0, -20, 0]} 
                defaultContactMaterial={{ friction: 100 }}>
                    <Plane size={[25,10]} position={[0,0,0]}></Plane>
                    <Ball position={[0,5,0]} color={'#edf5e1'} radius={.5} paused={props.paused} passed={props.passed}></Ball>
                </Physics>
                <Image position={[-5,.1,0]} rotation={[Math.PI/2,Math.PI,0]} size={[2,2,2]}/>
                <Image position={[5,.1,0]} rotation={[Math.PI/2,Math.PI,0]} size={[2,2,2]}/>
            </Suspense>
            <ambientLight intensity={0.5} />
            {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={.1}/> */}
            <pointLight position={[-10, -10, -10]} />
        </Canvas>
    )
}

{/* <Canvas onCreated={({ gl }) => gl.setClearColor('lightblue')}
        camera={{ position: [0, 0, 5], rotation: [0, Math.PI, 0]}}>
            <Suspense fallback={null}>
                <Image position={[-1,0.4,-1]} rotation={[0, Math.PI, 0]}/>
            </Suspense>
        </Canvas> */}

{/* <Canvas onCreated={({ gl }) => gl.setClearColor('lightblue')}
        camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
            <Image position={[-1,1,-1]} rotation={[Math.PI/2, 0, 0]}/>
            </Suspense>
        </Canvas> */}

<Canvas onCreated={({ gl }) => gl.setClearColor('lightblue')}
        camera={{ position: [0, 8, -5.5], rotation: [Math.PI/3.5 ,Math.PI,0]}}>
            <Suspense fallback={null}>
                <Physics  gravity={[0, -20, 0]} 
                defaultContactMaterial={{ friction: 100 }}>
                    <Plane size={[25,10]} position={[0,0,0]}></Plane>
                    <Ball position={[0,5,0]} color={'#edf5e1'} radius={.5}></Ball>
                </Physics>
                <Image position={[0,.1,0]} rotation={[0,0,0]}/>
            </Suspense>
            <ambientLight intensity={0.5} />
            {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={.1}/> */}
            <pointLight position={[-10, -10, -10]} />
        </Canvas>

export default Scene;