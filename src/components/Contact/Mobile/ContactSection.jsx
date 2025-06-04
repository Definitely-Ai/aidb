import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../ui/card";

// Contact information data for mapping
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

const ContactSection = () => {
  return (
    <section
      className="flex flex-col items-center gap-12 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-primitives-color-blue-gem-lightest w-full"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-center gap-12 w-full">
        <div className="flex flex-col max-w-[var(--spacing-sizing-max-width-max-width-large)] items-center gap-3 w-full">
          <div className="inline-flex items-center self-stretch">
            <div className="w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              Connect
            </div>
          </div>

          <div className="flex flex-col items-center gap-5 self-stretch w-full">
            <h2 className="text-center self-stretch mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
              Get in Touch
            </h2>

            <p className="self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
              We&#39;re here to help with your AI needs.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-12 self-stretch w-full flex-col">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="flex flex-col items-center gap-5 self-stretch w-full border-none bg-transparent shadow-none"
            >
              <CardContent className="flex flex-col items-center gap-5 p-0 w-full">
                {method.icon}
                <div className="flex flex-col items-center gap-5 self-stretch w-full">
                  <div className="flex flex-col items-center gap-3 self-stretch w-full">
                    <h4 className="self-stretch mt-[-1.00px] font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h4-font-size)] text-center tracking-[var(--heading-h4-letter-spacing)] leading-[var(--heading-h4-line-height)] [font-style:var(--heading-h4-font-style)]">
                      {method.title}
                    </h4>
                    <p className="self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
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
                    className={`self-stretch ${
                      method.title === "Phone" || method.title === "Worldwide"
                        ? "font-text-regular-link font-[number:var(--text-regular-link-font-weight)] text-[length:var(--text-regular-link-font-size)] leading-[var(--text-regular-link-line-height)] tracking-[var(--text-regular-link-letter-spacing)] [font-style:var(--text-regular-link-font-style)]"
                        : "font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] tracking-[var(--text-regular-normal-letter-spacing)] [font-style:var(--text-regular-normal-font-style)]"
                    } text-[color:var(--color-schemes-color-scheme-1-text)] text-center underline`}
                  >
                    {method.contact}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
