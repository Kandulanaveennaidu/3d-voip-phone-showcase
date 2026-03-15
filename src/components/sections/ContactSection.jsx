import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionBadge from "../ui/SectionBadge";
import { AnimatedTitle, AnimatedParagraph, FadeIn } from "../ui/AnimatedText";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center py-32"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionBadge>Contact</SectionBadge>
            <AnimatedTitle className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Let's Transform Your Communications
            </AnimatedTitle>
            <AnimatedParagraph
              delay={0.2}
              className="text-white/40 text-lg leading-relaxed mb-10"
            >
              Ready to upgrade to a smarter phone system? Our VoIP experts will
              help you find the perfect plan for your business.
            </AnimatedParagraph>

            <FadeIn delay={0.3}>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-white/40">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-sm">
                    ✉
                  </div>
                  <span className="text-sm">sales@vitelglobal.com</span>
                </div>
                <div className="flex items-center gap-4 text-white/40">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-sm">
                    📍
                  </div>
                  <span className="text-sm">Dallas, TX · Hyderabad, India</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right - Form */}
          <FadeIn delay={0.2} direction="left">
            <GlassCard className="p-8" hover={false} glow glowColor="primary">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-white/30 text-xs font-mono uppercase tracking-wider mb-2 block">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:border-primary/50 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-white/30 text-xs font-mono uppercase tracking-wider mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:border-primary/50 focus:outline-none transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white/30 text-xs font-mono uppercase tracking-wider mb-2 block">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:border-primary/50 focus:outline-none transition-colors"
                    placeholder="Acme Inc"
                  />
                </div>

                <div>
                  <label className="text-white/30 text-xs font-mono uppercase tracking-wider mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:border-primary/50 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-primary to-accent rounded-xl text-white font-medium text-sm shadow-lg shadow-primary/20"
                >
                  Request a Callback
                </motion.button>
              </form>
            </GlassCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
