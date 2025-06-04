import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../ui/button";
import { Card, CardContent } from "../../../ui/card";

const FeatureHighlightSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-primitives-color-blue-gem-lightest">
      <div className="mx-auto w-full max-w-[var(--spacing-sizing-container-container-large)]">
        <div className="flex flex-col md:flex-row items-center gap-20">
          {/* Image Column */}
          <div className="flex-1">
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <img
                  className="w-full h-auto object-cover"
                  alt="AI technology visualization"
                  src="/img/placeholder-image-4.png"
                />
              </CardContent>
            </Card>
          </div>

          {/* Content Column */}
          <div className="flex-1 flex flex-col items-start gap-8">
            <div className="w-full flex flex-col items-start gap-4">
              <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
                Innovate
              </span>

              <div className="flex flex-col items-start gap-6 w-full">
                <h2 className="self-stretch mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                  Unlock the Power of AI with Us
                </h2>

                <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  Partnering with AI Dream Builders means accessing the latest
                  advancements in artificial intelligence and custom technology
                  solutions. Our collaborative approach ensures that your unique
                  vision is transformed into a scalable reality.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Button
                variant="outline"
                className="h-auto px-6 py-2.5 rounded-[100px] border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent font-text-regular-medium text-[color:var(--primitives-color-neutral-darkest)]"
              >
                View Our Showcase
              </Button>

              <Button
                variant="ghost"
                className="h-auto p-0 flex items-center gap-2 font-text-regular-medium text-[color:var(--primitives-color-neutral-darkest)]"
              >
                Contact
                <ChevronRightIcon className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlightSection;
