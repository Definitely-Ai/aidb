import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { HomeMobile } from "../HomeMobile/HomeMobile";
import { ShowcaseDesktop } from "../ShowcaseDesktop/ShowcaseDesktop";

export const Home = () => {
  const screenWidth = useWindowWidth();

  // Use desktop layout for screens wider than 768px
  const isDesktop = screenWidth >= 768;

  return isDesktop ? <ShowcaseDesktop /> : <HomeMobile />;
};
