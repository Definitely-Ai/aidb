import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeaderSection = () => {
  return (
    <section
      className="w-full py-12 px-5 bg-primitives-color-blue-gem-lightest"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <Card className="w-full max-w-[var(--spacing-sizing-container-container-large)] mx-auto bg-transparent border-none shadow-none">
        <CardContent className="p-0 flex flex-col gap-5">
          <h1 className="text-[length:var(--heading-h1-font-size)] font-heading-h1 font-bold tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)]">
            Connect with Us
          </h1>
          <p className="text-[length:var(--text-regular-normal-font-size)] font-text-regular-normal font-normal tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)]">
            Ready to turn your vision into reality? Let&#39;s discuss your AI
            project today!
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
