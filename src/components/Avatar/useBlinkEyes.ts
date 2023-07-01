import { useEffect } from 'react';
import { SkinnedMeshProps, useFrame } from '@react-three/fiber';
import { Object3D } from 'three';

export interface Nodes {
  [name: string]: Object3D;
}

const blink = [
  {
    morphTarget: 'eyesClosed',
    morphTargetIndex: -1,
    offset: 0,
    duration: 0.2,
  },
  {
    morphTarget: 'eyeSquintLeft',
    morphTargetIndex: -1,
    offset: 0,
    duration: 0.2,
  },
  {
    morphTarget: 'eyeSquintRight',
    morphTargetIndex: -1,
    offset: 0,
    duration: 0.2,
  },
];

let duration = 0;

export default function useBlinkEyes(nodes: Nodes) {
  let headMesh = nodes?.Wolf3D_Avatar as unknown as SkinnedMeshProps;

  useEffect(() => {
    let timeout = setTimeout(setNextBlink, 1000);

    function setNextBlink() {
      duration = 0;

      if (headMesh.morphTargetDictionary) {
        for (let index = 0; index < blink.length; index++) {
          blink[index].morphTargetIndex =
            headMesh.morphTargetDictionary[blink[index].morphTarget];
        }
      }

      const delay = Math.random() * 5000 + 3000;

      clearTimeout(timeout);
      timeout = setTimeout(setNextBlink, delay);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [headMesh]);

  function update(delta: number) {
    if (headMesh?.morphTargetInfluences && blink.length > 0) {
      duration += delta;

      for (let index = 0; index < blink.length; index++) {
        const section = blink[index];

        if (duration >= 0.5) {
          continue;
        }

        if (duration < section.duration + section.offset) {
          if (duration > section.offset) {
            const pivot =
              ((duration - section.offset) / section.duration) * Math.PI;
            const value = Math.sin(pivot);
            headMesh.morphTargetInfluences[section.morphTargetIndex] = value;
          }
        } else {
          headMesh.morphTargetInfluences[section.morphTargetIndex] = 0;
        }
      }
    }
  }

  useFrame((_, delta) => {
    update(delta);
  });
}
