import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionBadge from "../ui/SectionBadge";
import { AnimatedTitle, AnimatedParagraph, FadeIn } from "../ui/AnimatedText";

const stats = [
  { value: "99.9%", label: "Uptime Guaranteed" },
  { value: "150+", label: "Global Locations" },
  { value: "10M+", label: "Active Users" },
  { value: "24/7", label: "Expert Support" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center py-32"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <SectionBadge>About Us</SectionBadge>

            <AnimatedTitle className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Redefining Digital Connectivity
            </AnimatedTitle>

            <AnimatedParagraph
              delay={0.2}
              className="text-white/40 text-lg leading-relaxed mb-6"
            >
              We are pioneers in next-generation communication technology,
              building infrastructure that connects billions of people across
              the globe with unprecedented speed and reliability.
            </AnimatedParagraph>

            <AnimatedParagraph
              delay={0.3}
              className="text-white/30 leading-relaxed mb-10"
            >
              Our platform leverages cutting-edge AI, quantum-resistant
              encryption, and distributed edge computing to deliver experiences
              that feel instantaneous. From enterprise solutions to consumer
              applications, we're shaping how the world communicates.
            </AnimatedParagraph>

            <FadeIn delay={0.4}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/[0.04] border border-white/[0.1] rounded-full text-white/70 text-sm font-medium hover:bg-white/[0.08] transition-colors"
              >
                Learn Our Story →
              </motion.button>
            </FadeIn>
          </div>

          {/* Right - Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <GlassCard
                key={i}
                delay={i * 0.1}
                className="p-6 text-center"
                glow
                glowColor="primary"
              >
                <div className="text-3xl md:text-4xl font-display font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm font-body">
                  {stat.label}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
