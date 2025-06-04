import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AboutUsMobile } from "./screens/AboutUsMobile/AboutUsMobile";
import { CompaniesAnd } from "./screens/CompaniesAnd/CompaniesAnd";
import { ContactMobile } from "./screens/ContactMobile/ContactMobile";
import { HomeMobile } from "./screens/HomeMobile/HomeMobile";
import { ShowcaseMobile } from "./screens/ShowcaseMobile/ShowcaseMobile";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomeMobile />,
  },
  {
    path: "/home-u8226-mobile",
    element: <HomeMobile />,
  },
  {
    path: "/contact-u8226-mobile",
    element: <ContactMobile />,
  },
  {
    path: "/showcase-u8226-mobile",
    element: <ShowcaseMobile />,
  },
  {
    path: "/companies-and-solutions-u8226-mobile",
    element: <CompaniesAnd />,
  },
  {
    path: "/about-us-u8226-mobile",
    element: <AboutUsMobile />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
