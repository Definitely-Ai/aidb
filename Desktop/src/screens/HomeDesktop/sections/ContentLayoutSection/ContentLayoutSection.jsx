import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContentLayoutSection = () => {
  // Feature list data for mapping
  const featureList = [
    {
      icon: "/img/analytics.svg",
      alt: "Analytics",
      text: "Advanced AI for Real-World Applications and Impact",
    },
    {
      icon: "/img/manufacturing.svg",
      alt: "Manufacturing",
      text: "Custom Solutions for Every Industry and Challenge",
    },
    {
      icon: "/img/partner-exchange.svg",
      alt: "Partner exchange",
      text: "Partnering with You to Build the Future Together",
    },
  ];

  return (
    <section className="w-full bg-primitives-color-blue-gem-lightest py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)]">
      <div className="mx-auto w-full max-w-[var(--spacing-sizing-container-container-large)] flex flex-col gap-20">
        <div className="flex items-center gap-20 w-full">
          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-6 w-full">
                  <h2 className="text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h2-font-style)]">
                    Transforming Ideas into AI-Powered Solutions
                  </h2>

                  <p className="text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
                    At AI Dream Builders, we harness the power of cutting-edge
                    AI technology to create innovative solutions tailored to
                    your needs. Our consulting services empower businesses to
                    thrive in a rapidly evolving digital landscape.
                  </p>
                </div>
              </div>

              <Card className="border-none shadow-none bg-transparent">
                <CardContent className="flex flex-col gap-4 p-2">
                  {featureList.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4 w-full">
                      <img
                        className="w-4 h-4"
                        alt={feature.alt}
                        src={feature.icon}
                      />
                      <span className="flex-1 mt-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="flex items-center gap-6">
              <Button
                asChild
                className="h-auto px-6 py-2.5 rounded-[100px] bg-primitives-color-blue-gem border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)]"
              >
                <Link to="/showcase-u8226-desktop">
                  <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                    View Our Showcase
                  </span>
                </Link>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="h-auto p-0 rounded-[100px]"
              >
                <Link
                  to="/contact-u8226-desktop"
                  className="flex items-center gap-2"
                >
                  <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                    Contact Us
                  </span>
                  <ChevronRightIcon className="w-6 h-6" />
                </Link>
              </Button>
            </div>
          </div>

          <img
            className="flex-1 h-[412px]"
            alt="Placeholder image"
            src="/img/placeholder-image.png"
          />
        </div>
      </div>
    </section>
  );
};
