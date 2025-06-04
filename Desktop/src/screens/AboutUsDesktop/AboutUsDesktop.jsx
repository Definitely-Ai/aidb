import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FeatureHighlightSection } from "./sections/FeatureHighlightSection/FeatureHighlightSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { LayoutSection } from "./sections/LayoutSection/LayoutSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavbarSection } from "./sections/NavbarSection/NavbarSection";

export const AboutUsDesktop = () => {
  return (
    <main className="flex flex-col w-full" data-model-id="8202:248">
      <NavbarSection />
      <MainContentSection />
      <LayoutSection />
      <FeatureHighlightSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
};
