import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import SectionBadge from "../ui/SectionBadge";
import { AnimatedTitle, AnimatedParagraph } from "../ui/AnimatedText";
import DeskModelViewer from "../3d/objects/DeskModelViewer";

const products = [
  {
    id: "nexus-core",
    name: "Nexus Core",
    category: "Infrastructure",
    description:
      "The foundational platform powering all Nexus services. Enterprise-grade reliability with consumer-grade simplicity.",
    features: [
      "Auto-scaling",
      "Multi-region",
      "Zero-downtime deploys",
      "Built-in CDN",
    ],
    gradient: "from-primary to-purple-500",
  },
  {
    id: "nexus-connect",
    name: "Nexus Connect",
    category: "Communication",
    description:
      "Real-time communication SDK supporting voice, video, and messaging with crystal-clear quality.",
    features: [
      "HD Voice/Video",
      "E2E Encryption",
      "Screen sharing",
      "Recording",
    ],
    gradient: "from-accent to-blue-500",
  },
  {
    id: "nexus-mesh",
    name: "Nexus Mesh",
    category: "Networking",
    description:
      "Intelligent network mesh that optimizes traffic routing using AI-powered predictive algorithms.",
    features: [
      "AI Routing",
      "Load balancing",
      "DDoS protection",
      "Traffic analytics",
    ],
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
            Interactive Product Showcase
          </AnimatedTitle>
          <AnimatedParagraph
            delay={0.2}
            className="text-white/40 text-lg max-w-2xl mx-auto"
          >
            Explore our suite of products designed to transform how you build,
            connect, and scale.
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
