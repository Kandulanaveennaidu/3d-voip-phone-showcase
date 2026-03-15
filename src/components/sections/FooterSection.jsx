import { motion } from "framer-motion";
import { FadeIn } from "../ui/AnimatedText";

const footerLinks = {
  Product: [
    "Features",
    "Pricing",
    "Case Studies",
    "Changelog",
    "Documentation",
  ],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["API Reference", "SDKs", "Status Page", "Community", "Support"],
  Legal: ["Privacy", "Terms", "Security", "Compliance"],
};

export default function FooterSection() {
  return (
    <footer id="footer" className="relative py-20 border-t border-white/[0.04]">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="text-white font-display font-semibold text-xl">
                  NEXUS
                </span>
              </div>
              <p className="text-white/30 text-sm leading-relaxed max-w-xs mb-6">
                Building the future of digital connectivity. Powering the
                world's most demanding applications with next-generation
                infrastructure.
              </p>
              <div className="flex gap-3">
                {["X", "in", "GH", "YT"].map((social, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 text-xs hover:text-white/80 hover:border-white/10 transition-colors"
                  >
                    {social}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-white/60 font-display font-medium text-sm mb-4">
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/30 text-sm hover:text-white/70 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-body">
            &copy; 2026 NEXUS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-white/20 text-xs hover:text-white/50 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/20 text-xs hover:text-white/50 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/20 text-xs hover:text-white/50 transition-colors"
            >
              Cookie Preferences
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
