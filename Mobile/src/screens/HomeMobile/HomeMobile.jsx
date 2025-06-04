import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { LayoutSection } from "./sections/LayoutSection/LayoutSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";

export const HomeMobile = () => {
  return (
    <main
      className="flex flex-col w-full min-h-screen"
      data-model-id="8202:249"
      data-typography-mode="mobile"
      data-spacing-sizing-mode="mobile"
    >
      <NavigationBarSection />
      <HeaderSection />
      <LayoutSection />
      <MainContentSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
};
