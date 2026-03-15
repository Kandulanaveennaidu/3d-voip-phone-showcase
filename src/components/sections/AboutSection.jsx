import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionBadge from "../ui/SectionBadge";
import { AnimatedTitle, AnimatedParagraph, FadeIn } from "../ui/AnimatedText";

const stats = [
  { value: "99.999%", label: "Uptime SLA" },
  { value: "100+", label: "Countries Served" },
  { value: "100K+", label: "Businesses Trust Us" },
  { value: "25M+", label: "Daily Call Minutes" },
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
              Unified Communications, Simplified
            </AnimatedTitle>

            <AnimatedParagraph
              delay={0.2}
              className="text-white/40 text-lg leading-relaxed mb-6"
            >
              Vitel Global delivers an AI-powered unified communications
              platform that brings voice, video, messaging, and collaboration
              together for modern businesses of every size.
            </AnimatedParagraph>

            <AnimatedParagraph
              delay={0.3}
              className="text-white/30 leading-relaxed mb-10"
            >
              From HD voice calling and intelligent IVR to AI call summaries and
              seamless CRM integrations, our cloud PBX platform empowers teams
              to communicate smarter — whether in-office, remote, or on the go.
            </AnimatedParagraph>

            <FadeIn delay={0.4}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white/[0.04] border border-white/[0.1] rounded-full text-white/70 text-sm font-medium hover:bg-white/[0.08] transition-colors"
              >
                Why Vitel Global →
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
