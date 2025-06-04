import React from "react";
import { Card, CardContent } from "../../../ui/card";

const CallToActionSection = () => {
  return (
    <section
      className="py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-primitives-color-blue-gem-lightest w-full"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col items-center w-full max-w-[var(--spacing-sizing-container-container-large)] mx-auto">
        <Card className="border-none shadow-none bg-transparent w-full max-w-[var(--spacing-sizing-max-width-max-width-large)]">
          <CardContent className="p-0 flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-5 w-full">
              <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] w-full mt-[-1.00px]">
                Start Your Journey with Us
              </h2>
              <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] w-full">
                Unlock the potential of AI for your business. Contact us for a
                personalized consultation today!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToActionSection;
