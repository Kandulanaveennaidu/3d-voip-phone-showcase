import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function NetworkNodes({ count = 20, spread = 15 }) {
  const groupRef = useRef();
  const linesRef = useRef();

  const nodes = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * spread,
        (Math.random() - 0.5) * spread * 0.6,
        (Math.random() - 0.5) * spread,
      ),
      scale: Math.random() * 0.15 + 0.05,
      speed: Math.random() * 0.5 + 0.3,
    }));
  }, [count, spread]);

  const connections = useMemo(() => {
    const conns = [];
    const maxDist = spread * 0.4;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position);
        if (dist < maxDist) {
          conns.push({ from: i, to: j, dist });
        }
      }
    }
    return conns;
  }, [nodes, spread]);

  const linePositions = useMemo(() => {
    const positions = new Float32Array(connections.length * 6);
    connections.forEach((conn, idx) => {
      const from = nodes[conn.from].position;
      const to = nodes[conn.to].position;
      positions[idx * 6] = from.x;
      positions[idx * 6 + 1] = from.y;
      positions[idx * 6 + 2] = from.z;
      positions[idx * 6 + 3] = to.x;
      positions[idx * 6 + 4] = to.y;
      positions[idx * 6 + 5] = to.z;
    });
    return positions;
  }, [connections, nodes]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        if (i < nodes.length) {
          child.position.y =
            nodes[i].position.y +
            Math.sin(state.clock.elapsedTime * nodes[i].speed + i) * 0.2;

          const pulse =
            Math.sin(state.clock.elapsedTime * 2 + i * 0.5) * 0.5 + 0.5;
          child.material.emissiveIntensity = 1 + pulse * 2;
        }
      });
    }
  });

  return (
    <group position={[0, 0, -8]}>
      {/* Nodes */}
      <group ref={groupRef}>
        {nodes.map((node, i) => (
          <mesh key={i} position={node.position} scale={node.scale}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial
              color="#00F0FF"
              emissive="#00F0FF"
              emissiveIntensity={2}
              roughness={0.2}
              metalness={0.8}
              toneMapped={false}
            />
          </mesh>
        ))}
      </group>

      {/* Connection lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connections.length * 2}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#6C63FF"
          transparent
          opacity={0.15}
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
}
