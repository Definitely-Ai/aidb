import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContactSection = () => {
  const sectionContent = {
    title:
      "Transforming Industries with Advanced AI Solutions for Forestry and Traffic Management",
    description:
      "Our innovative AI tools are revolutionizing the forestry and traffic sectors by providing real-time data analysis and actionable insights. From optimizing traffic flow to enhancing forest management practices, we empower industries to make informed decisions and drive efficiency.",
  };

  return (
    <section
      className="py-12 px-5 md:px-[var(--spacing-sizing-page-padding-padding-global)] bg-color-schemes-color-scheme-1-background w-full"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] mx-auto items-start gap-12 w-full">
        <Card className="border-none shadow-none bg-transparent w-full">
          <CardContent className="flex flex-col items-start gap-12 p-0 w-full">
            <div className="flex flex-col items-start gap-5 w-full">
              <h2 className="text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h3-font-style)]">
                {sectionContent.title}
              </h2>

              <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                {sectionContent.description}
              </p>
            </div>

            <img
              className="w-full h-auto aspect-[16/9] object-cover"
              alt="Placeholder image"
              src="/img/placeholder-image-14.png"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
