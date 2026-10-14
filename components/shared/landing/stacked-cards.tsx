"use client";

import React, { createContext, useContext, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, MotionValue } from "motion/react";
import { cn } from "@/lib/utils";

interface StackedCardsContextValue {
  progress: MotionValue<number>;
}

const StackedCardsContext = createContext<StackedCardsContextValue | null>(null);

export function useStackedCardsContext() {
  const context = useContext(StackedCardsContext);
  return context;
}

export interface StackedCardsContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  /** Custom scroll offset for useScroll. Defaults to ['start 96px', 'end end'] */
  offset?: [string, string];
}

/**
 * Container that establishes the scroll track for stacked deck cards.
 * Measures scroll progress and distributes it to child `StackedCard` elements.
 */
export function StackedCardsContainer({
  children,
  className,
  offset = ["start 96px", "end end"],
  ...props
}: StackedCardsContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // @ts-expect-error Motion scroll offset accepts string tuples
    offset,
  });

  return (
    <StackedCardsContext.Provider value={{ progress: scrollYProgress }}>
      <div
        ref={containerRef}
        className={cn(
          "relative w-full [--stack-top:76px] [--stack-gap:14px] md:[--stack-top:96px] md:[--stack-gap:22px]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </StackedCardsContext.Provider>
  );
}

export interface StackedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  index: number;
  total: number;
  /** Minimum scale factor reached when card is buried under all remaining cards (e.g. 0.88) */
  minScale?: number;
  /** Maximum opacity for the depth overlay when card is buried (e.g. 0.35) */
  maxDim?: number;
  /** Optional custom MotionValue override if not using StackedCardsContainer */
  progress?: MotionValue<number>;
  cardClassName?: string;
  children: React.ReactNode;
}

/**
 * Individual card within a stacked deck.
 * Pins to its sticky top position and progressively scales down and dims as newer cards cover it.
 */
export function StackedCard({
  index,
  total,
  minScale = 0.88,
  maxDim = 0.35,
  progress: customProgress,
  className,
  cardClassName,
  children,
  style,
  ...props
}: StackedCardProps) {
  const context = useStackedCardsContext();
  const fallbackProgress = useMotionValue(0);
  const activeProgress = customProgress || context?.progress || fallbackProgress;

  // Fractions across the scroll progress track
  const step = total > 1 ? 1 / (total - 1) : 1;
  const startProgress = index * step;

  // The earlier the card in the stack, the further down it scales
  const targetScale =
    total > 1 ? 1 - ((total - 1 - index) / (total - 1)) * (1 - minScale) : 1;
  const targetDim =
    total > 1 ? maxDim * ((total - 1 - index) / (total - 1)) : 0;

  const scale = useTransform(
    activeProgress,
    [startProgress, 1],
    [1, targetScale],
    { clamp: true }
  );

  const dimOpacity = useTransform(
    activeProgress,
    [startProgress, 1],
    [0, targetDim],
    { clamp: true }
  );

  return (
    <div
      style={{
        top: `calc(var(--stack-top) + ${index} * var(--stack-gap))`,
        ...style,
      }}
      className={cn("sticky w-full mb-6 last:mb-0", className)}
      {...props}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: "top center",
        }}
        className={cn(
          "relative overflow-hidden rounded-3xl border border-border/60 bg-card",
          "shadow-2xl shadow-zinc-950/10 transition-colors",
          cardClassName
        )}
      >
        {/* Subtle foreground/5 tint matching Nexora cards */}
        <div className="pointer-events-none absolute inset-0 bg-foreground/[0.03] rounded-3xl" />

        <div className="relative z-10 size-full">
          {children}
        </div>

        {/* Depth shade overlay that darkens previous cards as newer ones cover them */}
        <motion.div
          style={{ opacity: dimOpacity }}
          className="pointer-events-none absolute inset-0 rounded-3xl bg-black/15 dark:bg-black/35 z-20"
        />
      </motion.div>
    </div>
  );
}
