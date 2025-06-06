import { useEffect, useState } from "react";

// Consistent breakpoint constants
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 992,
  desktop: 1200,
};

export function useWindowWidth() {
  // Initialize with a reasonable default instead of 0
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    // Set initial width immediately
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
}

// Helper hooks for common responsive checks
export function useIsMobile() {
  const screenWidth = useWindowWidth();
  return screenWidth < BREAKPOINTS.mobile;
}

export function useIsTablet() {
  const screenWidth = useWindowWidth();
  return screenWidth >= BREAKPOINTS.mobile && screenWidth < BREAKPOINTS.desktop;
}

export function useIsDesktop() {
  const screenWidth = useWindowWidth();
  return screenWidth >= BREAKPOINTS.desktop;
}

// Hook to get proper theme attributes for responsive design
export function useResponsiveTheme() {
  const isMobile = useIsMobile();

  return {
    "data-typography-mode": isMobile ? "mobile" : "desktop",
    "data-spacing-sizing-mode": isMobile ? "mobile" : "desktop",
  };
}
