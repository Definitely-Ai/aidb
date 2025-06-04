import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = () => {
  const services = [
    {
      icon: "/img/analytics-1.svg",
      title: "Computer Vision Expertise",
      description:
        "Unlock insights from real-time video analytics to enhance decision-making and operational efficiency.",
    },
    {
      icon: "/img/productivity.svg",
      title: "AI Automation Solutions",
      description:
        "Streamline workflows and boost productivity with our advanced AI-powered automation tools.",
    },
    {
      icon: "/img/hardware.svg",
      title: "Custom Hardware Development",
      description:
        "Tailored server infrastructure designed to meet your unique operational needs and performance demands.",
    },
    {
      icon: "/img/partner-exchange-1.svg",
      title: "Collaborative Partnerships",
      description:
        "We work closely with clients to turn innovative ideas into scalable, impactful solutions.",
    },
  ];

  return (
    <section
      className="flex flex-col items-center gap-12 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] w-full bg-color-schemes-color-scheme-1-background"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-center gap-12 w-full">
        <div className="flex flex-col max-w-[var(--spacing-sizing-max-width-max-width-large)] items-center gap-3 w-full">
          <div className="flex flex-col items-center gap-5 w-full">
            <h2 className="font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
              Transforming Ideas into Intelligent Solutions
            </h2>

            <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
              At AI Dream Builders, we specialize in harnessing the power of
              artificial intelligence to create transformative solutions. Our
              focus on computer vision, automation, and custom hardware empowers
              businesses to thrive in a digital landscape.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-12 w-full">
          <div className="flex flex-col items-center gap-12 w-full">
            {services.slice(0, 2).map((service, index) => (
              <Card key={index} className="w-full border-none shadow-none">
                <CardContent className="flex flex-col items-center gap-5 p-0">
                  <img
                    className="w-12 h-12"
                    alt={service.title}
                    src={service.icon}
                  />
                  <div className="flex flex-col items-center gap-3 w-full">
                    <h5 className="text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] w-full font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h5-font-style)]">
                      {service.title}
                    </h5>
                    <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex flex-col items-center gap-12 w-full">
            {services.slice(2, 4).map((service, index) => (
              <Card key={index} className="w-full border-none shadow-none">
                <CardContent className="flex flex-col items-center gap-5 p-0">
                  <img
                    className="w-12 h-12"
                    alt={service.title}
                    src={service.icon}
                  />
                  <div className="flex flex-col items-center gap-3 w-full">
                    <h5 className="text-[length:var(--heading-h5-font-size)] text-center tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] w-full font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h5-font-style)]">
                      {service.title}
                    </h5>
                    <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <img
            className="w-full h-[335px] object-cover"
            alt="Placeholder image"
            src="/img/placeholder-image-1.png"
          />
        </div>

        <div className="flex items-center gap-6">
          <Button
            asChild
            className="px-6 py-2.5 h-auto bg-primitives-color-blue-gem rounded-[100px] border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)]"
          >
            <Link to="/showcase-u8226-mobile">
              <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                View Our Showcase
              </span>
            </Link>
          </Button>

          <Button asChild variant="ghost" className="h-auto p-0">
            <Link
              to="/contact-u8226-mobile"
              className="flex items-center gap-2"
            >
              <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] [font-style:var(--text-regular-medium-font-style)]">
                Contact Us
              </span>
              <ChevronRightIcon className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
