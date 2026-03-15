import { Suspense } from "react";
import CameraRig from "./CameraRig";
import LightingSetup from "./LightingSetup";
import OfficeDesk from "../objects/OfficeDesk";
import ParticleSystem from "../effects/ParticleSystem";
import ShaderBackground from "../effects/ShaderBackground";
import PostProcessing from "../effects/PostProcessing";

export default function SceneExperience() {
  return (
    <>
      <CameraRig />
      <LightingSetup />

      <Suspense fallback={null}>
        {/* Dark gradient backdrop */}
        <ShaderBackground />

        {/* ── THE PHONE — the only hero object ── */}
        <OfficeDesk
          position={[0, -0.8, 0]}
          scale={3.5}
          rotation={[0, -0.5, 0]}
          autoRotate
          floatIntensity={0.15}
          floatSpeed={1}
          emissiveColor="#6C63FF"
          emissiveIntensity={0.08}
          envMapIntensity={2.5}
        />

        {/* Tiny dust particles — very subtle ambiance */}
        <ParticleSystem count={80} color="#6C63FF" spread={40} size={1.2} />
        <ParticleSystem count={40} color="#00F0FF" spread={45} size={0.8} />
      </Suspense>

      <PostProcessing />
    </>
  );
}
