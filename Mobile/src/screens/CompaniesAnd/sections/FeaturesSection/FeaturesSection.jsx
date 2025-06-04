import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = () => {
  // Feature cards data for mapping
  const featureCards = [
    {
      id: 1,
      image: "/img/placeholder-image-8.png",
      title: "Livestock Technologies: Revolutionizing Agriculture",
      description:
        "Enhancing cattle welfare and ranch efficiency through advanced computer vision and real-time data processing.",
    },
    {
      id: 2,
      image: "/img/placeholder-image-9.png",
      title: "SocialEdge AI: Your Social Media Partner",
      description:
        "Automating social media management to boost engagement and grow your online presence effortlessly.",
    },
    {
      id: 3,
      image: "/img/placeholder-image-10.png",
      title: "Cutting-Edge AI Solutions for Every Industry",
      description:
        "Delivering actionable insights through advanced AI in forestry, traffic, and beyond.",
    },
    {
      id: 4,
      image: "/img/placeholder-image-11.png",
      title: "Join Us in Building the Future",
      description:
        "Partner with us to turn your visionary ideas into scalable solutions that drive real impact.",
    },
  ];

  return (
    <section
      className="flex flex-col w-full items-center gap-12 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-primitives-color-blue-gem-lightest"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-12 w-full">
        <div className="max-w-[var(--spacing-sizing-max-width-max-width-large)] flex flex-col items-start gap-3 w-full">
          <div className="inline-flex items-center">
            <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
              Innovate
            </span>
          </div>

          <div className="flex flex-col items-start gap-5 w-full">
            <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
              Transforming Industries with Advanced AI Solutions
            </h2>

            <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
              At AI Dream Builders, we specialize in creating innovative
              solutions tailored to your needs. Our cutting-edge technologies
              empower industries to achieve unprecedented efficiency and
              insight.
            </p>
          </div>
        </div>

        <div className="flex items-start w-full flex-col gap-8">
          {featureCards.map((card) => (
            <Card
              key={card.id}
              className="w-full border-none bg-transparent shadow-none"
            >
              <CardContent className="flex flex-col items-start gap-5 p-0">
                <img
                  className="h-44 object-cover w-full"
                  alt="Placeholder image"
                  src={card.image}
                />
                <div className="flex flex-col items-center gap-3 w-full">
                  <h3 className="font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h5-font-size)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] [font-style:var(--heading-h5-font-style)] w-full">
                    {card.title}
                  </h3>
                  <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] w-full">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Button
            asChild
            variant="outline"
            className="h-auto px-6 py-2.5 rounded-[100px] border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent"
          >
            <Link to="/showcase-u8226-mobile">
              <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                View Our Showcase
              </span>
            </Link>
          </Button>

          <Button
            asChild
            variant="ghost"
            className="h-auto p-0 rounded-[100px]"
          >
            <Link to="/contact-u8226-mobile" className="flex items-center">
              <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                Contact
              </span>
              <ChevronRightIcon className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
