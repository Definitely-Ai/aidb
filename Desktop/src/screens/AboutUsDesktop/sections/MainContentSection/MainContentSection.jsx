import React from "react";
import { Button } from "../../../../components/ui/button";

export const MainContentSection = () => {
  return (
    <section className="flex flex-col items-center gap-20 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-primitives-color-blue-gem-lightest">
      <div className="flex flex-col items-center gap-20 w-full max-w-[var(--spacing-sizing-container-container-large)]">
        <div className="flex flex-col items-center gap-8 w-full max-w-[var(--spacing-sizing-max-width-max-width-large)]">
          <header className="flex flex-col items-center gap-4 w-full">
            <div className="inline-flex items-center">
              <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                Innovate
              </span>
            </div>

            <div className="flex flex-col items-center gap-6 w-full">
              <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                Empowering Your Vision
              </h1>

              <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                At AI Dream Builders, we transform ambitious ideas into
                impactful solutions through advanced AI technology.
              </p>
            </div>
          </header>

          <div className="flex items-start gap-4">
            <Button
              className="px-6 py-2.5 bg-primitives-color-blue-gem text-primitives-color-white rounded-[100px] shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]"
              size="default"
            >
              View Our Showcase
            </Button>

            <Button
              variant="outline"
              className="px-6 py-2.5 border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent text-primitives-color-neutral-darkest rounded-[100px]"
            >
              Join Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
