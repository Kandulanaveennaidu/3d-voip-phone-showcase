import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Ring({
  radius = 2,
  tube = 0.02,
  color = "#6C63FF",
  speed = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}) {
  const mesh = useRef();

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.z += 0.005 * speed;
      mesh.current.rotation.x += 0.003 * speed;
    }
  });

  return (
    <mesh ref={mesh} position={position} rotation={rotation}>
      <torusGeometry args={[radius, tube, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
        roughness={0.1}
        metalness={0.9}
        toneMapped={false}
      />
    </mesh>
  );
}

export default function NeonRings() {
  return (
    <group>
      {/* Pushed deep & to sides — never overlapping hero centre */}
      <Ring
        radius={3}
        color="#6C63FF"
        speed={0.5}
        position={[-10, 2, -16]}
        rotation={[0.3, 0.6, 0]}
      />
      <Ring
        radius={3.5}
        color="#00F0FF"
        speed={-0.4}
        position={[11, -1, -18]}
        rotation={[0.5, 0.2, 0]}
        tube={0.015}
      />
      <Ring
        radius={2.5}
        color="#FF006E"
        speed={0.3}
        position={[0, 7, -22]}
        rotation={[0.8, 0.4, 0]}
        tube={0.01}
      />

      {/* Small accent rings at periphery */}
      <Ring
        radius={1.2}
        color="#6C63FF"
        speed={0.9}
        position={[-8, 5, -10]}
        rotation={[1, 0.5, 0]}
      />
      <Ring
        radius={1}
        color="#00F0FF"
        speed={-0.7}
        position={[9, -3, -12]}
        rotation={[0.5, 1, 0]}
        tube={0.015}
      />
    </group>
  );
}
