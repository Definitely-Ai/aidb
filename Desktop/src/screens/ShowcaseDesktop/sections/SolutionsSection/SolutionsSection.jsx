import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const SolutionsSection = () => {
  const features = [
    {
      title: "Vehicle Detection",
      description:
        "Instantly identify and track vehicles and people for enhanced security and logistics.",
    },
    {
      title: "Data Insights",
      description:
        "Transform raw data into actionable insights for smarter business decisions.",
    },
  ];

  return (
    <section className="w-full py-28 px-16 bg-primitives-color-blue-gem-lightest">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1">
            <img
              className="w-full h-[640px] object-cover rounded-lg"
              alt="AI vehicle detection system in action"
              src="/img/placeholder-image-7.png"
            />
          </div>

          <div className="flex-1 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="text-[48px] leading-[120%] tracking-[-0.48px] font-heading-h3 font-bold text-[color:var(--color-schemes-color-scheme-1-text)]">
                Transform Your Operations with Advanced AI Solutions Tailored
                for You
              </h3>

              <p className="text-[20px] leading-[150%] font-text-medium-normal text-[color:var(--color-schemes-color-scheme-1-text)]">
                Explore our innovative AI technologies that enhance efficiency
                and drive growth. From real-time monitoring to insightful data
                analysis, we empower your business to thrive.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-2">
                {features.map((feature, index) => (
                  <Card key={index} className="border-none bg-transparent">
                    <CardContent className="p-0 flex flex-col gap-4">
                      <h6 className="text-[26px] leading-[140%] tracking-[-0.26px] font-heading-h6 font-bold text-[color:var(--color-schemes-color-scheme-1-text)]">
                        {feature.title}
                      </h6>
                      <p className="text-[18px] leading-[150%] font-text-regular-normal text-[color:var(--color-schemes-color-scheme-1-text)]">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
