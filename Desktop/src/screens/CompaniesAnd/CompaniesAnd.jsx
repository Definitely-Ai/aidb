import React from "react";
import { AgricultureSolutionsSection } from "./sections/AgricultureSolutionsSection/AgricultureSolutionsSection";
import { BusinessTransformationSection } from "./sections/BusinessTransformationSection/BusinessTransformationSection";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { IndustryTransformationsSection } from "./sections/IndustryTransformationsSection/IndustryTransformationsSection";
import { MainHeaderSection } from "./sections/MainHeaderSection/MainHeaderSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import { SocialMediaStrategySection } from "./sections/SocialMediaStrategySection/SocialMediaStrategySection";
import { SolutionsOverviewSection } from "./sections/SolutionsOverviewSection/SolutionsOverviewSection";

export const CompaniesAnd = () => {
  return (
    <main className="flex flex-col w-full" data-model-id="8202:246">
      <NavigationBarSection />
      <MainHeaderSection />
      <SolutionsOverviewSection />
      <IndustryTransformationsSection />
      <AgricultureSolutionsSection />
      <SocialMediaStrategySection />
      <BusinessTransformationSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
};
