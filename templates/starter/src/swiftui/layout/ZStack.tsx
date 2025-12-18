import React, { CSSProperties, ReactElement } from "react";
import { ViewProps } from "@/swiftui/types";

interface ZStackProps extends ViewProps {
  alignment?:
    | "top"
    | "center"
    | "bottom"
    | "leading"
    | "trailing"
    | "topLeading"
    | "topTrailing"
    | "bottomLeading"
    | "bottomTrailing";
}

export const ZStack: React.FC<ZStackProps> = ({
  children,
  alignment = "center",
  className = "",
  style,
  ...props
}) => {
  const alignMap = {
    top: "items-start justify-items-center",
    center: "items-center justify-items-center",
    bottom: "items-end justify-items-center",
    leading: "items-center justify-items-start",
    trailing: "items-center justify-items-end",
    topLeading: "items-start justify-items-start",
    topTrailing: "items-start justify-items-end",
    bottomLeading: "items-end justify-items-start",
    bottomTrailing: "items-end justify-items-end",
  };

  const childrenWithPosition = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const childElement = child as ReactElement<{ className?: string }>;
      return React.cloneElement(childElement, {
        className: `col-start-1 row-start-1 z-0 ${childElement.props.className || ""}`,
      });
    }
    // Wrap non-element children (like text strings) in a div to ensure they stack correctly
    return <div className="col-start-1 row-start-1 z-0">{child}</div>;
  });

  return (
    <div
      className={`grid grid-cols-1 grid-rows-1 ${alignMap[alignment]} ${className}`}
      style={style}
      {...props}
    >
      {childrenWithPosition}
    </div>
  );
};
