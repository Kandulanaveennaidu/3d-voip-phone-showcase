import { motion } from "framer-motion";
import { AnimatedLetters, AnimatedParagraph } from "../ui/AnimatedText";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="relative z-10 max-w-3xl ml-[8%] lg:ml-[10%] px-6">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono text-white/50 uppercase tracking-[0.2em]">
              Next Generation Platform
            </span>
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.95] mb-8"
        >
          <span className="block">Build the</span>
          <span className="block bg-gradient-to-r from-primary via-accent to-neon bg-clip-text text-transparent">
            Future
          </span>
          <span className="block text-4xl md:text-5xl lg:text-6xl mt-2 font-light text-white/70">
            of Digital Experience
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="text-base md:text-lg text-white/40 max-w-xl mb-10 font-body leading-relaxed"
        >
          Immerse yourself in a cinematic 3D world where cutting-edge technology
          meets breathtaking design. A new era of digital interaction.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.9 }}
          className="flex flex-col sm:flex-row items-start gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-gradient-to-r from-primary to-accent rounded-full text-white font-medium text-sm tracking-wide shadow-lg shadow-primary/25"
          >
            Explore Experience
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-white/[0.04] border border-white/[0.1] rounded-full text-white/70 font-medium text-sm tracking-wide hover:bg-white/[0.08] transition-colors"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/20 text-xs font-mono tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
