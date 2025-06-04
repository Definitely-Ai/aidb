import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = () => {
  // Data for the testimonial section
  const testimonialData = {
    title:
      "Transforming Agriculture with Advanced Computer Vision and Real-Time Data Solutions",
    description:
      "Livestock Technologies harnesses the power of custom computer vision software and robust on-premise servers to revolutionize cattle ranching. Our innovative system processes live camera feeds, providing ranchers with critical data and real-time updates to enhance cattle welfare and operational efficiency.",
    features: [
      {
        title: "Innovative",
        description:
          "Enhancing ranching efficiency through real-time data processing.",
      },
      {
        title: "Reliable",
        description:
          "Empowering ranchers with actionable insights and updates.",
      },
    ],
    imageSrc: "/img/placeholder-image-12.png",
    imageAlt: "Placeholder image",
  };

  return (
    <section
      className="flex flex-col w-full items-center gap-12 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-color-schemes-color-scheme-1-background"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-12 w-full">
        <div className="flex flex-col items-start gap-12 w-full">
          <Card className="border-none shadow-none w-full">
            <CardContent className="flex flex-col items-start gap-6 p-0 w-full">
              <div className="flex flex-col items-start gap-5 w-full">
                <h3 className="text-[length:var(--heading-h3-font-size)] text-center tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] w-full mt-[-1.00px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h3-font-style)]">
                  {testimonialData.title}
                </h3>

                <p className="w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  {testimonialData.description}
                </p>
              </div>

              <div className="flex flex-col items-start justify-center gap-6 py-2 w-full">
                {testimonialData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="gap-2 flex flex-col items-start w-full"
                  >
                    <h2 className="w-full mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
                      {feature.title}
                    </h2>
                    <p className="w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <img
            className="w-full h-[348px] object-cover"
            alt={testimonialData.imageAlt}
            src={testimonialData.imageSrc}
          />
        </div>
      </div>
    </section>
  );
};
