import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Island({ position, scale = 1, color = "#1a1a2e" }) {
  const mesh = useRef();
  const glowMesh = useRef();

  useFrame((state) => {
    if (glowMesh.current) {
      glowMesh.current.material.opacity =
        0.15 + Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    }
  });

  return (
    <Float speed={0.4} floatIntensity={0.5} rotationIntensity={0.1}>
      <group position={position} scale={scale}>
        {/* Main island body */}
        <mesh ref={mesh} castShadow receiveShadow>
          <cylinderGeometry args={[1.5, 2.2, 0.8, 8, 1]} />
          <meshStandardMaterial color={color} roughness={0.6} metalness={0.4} />
        </mesh>

        {/* Top surface */}
        <mesh position={[0, 0.4, 0]}>
          <cylinderGeometry args={[1.5, 1.5, 0.05, 8]} />
          <meshStandardMaterial
            color="#252540"
            roughness={0.3}
            metalness={0.6}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Bottom rock formations */}
        <mesh position={[0, -0.6, 0]} rotation={[0, 0.5, 0]}>
          <coneGeometry args={[1.8, 1.5, 6]} />
          <meshStandardMaterial
            color="#12121a"
            roughness={0.8}
            metalness={0.2}
          />
        </mesh>

        {/* Glow ring */}
        <mesh
          ref={glowMesh}
          position={[0, 0.1, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <ringGeometry args={[1.4, 1.7, 32]} />
          <meshBasicMaterial
            color="#6C63FF"
            transparent
            opacity={0.15}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Small structures on top */}
        <mesh position={[0.5, 0.8, 0.3]}>
          <boxGeometry args={[0.2, 0.6, 0.2]} />
          <meshStandardMaterial
            color="#252540"
            roughness={0.2}
            metalness={0.8}
            emissive="#6C63FF"
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[-0.3, 0.65, -0.4]}>
          <boxGeometry args={[0.15, 0.4, 0.15]} />
          <meshStandardMaterial
            color="#252540"
            roughness={0.2}
            metalness={0.8}
            emissive="#00F0FF"
            emissiveIntensity={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function FloatingIslands() {
  return (
    <group>
      <Island position={[10, -1, -17]} scale={1.8} color="#12121a" />
      <Island position={[-10, 3, -20]} scale={1.3} color="#1a0a2e" />
      <Island position={[0, -4, -24]} scale={1} />
    </group>
  );
}
