import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { ImageGallerySection } from "./sections/ImageGallerySection/ImageGallerySection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { TransformSection } from "./sections/TransformSection/TransformSection";
import { UnlockSection } from "./sections/UnlockSection/UnlockSection";

export const ShowcaseMobile = () => {
  return (
    <main
      className="flex flex-col w-full"
      data-model-id="8202:243"
      data-typography-mode="mobile"
      data-spacing-sizing-mode="mobile"
    >
      <TransformSection />
      <ImageGallerySection />
      <HeaderSection />
      <UnlockSection />
      <MainContentSection />
      <CallToActionSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};
