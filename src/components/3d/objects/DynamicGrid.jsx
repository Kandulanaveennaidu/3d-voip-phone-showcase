import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function DynamicGrid({
  size = 20,
  divisions = 20,
  position = [0, -3, 0],
}) {
  const gridRef = useRef();
  const dotsRef = useRef();

  const intersections = useMemo(() => {
    const points = [];
    const half = size / 2;
    const step = size / divisions;
    for (let x = -half; x <= half; x += step) {
      for (let z = -half; z <= half; z += step) {
        points.push(new THREE.Vector3(x, 0, z));
      }
    }
    return points;
  }, [size, divisions]);

  const dotPositions = useMemo(() => {
    const arr = new Float32Array(intersections.length * 3);
    intersections.forEach((p, i) => {
      arr[i * 3] = p.x;
      arr[i * 3 + 1] = p.y;
      arr[i * 3 + 2] = p.z;
    });
    return arr;
  }, [intersections]);

  useFrame((state) => {
    if (dotsRef.current) {
      const positions = dotsRef.current.geometry.attributes.position.array;
      for (let i = 0; i < intersections.length; i++) {
        const x = intersections[i].x;
        const z = intersections[i].z;
        positions[i * 3 + 1] =
          Math.sin(x * 0.3 + state.clock.elapsedTime * 0.5) *
          Math.cos(z * 0.3 + state.clock.elapsedTime * 0.3) *
          0.3;
      }
      dotsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group position={position}>
      {/* Grid lines */}
      <gridHelper
        ref={gridRef}
        args={[size, divisions, "#6C63FF", "#1a1a2e"]}
      />

      {/* Animated dots at intersections */}
      <points ref={dotsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={intersections.length}
            array={dotPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00F0FF"
          size={0.05}
          transparent
          opacity={0.6}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
