import { useState, useEffect, useCallback, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FiArrowDown, FiGithub, FiLinkedin, FiInstagram, FiArrowRight } from "react-icons/fi";
import profile from "../assets/profile.jpeg";
import { useTheme } from "../hooks/useTheme";
import ScrambleText from "./ui/ScrambleText";
import MagneticButton from "./ui/MagneticButton";

const roles = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Software Engineer",
];

// ─── Variants ───────────────────────────────────────────
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── Character-reveal for heading ───────────────────────
function AnimatedHeading({ text, isGradient = false }) {
  return (
    <span className="inline-flex flex-wrap">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className={`inline-block ${isGradient ? "text-gradient" : ""}`}
          initial={{ opacity: 0, y: 40, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.4 + i * 0.04,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const sectionRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // ─── Scroll-driven animations ──────────────────────────
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.4]);
  const meshScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const particleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // ─── Mouse-tracking parallax ───────────────────────────
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothMouseX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const smoothMouseY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  const handleMouseMove = useCallback((e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  // ─── 3D tilt for profile card ──────────────────────────
  const rotateX = useTransform(smoothMouseY, [0, 1], [6, -6]);
  const rotateY = useTransform(smoothMouseX, [0, 1], [-6, 6]);
  const shadowX = useTransform(smoothMouseX, [0, 1], [-20, 20]);
  const shadowY = useTransform(smoothMouseY, [0, 1], [20, -20]);

  // ─── Mesh blob positions driven by mouse ───────────────
  const blob1X = useTransform(smoothMouseX, [0, 1], [-30, 30]);
  const blob1Y = useTransform(smoothMouseY, [0, 1], [-20, 20]);
  const blob2X = useTransform(smoothMouseX, [0, 1], [20, -20]);
  const blob2Y = useTransform(smoothMouseY, [0, 1], [15, -15]);
  const blob3X = useTransform(smoothMouseX, [0, 1], [-15, 15]);
  const blob3Y = useTransform(smoothMouseY, [0, 1], [-10, 10]);

  // ─── Typing effect ─────────────────────────────────────
  const type = useCallback(() => {
    const currentRole = roles[roleIndex];
    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText(displayText.slice(0, -1));
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return;
      }
    }
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [type, isDeleting]);

  // ─── Advanced particles ────────────────────────────────
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 5 + 1.5,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 8,
    driftX: (Math.random() - 0.5) * 40,
    driftY: (Math.random() - 0.5) * 40,
    hue: Math.random() > 0.5 ? 187 : Math.random() > 0.5 ? 239 : 300, // cyan / indigo / pink
  }));

  // Icon badges that orbit the profile
  const orbitBadges = [
    { label: "React", angle: 0, color: "from-neon-cyan to-neon-blue" },
    { label: "Node.js", angle: 120, color: "from-neon-purple to-neon-pink" },
    { label: "MongoDB", angle: 240, color: "from-neon-blue to-neon-purple" },
  ];

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ─── Animated Gradient Mesh Background (mouse-driven + scroll) ─── */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y: bgY, scale: meshScale }}>
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full"
          style={{
            x: blob1X,
            y: blob1Y,
            background: isLight
              ? "radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[30%] right-[-10%] w-[50%] h-[50%] rounded-full"
          style={{
            x: blob2X,
            y: blob2Y,
            background: isLight
              ? "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[30%] w-[40%] h-[40%] rounded-full"
          style={{
            x: blob3X,
            y: blob3Y,
            background: isLight
              ? "radial-gradient(circle, rgba(167,139,250,0.18) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)",
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* ─── Advanced Floating Particles (40 particles with drift & hue) ─── */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity: particleOpacity }}>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              backgroundColor: isLight
                ? `hsla(${p.hue}, 80%, 50%, 0.5)`
                : `hsla(${p.hue}, 80%, 70%, 0.3)`,
              boxShadow: `0 0 ${p.size * 2}px hsla(${p.hue}, 80%, 60%, 0.2)`,
            }}
            animate={{
              y: [0, p.driftY, 0],
              x: [0, p.driftX, 0],
              opacity: [0, 0.9, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* ─── Main Content (scroll-driven parallax) ─── */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 w-full"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* ─── Left Content ─── */}
          <motion.div
            className="flex-1 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
              variants={itemVariants}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm text-white/60 font-inter">
                Open to opportunities
              </span>
            </motion.div>

            {/* Heading with character reveal */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-outfit leading-[1.05] mb-6"
              variants={itemVariants}
            >
              <span className="text-white">
                <AnimatedHeading text="Hi, I'm " />
              </span>
              <AnimatedHeading text="Jay Avgune" isGradient />
            </motion.h1>

            {/* Animated Role Text with Typing Effect */}
            <motion.div
              className="mb-8 h-14"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg text-white/40 font-inter">I'm a</span>
                <span
                  className="text-2xl md:text-3xl font-bold font-outfit text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(135deg, #06b6d4, #6366f1)`,
                  }}
                >
                  {displayText}
                </span>
                <motion.span
                  className="w-[3px] h-8 bg-neon-cyan"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed mb-10 font-inter"
              variants={itemVariants}
            >
              I build modern, performant web applications with clean architecture.
              Passionate about crafting exceptional digital experiences that
              make a real impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              variants={itemVariants}
            >
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] active:scale-95 cursor-pointer"
              >
                <span className="relative z-10">Get In Touch</span>
                <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </ScrollLink>

              <a
                href="/Jay_Avgune_Resume.pdf"
                download="Jay_Avgune_Resume.pdf"
                className="group relative inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white rounded-full hover:border-neon-cyan/50 hover:bg-white/5 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>Download Resume</span>
                <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
              </a>

              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className="group inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white rounded-full hover:border-neon-purple/50 hover:bg-white/5 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>View Projects</span>
                <FiArrowDown className="group-hover:translate-y-1 transition-transform" />
              </ScrollLink>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-4 mt-12"
              variants={itemVariants}
            >
              <span className="text-sm text-white/20 font-inter">Connect</span>
              <div className="w-12 h-[1px] bg-white/10" />
              <div className="flex items-center gap-3">
                {[
                  { icon: <FiGithub size={18} />, href: "https://github.com/jayavgune18" },
                  { icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com/in/jay-avgune-1316b323a/" },
                  { icon: <FiInstagram size={18} />, href: "https://www.instagram.com/jay.avgune" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white/40 hover:text-white hover:border-neon-cyan/30 transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ─── Right - Profile Image with 3D Tilt & Orbit Badges ─── */}
          <motion.div
            className="flex-shrink-0"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: 1000,
            }}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <div className="relative">
              {/* Subtle glow behind image */}
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-br from-neon-cyan/20 via-neon-purple/10 to-transparent blur-2xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Clean circular frame */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                {/* Gradient border ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan via-neon-purple to-neon-blue p-[3px]">
                  <div className={`w-full h-full rounded-full ${isLight ? 'bg-white' : 'bg-dark-bg'}`} />
                </div>

                {/* Image */}
                <div className="absolute inset-[4px] rounded-full overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t ${isLight ? 'from-white/40' : 'from-dark-bg/40'} via-transparent to-transparent z-10`} />
                  <img
                    src={profile}
                    alt="Jay Avgune"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/320?text=JA";
                    }}
                  />
                </div>

                {/* Status indicator dot */}
                <motion.div
                  className="absolute bottom-6 right-6 z-20"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className={`relative inline-flex rounded-full h-4 w-4 bg-green-500 ring-2 ${isLight ? 'ring-white' : 'ring-dark-bg'}`} />
                  </span>
                </motion.div>
              </div>

              {/* ─── Orbiting tech badges ─── */}
              {orbitBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  className="absolute z-20"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 4,
                  }}
                >
                  <motion.div
                    className="px-3 py-1.5 rounded-full glass-panel border border-white/10 backdrop-blur-sm whitespace-nowrap"
                    style={{
                      transform: `rotate(${badge.angle}deg) translateY(-130px)`,
                      transformStyle: "preserve-3d",
                    }}
                    whileHover={{ scale: 1.15 }}
                  >
                    <span className={`text-xs font-bold bg-gradient-to-r ${badge.color} bg-clip-text text-transparent`}>
                      {badge.label}
                    </span>
                  </motion.div>
                </motion.div>
              ))}

              {/* Floating badges */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full glass-panel border border-white/10 backdrop-blur-sm z-20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-sm font-bold text-gradient">4+ Projects</span>
              </motion.div>
              <motion.div
                className="absolute -top-3 -right-3 px-4 py-2 rounded-full glass-panel border border-white/10 backdrop-blur-sm z-20"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-sm font-bold text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #6366f1, #a78bfa)" }}>
                  CS Student
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ─── Scroll Indicator ─── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className={`text-xs ${isLight ? 'text-black/30' : 'text-white/20'} font-inter tracking-widest uppercase`}>
          Scroll
        </span>
        <motion.div
          className={`w-6 h-10 rounded-full ${isLight ? 'border-black/10' : 'border-white/10'} flex items-start justify-center p-1.5`}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}