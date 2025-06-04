import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = () => {
  return (
    <section className="w-full bg-primitives-color-blue-gem-lightest py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)]">
      <div className="flex flex-col items-center gap-20 w-full max-w-[var(--spacing-sizing-container-container-large)] mx-auto">
        <Card className="border-none bg-transparent w-full">
          <CardContent className="flex flex-col items-center gap-8 max-w-[var(--spacing-sizing-max-width-max-width-large)] mx-auto p-0">
            <div className="flex flex-col items-center gap-6 w-full">
              <h2 className="text-center font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)] mt-[-1.00px]">
                Transform Your Business with AI
              </h2>

              <p className="text-center font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                Join us to unlock innovative AI solutions tailored to your
                business needs and goals.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button
                asChild
                className="bg-primitives-color-blue-gem text-primitives-color-white rounded-[100px] px-6 py-2.5 h-auto shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]"
              >
                <Link to="/contact-u8226-desktop">
                  <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                    Partner
                  </span>
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent rounded-[100px] px-6 py-2.5 h-auto"
              >
                <Link to="/about-us-u8226-desktop">
                  <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                    About Us
                  </span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
