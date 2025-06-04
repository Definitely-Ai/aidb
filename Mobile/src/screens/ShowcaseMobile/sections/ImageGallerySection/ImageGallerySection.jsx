import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ImageGallerySection = () => {
  return (
    <section
      className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-primitives-color-blue-gem-lightest"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <Card className="border-none shadow-none bg-transparent">
        <CardContent className="flex flex-col gap-12 p-0">
          <div className="flex flex-col gap-5 w-full">
            <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
              Explore AI Possibilities
            </h1>
            <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
              Discover cutting-edge AI demos designed to inspire innovative
              ideas and empower your business.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
