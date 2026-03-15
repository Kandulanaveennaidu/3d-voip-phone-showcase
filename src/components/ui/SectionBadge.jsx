import { motion } from "framer-motion";

export default function SectionBadge({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      <span className="text-xs font-mono text-white/50 uppercase tracking-widest">
        {children}
      </span>
    </motion.div>
  );
}
