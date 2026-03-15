import { useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, Preload } from "@react-three/drei";
import Lenis from "lenis";

import SceneExperience from "./components/3d/scenes/SceneExperience";
import Navbar from "./components/ui/Navbar";
import CustomCursor from "./components/ui/Cursor";
import LoadingScreen from "./components/ui/LoadingScreen";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import TechnologySection from "./components/sections/TechnologySection";
import ProductShowcase from "./components/sections/ProductShowcase";
import ServicesSection from "./components/sections/ServicesSection";
import CaseStudiesSection from "./components/sections/CaseStudiesSection";
import PricingSection from "./components/sections/PricingSection";
import ContactSection from "./components/sections/ContactSection";
import FooterSection from "./components/sections/FooterSection";
import useScrollAnimation from "./hooks/useScrollAnimation";
import useStore from "./store/useStore";

function ScrollContent() {
  useScrollAnimation();

  return (
    <div className="relative z-10 scroll-section">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TechnologySection />
      <ProductShowcase />
      <ServicesSection />
      <CaseStudiesSection />
      <PricingSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default function App() {
  const isLoaded = useStore((s) => s.isLoaded);

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="noise-overlay">
      {/* Loading screen */}
      <LoadingScreen />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* 3D Canvas - fixed background */}
      <Canvas
        id="three-canvas"
        camera={{ position: [0, 2, 12], fov: 55, near: 0.1, far: 100 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        shadows
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      >
        <color attach="background" args={["#0a0a0f"]} />
        <Suspense fallback={null}>
          <SceneExperience />
          <Preload all />
        </Suspense>
        <AdaptiveDpr pixelated />
      </Canvas>

      {/* HTML overlay content */}
      <ScrollContent />
    </div>
  );
}
