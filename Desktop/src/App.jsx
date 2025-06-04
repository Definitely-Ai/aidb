import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AboutUsDesktop } from "./screens/AboutUsDesktop/AboutUsDesktop";
import { CompaniesAnd } from "./screens/CompaniesAnd/CompaniesAnd";
import { ContactDesktop } from "./screens/ContactDesktop/ContactDesktop";
import { HomeDesktop } from "./screens/HomeDesktop/HomeDesktop";
import { ShowcaseDesktop } from "./screens/ShowcaseDesktop/ShowcaseDesktop";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomeDesktop />,
  },
  {
    path: "/home-u8226-desktop",
    element: <HomeDesktop />,
  },
  {
    path: "/contact-u8226-desktop",
    element: <ContactDesktop />,
  },
  {
    path: "/about-us-u8226-desktop",
    element: <AboutUsDesktop />,
  },
  {
    path: "/showcase-u8226-desktop",
    element: <ShowcaseDesktop />,
  },
  {
    path: "/companies-and-solutions-u8226-desktop",
    element: <CompaniesAnd />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
