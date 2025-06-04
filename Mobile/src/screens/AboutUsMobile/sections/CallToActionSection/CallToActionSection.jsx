import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = () => {
  return (
    <section
      className="bg-color-schemes-color-scheme-1-background py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)]"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col gap-12 w-full max-w-[var(--spacing-sizing-container-container-large)] mx-auto">
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="flex flex-col gap-12 p-0">
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-5 w-full">
                <h2 className="font-heading-h2 text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                  Let&apos;s Build the Future Together
                </h2>
                <p className="font-text-regular-normal text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  Contact us today to explore how we can turn your ideas into
                  reality with AI.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="bg-primitives-color-blue-gem rounded-[100px] h-auto px-6 py-2.5 shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]"
                >
                  <Link to="/showcase-u8226-mobile">
                    <span className="font-text-regular-medium text-[color:var(--primitives-color-white)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                      View Our Showcase
                    </span>
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-[100px] h-auto px-6 py-2.5 border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent"
                >
                  <Link to="/contact-u8226-mobile">
                    <span className="font-text-regular-medium text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                      Contact
                    </span>
                  </Link>
                </Button>
              </div>
            </div>

            <img
              className="w-full h-auto object-cover"
              alt="Unlock your future with us"
              src="/img/placeholder-image-17.png"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
