"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useMemo } from "react";

type BlurFadeTextTag = "span" | "h1" | "h2" | "h3" | "p";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
  /** HTML tag to render (semantic headings for SEO). Defaults to "span". */
  as?: BlurFadeTextTag;
}

const tagMap = {
  span: motion.span,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
} as const;

const BlurFadeText = ({
  text,
  className,
  variant,
  characterDelay = 0.03,
  duration=0.4,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
  as = "span",
}: BlurFadeTextProps) => {
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;
  const characters = useMemo(() => Array.from(text), [text]);
  const MotionTag = tagMap[as];

  if (animateByCharacter) {
    return (
      <div className="flex">
        <AnimatePresence>
          {characters.map((char, i) => (
            <MotionTag
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={combinedVariants}
              transition={{
                // yoyo: Infinity,
                duration,
                delay: delay + i * characterDelay,
                ease: "easeOut",
              }}
              className={cn("inline-block", className)}
              style={{ width: char.trim() === "" ? "0.2em" : "auto" }}
            >
              {char}
            </MotionTag>
          ))}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="flex">
      <AnimatePresence>
        <MotionTag
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={combinedVariants}
          transition={{
            // yoyo: Infinity,
            duration,
            delay,
            ease: "easeOut",
          }}
          className={cn("inline-block", className)}
        >
          {text}
        </MotionTag>
      </AnimatePresence>
    </div>
  );
};

export default BlurFadeText;
