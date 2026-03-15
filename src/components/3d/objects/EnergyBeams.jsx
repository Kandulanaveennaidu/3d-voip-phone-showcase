import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function EnergyBeams({ count = 6 }) {
  const groupRef = useRef();

  const beams = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = 6;
      return {
        start: new THREE.Vector3(
          Math.cos(angle) * radius,
          -3,
          Math.sin(angle) * radius - 8,
        ),
        end: new THREE.Vector3(0, 5, -8),
        color: i % 3 === 0 ? "#6C63FF" : i % 3 === 1 ? "#00F0FF" : "#FF006E",
        speed: 0.3 + Math.random() * 0.4,
        offset: i * 0.5,
      };
    });
  }, [count]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((beam, i) => {
        const pulse =
          Math.sin(state.clock.elapsedTime * beams[i].speed + beams[i].offset) *
            0.5 +
          0.5;
        beam.material.opacity = pulse * 0.3;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {beams.map((beam, i) => {
        const direction = new THREE.Vector3().subVectors(beam.end, beam.start);
        const length = direction.length();
        const midpoint = new THREE.Vector3()
          .addVectors(beam.start, beam.end)
          .multiplyScalar(0.5);

        return (
          <mesh key={i} position={midpoint} lookAt={beam.end}>
            <cylinderGeometry args={[0.01, 0.01, length, 4]} />
            <meshBasicMaterial
              color={beam.color}
              transparent
              opacity={0.3}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        );
      })}
    </group>
  );
}
