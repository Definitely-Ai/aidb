import { XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

// Navigation menu items data
const navigationLinks = [
  { title: "Home", href: "aidreambuilders.com", external: true },
  { title: "About Us", href: "/about-us-u8226-mobile", external: false },
  {
    title: "Companies & Solutions",
    href: "/companies-and-solutions-u8226-mobile",
    external: false,
  },
];

// Action buttons data
const actionButtons = [
  {
    title: "Contact Us",
    href: "/contact-u8226-mobile",
    variant: "outline",
    className: "w-[124px]",
  },
  {
    title: "Showcase",
    href: "/showcase-u8226-mobile",
    variant: "default",
    className: "w-[120px] bg-primitives-color-blue-gem",
  },
];

export const TransformSection = () => {
  return (
    <div
      className="flex flex-col items-center w-full bg-color-schemes-color-scheme-1-background"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex h-16 items-center justify-between w-full pl-[var(--spacing-sizing-page-padding-padding-global)] pr-3">
        <div className="flex items-center gap-6">
          <div className="relative w-[84px] h-9">
            <img
              className="absolute w-9 h-9 top-0 left-[17px] object-cover"
              alt="Chatgpt image jun"
              src="/img/chatgpt-image-jun-3-2025-02-28-23-pm-1-8.png"
            />
          </div>
        </div>

        <div className="flex w-12 h-12 items-center justify-center">
          <XIcon className="w-6 h-6" />
        </div>
      </div>

      <nav className="flex flex-col items-start w-full px-[var(--spacing-sizing-page-padding-padding-global)] pt-4 pb-6">
        <ul className="flex flex-col items-center w-full">
          {navigationLinks.map((link, index) => (
            <li key={index} className="w-full">
              {link.external ? (
                <a
                  className="flex flex-col items-center justify-center py-3 w-full"
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="w-fit mt-[-1.00px] font-text-medium-normal text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                    {link.title}
                  </span>
                </a>
              ) : (
                <Link
                  className="flex flex-col items-center justify-center py-3 w-full"
                  to={link.href}
                >
                  <span className="w-fit mt-[-1.00px] font-text-medium-normal text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                    {link.title}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col items-center justify-center gap-4 w-full px-[var(--spacing-sizing-page-padding-padding-global)] pb-[38px]">
        {actionButtons.map((button, index) => (
          <Button
            key={index}
            variant={button.variant}
            className={`h-auto ${button.className} ${
              button.variant === "outline"
                ? "border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent rounded-[100px]"
                : "rounded-[100px] shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]"
            }`}
            asChild
          >
            <Link to={button.href}>
              <span
                className={`font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)] ${
                  button.variant === "outline"
                    ? "text-[color:var(--primitives-color-neutral-darkest)]"
                    : "text-[color:var(--primitives-color-white)]"
                }`}
              >
                {button.title}
              </span>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};
