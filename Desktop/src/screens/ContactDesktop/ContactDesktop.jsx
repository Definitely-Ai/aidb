import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { FutureSection } from "./sections/FutureSection/FutureSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";

export const ContactDesktop = () => {
  return (
    <main className="flex flex-col w-full" data-model-id="8202:242">
      <HeaderSection />
      <FutureSection />
      <CallToActionSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};
