import React from 'react';
import { useBox } from 'use-cannon'

export default function BoxMesh(props) {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 5], ...props }))

  return (
    <mesh ref={ref} >
      <boxBufferGeometry attach="geometry" />
      <meshPhongMaterial attach="material" color="#172017" />y
    </mesh>
  )
}