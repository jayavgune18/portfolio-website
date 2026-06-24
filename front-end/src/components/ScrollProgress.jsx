import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <>
      {/* Main progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[100] origin-left"
        style={{ scaleX, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink" />
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink blur-[4px] opacity-60" />
      </motion.div>

      {/* Percentage indicator */}
      <motion.div
        className="fixed top-4 right-6 z-[100] text-[10px] font-mono font-bold tracking-wider"
        style={{ opacity }}
      >
        <motion.span
          className="text-gradient"
          style={{ opacity: useTransform(scrollYProgress, [0.05, 0.1], [0, 1]) }}
        >
          {useTransform(scrollYProgress, (v) => `${Math.round(v * 100)}%`)}
        </motion.span>
      </motion.div>
    </>
  );
}
