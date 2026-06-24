import { useState, useEffect, useRef } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_SPEED = 50;

export default function ScrambleText({
  text,
  className = "",
  as: Tag = "span",
  scramble = true,
  duration = 2,
}) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    if (!scramble) {
      setDisplayText(text);
      return;
    }

    let step = 0;
    const totalSteps = text.length * CYCLES_PER_LETTER;
    const stepDuration = (duration * 1000) / totalSteps;

    const scrambleInterval = setInterval(() => {
      if (!mountedRef.current) return;

      const progress = step / totalSteps;
      const revealCount = Math.floor(progress * text.length);

      const newText = text
        .split("")
        .map((char, i) => {
          if (i < revealCount) return char;
          if (char === " ") return " ";
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplayText(newText);
      step++;

      if (step > totalSteps) {
        setDisplayText(text);
        clearInterval(scrambleInterval);
      }
    }, stepDuration);

    return () => {
      mountedRef.current = false;
      clearInterval(scrambleInterval);
    };
  }, [text, scramble, duration]);

  return <Tag className={className}>{displayText}</Tag>;
}