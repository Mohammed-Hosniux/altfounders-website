import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variants = {
  primary:
    "bg-gradient-to-r from-cyan-500 to-sky-500 text-white shadow-md shadow-cyan-500/15 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02]",
  secondary:
    "border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300",
  ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 cursor-pointer",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
