import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import useStore from "../../store/useStore";

export default function CustomCursor() {
  const cursorRef = useRef();
  const followerRef = useRef();
  const [visible, setVisible] = useState(false);
  const cursorVariant = useStore((s) => s.cursorVariant);

  useEffect(() => {
    // Only show custom cursor on devices with a pointer
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasPointer) return;

    setVisible(true);

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      if (followerRef.current) {
        setTimeout(() => {
          if (followerRef.current) {
            followerRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
          }
        }, 80);
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  if (!visible) return null;

  const isHover = cursorVariant === "hover";

  return (
    <>
      {/* Main dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ willChange: "transform" }}
      >
        <div
          className={`rounded-full bg-white transition-all duration-200 -translate-x-1/2 -translate-y-1/2 ${
            isHover ? "w-4 h-4" : "w-2 h-2"
          }`}
        />
      </div>

      {/* Follower ring */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
        style={{
          willChange: "transform",
          transition: "transform 0.15s ease-out",
        }}
      >
        <div
          className={`rounded-full border border-white/50 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
            isHover ? "w-12 h-12 border-accent/80" : "w-8 h-8"
          }`}
        />
      </div>
    </>
  );
}
