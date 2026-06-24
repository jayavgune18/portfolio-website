import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const variants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
  flipIn: {
    hidden: { opacity: 0, rotateX: 90 },
    visible: { opacity: 1, rotateX: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
  clipIn: {
    hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
    visible: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  },
};

export default function AnimatedSection({
  children,
  variant = "fadeInUp",
  className = "",
  delay = 0,
  duration,
  once = true,
  margin = "-50px",
  style = {},
  as = "div",
  parallax = false,
  parallaxSpeed = 0.3,
  ...props
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [parallaxSpeed * 100, parallaxSpeed * -100]);

  const selectedVariant = variants[variant] || variants.fadeInUp;

  const CustomTag = motion[as] || motion.div;

  const combinedStyle = parallax ? { ...style, y: parallaxY } : style;

  // For clip-path variant, use whileInView for better performance
  if (variant === "clipIn") {
    return (
      <div ref={ref} className={className} {...props}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once, margin }}
          variants={selectedVariant}
          style={combinedStyle}
          transition={{ delay, duration }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <CustomTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedVariant}
      style={combinedStyle}
      transition={{ delay, duration }}
      {...props}
    >
      {children}
    </CustomTag>
  );
}

export function StaggerItem({ children, className = "", ...props }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}