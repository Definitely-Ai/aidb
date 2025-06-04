import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Feature data for mapping
const features = [
  {
    icon: "/img/action-key.svg",
    title: "AI in Action",
    description:
      "Explore groundbreaking projects that redefine possibilities across various industries.",
  },
  {
    icon: "/img/enterprise.svg",
    title: "Real-World Impact",
    description:
      "Discover how AI solutions drive measurable results and enhance business performance.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="w-full bg-color-schemes-color-scheme-1-background py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)]">
      <div className="mx-auto w-full max-w-[var(--spacing-sizing-container-container-large)]">
        <div className="flex flex-col md:flex-row gap-20 w-full">
          <div className="flex-1">
            <div className="flex flex-col gap-8">
              <div className="space-y-6">
                <h2 className="font-heading-h2 text-[length:var(--heading-h2-font-size)] font-[number:var(--heading-h2-font-weight)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h2-font-style)]">
                  Unleash the Power of AI Innovation
                </h2>
                <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] font-[number:var(--text-medium-normal-font-weight)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--text-medium-normal-font-style)]">
                  Experience the transformative potential of AI through our
                  innovative solutions. From enhancing operational efficiency to
                  unlocking new insights, see how we can elevate your business.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-none bg-transparent py-2"
                  >
                    <CardContent className="p-0 space-y-4">
                      <img
                        className="w-12 h-12"
                        alt={feature.title}
                        src={feature.icon}
                      />
                      <h3 className="font-heading-h6 text-[length:var(--heading-h6-font-size)] font-[number:var(--heading-h6-font-weight)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h6-font-style)]">
                        {feature.title}
                      </h3>
                      <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <img
              className="w-full h-[640px] object-cover"
              alt="Placeholder image"
              src="/img/placeholder-image-6.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
