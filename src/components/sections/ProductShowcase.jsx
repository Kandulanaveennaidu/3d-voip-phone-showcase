import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionBadge from "../ui/SectionBadge";
import { AnimatedTitle, AnimatedParagraph } from "../ui/AnimatedText";
import DeskModelViewer from "../3d/objects/DeskModelViewer";

const products = [
  {
    id: "vitel-phone",
    name: "Business Phone",
    category: "Cloud PBX",
    description:
      "A full-featured cloud phone system with HD voice, intelligent routing, auto-attendant, and 70+ enterprise calling features.",
    features: [
      "HD Voice",
      "Call Recording",
      "IVR Menus",
      "Voicemail Transcription",
    ],
    gradient: "from-primary to-purple-500",
  },
  {
    id: "vitel-meet",
    name: "Vitel Meet",
    category: "Video Conferencing",
    description:
      "HD video meetings with AI-powered transcription, screen sharing, virtual backgrounds, and meeting recording.",
    features: ["HD Video", "AI Transcription", "Screen Sharing", "Recording"],
    gradient: "from-accent to-blue-500",
  },
  {
    id: "vitel-api",
    name: "Vitel APIs",
    category: "Developer Platform",
    description:
      "Programmable voice, SMS, and messaging APIs that let developers embed communications directly into any app or workflow.",
    features: ["Voice API", "SMS Gateway", "WebRTC SDK", "Webhook Events"],
    gradient: "from-neon to-red-400",
  },
];

export default function ProductShowcase() {
  const [active, setActive] = useState(0);
  const product = products[active];

  return (
    <section
      id="showcase"
      className="relative min-h-screen flex items-center py-32"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <SectionBadge>Products</SectionBadge>
          <AnimatedTitle className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Explore Our Products
          </AnimatedTitle>
          <AnimatedParagraph
            delay={0.2}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            A unified suite of communication tools designed to keep your
            business connected, productive, and ahead.
          </AnimatedParagraph>
        </div>

        {/* Product selector tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {products.map((p, i) => (
            <motion.button
              key={p.id}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20"
                  : "bg-white/[0.04] text-white/50 border border-white/[0.06] hover:text-white/80"
              }`}
            >
              {p.name}
            </motion.button>
          ))}
        </div>

        {/* Product detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard
              className="p-8 md:p-12"
              hover={false}
              glow
              glowColor="primary"
            >
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Left - Info */}
                <div>
                  <span className="text-xs font-mono text-accent uppercase tracking-widest">
                    {product.category}
                  </span>
                  <h3
                    className={`text-3xl md:text-4xl font-display font-bold mt-2 mb-4 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}
                  >
                    {product.name}
                  </h3>
                  <p className="text-white/40 leading-relaxed mb-8">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((f, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-white/50"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {f}
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-white text-sm font-medium"
                  >
                    Learn More →
                  </motion.button>
                </div>

                {/* Right - Interactive 3D Model */}
                <div className="relative h-72 md:h-96">
                  <DeskModelViewer />
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
