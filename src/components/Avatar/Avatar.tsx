import { useGLTF } from '@react-three/drei';
import { GroupProps, useGraph } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
import useFollowCursor from './useFollowCursor';
import useBlinkEyes from './useBlinkEyes';
import useSmile from './useSmile';
import useYawn from './useYawn';

// https://github.com/srcnalt/3d-profile-avatars/tree/master

useGLTF.preload('models/v7.glb');

export function Avatar(props: GroupProps) {
  const groupRef = useRef<null | Group>(null);
  const { scene } = useGLTF('models/v7.glb');
  const { nodes } = useGraph(scene);

  useFollowCursor(nodes);
  useBlinkEyes(nodes);
  useSmile(nodes);
  useYawn(nodes);

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}
