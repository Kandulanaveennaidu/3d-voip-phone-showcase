import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function SignalWaves({
  position = [0, 0, 0],
  color = "#00F0FF",
  count = 5,
}) {
  const groupRef = useRef();

  const rings = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      delay: i * 0.6,
      maxScale: 2 + i * 0.5,
    }));
  }, [count]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((ring, i) => {
        const t = (state.clock.elapsedTime + rings[i].delay) % 3;
        const progress = t / 3;
        const scale = progress * rings[i].maxScale;
        ring.scale.set(scale, scale, scale);
        ring.material.opacity = (1 - progress) * 0.4;
      });
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={[-Math.PI / 2, 0, 0]}>
      {rings.map((ring, i) => (
        <mesh key={i}>
          <ringGeometry args={[0.9, 1, 32]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.4}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}
