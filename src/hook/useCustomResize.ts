import { useEffect } from "react";

export function useCustomResize(callback: () => void) {
  useEffect(() => {
    const handleResize = () => {
      callback();
    };

    // Run once on mount
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [callback]);
}
