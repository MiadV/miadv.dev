import { useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Object3D } from 'three';
import { clamp, lerp } from 'three/src/math/MathUtils';

export interface Nodes {
  [name: string]: Object3D;
}

export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => {
  value = clamp(value, inMin, inMax);
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const rad = Math.PI / 180;
const eyeRotationOffsetX = 90 * rad;

let reset: boolean = false;
let timeout: NodeJS.Timeout;

const targetPos = { x: 0, y: 0 };
const currentPos = { x: 0, y: 0 };

const setResetTrue = () => {
  timeout = setTimeout(() => {
    reset = true;
  }, 1000);
};

const setResetFalse = () => {
  clearTimeout(timeout);
  reset = false;
};

export default function useFollowCursor(nodes: Nodes) {
  const { gl } = useThree();

  useEffect(() => {
    gl.domElement.addEventListener('mouseleave', setResetTrue);
    gl.domElement.addEventListener('mouseenter', setResetFalse);

    return () => {
      gl.domElement.removeEventListener('mouseleave', setResetTrue);
      gl.domElement.removeEventListener('mouseenter', setResetFalse);
    };
  }, [gl.domElement]);

  useFrame((state) => {
    const cameraRotation = Math.abs(state.camera.rotation.z);

    if (!reset && cameraRotation < 0.2) {
      targetPos.x = mapRange(state.mouse.y, -1, 1, 5 * rad, -5 * rad);
      targetPos.y = mapRange(state.mouse.x, -1, 1, -10 * rad, 10 * rad);
    } else {
      targetPos.x = 0;
      targetPos.y = 0;
    }

    currentPos.x = lerp(currentPos.x, targetPos.x, 0.05);
    currentPos.y = lerp(currentPos.y, targetPos.y, 0.05);

    nodes.Neck.rotation.x = currentPos.x + 0.1;
    nodes.Neck.rotation.y = currentPos.y;

    nodes.Head.rotation.x = currentPos.x * 2;
    nodes.Head.rotation.y = currentPos.y * 2;

    nodes.RightEye.rotation.x = currentPos.x - eyeRotationOffsetX;
    nodes.LeftEye.rotation.x = currentPos.x - eyeRotationOffsetX;

    nodes.RightEye.rotation.z = currentPos.y * 3 + Math.PI;
    nodes.LeftEye.rotation.z = currentPos.y * 3 + Math.PI;
  });
}
