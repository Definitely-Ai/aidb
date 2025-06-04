import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ServicesSection = () => {
  return (
    <section
      className="flex flex-col w-full items-center gap-12 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-color-schemes-color-scheme-1-background"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-center gap-12 w-full">
        <Card className="border-none shadow-none w-full">
          <CardContent className="flex flex-col items-start gap-12 p-0">
            <div className="flex flex-col items-start gap-6 w-full">
              <div className="flex flex-col items-start gap-3 w-full">
                <div className="flex flex-col items-start gap-5 w-full">
                  <h2 className="w-full mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                    Custom Solutions for Your Unique Challenges
                  </h2>

                  <p className="w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    At AI Dream Builders, we specialize in crafting tailored
                    software and hardware solutions that meet the specific needs
                    of our clients. Our collaborative approach ensures that your
                    vision is transformed into a practical, impactful reality.
                  </p>
                </div>
              </div>
            </div>

            <img
              className="w-full h-[348px] object-cover"
              alt="Placeholder image"
              src="/img/placeholder-image-7.png"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
