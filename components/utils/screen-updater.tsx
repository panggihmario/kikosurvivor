"use client";

import { useEffect } from "react";

export function ScreenSizeUpdater() {
  useEffect(() => {
    const updateVars = () => {
      document.documentElement.style.setProperty(
        "--screen-width",
        `${window.innerWidth}px`
      );
    };

    updateVars();
    window.addEventListener("resize", updateVars);

    return () => window.removeEventListener("resize", updateVars);
  }, []);

  return null;
}
