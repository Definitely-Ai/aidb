import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-color-schemes-color-scheme-1-background">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] mx-auto w-full gap-20">
        <div className="flex flex-row items-center gap-20 w-full">
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-6 w-full">
              <h2 className="font-heading-h2 text-[length:var(--heading-h2-font-size)] font-[number:var(--heading-h2-font-weight)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                Let&apos;s Build the Future Together
              </h2>

              <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] font-[number:var(--text-medium-normal-font-weight)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                Contact us today to explore how we can turn your ideas into
                reality with AI.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Button className="h-auto px-6 py-2.5 rounded-[100px] bg-primitives-color-blue-gem text-primitives-color-white shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]">
                <span className="font-text-regular-medium text-[length:var(--text-regular-medium-font-size)] font-[number:var(--text-regular-medium-font-weight)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap">
                  View Our Showcase
                </span>
              </Button>

              <Button
                variant="outline"
                className="h-auto px-6 py-2.5 rounded-[100px] border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent text-primitives-color-neutral-darkest"
              >
                <span className="font-text-regular-medium text-[length:var(--text-regular-medium-font-size)] font-[number:var(--text-regular-medium-font-weight)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap">
                  Contact
                </span>
              </Button>
            </div>
          </div>

          <div className="flex-1">
            <Card className="border-0 bg-transparent">
              <CardContent className="p-0">
                <img
                  className="h-[400px] w-full object-cover"
                  alt="Unlock the power of AI with us"
                  src="/img/placeholder-image-5.png"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
