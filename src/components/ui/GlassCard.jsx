import { motion } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
  glow = false,
  glowColor = "primary",
}) {
  const glowClasses = {
    primary: "shadow-primary/20",
    accent: "shadow-accent/20",
    neon: "shadow-neon/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={`
        relative rounded-2xl
        bg-white/[0.03] backdrop-blur-xl
        border border-white/[0.06]
        overflow-hidden
        ${glow ? `shadow-2xl ${glowClasses[glowColor]}` : ""}
        ${className}
      `}
    >
      {/* Gradient border shine */}
      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
