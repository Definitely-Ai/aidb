import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

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

export const AboutUsSection = () => {
  return (
    <section className="w-full py-28 px-16 bg-color-schemes-color-scheme-1-background">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        <div className="flex flex-col md:flex-row items-center gap-20 w-full">
          <div className="flex flex-col items-start gap-8 flex-1">
            <div className="flex flex-col items-start gap-6 w-full">
              <h3 className="text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h3-font-style)]">
                Unlock the Potential of AI Tailored to Your Business Needs
              </h3>

              <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                Imagine the transformative power of AI in your industry. From
                agriculture to logistics, our custom solutions can elevate your
                business.
              </p>
            </div>

            <Card className="w-full border-none shadow-none bg-transparent">
              <CardContent className="flex flex-col items-start gap-4 p-2">
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
            className="flex-1 h-[640px] object-cover rounded-md"
            alt="Placeholder image"
            src="/img/placeholder-image-8.png"
          />
        </div>
      </div>
    </section>
  );
};
