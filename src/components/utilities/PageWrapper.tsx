"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PageWrapper({
  children,
  animationDirection,
}: {
  children: React.ReactNode;
  animationDirection: "left" | "right" | "fade";
}) {
  type Motion = {
    initial: { x?: string; opacity?: number; y?: number };
    animate: { x?: string; opacity?: number; y?: number };
    transition: { type: string; stiffness: number };
  };

  type MotionProps = {
    [key: string]: Motion;
  };

  const motionMapping: MotionProps = {
    left: {
      initial: { x: "-100vw" },
      animate: { x: "0" },
      transition: { type: "spring", stiffness: 50 },
    },
    right: {
      initial: { x: "100vw" },
      animate: { x: "0" },
      transition: { type: "spring", stiffness: 50 },
    },
    fade: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { type: "spring", stiffness: 50 },
    },
  };

  const activeMotion: Motion = motionMapping[animationDirection];

  return (
    <motion.div
      initial={activeMotion.initial}
      animate={activeMotion.animate}
      transition={activeMotion.transition}
    >
      {children}
    </motion.div>
  );
}
