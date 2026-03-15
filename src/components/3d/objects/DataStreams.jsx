import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function DataStreams({ count = 30 }) {
  const groupRef = useRef();

  const streams = useMemo(() => {
    return Array.from({ length: count }, () => {
      const startX = (Math.random() - 0.5) * 20;
      const startZ = (Math.random() - 0.5) * 20;
      return {
        position: [startX, Math.random() * 10 - 2, startZ - 10],
        length: Math.random() * 2 + 0.5,
        speed: Math.random() * 3 + 1,
        color: Math.random() > 0.5 ? "#6C63FF" : "#00F0FF",
        delay: Math.random() * 5,
      };
    });
  }, [count]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((stream, i) => {
        const t =
          (state.clock.elapsedTime * streams[i].speed + streams[i].delay) % 8;
        stream.position.y = -5 + t * 2.5;
        stream.material.opacity = t < 1 ? t : t > 7 ? 8 - t : 0.4;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {streams.map((stream, i) => (
        <mesh key={i} position={stream.position}>
          <cylinderGeometry args={[0.005, 0.005, stream.length, 4]} />
          <meshBasicMaterial
            color={stream.color}
            transparent
            opacity={0.4}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}
