import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function VolumetricFog({ density = 0.03 }) {
  const fogRef = useRef();
  const count = 12;

  const clouds = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 30,
        Math.random() * 6 - 1,
        -Math.random() * 25 - 5,
      ],
      scale: Math.random() * 5 + 4,
      speed: Math.random() * 0.15 + 0.03,
      opacity: Math.random() * 0.04 + 0.015,
    }));
  }, []);

  useFrame((state) => {
    if (fogRef.current) {
      fogRef.current.children.forEach((child, i) => {
        child.position.x +=
          Math.sin(state.clock.elapsedTime * clouds[i].speed) * 0.003;
        child.position.y +=
          Math.cos(state.clock.elapsedTime * clouds[i].speed * 0.5) * 0.002;
        child.material.opacity =
          clouds[i].opacity *
          (0.8 + Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.2);
      });
    }
  });

  return (
    <group ref={fogRef}>
      {clouds.map((cloud, i) => (
        <mesh key={i} position={cloud.position}>
          <sphereGeometry args={[cloud.scale, 8, 8]} />
          <meshBasicMaterial
            color="#1a1a2e"
            transparent
            opacity={cloud.opacity}
            depthWrite={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}
