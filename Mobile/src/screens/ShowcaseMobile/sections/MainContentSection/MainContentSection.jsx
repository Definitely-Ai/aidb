import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = () => {
  // Data for feature list items
  const featureItems = [
    {
      icon: "/img/manufacturing-1.svg",
      alt: "Manufacturing",
      text: "Custom solutions for every industry and challenge.",
    },
    {
      icon: "/img/apps.svg",
      alt: "Apps",
      text: "Innovative AI applications that drive real results.",
    },
    {
      icon: "/img/partner-exchange-2.svg",
      alt: "Partner exchange",
      text: "Partner with us to turn ideas into reality.",
    },
  ];

  return (
    <section
      className="flex flex-col w-full items-center gap-12 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-color-schemes-color-scheme-1-background"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-12 w-full">
        <div className="flex flex-col items-start gap-12 w-full">
          <div className="flex flex-col items-start gap-5 w-full">
            <div className="flex flex-col items-start gap-5 w-full">
              <h2 className="text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] w-full mt-[-1.00px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h3-font-style)]">
                Unlock the Potential of AI Tailored to Your Business Needs
              </h2>

              <p className="w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                Imagine the transformative power of AI in your industry. From
                agriculture to logistics, our custom solutions can elevate your
                business.
              </p>
            </div>

            <Card className="border-none shadow-none w-full">
              <CardContent className="flex flex-col items-start gap-4 p-2 w-full">
                {featureItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 w-full">
                    <img className="w-4 h-4" alt={item.alt} src={item.icon} />
                    <p className="flex-1 mt-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <img
            className="w-full h-auto object-cover"
            alt="Placeholder image"
            src="/img/placeholder-image-5.png"
          />
        </div>
      </div>
    </section>
  );
};
