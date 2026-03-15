import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionBadge from "../ui/SectionBadge";
import { AnimatedTitle, AnimatedParagraph, FadeIn } from "../ui/AnimatedText";

const services = [
  {
    number: "01",
    title: "Business Phone System",
    description:
      "Complete cloud PBX with HD voice, auto-attendant, call recording, voicemail-to-email, and 70+ enterprise features.",
    items: [
      "HD Voice Calling",
      "Auto-Attendant / IVR",
      "Call Recording",
      "Voicemail Transcription",
    ],
  },
  {
    number: "02",
    title: "Vitel Meet",
    description:
      "HD video conferencing with AI meeting assistant, screen sharing, recording, and real-time transcription.",
    items: [
      "HD Video Meetings",
      "AI Meeting Assistant",
      "Screen Sharing",
      "Meeting Recording",
    ],
  },
  {
    number: "03",
    title: "Team Messaging",
    description:
      "Real-time team collaboration with channels, file sharing, presence indicators, and cross-device sync.",
    items: [
      "Channels & DMs",
      "File Sharing",
      "Presence Indicators",
      "Cross-Device Sync",
    ],
  },
  {
    number: "04",
    title: "Communication APIs",
    description:
      "Programmable voice, SMS, and messaging APIs for developers to embed communications into any application.",
    items: ["Voice API", "SMS API", "WebRTC SDK", "Webhook Events"],
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
            Complete Communication Suite
          </AnimatedTitle>
          <AnimatedParagraph
            delay={0.2}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            Everything your business needs to communicate — voice, video,
            messaging, and APIs — in one unified platform.
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
