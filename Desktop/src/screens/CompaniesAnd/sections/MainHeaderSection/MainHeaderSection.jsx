import React from "react";
import { Button } from "../../../../components/ui/button";

export const MainHeaderSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-20 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] relative w-full bg-[url(/img/header-65.png)] bg-cover bg-center">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-center gap-20 relative w-full">
        <div className="flex flex-col max-w-[var(--spacing-sizing-max-width-max-width-large)] gap-8 w-full items-center relative">
          <div className="flex flex-col items-center gap-4 relative w-full">
            <div className="relative w-[62px] h-6" />

            <div className="flex flex-col items-center gap-6 relative w-full">
              <h1 className="relative w-full mt-[-1.00px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                Transform Your Vision
              </h1>

              <p className="relative w-full font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--text-medium-normal-font-size)] text-center tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                Explore our groundbreaking companies and solutions that are
                reshaping industries with AI technology.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 relative">
            <Button
              variant="default"
              className="h-auto px-6 py-2.5 bg-[color:var(--primitives-color-neutral-lightest)] text-[color:var(--primitives-color-neutral-darkest)] rounded-[100px] shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]"
            >
              <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                Learn More
              </span>
            </Button>

            <Button
              variant="default"
              className="h-auto px-6 py-2.5 bg-primitives-color-blue-gem rounded-[100px] border-2 border-solid border-[color:var(--primitives-color-white)]"
            >
              <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                Sign Up
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
