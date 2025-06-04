import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = () => {
  return (
    <section
      className="flex flex-col items-center gap-12 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-color-schemes-color-scheme-1-background w-full"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-center gap-12 w-full">
        <Card className="border-none shadow-none w-full">
          <CardContent className="flex flex-col items-start gap-12 p-0">
            <div className="flex flex-col items-start gap-6 w-full">
              <div className="flex flex-col items-start gap-3 w-full">
                <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                  Innovate
                </span>

                <div className="flex flex-col items-start gap-5 w-full">
                  <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                    Empowering Ideas Through Advanced AI Solutions
                  </h2>

                  <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    Founded in 2023 by Zechariah Myrick, AI Dream Builders is
                    dedicated to transforming ambitious ideas into impactful
                    realities. Our mission is to harness the power of artificial
                    intelligence to create innovative solutions that drive
                    success for our partners.
                  </p>
                </div>
              </div>
            </div>

            <img
              className="w-full max-w-[336px] h-auto self-center"
              alt="Placeholder image"
              src="/img/placeholder-image-15.png"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
