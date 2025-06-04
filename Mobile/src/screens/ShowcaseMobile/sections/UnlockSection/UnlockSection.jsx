import React from "react";
import { AspectRatio } from "../../../../components/ui/aspect-ratio";
import { Card, CardContent } from "../../../../components/ui/card";

// Feature data for mapping
const features = [
  {
    title: "Vehicle Detection",
    description:
      "Instantly identify and track vehicles and people for enhanced security and logistics.",
  },
  {
    title: "Data Insights",
    description:
      "Transform raw data into actionable insights for smarter business decisions.",
  },
];

export const UnlockSection = () => {
  return (
    <section
      className="flex flex-col w-full items-center gap-12 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-primitives-color-blue-gem-lightest"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-12 w-full">
        <div className="flex flex-col items-start gap-12 w-full">
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="flex flex-col items-start gap-5 w-full">
              <h3 className="text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] mt-[-1.00px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h3-font-style)]">
                Transform Your Operations with Advanced AI Solutions Tailored
                for You
              </h3>

              <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                Explore our innovative AI technologies that enhance efficiency
                and drive growth. From real-time monitoring to insightful data
                analysis, we empower your business to thrive.
              </p>
            </div>

            <Card className="border-none shadow-none bg-transparent w-full">
              <CardContent className="flex flex-col items-start gap-6 p-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col gap-3 w-full">
                    <h6 className="text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h6-font-style)]">
                      {feature.title}
                    </h6>
                    <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <AspectRatio ratio={343 / 348} className="w-full">
            <img
              className="w-full h-full object-cover"
              alt="Placeholder image"
              src="/img/placeholder-image-4.png"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};
