import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = () => {
  return (
    <section className="w-full bg-primitives-color-blue-gem-lightest py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)]">
      <Card className="max-w-[var(--spacing-sizing-container-container-large)] mx-auto border-none bg-transparent">
        <CardContent className="flex flex-col items-center gap-20 p-0">
          <div className="flex flex-col max-w-[var(--spacing-sizing-max-width-max-width-large)] items-center gap-8 w-full">
            <div className="flex flex-col items-center gap-6 w-full">
              <h2 className="text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h2-font-style)] mt-[-1.00px]]">
                Ready to Build the Future?
              </h2>

              <p className="text-[length:var(--text-medium-normal-font-size)] text-center leading-[var(--text-medium-normal-line-height)] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
                Let&apos;s collaborate and make your vision a reality. Contact
                us to explore partnership opportunities.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Button
                asChild
                className="bg-primitives-color-blue-gem text-[color:var(--primitives-color-white)] rounded-[100px] h-auto px-6 py-2.5 shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]"
              >
                <Link
                  to="/contact-u8226-desktop"
                  className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]"
                >
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
