import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../ui/button";
import { Card, CardContent } from "../../../ui/card";

const CallToActionSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-color-schemes-color-scheme-1-background">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] mx-auto w-full">
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
              <div className="flex flex-col items-start gap-8 flex-1">
                <div className="flex flex-col items-start gap-6 w-full">
                  <h2 className="font-heading-h2 text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)] font-[number:var(--heading-h2-font-weight)] [font-style:var(--heading-h2-font-style)]">
                    Let&#39;s Build Your Future Together
                  </h2>
                  <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)] font-[number:var(--text-medium-normal-font-weight)] [font-style:var(--text-medium-normal-font-style)]">
                    We&#39;re excited to help you turn your innovative ideas
                    into reality with our AI expertise.
                  </p>
                </div>

                <Button
                  asChild
                  className="h-auto rounded-[100px] bg-primitives-color-blue-gem px-6 py-2.5 shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]"
                >
                  <Link to="/showcase-u8226-desktop">
                    <span className="font-text-regular-medium text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] text-[color:var(--primitives-color-white)] font-[number:var(--text-regular-medium-font-weight)] [font-style:var(--text-regular-medium-font-style)] whitespace-nowrap">
                      Showcase
                    </span>
                  </Link>
                </Button>
              </div>

              <div className="flex-1">
                <img
                  className="w-full h-[400px] object-cover rounded-lg"
                  alt="AI technology illustration showing a brain with connected nodes"
                  src="/img/placeholder-image-2.png"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CallToActionSection;
