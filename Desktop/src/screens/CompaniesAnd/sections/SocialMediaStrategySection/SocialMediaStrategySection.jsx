import { MaximizeIcon, ScissorsIcon, StarIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Feature data for mapping
const features = [
  {
    icon: <StarIcon className="h-4 w-4" />,
    text: "Automated posts tailored for your audience's preferences.",
  },
  {
    icon: <ScissorsIcon className="h-4 w-4" />,
    text: "Engage your followers with captivating content daily.",
  },
  {
    icon: <MaximizeIcon className="h-4 w-4" />,
    text: "Maximize your online impact with minimal effort.",
  },
];

export const SocialMediaStrategySection = () => {
  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-primitives-color-blue-gem-lightest">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-[var(--spacing-sizing-container-container-large)]">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="flex-1 flex flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-6 w-full">
                <h3 className="font-heading-h3 text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                  Transform Your Social Media Strategy with SocialEdge AI
                  Automation
                </h3>

                <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] tracking-[var(--text-medium-normal-letter-spacing)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                  SocialEdge AI is designed specifically for real estate
                  professionals, streamlining your social media presence. With
                  automated posts and audience analysis, it maximizes your
                  engagement and reach effortlessly.
                </p>
              </div>

              <Card className="w-full bg-transparent border-none shadow-none">
                <CardContent className="flex flex-col items-start gap-4 px-0 py-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4 w-full">
                      {feature.icon}
                      <p className="flex-1 mt-[-1.00px] font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] tracking-[var(--text-regular-normal-letter-spacing)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                        {feature.text}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="flex-1">
              <img
                className="h-[640px] w-full object-contain"
                alt="SocialEdge AI platform interface"
                src="/img/placeholder-image-16.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
