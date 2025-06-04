import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../ui/button";

const HeaderSection = () => {
  return (
    <section
      className="flex flex-col items-center gap-12 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-primitives-color-blue-gem-lightest w-full"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-center gap-12 w-full">
        <div className="flex flex-col max-w-[var(--spacing-sizing-max-width-max-width-large)] items-center gap-6 w-full">
          <div className="flex flex-col items-center gap-3 w-full">
            <div className="inline-flex items-center self-stretch">
              <span className="w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                Innovate
              </span>
            </div>

            <div className="flex flex-col items-center gap-5 w-full">
              <h1 className="self-stretch mt-[-1.00px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                Empowering Your Vision
              </h1>

              <p className="self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                At AI Dream Builders, we transform ambitious ideas into
                impactful solutions through advanced AI technology.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Button
              className="bg-primitives-color-blue-gem text-primitives-color-white rounded-[100px] shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d] h-auto"
              asChild
            >
              <Link to="/showcase-u8226-mobile">
                <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                  View Our Showcase
                </span>
              </Link>
            </Button>

            <Button
              className="border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent text-primitives-color-neutral-darkest rounded-[100px] h-auto"
              variant="outline"
              asChild
            >
              <Link to="/contact-u8226-mobile">
                <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                  Join Us
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
