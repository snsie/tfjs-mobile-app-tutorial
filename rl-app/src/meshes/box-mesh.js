import * as THREE from 'three';
import React, { useRef } from 'react';
import { useBox } from 'use-cannon';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { MeshBasicMaterial } from 'three';

export default function BoxMesh() {
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));
  const bind = useDrag(({ down, movement: [mx, my] }) => {
    set({ x: down ? mx : 0, y: down ? my : 0 });
  });
  //const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 5] }));
  console.log('hello');
  return (
    <group>
      <pointLight position={[0, 10, 10]} />
      <ambientLight intensity={0.5} />
      <mesh>
        <boxBufferGeometry attach='geometry' />
        <meshLambertMaterial attach='material' color='#0df2c9' />
      </mesh>
    </group>
  );
}
