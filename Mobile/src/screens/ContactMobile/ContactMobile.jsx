import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { NavbarSection } from "./sections/NavbarSection/NavbarSection";

export const ContactMobile = () => {
  return (
    <main
      className="flex flex-col w-full"
      data-model-id="8202:241"
      data-typography-mode="mobile"
      data-spacing-sizing-mode="mobile"
    >
      <NavbarSection />
      <HeaderSection />
      <CallToActionSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};
