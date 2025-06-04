import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeaderSection = () => {
  return (
    <section
      className="flex flex-col items-center gap-12 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] w-full bg-color-schemes-color-scheme-1-background"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-12 w-full">
        <div className="flex flex-col items-start gap-5 w-full">
          <header className="flex flex-col items-start w-full">
            <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
              Transforming Ideas into Reality with AI
            </h1>
          </header>

          <div className="flex flex-col items-start gap-6 w-full">
            <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
              At AI Dream Builders, we harness the power of artificial
              intelligence to create innovative solutions tailored to your
              needs. Join us on a journey to shape the future together.
            </p>

            <div className="flex items-start gap-4">
              <Button
                asChild
                className="h-auto px-6 py-2.5 rounded-[100px] bg-primitives-color-blue-gem shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]"
              >
                <Link to="/showcase-u8226-mobile">
                  <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                    Showcase
                  </span>
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-auto px-6 py-2.5 rounded-[100px] border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent"
              >
                <Link to="/contact-u8226-mobile">
                  <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                    Contact us
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Card className="w-full h-[188.44px] rounded-[var(--UI-styles-radius-large)]">
          <CardContent className="p-0 h-full"></CardContent>
        </Card>
      </div>
    </section>
  );
};
