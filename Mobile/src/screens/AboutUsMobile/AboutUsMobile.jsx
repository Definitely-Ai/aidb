import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";

export const AboutUsMobile = () => {
  return (
    <main
      className="flex flex-col w-full"
      data-model-id="8202:247"
      data-typography-mode="mobile"
      data-spacing-sizing-mode="mobile"
    >
      <NavigationBarSection />
      <HeaderSection />
      <MainContentSection />
      <FeaturesSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
};
