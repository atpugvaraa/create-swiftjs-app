"use client";
import React, { CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ViewProps } from "@/swiftui/types";

// Define possible transition types
type TransitionType = "opacity" | "slide" | "scale";

interface TransitionProps extends ViewProps {
  // The type of transition to apply
  type: TransitionType;
  // Controls the visibility of the component
  isActive: boolean;
}

export const Transition: React.FC<TransitionProps> = ({
  children,
  type,
  isActive,
  className = "",
  style,
  ...props
}) => {
  const variants = {
    opacity: {
      enter: { opacity: 1 },
      exit: { opacity: 0 },
    },
    slide: {
      enter: { x: 0 },
      exit: { x: "-100%" },
    },
    scale: {
      enter: { scale: 1 },
      exit: { scale: 0 },
    },
  };

  const combinedStyle: CSSProperties = {
    ...style,
  };

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial="exit"
          animate="enter"
          exit="exit"
          variants={variants[type]}
          className={className}
          style={combinedStyle}
          {...props}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
