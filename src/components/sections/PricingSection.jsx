import { useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionBadge from "../ui/SectionBadge";
import { AnimatedTitle, AnimatedParagraph } from "../ui/AnimatedText";

const plans = [
  {
    name: "Essential",
    price: "$19",
    period: "/user/mo",
    description: "Perfect for small teams getting started with cloud phone.",
    features: [
      "Unlimited domestic calling",
      "HD Voice quality",
      "Auto-attendant",
      "Voicemail-to-email",
      "Mobile & desktop apps",
    ],
    cta: "Start Free Trial",
    popular: false,
    gradient: "from-white/5 to-white/[0.02]",
  },
  {
    name: "Professional",
    price: "$29",
    period: "/user/mo",
    description: "For growing teams that need advanced call management.",
    features: [
      "Everything in Essential",
      "Call recording & analytics",
      "IVR / multi-level menus",
      "CRM integrations",
      "Vitel Meet (100 participants)",
      "AI Call Summaries",
      "Priority 24/7 support",
    ],
    cta: "Start Free Trial",
    popular: true,
    gradient: "from-primary/20 to-accent/10",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations needing full control and compliance.",
    features: [
      "Everything in Professional",
      "Unlimited participants",
      "Dedicated account manager",
      "Custom SLA (99.999%)",
      "HIPAA / SOC 2 compliance",
      "SIP trunking options",
      "API access & webhooks",
      "White-label available",
    ],
    cta: "Contact Sales",
    popular: false,
    gradient: "from-white/5 to-white/[0.02]",
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
      className="relative min-h-screen flex items-center py-32"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <SectionBadge>Pricing</SectionBadge>
          <AnimatedTitle className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Plans That Scale With You
          </AnimatedTitle>
          <AnimatedParagraph
            delay={0.2}
            className="text-white/40 text-lg max-w-2xl mx-auto mb-8"
          >
            Transparent pricing with no hidden fees. All plans include a 14-day
            free trial with full features.
          </AnimatedParagraph>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span
              className={`text-sm ${!annual ? "text-white" : "text-white/40"}`}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-12 h-6 rounded-full bg-white/10 border border-white/10 transition-colors"
            >
              <motion.div
                animate={{ x: annual ? 24 : 2 }}
                className="absolute top-1 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent"
              />
            </button>
            <span
              className={`text-sm ${annual ? "text-white" : "text-white/40"}`}
            >
              Annual <span className="text-accent text-xs">(-20%)</span>
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <GlassCard
              key={i}
              delay={i * 0.1}
              className={`p-8 ${plan.popular ? "lg:-mt-4 lg:mb-4 border-primary/30" : ""}`}
              glow={plan.popular}
              glowColor="primary"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-accent rounded-full text-xs font-medium text-white">
                  Most Popular
                </div>
              )}

              <h3 className="text-white font-display font-semibold text-xl mb-2">
                {plan.name}
              </h3>
              <p className="text-white/30 text-sm mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-4xl font-display font-bold text-white">
                  {plan.price === "Custom"
                    ? plan.price
                    : annual
                      ? `$${Math.round(parseInt(plan.price.slice(1)) * 0.8)}`
                      : plan.price}
                </span>
                <span className="text-white/30 text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-3 text-sm text-white/50"
                  >
                    <span className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-3 rounded-full text-sm font-medium transition-colors ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20"
                    : "bg-white/[0.05] text-white/70 border border-white/[0.08] hover:bg-white/[0.08]"
                }`}
              >
                {plan.cta}
              </motion.button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
