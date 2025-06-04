import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = () => {
  // Service data for mapping
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
    <section className="py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] w-full bg-color-schemes-color-scheme-1-background">
      <div className="flex flex-col items-center gap-20 max-w-[var(--spacing-sizing-container-container-large)] mx-auto">
        {/* Heading Section */}
        <div className="flex flex-col items-center gap-4 w-full max-w-[var(--spacing-sizing-max-width-max-width-large)]">
          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="font-heading-h2 text-[length:var(--heading-h2-font-size)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] text-center">
              Transforming Ideas into Intelligent Solutions
            </h2>
            <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] text-center">
              At AI Dream Builders, we specialize in harnessing the power of
              artificial intelligence to create transformative solutions. Our
              focus on computer vision, automation, and custom hardware empowers
              businesses to thrive in a digital landscape.
            </p>
          </div>
        </div>

        {/* Services Section with Central Image */}
        <div className="flex items-center gap-12 w-full">
          {/* Left Column */}
          <div className="flex flex-col items-center gap-16 flex-1">
            {services.slice(0, 2).map((service, index) => (
              <Card key={index} className="border-none shadow-none w-full">
                <CardContent className="flex flex-col items-center gap-6 p-0">
                  <img
                    className="w-12 h-12"
                    alt={service.title}
                    src={service.icon}
                  />
                  <div className="flex flex-col items-center gap-4 w-full">
                    <h5 className="font-heading-h5 text-[length:var(--heading-h5-font-size)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] text-center">
                      {service.title}
                    </h5>
                    <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] text-center">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Center Image */}
          <img
            className="w-[555px] h-[556px] object-cover"
            alt="Placeholder image"
            src="/img/placeholder-image-1.png"
          />

          {/* Right Column */}
          <div className="flex flex-col items-center gap-16 flex-1">
            {services.slice(2, 4).map((service, index) => (
              <Card key={index} className="border-none shadow-none w-full">
                <CardContent className="flex flex-col items-center gap-6 p-0">
                  <img
                    className="w-12 h-12"
                    alt={service.title}
                    src={service.icon}
                  />
                  <div className="flex flex-col items-center gap-4 w-full">
                    <h5 className="font-heading-h5 text-[length:var(--heading-h5-font-size)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--heading-h5-letter-spacing)] leading-[var(--heading-h5-line-height)] text-center">
                      {service.title}
                    </h5>
                    <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] text-center">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-6">
          <Button
            asChild
            className="bg-primitives-color-blue-gem rounded-[100px] border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] h-auto px-6 py-2.5"
          >
            <Link to="/showcase-u8226-desktop">
              <span className="font-text-regular-medium text-white text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap">
                View Our Showcase
              </span>
            </Link>
          </Button>

          <Button
            variant="ghost"
            asChild
            className="rounded-[100px] h-auto p-0"
          >
            <Link
              to="/contact-u8226-desktop"
              className="flex items-center gap-2"
            >
              <span className="font-text-regular-medium text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap">
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
