import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const LayoutSection = () => {
  const featureItems = [
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
    <section
      className="flex flex-col items-center gap-12 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] w-full bg-primitives-color-blue-gem-lightest"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <Card className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-12 w-full border-none shadow-none bg-transparent">
        <CardContent className="flex flex-col items-start gap-12 w-full p-0">
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="flex flex-col items-start gap-5 w-full">
              <div className="flex flex-col items-start gap-3 w-full">
                <div className="flex flex-col items-start gap-5 w-full">
                  <h2 className="text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] w-full mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h2-font-style)]">
                    Transforming Ideas into AI-Powered Solutions
                  </h2>

                  <p className="w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    At AI Dream Builders, we harness the power of cutting-edge
                    AI technology to create innovative solutions tailored to
                    your needs. Our consulting services empower businesses to
                    thrive in a rapidly evolving digital landscape.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 px-0 py-2 w-full">
                {featureItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 w-full">
                    <img className="w-4 h-4" alt={item.alt} src={item.icon} />
                    <p className="flex-1 mt-[-1.00px] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Button
                className="h-auto px-6 py-2.5 bg-primitives-color-blue-gem rounded-[100px] border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)]"
                asChild
              >
                <Link to="/showcase-u8226-mobile">
                  <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                    View Our Showcase
                  </span>
                </Link>
              </Button>

              <Button
                className="h-auto p-0 bg-transparent hover:bg-transparent"
                variant="link"
                asChild
              >
                <Link
                  to="/contact-u8226-mobile"
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
            className="w-[330px] h-[220px]"
            alt="Placeholder image"
            src="/img/placeholder-image.png"
          />
        </CardContent>
      </Card>
    </section>
  );
};
