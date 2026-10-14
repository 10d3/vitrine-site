import React from "react";
import { cn } from "@/lib/utils";

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  variant?: string;
  cardClassName?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

/**
 * Clean div-based Section Wrapper for landing page sections.
 * Normalizes scroll-margins, responsive vertical spacing, and full width without card or container boxes.
 */
export function SectionWrapper({
  id,
  className,
  cardClassName,
  containerClassName,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <div
      id={id}
      className={cn(
        "w-full py-12 md:py-20 px-4 md:px-0 scroll-mt-20 md:scroll-mt-24",
        className,
        containerClassName,
        cardClassName
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { SectionHeader } from "./section-header";
export type { SectionHeaderProps } from "./section-header";
