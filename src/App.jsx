import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { useResponsiveScale } from "./breakpoints";
import { AboutUsDesktop } from "./screens/AboutUsDesktop";
import { CompaniesSolutions } from "./screens/CompaniesSolutions";
import { ContactUsDesktop } from "./screens/ContactUsDesktop";
import { DivWrapper } from "./screens/DivWrapper";
import { Frame } from "./screens/Frame";
import { FrameScreen } from "./screens/FrameScreen";
import { FrameWrapper } from "./screens/FrameWrapper";
import { Home } from "./screens/Home";
import { HomeMobile } from "./screens/HomeMobile";
import { Screen14 } from "./screens/Screen14";
import { Screen15 } from "./screens/Screen15";
import { Screen16 } from "./screens/Screen16";
import { Screen17 } from "./screens/Screen17";
import { Screen18 } from "./screens/Screen18";
import { Screen19 } from "./screens/Screen19";
import { ShowcaseDesktop } from "./screens/ShowcaseDesktop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/home-mobile",
    element: <HomeMobile />,
  },
  {
    path: "/contact-us-desktop",
    element: <ContactUsDesktop />,
  },
  {
    path: "/about-us-desktop",
    element: <AboutUsDesktop />,
  },
  {
    path: "/companies-u38-solutions-mobile",
    element: <CompaniesSolutions />,
  },
  {
    path: "/showcase-desktop",
    element: <ShowcaseDesktop />,
  },
  {
    path: "/frame-9",
    element: <Frame />,
  },
  {
    path: "/frame-2",
    element: <FrameScreen />,
  },
  {
    path: "/frame-10",
    element: <FrameWrapper />,
  },
  {
    path: "/frame-1",
    element: <DivWrapper />,
  },
  {
    path: "/frame-3",
    element: <Screen14 />,
  },
  {
    path: "/frame-4",
    element: <Screen15 />,
  },
  {
    path: "/frame-5",
    element: <Screen16 />,
  },
  {
    path: "/frame-6",
    element: <Screen17 />,
  },
  {
    path: "/frame-7",
    element: <Screen18 />,
  },
  {
    path: "/frame-8",
    element: <Screen19 />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

export const App = () => {
  const scale = useResponsiveScale();

  const wrapperStyle =
    scale === 1
      ? { width: "100%", overflowX: "hidden" }
      : {
          width: "1440px",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          overflowX: "hidden",
        };

  return (
    <ErrorBoundary>
      <div style={wrapperStyle}>
        <RouterProvider router={router} />
      </div>
    </ErrorBoundary>
  );
};
