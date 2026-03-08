"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

const offsets = {
  up: { y: 60, x: 0 },
  left: { y: 0, x: -60 },
  right: { y: 0, x: 60 },
};

export function AnimateOnScroll({
  children,
  delay = 0,
  direction = "up",
  className,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const offset = offsets[direction];

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        filter: "blur(8px)",
        scale: 0.97,
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)", scale: 1 }
          : undefined
      }
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
