import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  gradientVertexShader,
  gradientFragmentShader,
} from "../../../utils/shaders";

export default function ShaderBackground() {
  const mesh = useRef();
  const uniforms = useRef({
    uTime: { value: 0 },
    uColor1: { value: new THREE.Color("#050509") },
    uColor2: { value: new THREE.Color("#0c0618") },
    uColor3: { value: new THREE.Color("#060c14") },
  });

  useFrame((state) => {
    uniforms.current.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh ref={mesh} position={[0, 0, -30]} scale={[80, 80, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        vertexShader={gradientVertexShader}
        fragmentShader={gradientFragmentShader}
        uniforms={uniforms.current}
        depthWrite={false}
      />
    </mesh>
  );
}
