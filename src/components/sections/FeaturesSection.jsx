import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionBadge from "../ui/SectionBadge";
import { AnimatedTitle, AnimatedParagraph, FadeIn } from "../ui/AnimatedText";

const features = [
  {
    icon: "📞",
    title: "HD Voice Calling",
    description:
      "Crystal-clear voice quality with advanced noise cancellation and wideband audio across all devices and locations.",
    color: "from-primary to-purple-400",
  },
  {
    icon: "🤖",
    title: "AI Call Summaries",
    description:
      "Automatically transcribe and summarize every call with AI-powered insights, action items, and sentiment analysis.",
    color: "from-accent to-blue-400",
  },
  {
    icon: "📊",
    title: "Smart Call Routing",
    description:
      "Intelligent ACD and skill-based routing that directs callers to the right agent instantly, reducing wait times by 60%.",
    color: "from-neon to-pink-400",
  },
  {
    icon: "🎯",
    title: "Interactive IVR",
    description:
      "Build powerful multi-level IVR menus with drag-and-drop simplicity. Auto-attendant handles calls 24/7.",
    color: "from-green-400 to-accent",
  },
  {
    icon: "🌐",
    title: "Video Conferencing",
    description:
      "Vitel Meet delivers HD video meetings with screen sharing, recording, and AI meeting assistant built in.",
    color: "from-yellow-400 to-primary",
  },
  {
    icon: "🔗",
    title: "CRM Integrations",
    description:
      "Seamlessly connect with Salesforce, HubSpot, Zendesk, Slack, and 100+ apps via API and Zapier.",
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
            Powerful VoIP Features
          </AnimatedTitle>
          <AnimatedParagraph
            delay={0.2}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            Every feature is designed to help your business communicate smarter,
            faster, and more efficiently across every channel.
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
