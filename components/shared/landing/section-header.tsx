"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./ui/eyebrow";

export interface SectionHeaderProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  eyebrowClassName?: string;
  children?: React.ReactNode;
  animate?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  as: HeadingTag = "h2",
  className,
  titleClassName,
  descriptionClassName,
  eyebrowClassName,
  children,
  animate = true,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  const content = (
    <div
      className={cn(
        "flex flex-col",
        isCenter ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left max-w-4xl",
        "mb-10 sm:mb-12 md:mb-16",
        className
      )}
    >
      {eyebrow && (
        <div className={cn(isCenter ? "mx-auto" : "", eyebrowClassName)}>
          {typeof eyebrow === "string" ? <Eyebrow>{eyebrow}</Eyebrow> : eyebrow}
        </div>
      )}

      <HeadingTag
        className={cn(
          "mt-4 text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground",
          isCenter ? "text-center" : "text-left",
          titleClassName
        )}
      >
        {title}
      </HeadingTag>

      {description && (
        <div
          className={cn(
            "mt-4 sm:mt-5 text-pretty leading-relaxed text-muted-foreground text-base sm:text-lg md:text-xl",
            isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left",
            descriptionClassName
          )}
        >
          {description}
        </div>
      )}

      {children && <div className="mt-6 w-full">{children}</div>}
    </div>
  );

  if (!animate) {
    return content;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      {content}
    </motion.div>
  );
}
