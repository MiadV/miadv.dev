import React from 'react';
import { PerspectiveCamera, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Leva, folder, useControls } from 'leva';
import { __DEV__ } from '@/utils/assertions';
import { Avatar } from './Avatar';

export default function AvatarCanvas() {
  const { showStats } = useControls(
    'Stats',
    {
      showStats: false,
    },
    { collapsed: true }
  );

  const { cameraX, cameraY, cameraZ, fov } = useControls(
    'Camera',
    {
      cameraX: { value: 0, step: 0.01 },
      cameraY: { value: 0.58, step: 0.01 },
      cameraZ: { value: 1.58, step: 0.01 },
      fov: { value: 15, step: 1 },
    },
    { collapsed: true }
  );

  const { avatarScale, avatarX, avatarY, avatarZ } = useControls(
    'Avatar',
    {
      avatarX: { value: 0, step: 0.1 },
      avatarY: { value: 0, step: 0.1 },
      avatarZ: { value: 0, step: 0.1 },
      avatarScale: { value: 1, step: 0.1 },
    },
    { collapsed: true }
  );

  const {
    color,
    intensity,
    colorA,
    intensityA,
    lightAX,
    lightAY,
    lightAZ,
    colorB,
    intensityB,
    lightBX,
    lightBY,
    lightBZ,
  } = useControls(
    'Lighting',
    {
      'Ambient Light': folder({
        color: '#ffffff',
        intensity: { value: 1.35, step: 0.05 },
      }),
      'Dir Light A': folder({
        colorA: '#a0a7ff',
        intensityA: { value: 1.4, step: 0.1 },
        lightAX: { value: 10, step: 0.5 },
        lightAY: { value: 8, step: 0.5 },
        lightAZ: { value: 3, step: 0.5 },
      }),
      'Dir Light B': folder({
        colorB: '#e4a5ee',
        intensityB: { value: 0.2, step: 0.1 },
        lightBX: { value: -10, step: 0.5 },
        lightBY: { value: -10, step: 0.5 },
        lightBZ: { value: -10, step: 0.5 },
      }),
    },
    { collapsed: true }
  );

  return (
    <div id="canvas-container" className="relative h-full w-full">
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={[cameraX, cameraY, cameraZ]}
          fov={fov}
        />
        <ambientLight intensity={intensity} color={color} />
        <directionalLight
          color={colorA}
          intensity={intensityA}
          position={[lightAX, lightAY, lightAZ]}
        />
        <directionalLight
          color={colorB}
          intensity={intensityB}
          position={[lightBX, lightBY, lightBZ]}
        />
        <Avatar position={[avatarX, avatarY, avatarZ]} scale={avatarScale} />
      </Canvas>

      {showStats && <Stats showPanel={0} />}
      <Leva collapsed hidden={!__DEV__} />
    </div>
  );
}
