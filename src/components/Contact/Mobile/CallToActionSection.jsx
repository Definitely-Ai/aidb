import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../ui/button";
import { Card, CardContent } from "../../../ui/card";

const CallToActionSection = () => {
  return (
    <section
      className="flex flex-col w-full items-start gap-12 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-color-schemes-color-scheme-1-background"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col w-full max-w-[var(--spacing-sizing-container-container-large)] items-start gap-12">
        <Card className="w-full border-none shadow-none">
          <CardContent className="flex flex-col items-start gap-12 p-0">
            <div className="flex flex-col items-center justify-center gap-6 w-full">
              <div className="flex flex-col items-start gap-5 w-full">
                <h2 className="w-full mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                  Let&#39;s Build Your Future Together
                </h2>

                <p className="w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  We&#39;re excited to help you turn your innovative ideas into
                  reality with our AI expertise.
                </p>
              </div>

              <Button
                asChild
                className="rounded-[100px] bg-primitives-color-blue-gem shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d] h-auto"
              >
                <Link to="/showcase-u8226-mobile">
                  <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                    Showcase
                  </span>
                </Link>
              </Button>
            </div>

            <img
              className="w-full h-[218px] object-cover"
              alt="Placeholder image"
              src="/img/placeholder-image-2.png"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToActionSection;
