import React from 'react';
import { Canvas } from 'react-three-fiber'
import { Physics } from 'use-cannon'
import PlaneMesh from "../meshes/plane-mesh"
import BoxMesh from "../meshes/box-mesh"
export default function DataVisCanvas() {
  return (
    <Canvas camera={{ position: [0, 5, 12], fov: 50 }} >
      <pointLight position={[-10, -10, -10]} />
      <ambientLight intensity={0.5} />
      <Physics>
        <PlaneMesh />
        <BoxMesh />
      </Physics>
    </Canvas>
  )
};