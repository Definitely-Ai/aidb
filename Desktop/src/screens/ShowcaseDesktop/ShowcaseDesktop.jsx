import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { NavbarSection } from "./sections/NavbarSection/NavbarSection";
import { SolutionsSection } from "./sections/SolutionsSection/SolutionsSection";

export const ShowcaseDesktop = () => {
  return (
    <main className="flex flex-col w-full" data-model-id="8202:244">
      <NavbarSection />
      <HeaderSection />
      <FeaturesSection />
      <SolutionsSection />
      <AboutUsSection />
      <CallToActionSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};
