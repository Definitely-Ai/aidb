import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../ui/button";

const CallToActionSection = () => {
  return (
    <section className="w-full bg-primitives-color-blue-gem-lightest py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)]">
      <div className="flex flex-col items-center w-full max-w-[var(--spacing-sizing-container-container-large)] mx-auto gap-20">
        <div className="flex flex-col items-center w-full max-w-[var(--spacing-sizing-max-width-max-width-large)] gap-8">
          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="font-heading-h2 text-[length:var(--heading-h2-font-size)] font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] text-center">
              Start Your Journey with Us
            </h2>

            <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)] text-center">
              Unlock the potential of AI for your business. Contact us for a
              personalized consultation today!
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              asChild
              className="h-auto px-6 py-2.5 bg-primitives-color-blue-gem rounded-[100px] shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]"
            >
              <Link to="/contact-u8226-desktop">
                <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                  Contact
                </span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-auto px-6 py-2.5 rounded-[100px] border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent"
            >
              <Link to="/showcase-u8226-desktop">
                <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                  Showcase
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
