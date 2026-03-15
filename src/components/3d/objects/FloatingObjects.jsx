import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import useStore from "../../../store/useStore";

/*
 * Curated floating objects — intentional, minimal placement.
 * Hero: 1 large glass sphere (left) + 1 gem accent (right)
 * Mid/deep: sparse accent pieces for depth parallax
 */

function HeroSphere({ position, size = 1.2 }) {
  const mesh = useRef();
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.08;
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });
  return (
    <Float speed={0.8} floatIntensity={0.6} rotationIntensity={0.05}>
      <mesh ref={mesh} position={position} castShadow>
        <sphereGeometry args={[size, 128, 128]} />
        <meshPhysicalMaterial
          color="#4a45b0"
          roughness={0.02}
          metalness={0.15}
          transmission={0.92}
          thickness={2.5}
          envMapIntensity={4}
          ior={1.8}
          transparent
          opacity={0.7}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>
    </Float>
  );
}

function AccentGem({ position, size = 0.35, color = "#6C63FF", speed = 0.5 }) {
  const mesh = useRef();
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
      mesh.current.rotation.z = state.clock.elapsedTime * 0.1 * speed;
    }
  });
  return (
    <Float speed={speed * 1.5} floatIntensity={0.8} rotationIntensity={0.15}>
      <mesh ref={mesh} position={position} castShadow>
        <octahedronGeometry args={[size, 0]} />
        <meshStandardMaterial
          color={color}
          roughness={0.08}
          metalness={0.95}
          envMapIntensity={3}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

function DistortSphere({ position, size = 0.5, color = "#FF006E" }) {
  const mesh = useRef();
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.1;
    }
  });
  return (
    <Float speed={0.6} floatIntensity={1} rotationIntensity={0.1}>
      <mesh ref={mesh} position={position} castShadow>
        <sphereGeometry args={[size, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.15}
          metalness={0.7}
          distort={0.25}
          speed={1.5}
          envMapIntensity={2}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingObjects() {
  const group = useRef();
  useFrame(() => {
    if (group.current) group.current.rotation.y += 0.0003;
  });

  return (
    <group ref={group}>
      {/* HERO — large glass sphere, far left */}
      <HeroSphere position={[-5.5, 1, -3]} size={1.4} />
      {/* HERO — small gem, far right */}
      <AccentGem
        position={[6, 2.5, -6]}
        size={0.3}
        color="#6C63FF"
        speed={0.6}
      />
      {/* MID — distorted, bottom left deep */}
      <DistortSphere position={[-7, -3, -14]} size={0.7} color="#FF006E" />
      {/* MID — gem far right deep */}
      <AccentGem
        position={[9, 4, -16]}
        size={0.45}
        color="#00F0FF"
        speed={0.4}
      />
      {/* DEEP — large, far background */}
      <DistortSphere position={[4, -2, -22]} size={1} color="#3a35a0" />
      {/* DEEP — small accent top */}
      <AccentGem
        position={[-4, 8, -20]}
        size={0.25}
        color="#FF006E"
        speed={0.7}
      />
    </group>
  );
}
