import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionBadge from "../ui/SectionBadge";
import { AnimatedTitle, AnimatedParagraph, FadeIn } from "../ui/AnimatedText";

const services = [
  {
    number: "01",
    title: "Cloud Infrastructure",
    description:
      "Scalable, secure cloud solutions with automatic provisioning and global distribution.",
    items: [
      "Auto-scaling clusters",
      "CDN integration",
      "Managed databases",
      "Serverless functions",
    ],
  },
  {
    number: "02",
    title: "Communication APIs",
    description:
      "Enterprise-grade voice, video, and messaging APIs with unmatched reliability.",
    items: [
      "Voice SDK",
      "Video conferencing",
      "Chat & messaging",
      "Push notifications",
    ],
  },
  {
    number: "03",
    title: "Network Optimization",
    description:
      "AI-driven network management that ensures peak performance across all touchpoints.",
    items: [
      "Traffic analysis",
      "Route optimization",
      "QoS management",
      "DDoS mitigation",
    ],
  },
  {
    number: "04",
    title: "Security & Compliance",
    description:
      "End-to-end security covering encryption, access control, and regulatory compliance.",
    items: [
      "Zero-trust architecture",
      "SOC 2 / HIPAA",
      "Threat detection",
      "Audit logging",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center py-32"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-20">
          <SectionBadge>Services</SectionBadge>
          <AnimatedTitle className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            End-to-End Solutions
          </AnimatedTitle>
          <AnimatedParagraph
            delay={0.2}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            From infrastructure to security, we provide comprehensive services
            that power the world's most demanding applications.
          </AnimatedParagraph>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <GlassCard key={i} delay={i * 0.1} className="p-8 group" glow>
              <div className="flex items-start gap-6">
                {/* Number */}
                <span className="text-5xl font-display font-bold bg-gradient-to-b from-white/10 to-transparent bg-clip-text text-transparent shrink-0">
                  {service.number}
                </span>

                <div>
                  <h3 className="text-white font-display font-semibold text-xl mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Service items */}
                  <div className="grid grid-cols-2 gap-2">
                    {service.items.map((item, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-2 text-xs text-white/40"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
