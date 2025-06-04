import React from "react";
import useIsMobile from "../utils/useIsMobile";
import AboutUsDesktop from "../components/AboutUs/Desktop/AboutUsDesktop";
import AboutUsMobile from "../components/AboutUs/Mobile/AboutUsMobile";

const AboutUs = () => {
  const isMobile = useIsMobile();
  return isMobile ? <AboutUsMobile /> : <AboutUsDesktop />;
};

export default AboutUs;
