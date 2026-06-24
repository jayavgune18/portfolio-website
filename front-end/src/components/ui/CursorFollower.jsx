import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower({ enabled = true }) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { damping: 25, stiffness: 150 });
  const smoothY = useSpring(cursorY, { damping: 25, stiffness: 150 });
  const isHoveringRef = useRef(false);
  const dotRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.classList.contains("cursor-pointer");

      if (isClickable && dotRef.current) {
        dotRef.current.style.width = "40px";
        dotRef.current.style.height = "40px";
        dotRef.current.style.borderColor = "rgba(6, 182, 212, 0.5)";
        dotRef.current.style.backgroundColor = "rgba(6, 182, 212, 0.05)";
        isHoveringRef.current = true;
      } else if (dotRef.current) {
        dotRef.current.style.width = "16px";
        dotRef.current.style.height = "16px";
        dotRef.current.style.borderColor = "rgba(6, 182, 212, 0.3)";
        dotRef.current.style.backgroundColor = "transparent";
        isHoveringRef.current = false;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [enabled, cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      ref={dotRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-neon-cyan/30 transition-all duration-200 ease-out hidden md:block"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
        width: 16,
        height: 16,
        backgroundColor: "transparent",
        backdropFilter: "blur(4px)",
      }}
    />
  );
}