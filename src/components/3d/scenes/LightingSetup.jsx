import { Environment } from "@react-three/drei";

export default function LightingSetup() {
  return (
    <>
      {/* Subtle ambient fill */}
      <ambientLight intensity={0.06} color="#4444aa" />

      {/* Key light — top-right, cool white for phone */}
      <directionalLight
        position={[5, 8, 6]}
        intensity={0.7}
        color="#e0e0ff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={30}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      {/* Fill light — left, violet tint */}
      <directionalLight
        position={[-5, 3, 4]}
        intensity={0.25}
        color="#6C63FF"
      />

      {/* Rim / back light — dramatic edge highlight */}
      <directionalLight
        position={[-3, 2, -6]}
        intensity={0.4}
        color="#00F0FF"
      />

      {/* Focused spot on the phone area */}
      <spotLight
        position={[3, 8, 6]}
        angle={0.4}
        penumbra={1}
        intensity={1.8}
        color="#ffffff"
        castShadow
        target-position={[0, -0.8, 0]}
      />

      {/* Subtle violet accent from below-left */}
      <pointLight
        position={[-2, -3, 3]}
        intensity={0.4}
        color="#6C63FF"
        distance={12}
        decay={2}
      />

      {/* Environment for realistic reflections */}
      <Environment preset="night" />

      {/* Gentle fog for depth */}
      <fog attach="fog" args={["#06060c", 15, 55]} />
    </>
  );
}
