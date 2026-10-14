import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

/** Pill label sitting above landing section headings */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Badge
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-none",
        className
      )}
    >
      <span className="size-1.5 rounded-full bg-primary" />
      {children}
    </Badge>
  );
}
