import React from 'react';
import { Canvas, Dom } from 'react-three-fiber';
import { Physics } from 'use-cannon';
import PlaneMesh from '../meshes/plane-mesh';
import BoxMesh from '../meshes/box-mesh';
import styled from 'styled-components';
import ParticlesMesh from '../meshes/particles-mesh';
import SliderUi from '../ui/slider-ui';
export default function DataVisCanvas() {
  return (
    <Canvas concurrent shadowMap camera={{ position: [0, 5, 5], fov: 90 }}>
      <BoxMesh />
      <ParticlesMesh count={20000} />
    </Canvas>
  );
}
