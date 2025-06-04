import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const IndustryTransformationsSection = () => {
  // Data for industry cards
  const industryCards = [
    {
      id: 1,
      image: "/img/placeholder-image-11.png",
      title: "Livestock Technologies: Revolutionizing Agriculture",
      description:
        "Enhancing cattle welfare and ranch efficiency through advanced computer vision and real-time data processing.",
    },
    {
      id: 2,
      image: "/img/placeholder-image-12.png",
      title: "SocialEdge AI: Your Social Media Partner",
      description:
        "Automating social media management to boost engagement and grow your online presence effortlessly.",
    },
    {
      id: 3,
      image: "/img/placeholder-image-13.png",
      title: "Cutting-Edge AI Solutions for Every Industry",
      description:
        "Delivering actionable insights through advanced AI in forestry, traffic, and beyond.",
    },
    {
      id: 4,
      image: "/img/placeholder-image-14.png",
      title: "Join Us in Building the Future",
      description:
        "Partner with us to turn your visionary ideas into scalable solutions that drive real impact.",
    },
  ];

  return (
    <section className="w-full bg-primitives-color-blue-gem-lightest py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)]">
      <div className="flex flex-col items-start gap-20 mx-auto w-full max-w-[var(--spacing-sizing-container-container-large)]">
        <div className="w-full max-w-[var(--spacing-sizing-max-width-max-width-large)] flex flex-col items-start gap-4">
          <div className="inline-flex items-center">
            <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              Innovate
            </span>
          </div>

          <div className="flex flex-col items-start gap-6 w-full">
            <h2 className="w-full font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
              Transforming Industries with Advanced AI Solutions
            </h2>

            <p className="w-full text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-medium-normal-letter-spacing)] [font-style:var(--text-medium-normal-font-style)]">
              At AI Dream Builders, we specialize in creating innovative
              solutions tailored to your needs. Our cutting-edge technologies
              empower industries to achieve unprecedented efficiency and
              insight.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col items-start gap-16">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryCards.map((card) => (
              <Card
                key={card.id}
                className="border-none shadow-none bg-transparent"
              >
                <div className="flex flex-col items-start gap-6">
                  <img
                    className="w-full h-40 object-cover"
                    alt="Placeholder image"
                    src={card.image}
                  />
                  <CardContent className="p-0 flex flex-col items-start gap-4">
                    <h5 className="w-full font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)]">
                      {card.title}
                    </h5>
                    <p className="w-full text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]">
                      {card.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Button className="h-auto px-6 py-2.5 bg-primitives-color-blue-gem rounded-[100px] border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] text-white font-text-regular-medium">
            View Our Showcase
          </Button>

          <Button
            variant="ghost"
            className="h-auto p-0 flex items-center gap-2 font-text-regular-medium text-[color:var(--primitives-color-neutral-darkest)]"
          >
            Contact
            <ChevronRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
