import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Contact information data for mapping
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
    <section
      className="flex flex-col w-full items-center gap-12 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-color-schemes-color-scheme-1-background"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-12 w-full">
        <div className="flex flex-col items-start gap-12 w-full">
          <header className="flex flex-col items-start gap-3 w-full">
            <div className="flex flex-col items-start gap-5 w-full">
              <h2 className="text-[length:var(--heading-h2-font-size)] tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] w-full mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h2-font-style)]">
                Get in Touch
              </h2>

              <p className="w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                We&apos;re here to help you explore AI solutions tailored to
                your needs.
              </p>
            </div>
          </header>

          <Card className="border-none shadow-none w-full">
            <CardContent className="flex flex-col items-start gap-6 p-2 w-full">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4 w-full">
                  {item.icon}
                  <div className="flex flex-col items-start gap-2 flex-1">
                    <h6 className="text-[length:var(--heading-h6-font-size)] tracking-[var(--heading-h6-letter-spacing)] leading-[var(--heading-h6-line-height)] w-full mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] [font-style:var(--heading-h6-font-style)]">
                      {item.title}
                    </h6>
                    {item.isLink ? (
                      <a
                        href={item.href}
                        className="w-full font-text-regular-link font-[number:var(--text-regular-link-font-weight)] text-[length:var(--text-regular-link-font-size)] leading-[var(--text-regular-link-line-height)] underline text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-regular-link-letter-spacing)] [font-style:var(--text-regular-link-font-style)]"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <img
          className="w-full h-[188px] object-cover"
          alt="Placeholder image"
          src="/img/placeholder-image-6.png"
        />
      </div>
    </section>
  );
};
