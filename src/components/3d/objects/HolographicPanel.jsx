import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { holoVertexShader, holoFragmentShader } from "../../../utils/shaders";

export default function HolographicPanel({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  width = 2,
  height = 1.5,
  opacity = 0.18,
}) {
  const mesh = useRef();
  const scanRef = useRef();

  const uniforms = useRef({
    uTime: { value: 0 },
    uOpacity: { value: opacity },
  });

  useFrame((state) => {
    uniforms.current.uTime.value = state.clock.elapsedTime;
    if (scanRef.current) {
      const scanY = ((state.clock.elapsedTime * 0.3) % 1) * height - height / 2;
      scanRef.current.position.y = scanY;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Main panel */}
      <mesh ref={mesh}>
        <planeGeometry args={[width, height]} />
        <shaderMaterial
          vertexShader={holoVertexShader}
          fragmentShader={holoFragmentShader}
          uniforms={uniforms.current}
          transparent
          side={THREE.DoubleSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Border frame */}
      <lineSegments>
        <edgesGeometry args={[new THREE.PlaneGeometry(width, height)]} />
        <lineBasicMaterial color="#00F0FF" transparent opacity={0.2} />
      </lineSegments>

      {/* Corner decorations */}
      {[
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1],
      ].map(([cx, cy], i) => (
        <mesh key={i} position={[cx * width * 0.48, cy * height * 0.48, 0.01]}>
          <planeGeometry args={[0.08, 0.08]} />
          <meshBasicMaterial color="#00F0FF" transparent opacity={0.3} />
        </mesh>
      ))}

      {/* Scan line */}
      <mesh ref={scanRef} position={[0, 0, 0.01]}>
        <planeGeometry args={[width * 0.95, 0.015]} />
        <meshBasicMaterial
          color="#00F0FF"
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}
