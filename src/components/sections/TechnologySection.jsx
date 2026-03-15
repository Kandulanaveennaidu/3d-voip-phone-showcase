import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionBadge from "../ui/SectionBadge";
import { AnimatedTitle, AnimatedParagraph, FadeIn } from "../ui/AnimatedText";

const techStack = [
  {
    name: "Edge Computing",
    detail: "Distributed processing at 150+ edge locations",
    icon: "⚙️",
  },
  {
    name: "AI / ML Pipeline",
    detail: "Real-time inference with custom neural networks",
    icon: "🧠",
  },
  {
    name: "Quantum-Safe TLS",
    detail: "Post-quantum cryptographic protocols",
    icon: "🔐",
  },
  {
    name: "WebRTC Engine",
    detail: "Custom media engine with SVC codec support",
    icon: "📡",
  },
  {
    name: "gRPC Mesh",
    detail: "High-performance inter-service communication",
    icon: "🔄",
  },
  {
    name: "Time-Series DB",
    detail: "Custom TSDB for real-time analytics at scale",
    icon: "📊",
  },
];

const metrics = [
  { label: "Requests/sec", value: "2.4M" },
  { label: "P99 Latency", value: "<3ms" },
  { label: "Data Centers", value: "42" },
  { label: "Availability", value: "99.999%" },
];

export default function TechnologySection() {
  return (
    <section
      id="technology"
      className="relative min-h-screen flex items-center py-32"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <SectionBadge>Technology</SectionBadge>
            <AnimatedTitle className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Powered by Next-Gen Infrastructure
            </AnimatedTitle>
            <AnimatedParagraph
              delay={0.2}
              className="text-white/40 text-lg leading-relaxed mb-10"
            >
              Our proprietary technology stack is built from the ground up for
              the demands of tomorrow. Every layer optimized for speed,
              security, and scalability.
            </AnimatedParagraph>

            {/* Metrics */}
            <FadeIn delay={0.3}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                  >
                    <div className="text-2xl font-display font-bold text-accent">
                      {m.value}
                    </div>
                    <div className="text-white/30 text-xs font-mono uppercase tracking-wider mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Terminal mockup */}
            <FadeIn delay={0.4}>
              <div className="rounded-xl bg-dark-900/80 border border-white/[0.06] p-4 font-mono text-xs">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-white/20 ml-2">nexus-cli</span>
                </div>
                <div className="space-y-1 text-white/40">
                  <p>
                    <span className="text-accent">$</span> nexus deploy --region
                    global
                  </p>
                  <p className="text-white/20">
                    ⠋ Deploying to 42 edge nodes...
                  </p>
                  <p className="text-green-400/60">
                    ✓ Deployed in 2.3s across all regions
                  </p>
                  <p>
                    <span className="text-accent">$</span> nexus status
                  </p>
                  <p className="text-white/20">
                    ℹ All systems nominal · 2.4M req/s · P99: 2.1ms
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right - Tech stack */}
          <div className="space-y-4">
            {techStack.map((tech, i) => (
              <GlassCard
                key={i}
                delay={i * 0.08}
                className="p-5 flex items-start gap-4 group"
              >
                <span className="text-2xl mt-1">{tech.icon}</span>
                <div>
                  <h4 className="text-white font-display font-semibold text-lg group-hover:text-accent transition-colors">
                    {tech.name}
                  </h4>
                  <p className="text-white/30 text-sm font-body mt-1">
                    {tech.detail}
                  </p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-white/20">
                  →
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
