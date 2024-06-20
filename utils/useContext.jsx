import { useContext } from "react";
import { WindowSizeContext } from "./windowSizeContext";

export const useWindowSize = () => {
  const context = useContext(WindowSizeContext);
  if (!context) {
    throw new Error("useWindowSize must be used within a WindowSizeProvider");
  }
  return context;
};
