import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Satellite({ position = [0, 0, 0], scale = 1, color = "#6C63FF" }) {
  const group = useRef();
  const panelLeft = useRef();
  const panelRight = useRef();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.003;
    }
  });

  return (
    <Float speed={0.5} floatIntensity={1} rotationIntensity={0.3}>
      <group ref={group} position={position} scale={scale}>
        {/* Main body */}
        <mesh castShadow>
          <boxGeometry args={[0.4, 0.6, 0.4]} />
          <meshStandardMaterial
            color="#1a1a2e"
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>

        {/* Antenna dish */}
        <mesh position={[0, 0.5, 0]} rotation={[0.3, 0, 0]}>
          <cylinderGeometry args={[0.3, 0, 0.15, 16]} />
          <meshStandardMaterial
            color="#252540"
            roughness={0.1}
            metalness={0.95}
          />
        </mesh>

        {/* Antenna rod */}
        <mesh position={[0, 0.7, 0]}>
          <cylinderGeometry args={[0.01, 0.01, 0.3, 8]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={3}
            toneMapped={false}
          />
        </mesh>

        {/* Solar panels */}
        <mesh ref={panelLeft} position={[-0.8, 0, 0]}>
          <boxGeometry args={[0.8, 0.5, 0.02]} />
          <meshStandardMaterial
            color="#0a1a3e"
            roughness={0.3}
            metalness={0.7}
            emissive="#6C63FF"
            emissiveIntensity={0.2}
          />
        </mesh>
        <mesh ref={panelRight} position={[0.8, 0, 0]}>
          <boxGeometry args={[0.8, 0.5, 0.02]} />
          <meshStandardMaterial
            color="#0a1a3e"
            roughness={0.3}
            metalness={0.7}
            emissive="#6C63FF"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Panel arms */}
        <mesh position={[-0.35, 0, 0]}>
          <boxGeometry args={[0.3, 0.03, 0.03]} />
          <meshStandardMaterial color="#333" metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[0.35, 0, 0]}>
          <boxGeometry args={[0.3, 0.03, 0.03]} />
          <meshStandardMaterial color="#333" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Status light */}
        <mesh position={[0, -0.35, 0.21]}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial
            color="#00FF88"
            emissive="#00FF88"
            emissiveIntensity={5}
            toneMapped={false}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function TelecomSatellites() {
  return (
    <group>
      <Satellite position={[-5, 6, -12]} scale={1.5} color="#6C63FF" />
      <Satellite position={[7, 8, -15]} scale={1.2} color="#00F0FF" />
      <Satellite position={[-8, 10, -20]} scale={1} color="#FF006E" />
      <Satellite position={[4, 12, -18]} scale={0.8} color="#6C63FF" />
    </group>
  );
}
