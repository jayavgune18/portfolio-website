import { motion } from "framer-motion";
import { FiHeart, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-outfit font-bold tracking-tight">
              <span className="text-gradient">J</span>
              <span className="text-white/20">.</span>
              <span className="text-white/60">A</span>
            </span>
            <p className="text-sm text-white/20 font-inter mt-1">
              Designed & built with precision
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/30 hover:text-white/60 transition-colors font-inter"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-white/20 font-inter flex items-center gap-1">
              © 2026 Made with <FiHeart size={12} className="text-neon-pink" /> by Jay Avgune
            </p>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/40 hover:text-white hover:border-neon-cyan/30 transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}