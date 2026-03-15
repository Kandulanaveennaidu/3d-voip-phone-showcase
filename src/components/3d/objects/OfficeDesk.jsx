import { useRef, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

export default function OfficeDesk({
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
  autoRotate = true,
  floatIntensity = 0.4,
  floatSpeed = 1.5,
  emissiveColor = "#4F8EF7",
  emissiveIntensity = 0.2,
  envMapIntensity = 2.2,
}) {
  const group = useRef();
  const { scene } = useGLTF(
    "/Meshy_AI_Modern_Office_Desk_Ph_0315120928_texture.glb",
  );

  // Clone so the scene graph node isn't shared with DeskModelViewer
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  // Enhance all materials on the cloned model
  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        // Clone material so we don't mutate the cached original
        child.material = child.material.clone();
        const mat = child.material;

        mat.envMapIntensity = envMapIntensity;
        mat.emissive = new THREE.Color(emissiveColor);
        mat.emissiveIntensity = emissiveIntensity;
        mat.roughness = Math.max(mat.roughness * 0.7, 0.03);
        mat.metalness = Math.min(mat.metalness + 0.15, 1.0);
        mat.toneMapped = true;
        mat.needsUpdate = true;
      }
    });
  }, [clonedScene, emissiveColor, emissiveIntensity, envMapIntensity]);

  // Auto-rotate
  useFrame((state) => {
    if (group.current && autoRotate) {
      group.current.rotation.y += 0.003;
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Floating wrapper */}
      <Float
        speed={floatSpeed}
        floatIntensity={floatIntensity}
        rotationIntensity={0.05}
      >
        <group ref={group} scale={scale}>
          <primitive object={clonedScene} />
        </group>
      </Float>

      {/* Subtle ground glow */}
      <mesh position={[0, -0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.2 * scale, 64]} />
        <meshBasicMaterial
          color={emissiveColor}
          transparent
          opacity={0.025}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Dedicated key light for the phone */}
      <spotLight
        position={[0, 5 * scale, 3 * scale]}
        angle={0.45}
        penumbra={1}
        intensity={3}
        color="#f0f4ff"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      {/* Blue brand fill */}
      <pointLight
        position={[-2 * scale, 1.5 * scale, 2 * scale]}
        intensity={0.6}
        color="#4F8EF7"
        distance={8 * scale}
        decay={2}
      />
      {/* Cyan rim */}
      <pointLight
        position={[2 * scale, 0.5 * scale, -2 * scale]}
        intensity={0.45}
        color="#00D4FF"
        distance={8 * scale}
        decay={2}
      />
      {/* Warm accent from below */}
      <pointLight
        position={[0, -1 * scale, 1 * scale]}
        intensity={0.2}
        color="#F7941D"
        distance={6 * scale}
        decay={2}
      />
    </group>
  );
}

// Pre-load the model
useGLTF.preload("/Meshy_AI_Modern_Office_Desk_Ph_0315120928_texture.glb");
