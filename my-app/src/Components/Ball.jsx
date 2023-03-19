import { useSphere } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import React, { useMemo, useState, useEffect, useRef } from 'react'

export default function Ball({ position, color, radius, paused, passed }) {
  const [ref, api] = useSphere(() => ({ mass: 1, args: [radius], position, friction: 1 ,type: "Dynamic", linearDamping: .8}));
  const pos = useRef([0,0,0]);

  const useBallControls = () => {
    const keys = {
      KeyW: 'forward',
      KeyS: 'backward',
      KeyA: 'left',
      KeyD: 'right'
    }
  
    const moveFieldByKey = (key) => keys[key]
  
    const [movement, setMovement] = useState({
      forward: false,
      backward: false,
      left: false,
      right: false,
    })
  
    useEffect(() => {
      const handleKeyDown = (e) => {
        setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }))
      }
      const handleKeyUp = (e) => {
        setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }))
      }
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('keyup', handleKeyUp)
      api.position.subscribe(v => pos.current = v);

      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('keyup', handleKeyUp)
      }
    }, [])

    return movement
  }

  const { forward, backward, left, right } = useBallControls();

  useFrame(() => {
    // Calculating front/side movement ...
    let accelRight = right ? .1 : 0;
    let accelLeft = left ? .1 : 0;
    let accelIn = forward ? .1 : 0;
    let accelOut = backward ? .1 : 0;

    if (!paused) api.applyImpulse([accelLeft-accelRight, 0, accelIn-accelOut], [0, 0, 0]);
    passed(pos);
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}