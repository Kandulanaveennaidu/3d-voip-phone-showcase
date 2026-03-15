import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionBadge from "../ui/SectionBadge";
import { AnimatedTitle, AnimatedParagraph, FadeIn } from "../ui/AnimatedText";

const caseStudies = [
  {
    client: "Pacific Health Group",
    industry: "Healthcare",
    result: "HIPAA-compliant VoIP rollout",
    description:
      "Migrated 500+ extensions to Vitel Global’s cloud PBX, achieving HIPAA compliance and cutting telecom costs by 45%.",
    metric: "45%",
    metricLabel: "Cost Reduction",
    gradient: "from-primary to-purple-500",
  },
  {
    client: "Apex Financial Services",
    industry: "Financial Services",
    result: "Unified 12 offices on one platform",
    description:
      "Consolidated 12 branch offices onto a single Vitel Global system with smart call routing and real-time analytics.",
    metric: "12",
    metricLabel: "Offices Unified",
    gradient: "from-accent to-blue-500",
  },
  {
    client: "NovaTech Solutions",
    industry: "Technology",
    result: "80% faster customer response",
    description:
      "Deployed AI call summaries and IVR automation, reducing average customer response time from 5 minutes to under 1.",
    metric: "80%",
    metricLabel: "Faster Response",
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
            Trusted by Businesses Worldwide
          </AnimatedTitle>
          <AnimatedParagraph
            delay={0.2}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            See how companies across industries use Vitel Global to transform
            their business communications.
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
