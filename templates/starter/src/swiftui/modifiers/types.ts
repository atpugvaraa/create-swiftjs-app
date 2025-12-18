import { CSSProperties, ReactNode } from "react";

// Every Swift View, when transpiled, can accept these props
export interface ViewProps {
  children?: ReactNode;
  style?: CSSProperties; // The transpiler will put .padding() here
  className?: string;
  id?: string;
}
