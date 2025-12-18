import { useContext } from "react";
import { EnvironmentContext } from "../environment/Provider"; // Assuming this context exists

export function useEnvironmentObject<T>(key: string): T | undefined {
  const environment = useContext(EnvironmentContext);
  return environment[key] as T;
}
