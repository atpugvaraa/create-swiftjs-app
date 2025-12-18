"use client";

import React, { useEffect, useRef } from "react";
import { ViewProps } from "@/swiftui/types";

interface LifecycleModifierProps extends ViewProps {
  children: React.ReactNode;
  onAppear?: () => void;
  onDisappear?: () => void;
}

export const LifecycleModifier: React.FC<LifecycleModifierProps> = ({
  children,
  onAppear,
  onDisappear,
  className = "",
  style,
  ...props
}) => {
  const hasAppeared = useRef(false);

  useEffect(() => {
    // Only call onAppear once when component first mounts
    if (!hasAppeared.current && onAppear) {
      onAppear();
      hasAppeared.current = true;
    }

    // Cleanup function called on unmount
    return () => {
      if (hasAppeared.current && onDisappear) {
        onDisappear();
        hasAppeared.current = false;
      }
    };
  }, [onAppear, onDisappear]);

  return (
    <div className={className} style={style} {...props}>
      {children}
    </div>
  );
};

// HOC for adding lifecycle to any component
export const withLifecycle = <P extends { children?: React.ReactNode }>(
  Component: React.ComponentType<P>,
  options?: { onAppear?: () => void; onDisappear?: () => void },
) => {
  const WrappedComponent = (props: P) => {
    return (
      <LifecycleModifier
        onAppear={options?.onAppear}
        onDisappear={options?.onDisappear}
      >
        <Component {...props} />
      </LifecycleModifier>
    );
  };

  WrappedComponent.displayName = `withLifecycle(${Component.displayName || Component.name})`;
  return WrappedComponent;
};
