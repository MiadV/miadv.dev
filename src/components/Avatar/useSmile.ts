import { useEffect, useState } from 'react';
import { SkinnedMeshProps, useFrame } from '@react-three/fiber';
import { Object3D } from 'three';
import { useSpring } from '@react-spring/core';
import { clamp } from 'three/src/math/MathUtils';

export interface Nodes {
  [name: string]: Object3D;
}
// https://gltf-viewer.donmccurdy.com/
export default function useSmile(nodes: Nodes) {
  let headMesh = nodes?.Wolf3D_Avatar as unknown as SkinnedMeshProps;
  const [smile, setSmile] = useState(0);
  const [{ val }] = useSpring(
    {
      val: smile,
      config: { mass: 5, tension: 200, friction: 50, precision: 0.0001 },
    },
    [smile]
  );

  useEffect(() => {
    let timeout = setTimeout(setNextPlay, 1000);
    let intenalTimeout: NodeJS.Timeout | null = null;

    function setNextPlay() {
      setSmile(0.35);

      if (intenalTimeout) {
        clearTimeout(intenalTimeout);
      }

      intenalTimeout = setTimeout(() => {
        setSmile(0.1);
      }, 10000);

      clearTimeout(timeout);

      const delay = Math.random() * 5000 + 20000;
      timeout = setTimeout(setNextPlay, delay);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [headMesh]);

  useFrame(() => {
    if (headMesh?.morphTargetInfluences) {
      headMesh.morphTargetInfluences[16] = val.get();
      headMesh.morphTargetInfluences[19] = clamp(val.get() - 0.1, 0, 0.15);
    }
  });
}
