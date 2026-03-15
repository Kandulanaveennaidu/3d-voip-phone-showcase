import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import useStore from "../../../store/useStore";
import useMouseParallax from "../../../hooks/useMouseParallax";
import { SECTION_CONFIG, lerp } from "../../../utils/helpers";

export default function CameraRig() {
  const { camera } = useThree();
  const scrollProgress = useStore((s) => s.scrollProgress);
  const currentSection = useStore((s) => s.currentSection);
  const mouse = useMouseParallax(0.3);
  const targetPos = useRef(new THREE.Vector3(0, 2, 12));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    const config = SECTION_CONFIG[currentSection] || SECTION_CONFIG[0];
    const nextConfig =
      SECTION_CONFIG[Math.min(currentSection + 1, SECTION_CONFIG.length - 1)];

    // Interpolation factor within current section
    const sectionProgress = (scrollProgress * 10) % 1;

    // Interpolate between current and next section cameras
    const tx = lerp(config.camera[0], nextConfig.camera[0], sectionProgress);
    const ty = lerp(config.camera[1], nextConfig.camera[1], sectionProgress);
    const tz = lerp(config.camera[2], nextConfig.camera[2], sectionProgress);

    targetPos.current.set(tx + mouse.x, ty + mouse.y * 0.5, tz);

    const lx = lerp(config.target[0], nextConfig.target[0], sectionProgress);
    const ly = lerp(config.target[1], nextConfig.target[1], sectionProgress);
    const lz = lerp(config.target[2], nextConfig.target[2], sectionProgress);
    targetLookAt.current.set(lx, ly, lz);

    // Smooth camera movement
    camera.position.lerp(targetPos.current, delta * 1.5);

    const lookAtTarget = new THREE.Vector3();
    lookAtTarget.lerp(targetLookAt.current, delta * 2);
    camera.lookAt(targetLookAt.current);
  });

  return null;
}
