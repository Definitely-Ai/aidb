import React from "react";
import { AspectRatio } from "../../../ui/aspect-ratio";
import { Card, CardContent } from "../../../ui/card";

const FeaturesSection = () => {
  return (
    <section
      className="flex flex-col items-center gap-12 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-primitives-color-blue-gem-lightest w-full"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-12 w-full">
        <div className="flex flex-col items-start gap-12 w-full">
          <Card className="flex flex-col items-start gap-6 w-full border-none bg-transparent shadow-none">
            <CardContent className="flex flex-col items-start gap-3 p-0 w-full">
              <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                Innovate
              </span>

              <div className="flex flex-col items-start gap-5 w-full">
                <h2 className="self-stretch mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                  Unlock the Power of AI with Us
                </h2>

                <p className="self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  Partnering with AI Dream Builders means accessing the latest
                  advancements in artificial intelligence and custom technology
                  solutions. Our collaborative approach ensures that your unique
                  vision is transformed into a scalable reality.
                </p>
              </div>
            </CardContent>
          </Card>

          <AspectRatio ratio={343 / 348} className="w-full">
            <img
              className="h-full w-full object-cover"
              alt="Placeholder image"
              src="/img/placeholder-image-16.png"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
