"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";

export default function ScrollRevealText({
  text,
  className,
}: {
  text: string | string[];
  className?: string;
}) {
  const paragraphs = Array.isArray(text) ? text : [text];
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.25"],
  });

  // Split all paragraphs into words & calculate total words across all of them
  const allParagraphWords = paragraphs.map((p) => p.split(" "));
  const totalWords = allParagraphWords.reduce((acc, words) => acc + words.length, 0);

  let globalWordIndex = 0;

  return (
    <div ref={containerRef} className="space-y-4">
      {allParagraphWords.map((words, pIndex) => (
        <p key={pIndex} className={cn(className)}>
          {words.map((word, i) => {
            const currentIndex = globalWordIndex++;
            const start = currentIndex / totalWords;
            const end = (currentIndex + 1) / totalWords;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      ))}
    </div>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.25em]">
      {children}
    </motion.span>
  );
}
