"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, type Variants } from "motion/react";

interface InViewRevealProps {
  text: string | string[];
  className?: string;
  as?: "span" | "div" | "p";
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03, // The delay between each word
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    y: "100%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

function MaskedWord({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block overflow-hidden mr-[0.25em] align-bottom">
      <motion.span variants={wordVariants} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
}

export default function InViewReveal({
  text,
  className,
  as = "span",
}: InViewRevealProps) {
  const paragraphs = Array.isArray(text) ? text : [text];

  const MotionComponent = as === "div" ? motion.div : as === "p" ? motion.p : motion.span;

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, margin: "-60px" }}
      className={cn(as === "span" ? "inline" : "block space-y-4", className)}
    >
      {paragraphs.map((p, pIndex) => {
        const words = p.split(" ").map((word, i) => (
          <MaskedWord key={i}>{word}</MaskedWord>
        ));

        if (paragraphs.length === 1 && as === "span") {
          return <React.Fragment key={pIndex}>{words}</React.Fragment>;
        }

        return (
          <span
            key={pIndex}
            className={paragraphs.length > 1 ? "block mb-4 last:mb-0" : "inline"}
          >
            {words}
          </span>
        );
      })}
    </MotionComponent>
  );
}
