import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionBadge from "../ui/SectionBadge";
import { AnimatedTitle, AnimatedParagraph, FadeIn } from "../ui/AnimatedText";

const features = [
  {
    icon: "⚡",
    title: "Ultra-Low Latency",
    description:
      "Sub-millisecond response times powered by edge computing infrastructure distributed across 150+ global nodes.",
    color: "from-primary to-purple-400",
  },
  {
    icon: "🛡️",
    title: "Quantum Encryption",
    description:
      "Military-grade, quantum-resistant encryption protecting every byte of data in transit and at rest.",
    color: "from-accent to-blue-400",
  },
  {
    icon: "🤖",
    title: "AI-Powered Routing",
    description:
      "Intelligent traffic routing that adapts in real-time using machine learning for optimal performance.",
    color: "from-neon to-pink-400",
  },
  {
    icon: "🌐",
    title: "Global Mesh Network",
    description:
      "Decentralized architecture ensuring 99.999% uptime with automatic failover and self-healing capabilities.",
    color: "from-green-400 to-accent",
  },
  {
    icon: "📊",
    title: "Real-Time Analytics",
    description:
      "Deep insights into network performance with customizable dashboards and predictive analytics.",
    color: "from-yellow-400 to-primary",
  },
  {
    icon: "🔗",
    title: "Seamless Integration",
    description:
      "RESTful APIs and SDKs for every major platform, enabling integration in minutes, not months.",
    color: "from-primary to-accent",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative min-h-screen flex items-center py-32"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-20">
          <SectionBadge>Features</SectionBadge>
          <AnimatedTitle className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Engineered for Excellence
          </AnimatedTitle>
          <AnimatedParagraph
            delay={0.2}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            Every feature is meticulously crafted to deliver uncompromising
            performance, security, and reliability at any scale.
          </AnimatedParagraph>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <GlassCard key={i} delay={i * 0.08} className="p-8 group" glow>
              {/* Icon */}
              <div className="text-3xl mb-4">{feature.icon}</div>

              {/* Gradient line */}
              <div
                className={`w-12 h-0.5 bg-gradient-to-r ${feature.color} mb-5 group-hover:w-20 transition-all duration-500`}
              />

              {/* Title */}
              <h3 className="text-white font-display font-semibold text-xl mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-white/35 text-sm leading-relaxed font-body">
                {feature.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
