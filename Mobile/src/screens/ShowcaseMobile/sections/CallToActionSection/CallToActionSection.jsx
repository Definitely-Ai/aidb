import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = () => {
  return (
    <section
      className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-primitives-color-blue-gem-lightest"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <Card className="border-0 bg-transparent">
        <CardContent className="flex flex-col items-center gap-12 p-0">
          <div className="flex flex-col items-center gap-6 w-full max-w-[var(--spacing-sizing-max-width-max-width-large)]">
            <div className="flex flex-col items-center gap-5 w-full">
              <h2 className="w-full font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                Ready to Build the Future?
              </h2>

              <p className="w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                Let&apos;s collaborate and make your vision a reality. Contact
                us to explore partnership opportunities.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Button
                asChild
                className="rounded-[100px] bg-primitives-color-blue-gem text-[color:var(--primitives-color-white)] h-auto px-6 py-2.5 shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]"
              >
                <Link to="/contact-u8226-mobile">
                  <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                    Contact
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
