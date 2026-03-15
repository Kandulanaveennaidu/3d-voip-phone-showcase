import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionBadge from "../ui/SectionBadge";
import { AnimatedTitle, AnimatedParagraph, FadeIn } from "../ui/AnimatedText";

const caseStudies = [
  {
    client: "TechGlobal Corp",
    industry: "Enterprise SaaS",
    result: "300% throughput increase",
    description:
      "Migrated from legacy infrastructure to Nexus Core, achieving 3x throughput with 60% lower costs.",
    metric: "3x",
    metricLabel: "Performance Gain",
    gradient: "from-primary to-purple-500",
  },
  {
    client: "MediConnect",
    industry: "Healthcare",
    result: "HIPAA-compliant real-time",
    description:
      "Built a HIPAA-compliant telehealth platform serving 2M+ patients with zero-downtime reliability.",
    metric: "2M+",
    metricLabel: "Patients Served",
    gradient: "from-accent to-blue-500",
  },
  {
    client: "StreamVerse",
    industry: "Media & Entertainment",
    result: "Global live streaming",
    description:
      "Powered live events reaching 50M concurrent viewers with sub-second latency worldwide.",
    metric: "50M",
    metricLabel: "Concurrent Viewers",
    gradient: "from-neon to-red-400",
  },
];

export default function CaseStudiesSection() {
  return (
    <section
      id="casestudies"
      className="relative min-h-screen flex items-center py-32"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-20">
          <SectionBadge>Case Studies</SectionBadge>
          <AnimatedTitle className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Proven at Scale
          </AnimatedTitle>
          <AnimatedParagraph
            delay={0.2}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            See how industry leaders leverage Nexus to transform their
            operations and deliver exceptional experiences.
          </AnimatedParagraph>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <GlassCard
              key={i}
              delay={i * 0.15}
              className="p-8 group flex flex-col"
              glow
            >
              {/* Industry */}
              <span className="text-xs font-mono text-accent/70 uppercase tracking-widest mb-4">
                {study.industry}
              </span>

              {/* Metric */}
              <div
                className={`text-5xl font-display font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent mb-1`}
              >
                {study.metric}
              </div>
              <span className="text-white/30 text-xs font-mono uppercase tracking-wider mb-6">
                {study.metricLabel}
              </span>

              {/* Client */}
              <h3 className="text-white font-display font-semibold text-xl mb-3">
                {study.client}
              </h3>

              {/* Description */}
              <p className="text-white/35 text-sm leading-relaxed mb-6 flex-1">
                {study.description}
              </p>

              {/* Result */}
              <div className="pt-4 border-t border-white/[0.05]">
                <span className="text-white/50 text-sm">{study.result}</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
