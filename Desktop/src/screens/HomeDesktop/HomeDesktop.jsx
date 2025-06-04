import React from "react";
import { FeatureHighlightSection } from "../AboutUsDesktop/sections/FeatureHighlightSection/FeatureHighlightSection";
import { LayoutSection } from "../AboutUsDesktop/sections/LayoutSection/LayoutSection";
import { NavbarSection } from "../AboutUsDesktop/sections/NavbarSection/NavbarSection";
import { AgricultureSolutionsSection } from "../CompaniesAnd/sections/AgricultureSolutionsSection/AgricultureSolutionsSection";
import { BusinessTransformationSection } from "../CompaniesAnd/sections/BusinessTransformationSection/BusinessTransformationSection";
import { IndustryTransformationsSection } from "../CompaniesAnd/sections/IndustryTransformationsSection/IndustryTransformationsSection";
import { MainHeaderSection } from "../CompaniesAnd/sections/MainHeaderSection/MainHeaderSection";
import { SocialMediaStrategySection } from "../CompaniesAnd/sections/SocialMediaStrategySection/SocialMediaStrategySection";
import { SolutionsOverviewSection } from "../CompaniesAnd/sections/SolutionsOverviewSection/SolutionsOverviewSection";
import { ContactSection } from "../ContactDesktop/sections/ContactSection/ContactSection";
import { FutureSection } from "../ContactDesktop/sections/FutureSection/FutureSection";
import { AboutUsSection } from "../ShowcaseDesktop/sections/AboutUsSection/AboutUsSection";
import { FeaturesSection } from "../ShowcaseDesktop/sections/FeaturesSection/FeaturesSection";
import { SolutionsSection } from "../ShowcaseDesktop/sections/SolutionsSection/SolutionsSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { ContentLayoutSection } from "./sections/ContentLayoutSection/ContentLayoutSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";

export const HomeDesktop = () => {
  return (
    <main className="flex flex-col w-full" data-model-id="8202:250">
      <NavigationBarSection />
      <HeaderSection />
      <ContentLayoutSection />
      <MainContentSection />
      <CallToActionSection />
      <FooterSection />

      {/* These sections are imported but not used in the current layout based on the image */}
      {/* They are included as per requirements but hidden for now */}
      <div className="hidden">
        <AboutUsSection />
        <AgricultureSolutionsSection />
        <BusinessTransformationSection />
        <ContactSection />
        <FeatureHighlightSection />
        <FeaturesSection />
        <FutureSection />
        <IndustryTransformationsSection />
        <LayoutSection />
        <MainHeaderSection />
        <NavbarSection />
        <SocialMediaStrategySection />
        <SolutionsOverviewSection />
        <SolutionsSection />
      </div>
    </main>
  );
};
