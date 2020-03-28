import React from 'react';
import { usePlane } from 'use-cannon';

export default function PlanMesh(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh ref={ref}>
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshPhongMaterial attach='material' color='#172017' />
    </mesh>
  );
}
