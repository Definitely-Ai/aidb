import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import { ServicesSection } from "./sections/ServicesSection/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const CompaniesAnd = () => {
  return (
    <main className="flex flex-col w-full" data-model-id="8202:245">
      <NavigationBarSection />
      <HeaderSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <AboutUsSection />
      <ContactSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
};
