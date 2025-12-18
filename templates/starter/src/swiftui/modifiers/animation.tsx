"use client";

import React from "react";
import { motion, AnimatePresence, MotionProps } from "framer-motion";
import { ViewProps } from "@/swiftui/types";

// Animation variants for common SwiftUI animations
export const animationVariants = {
  // Default animations
  default: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },

  // Slide animations
  slide: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },

  // Scale animations
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  },

  // Fade animations
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },

  // Bounce animations
  bounce: {
    initial: { opacity: 0, scale: 0.3 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  },
} as const;

export type AnimationType = keyof typeof animationVariants;

interface MotionModifierProps extends ViewProps {
  children: React.ReactNode;
  type?: AnimationType;
  duration?: number;
  delay?: number;
  repeat?: number;
  whileHover?: MotionProps["whileHover"];
  whileTap?: MotionProps["whileTap"];
  animate?: MotionProps["animate"];
  initial?: MotionProps["initial"];
  exit?: MotionProps["exit"];
  layout?: boolean;
  layoutId?: string;
}

export const MotionModifier: React.FC<MotionModifierProps> = ({
  children,
  type = "default",
  duration = 0.3,
  delay = 0,
  repeat = undefined,
  whileHover,
  whileTap,
  animate,
  initial,
  exit,
  layout = false,
  layoutId,
  className = "",
  style,
  ...props
}) => {
  const animationConfig = animationVariants[type];

  const transition = {
    duration,
    delay,
    repeat,
    ease: "easeInOut" as const,
  };

  const motionProps = {
    className,
    style,
    initial: initial || animationConfig.initial,
    animate: animate || animationConfig.animate,
    exit: exit || animationConfig.exit,
    transition,
    whileHover,
    whileTap,
    layout,
    layoutId,
    ...props,
  };

  return <motion.div {...motionProps}>{children}</motion.div>;
};

// HOC for adding motion to any component
export const withMotion = <P extends object>(
  Component: React.ComponentType<P>,
  animationType: AnimationType = "default",
) => {
  const MotionComponent = React.forwardRef<
    HTMLDivElement,
    P & MotionModifierProps
  >(({ children, type = animationType, ...motionProps }, ref) => {
    return (
      <MotionModifier type={type} {...motionProps} ref={ref}>
        <Component {...(motionProps as P)}>{children}</Component>
      </MotionModifier>
    );
  });

  MotionComponent.displayName = `withMotion(${Component.displayName || Component.name})`;
  return MotionComponent;
};

// AnimatePresence wrapper for enter/exit animations
interface AnimatePresenceWrapperProps extends ViewProps {
  children: React.ReactNode;
  initial?: boolean;
}

export const AnimatePresenceWrapper: React.FC<AnimatePresenceWrapperProps> = ({
  children,
  initial = false,
}) => {
  return <AnimatePresence initial={initial}>{children}</AnimatePresence>;
};
