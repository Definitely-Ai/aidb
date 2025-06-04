import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../ui/button";

const LayoutSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-color-schemes-color-scheme-1-background">
      <div className="mx-auto w-full max-w-[var(--spacing-sizing-container-container-large)] flex flex-col gap-20">
        <div className="flex items-center gap-20 h-[640px]">
          <div className="flex-1 flex flex-col items-start gap-8">
            <div className="w-full flex flex-col items-start gap-4">
              <div className="inline-flex items-center">
                <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                  Innovate
                </span>
              </div>

              <div className="w-full flex flex-col items-start gap-6">
                <h2 className="w-full font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                  Empowering Ideas Through Advanced AI Solutions
                </h2>

                <p className="w-full font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  Founded in 2023 by Zechariah Myrick, AI Dream Builders is
                  dedicated to transforming ambitious ideas into impactful
                  realities. Our mission is to harness the power of artificial
                  intelligence to create innovative solutions that drive success
                  for our partners.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Button className="h-auto px-6 py-2.5 bg-primitives-color-blue-gem rounded-[100px] border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)]">
                <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                  View Our Showcase
                </span>
              </Button>

              <Button
                variant="ghost"
                className="h-auto p-0 flex items-center gap-2"
              >
                <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                  Contact
                </span>
                <ChevronRightIcon className="w-6 h-6" />
              </Button>
            </div>
          </div>

          <img
            className="flex-1 h-[640px] object-cover"
            alt="Placeholder image"
            src="/img/placeholder-image-3.png"
          />
        </div>
      </div>
    </section>
  );
};

export default LayoutSection;
