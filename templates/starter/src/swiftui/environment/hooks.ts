import { useContext } from "react";
import { EnvironmentContext } from "./Provider";

export const useEnvironment = () => {
  return useContext(EnvironmentContext);
};
