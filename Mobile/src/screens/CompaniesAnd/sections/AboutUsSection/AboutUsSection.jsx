import { MaximizeIcon, ScissorsIcon, StarIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Feature data for mapping
const features = [
  {
    icon: <StarIcon className="w-4 h-4" />,
    text: "Automated posts tailored for your audience's preferences.",
  },
  {
    icon: <ScissorsIcon className="w-4 h-4" />,
    text: "Engage your followers with captivating content daily.",
  },
  {
    icon: <MaximizeIcon className="w-4 h-4" />,
    text: "Maximize your online impact with minimal effort.",
  },
];

export const AboutUsSection = () => {
  return (
    <section
      className="py-8 px-[var(--spacing-sizing-page-padding-padding-global)] pb-[var(--spacing-sizing-section-padding-padding-section-large)] bg-primitives-color-blue-gem-lightest w-full"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] mx-auto items-start gap-12 w-full">
        <article className="w-full">
          <div className="flex flex-col items-start gap-5 w-full">
            <div className="flex flex-col items-start gap-5 w-full">
              <h2 className="text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] mt-[-1.00px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h3-font-style)]">
                Transform Your Social Media Strategy with SocialEdge AI
                Automation
              </h2>

              <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                SocialEdge AI is designed specifically for real estate
                professionals, streamlining your social media presence. With
                automated posts and audience analysis, it maximizes your
                engagement and reach effortlessly.
              </p>
            </div>

            <Card className="w-full border-none shadow-none bg-transparent">
              <CardContent className="gap-4 px-0 py-2 flex flex-col items-start w-full">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 w-full">
                    {feature.icon}
                    <p className="flex-1 mt-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <img
            className="h-auto w-full mt-12"
            alt="SocialEdge AI platform interface"
            src="/img/placeholder-image-13.png"
          />
        </article>
      </div>
    </section>
  );
};
