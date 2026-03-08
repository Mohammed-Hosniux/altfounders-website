import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  gradient?: boolean;
  hover?: boolean;
  className?: string;
}

export function Card({ children, gradient, hover, className }: CardProps) {
  if (gradient) {
    return (
      <div className="rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-500 p-px">
        <div
          className={cn(
            "rounded-[calc(1rem-1px)] bg-white p-6",
            hover && "transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-500/8",
            className
          )}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300",
        hover && "hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-500/8 hover:border-cyan-200",
        className
      )}
    >
      {children}
    </div>
  );
}
