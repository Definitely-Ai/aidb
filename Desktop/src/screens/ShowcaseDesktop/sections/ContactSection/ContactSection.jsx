import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Contact information data for easy maintenance
const contactInfo = [
  {
    icon: <MailIcon className="h-6 w-6" />,
    title: "Email",
    content: "admin@aidreambuilder.tech",
    isLink: true,
    href: "mailto:admin@aidreambuilder.tech",
  },
  {
    icon: <PhoneIcon className="h-6 w-6" />,
    title: "Phone",
    content: "+1 (239) 544-6990",
    isLink: true,
    href: "tel:+12395446990",
  },
  {
    icon: <MapPinIcon className="h-6 w-6" />,
    title: "Worldwide",
    content: "Headquarters in Naples Florida",
    isLink: false,
  },
];

export const ContactSection = () => {
  return (
    <section className="w-full bg-color-schemes-color-scheme-1-background py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)]">
      <div className="mx-auto max-w-[var(--spacing-sizing-container-container-large)] flex flex-col gap-20">
        <div className="flex flex-col md:flex-row gap-20 w-full">
          <div className="flex-1">
            <div className="flex flex-col gap-6">
              <h2 className="font-heading-h2 text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                Get in Touch
              </h2>
              <p className="font-text-medium-normal text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                We&apos;re here to help you explore AI solutions tailored to
                your needs.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:w-[500px] py-2">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                {item.icon}
                <div className="flex flex-col gap-2 flex-1">
                  <h6 className="font-heading-h6 text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] font-[number:var(--heading-h6-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)]">
                    {item.title}
                  </h6>
                  {item.isLink ? (
                    <a
                      href={item.href}
                      className={`underline font-${item.title === "Phone" ? "text-regular-link" : "text-regular-normal"} text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-regular-normal-letter-spacing)]`}
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="font-text-regular-normal text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-regular-normal-letter-spacing)]">
                      {item.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Card className="w-full border-0 p-0">
          <CardContent className="p-0">
            <img
              className="w-full h-auto object-cover"
              alt="AI Dream Builders logo"
              src="/img/placeholder-image-9.png"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
