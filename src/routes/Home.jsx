import React from "react";
import useIsMobile from "../utils/useIsMobile";
import HomeDesktop from "../components/Home/Desktop/HomeDesktop";
import HomeMobile from "../components/Home/Mobile/HomeMobile";

const Home = () => {
  const isMobile = useIsMobile();
  return isMobile ? <HomeMobile /> : <HomeDesktop />;
};

export default Home;
