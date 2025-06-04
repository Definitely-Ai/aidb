import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FutureSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-primitives-color-blue-gem-lightest">
      <div className="flex flex-col w-full max-w-[var(--spacing-sizing-container-container-large)] mx-auto gap-20">
        <Card className="border-none bg-transparent shadow-none">
          <CardContent className="flex flex-col max-w-[var(--spacing-sizing-max-width-max-width-large)] p-0 gap-6">
            <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
              Connect with Us
            </h1>
            <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              Ready to turn your vision into reality? Let&#39;s discuss your AI
              project today!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
