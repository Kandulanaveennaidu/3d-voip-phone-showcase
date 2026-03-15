import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  OrbitControls,
  useGLTF,
  Float,
} from "@react-three/drei";
import * as THREE from "three";
import { useEffect } from "react";

function DeskModel({ emissiveColor = "#6C63FF" }) {
  const group = useRef();
  const { scene } = useGLTF(
    "/Meshy_AI_Modern_Office_Desk_Ph_0315120928_texture.glb",
  );

  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material = child.material.clone();
        child.material.envMapIntensity = 2.0;
        child.material.emissive = new THREE.Color(emissiveColor);
        child.material.emissiveIntensity = 0.12;
        child.material.roughness = Math.max(
          child.material.roughness * 0.8,
          0.05,
        );
        child.material.metalness = Math.min(
          child.material.metalness + 0.15,
          1.0,
        );
        child.material.needsUpdate = true;
      }
    });
  }, [clonedScene, emissiveColor]);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.004;
    }
  });

  return (
    <Float speed={1.5} floatIntensity={0.3} rotationIntensity={0.08}>
      <group ref={group} scale={2}>
        <primitive object={clonedScene} />
      </group>
    </Float>
  );
}

export default function DeskModelViewer() {
  return (
    <div className="w-full h-full min-h-[320px] rounded-2xl overflow-hidden relative">
      {/* Gradient glow behind the viewer */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl pointer-events-none z-0" />

      <Canvas
        camera={{ position: [3, 2.5, 3], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        shadows
        style={{ background: "transparent" }}
      >
        <color attach="background" args={["#0d0d14"]} />

        {/* Lighting */}
        <ambientLight intensity={0.3} color="#8888ff" />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1}
          color="#ffffff"
          castShadow
        />
        <pointLight
          position={[-2, 3, 2]}
          intensity={1.2}
          color="#6C63FF"
          distance={10}
          decay={2}
        />
        <pointLight
          position={[2, 2, -2]}
          intensity={0.8}
          color="#00F0FF"
          distance={10}
          decay={2}
        />
        <spotLight
          position={[0, 5, 0]}
          angle={0.6}
          penumbra={1}
          intensity={1.5}
          color="#ffffff"
          castShadow
        />

        <Suspense fallback={null}>
          <DeskModel />
          <ContactShadows
            position={[0, -0.5, 0]}
            opacity={0.4}
            scale={8}
            blur={2.5}
            far={4}
            color="#6C63FF"
          />
          <Environment preset="night" />
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2.2}
          autoRotate={false}
        />
      </Canvas>

      {/* Overlay label */}
      <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] backdrop-blur-md border border-white/[0.08]">
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
          3D Model · Drag to rotate
        </span>
      </div>
    </div>
  );
}
