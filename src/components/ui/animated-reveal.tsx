"use client";

import React from "react";
import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface AnimatedRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export function AnimatedReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedRevealProps) {
  const offset = offsets[direction];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
