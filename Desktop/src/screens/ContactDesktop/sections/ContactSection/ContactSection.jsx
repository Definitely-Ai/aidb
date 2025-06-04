import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContactSection = () => {
  // Contact information data
  const contactMethods = [
    {
      icon: <MailIcon className="w-12 h-12" />,
      title: "Email",
      description: "Reach us anytime at admin@aidreambuilder.tech.",
      contact: "admin@aidreambuilder.tech",
    },
    {
      icon: <PhoneIcon className="w-12 h-12" />,
      title: "Phone",
      description: "Call us at 239-544-6990 for inquiries.",
      contact: "+1 (239) 544-6990",
    },
    {
      icon: <MapPinIcon className="w-12 h-12" />,
      title: "Worldwide",
      description: "Operating around the world",
      contact: "Headquartered in Naples, Florida",
    },
  ];

  return (
    <section className="w-full py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-primitives-color-blue-gem-lightest">
      <div className="flex flex-col items-center gap-20 w-full max-w-[var(--spacing-sizing-container-container-large)] mx-auto">
        <div className="flex flex-col items-center gap-4 w-full max-w-[var(--spacing-sizing-max-width-max-width-large)]">
          <div className="inline-flex items-center">
            <span className="font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] [font-style:var(--heading-tagline-font-style)]">
              Connect
            </span>
          </div>

          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="text-center w-full mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
              Get in Touch
            </h2>

            <p className="text-center w-full font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
              We're here to help with your AI needs.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-none bg-transparent">
                <CardContent className="flex flex-col items-center gap-6 p-0">
                  <div className="mt-0">{method.icon}</div>

                  <div className="flex flex-col items-center gap-6 w-full">
                    <div className="flex flex-col items-center gap-4 w-full">
                      <h4 className="w-full mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h4-font-size)] text-center tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
                        {method.title}
                      </h4>

                      <p className="w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                        {method.description}
                      </p>
                    </div>

                    <a
                      href={
                        method.title === "Email"
                          ? `mailto:${method.contact}`
                          : method.title === "Phone"
                            ? `tel:${method.contact.replace(/\D/g, "")}`
                            : "#"
                      }
                      className="w-full font-text-regular-link font-[number:var(--text-regular-link-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-link-font-size)] text-center tracking-[var(--text-regular-link-letter-spacing)] leading-[var(--text-regular-link-line-height)] underline [font-style:var(--text-regular-link-font-style)]"
                    >
                      {method.contact}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
