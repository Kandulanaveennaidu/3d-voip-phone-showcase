import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionBadge from "../ui/SectionBadge";
import { AnimatedTitle, AnimatedParagraph, FadeIn } from "../ui/AnimatedText";

const techStack = [
  {
    name: "Cloud PBX",
    detail: "Fully managed business phone system in the cloud",
    icon: "☁️",
  },
  {
    name: "SIP Trunking",
    detail: "Reliable, scalable SIP connectivity for any PBX",
    icon: "📞",
  },
  {
    name: "WebRTC Engine",
    detail: "Browser-native calling with zero plugins required",
    icon: "📡",
  },
  {
    name: "AI / ML Pipeline",
    detail: "Real-time speech analytics and call intelligence",
    icon: "🧠",
  },
  {
    name: "End-to-End Encryption",
    detail: "TLS/SRTP securing every call and message",
    icon: "🔐",
  },
  {
    name: "Communication APIs",
    detail: "Voice, SMS, and messaging APIs for developers",
    icon: "🔗",
  },
];

const metrics = [
  { label: "Calls / Hour", value: "1.5M+" },
  { label: "Voice Latency", value: "<50ms" },
  { label: "Countries", value: "100+" },
  { label: "Availability", value: "99.999%" },
];

export default function TechnologySection() {
  return (
    <section
      id="products"
      className="relative min-h-screen flex items-center py-32"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <SectionBadge>Products</SectionBadge>
            <AnimatedTitle className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Built on Enterprise-Grade VoIP Technology
            </AnimatedTitle>
            <AnimatedParagraph
              delay={0.2}
              className="text-white/40 text-lg leading-relaxed mb-10"
            >
              Our cloud communications platform is engineered from the ground up
              for reliability, clarity, and scale — serving 1.5 million calls
              per hour across 100+ countries.
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
                  <span className="text-white/20 ml-2">vitel-cli</span>
                </div>
                <div className="space-y-1 text-white/40">
                  <p>
                    <span className="text-accent">$</span> vitel provision
                    --plan business-pro
                  </p>
                  <p className="text-white/20">⠋ Provisioning Cloud PBX...</p>
                  <p className="text-green-400/60">
                    ✓ PBX ready · 50 extensions · IVR configured
                  </p>
                  <p>
                    <span className="text-accent">$</span> vitel status
                  </p>
                  <p className="text-white/20">
                    ℹ All systems nominal · 1.5M calls/hr · Latency: 32ms
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
