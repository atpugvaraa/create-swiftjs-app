import { CSSProperties, ReactNode } from "react";

export interface ViewProps {
  children?: ReactNode;
  className?: string; // For Tailwind classes passed from transpiler
  style?: CSSProperties; // For hard values (like specific padding)
  id?: string;
}

export type Binding<T> = {
  get: () => T;
  set: (value: T) => void;
};
