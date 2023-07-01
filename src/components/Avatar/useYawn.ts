import { useEffect, useState } from 'react';
import { SkinnedMeshProps, useFrame } from '@react-three/fiber';
import { Object3D } from 'three';
import { useSpring } from '@react-spring/core';
import { clamp } from 'three/src/math/MathUtils';

export interface Nodes {
  [name: string]: Object3D;
}
// https://gltf-viewer.donmccurdy.com/
export default function useYawn(nodes: Nodes) {
  let headMesh = nodes?.Wolf3D_Avatar as unknown as SkinnedMeshProps;
  const [action, setAction] = useState(0);
  const [{ val }] = useSpring(
    {
      val: action,
      config: { mass: 5, tension: 200, friction: 50, precision: 0.0001 },
    },
    [action]
  );

  useEffect(() => {
    let timeout = setTimeout(setNextPlay, 5000);
    let intenalTimeout: NodeJS.Timeout | null = null;

    function setNextPlay() {
      setAction(0.5);

      if (intenalTimeout) {
        clearTimeout(intenalTimeout);
      }

      intenalTimeout = setTimeout(() => {
        setAction(0);
      }, 1500);

      clearTimeout(timeout);

      const delay = Math.random() * 5000 + 60000;
      timeout = setTimeout(setNextPlay, delay);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [headMesh]);

  useFrame(() => {
    if (headMesh?.morphTargetInfluences) {
      //   mouthOpen
      headMesh.morphTargetInfluences[0] = clamp(val.get(), 0, 0.2);
      //   jawOpen
      headMesh.morphTargetInfluences[51] = val.get();
      //   mouthFunnel
      headMesh.morphTargetInfluences[53] = clamp(val.get(), 0, 0.2);
      //   eyeBlinkLeft
      headMesh.morphTargetInfluences[67] = clamp(val.get(), 0, 0.7);
      //   eyeBlinkRight
      headMesh.morphTargetInfluences[68] = clamp(val.get(), 0, 0.7);
    }
  });
}
