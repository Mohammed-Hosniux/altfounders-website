import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

const variants = {
  default: "bg-slate-100 text-slate-600 border border-slate-200",
  accent: "bg-cyan-50 text-cyan-700 border border-cyan-200/60",
  outline: "border border-slate-200 text-slate-500",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
