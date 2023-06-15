"use client";
import React from "react";
import { motion } from "framer-motion";
import { useStore } from "@/state/store";

export default function PageWrapper({
  children,
  pageNo,
}: {
  children: React.ReactNode;
  pageNo: number;
}) {
  type Motion = {
    initial: { x?: string; opacity?: number; y?: number };
    animate: { x?: string; opacity?: number; y?: number };
    transition: { type: string; duration?: number, stiffness?: number, bounce?: number };
    exit?: { x?: string; opacity?: number; y?: number };
  };

  type MotionProps = {
    [key: string]: Motion;
  };

  const motionMapping: MotionProps = {
    left: {
      initial: { x: "-100vw" },
      animate: { x: "0" },
      transition: { type: "spring", stiffness: 50, bounce: 0 },
    },
    right: {
      initial: { x: "100vw" },
      animate: { x: "0" },
      transition: { type: "spring", stiffness: 50, bounce: 0 },
    },
    fade: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { type: "spring", stiffness: 50 },
    },
  };

  const getAnimationDirection = (
    previous: number | null
  ): "left" | "right" | "fade" => {
    if (previous == null) {
      return "fade";
    }

    if (pageNo >= previous) {
      return "right";
    }
    return "left";
  };

  const previousPageNo = useStore((state) => state.currentPageNo);
  const activeMotion: Motion =
    motionMapping[getAnimationDirection(previousPageNo)];

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
