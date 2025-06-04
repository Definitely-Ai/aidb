import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const BusinessTransformationSection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-color-schemes-color-scheme-1-background">
      <div className="mx-auto w-full max-w-[var(--spacing-sizing-container-container-large)]">
        <Card className="border-0 shadow-none bg-transparent">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center gap-20">
              <div className="flex-1">
                <img
                  className="h-[640px] w-full object-cover"
                  alt="Placeholder image showing AI visualization for forestry and traffic management"
                  src="/img/placeholder-image-17.png"
                />
              </div>

              <div className="flex flex-col items-start gap-6 flex-1">
                <h3 className="font-heading-h3 text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] font-[number:var(--heading-h3-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                  Transforming Industries with Advanced AI Solutions for
                  Forestry and Traffic Management
                </h3>

                <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] tracking-[var(--text-medium-normal-letter-spacing)] font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                  Our innovative AI tools are revolutionizing the forestry and
                  traffic sectors by providing real-time data analysis and
                  actionable insights. From optimizing traffic flow to enhancing
                  forest management practices, we empower industries to make
                  informed decisions and drive efficiency.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
