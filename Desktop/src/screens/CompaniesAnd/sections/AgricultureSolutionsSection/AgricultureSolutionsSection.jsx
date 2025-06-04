import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AgricultureSolutionsSection = () => {
  // Content data for the section
  const solutionFeatures = [
    {
      title: "Innovative",
      description:
        "Enhancing ranching efficiency through real-time data processing.",
    },
    {
      title: "Reliable",
      description: "Empowering ranchers with actionable insights and updates.",
    },
  ];

  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-color-schemes-color-scheme-1-background">
      <div className="mx-auto max-w-[var(--spacing-sizing-container-container-large)] flex flex-col gap-20">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1">
            <img
              className="w-full h-[533.33px] object-cover rounded-md"
              alt="Placeholder image"
              src="/img/placeholder-image-15.png"
            />
          </div>

          <div className="flex flex-col gap-8 flex-1">
            <div className="flex flex-col gap-6">
              <h3 className="font-heading-h3 text-[length:var(--heading-h3-font-size)] tracking-[var(--heading-h3-letter-spacing)] leading-[var(--heading-h3-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                Transforming Agriculture with Advanced Computer Vision and
                Real-Time Data Solutions
              </h3>

              <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] leading-[var(--text-medium-normal-line-height)] tracking-[var(--text-medium-normal-letter-spacing)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                Livestock Technologies harnesses the power of custom computer
                vision software and robust on-premise servers to revolutionize
                cattle ranching. Our innovative system processes live camera
                feeds, providing ranchers with critical data and real-time
                updates to enhance cattle welfare and operational efficiency.
              </p>
            </div>

            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
                  {solutionFeatures.map((feature, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <h2 className="font-heading-h2 text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                        {feature.title}
                      </h2>
                      <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] tracking-[var(--text-regular-normal-letter-spacing)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
