"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function RollingText({
  text,
  className,
  icon,
  isHovered: externalHovered,
}: {
  text: string;
  className?: string;
  icon?: React.ReactNode;
  isHovered?: boolean;
}) {
  const [internalHovered, setInternalHovered] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (externalHovered !== undefined) return;

    // Automatically bind to the nearest button, link, or clickable wrapper
    const parent = containerRef.current?.closest("button, a, [role='button']");
    if (!parent) return;

    const onEnter = () => setInternalHovered(true);
    const onLeave = () => setInternalHovered(false);

    parent.addEventListener("mouseenter", onEnter);
    parent.addEventListener("mouseleave", onLeave);

    return () => {
      parent.removeEventListener("mouseenter", onEnter);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, [externalHovered]);

  const isHovered = externalHovered !== undefined ? externalHovered : internalHovered;
  const stagger = Math.min(0.025, 0.3 / (text.length || 1));

  let runningIndex = 0;
  const words = text.split(" ").map((word, wIdx) => {
    const chars = word.split("").map((char) => ({
      char,
      index: runningIndex++,
    }));
    runningIndex++;
    return { word, chars, wIdx };
  });

  return (
    <motion.span
      ref={containerRef}
      initial="initial"
      animate={isHovered ? "hover" : "initial"}
      className={cn("relative inline", className)}
    >
      {words.map(({ chars, wIdx }) => (
        <span key={wIdx} className="inline-block whitespace-nowrap">
          <span className="relative inline-block overflow-hidden align-top">
            {/* Primary Layer */}
            <span className="inline-block">
              {chars.map(({ char, index }) => (
                <motion.span
                  key={index}
                  variants={{
                    initial: { y: 0 },
                    hover: { y: "-100%" },
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.33, 1, 0.68, 1],
                    delay: index * stagger,
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>

            {/* Secondary Layer (starts below, rolls into place on hover) */}
            <span className="absolute inset-0 inline-block pointer-events-none" aria-hidden="true">
              {chars.map(({ char, index }) => (
                <motion.span
                  key={index}
                  variants={{
                    initial: { y: "100%" },
                    hover: { y: 0 },
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.33, 1, 0.68, 1],
                    delay: index * stagger,
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </span>

          {wIdx < words.length - 1 && <span className="inline">&nbsp;</span>}
        </span>
      ))}

      {icon && (
        <span className="relative inline-flex items-center ml-1.5 align-middle overflow-hidden">
          <motion.span
            variants={{
              initial: { y: 0 },
              hover: { y: "-100%" },
            }}
            transition={{
              duration: 0.35,
              ease: [0.33, 1, 0.68, 1],
              delay: text.length * stagger + 0.08,
            }}
            className="inline-flex"
          >
            {icon}
          </motion.span>
          <motion.span
            variants={{
              initial: { y: "100%" },
              hover: { y: 0 },
            }}
            transition={{
              duration: 0.35,
              ease: [0.33, 1, 0.68, 1],
              delay: text.length * stagger + 0.08,
            }}
            className="absolute inset-0 inline-flex pointer-events-none"
            aria-hidden="true"
          >
            {icon}
          </motion.span>
        </span>
      )}
    </motion.span>
  );
}
