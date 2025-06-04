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

export const HeaderSection = () => {
  return (
    <section
      className="flex flex-col w-full items-center gap-12 px-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-large)] bg-color-schemes-color-scheme-1-background"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-12 w-full">
        <div className="flex flex-col items-start gap-12 w-full">
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="flex flex-col items-start gap-6 w-full">
              <div className="flex flex-col items-start gap-3 w-full">
                <div className="flex flex-col items-start gap-5 w-full">
                  <h2 className="w-full mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                    Unleash the Power of AI Innovation
                  </h2>

                  <p className="w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    Experience the transformative potential of AI through our
                    innovative solutions. From enhancing operational efficiency
                    to unlocking new insights, see how we can elevate your
                    business.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-6 py-2 w-full">
                {features.map((feature, index) => (
                  <Card
                    key={index}
                    className="w-full border-none shadow-none bg-transparent"
                  >
                    <CardContent className="flex flex-col items-center gap-3 p-0">
                      <img
                        className="w-12 h-12"
                        alt={feature.title}
                        src={feature.icon}
                      />
                      <h6 className="font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h6-font-size)] text-center tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] [font-style:var(--heading-h6-font-style)]">
                        {feature.title}
                      </h6>
                      <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <img
            className="w-full h-auto object-cover"
            alt="Placeholder image"
            src="/img/placeholder-image-3.png"
          />
        </div>
      </div>
    </section>
  );
};
