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

// Hook for responsive sizing - returns scale factor for medium screens
export function useResponsiveScale() {
  const screenWidth = useWindowWidth();
  const isMobile = useIsMobile();

  if (isMobile) return 1; // Mobile uses normal scale

  // For screens between 769px and 1440px, scale down proportionally
  if (screenWidth < 1440) {
    return Math.max(0.7, screenWidth / 1440); // Minimum 70% scale
  }

  return 1; // Desktop uses normal scale
}
