import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const SolutionsOverviewSection = () => {
  return (
    <section className="w-full bg-color-schemes-color-scheme-1-background py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)]">
      <div className="mx-auto w-full max-w-[var(--spacing-sizing-container-container-large)]">
        <div className="flex flex-row items-center gap-20 h-[640px]">
          <div className="flex-1 flex flex-col items-start gap-8">
            <div className="w-full">
              <div className="flex flex-col gap-6">
                <h2 className="font-heading-h2 text-[length:var(--heading-h2-font-size)] font-[number:var(--heading-h2-font-weight)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                  Custom Solutions for Your Unique Challenges
                </h2>
                <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] font-[number:var(--text-medium-normal-font-weight)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                  At AI Dream Builders, we specialize in crafting tailored
                  software and hardware solutions that meet the specific needs
                  of our clients. Our collaborative approach ensures that your
                  vision is transformed into a practical, impactful reality.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Button
                variant="outline"
                className="rounded-[100px] px-6 py-2.5 border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent h-auto"
              >
                <span className="font-text-regular-medium text-[length:var(--text-regular-medium-font-size)] font-[number:var(--text-regular-medium-font-weight)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] text-[color:var(--primitives-color-neutral-darkest)]">
                  Learn More
                </span>
              </Button>

              <Button
                variant="ghost"
                className="rounded-[100px] p-0 h-auto flex items-center gap-2"
              >
                <span className="font-text-regular-medium text-[length:var(--text-regular-medium-font-size)] font-[number:var(--text-regular-medium-font-weight)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] text-[color:var(--primitives-color-neutral-darkest)]">
                  Sign Up
                </span>
                <ChevronRightIcon className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <img
            className="flex-1 h-[640px] object-cover"
            alt="Placeholder image"
            src="/img/placeholder-image-10.png"
          />
        </div>
      </div>
    </section>
  );
};
