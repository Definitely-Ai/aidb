import { XIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../ui/button";

const NavigationBarSection = () => {
  // Navigation menu items data
  const navItems = [
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
    { title: "Contact Us", href: "/contact-u8226-mobile", variant: "outline" },
    { title: "Showcase", href: "/showcase-u8226-mobile", variant: "default" },
  ];

  return (
    <nav
      className="flex flex-col items-center pt-0 pb-[38px] px-0 relative self-stretch w-full flex-[0_0_auto] bg-color-schemes-color-scheme-1-background"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      {/* Header with logo and close button */}
      <header className="flex h-16 items-center justify-between pl-[var(--spacing-sizing-page-padding-padding-global)] pr-3 py-0 relative self-stretch w-full">
        <div className="inline-flex items-center gap-6 relative">
          <div className="relative w-[84px] h-9">
            <img
              className="absolute w-9 h-9 top-0 left-[17px] object-cover"
              alt="Chatgpt image"
              src="/img/chatgpt-image-jun-3-2025-02-28-23-pm-1-8.png"
            />
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="w-12 h-12 flex items-center justify-center"
        >
          <XIcon className="w-6 h-6" />
        </Button>
      </header>

      {/* Navigation links */}
      <div className="flex flex-col items-start gap-2.5 px-[var(--spacing-sizing-page-padding-padding-global)] pt-4 pb-6 relative self-stretch w-full">
        <div className="flex flex-col items-center relative self-stretch w-full">
          {navItems.map((item, index) =>
            item.external ? (
              <a
                key={index}
                className="flex flex-col items-center justify-center gap-2.5 px-0 py-3 relative self-stretch w-full"
                href={item.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="w-fit mt-[-1.00px] font-text-medium-normal text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] whitespace-nowrap [font-style:var(--text-medium-normal-font-style)]">
                  {item.title}
                </span>
              </a>
            ) : (
              <Link
                key={index}
                className="flex flex-col items-center justify-center gap-2.5 px-0 py-3 relative self-stretch w-full"
                to={item.href}
              >
                <span className="w-fit mt-[-1.00px] font-text-medium-normal text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] whitespace-nowrap [font-style:var(--text-medium-normal-font-style)]">
                  {item.title}
                </span>
              </Link>
            )
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col items-center justify-center gap-4 px-[var(--spacing-sizing-page-padding-padding-global)] py-0 relative self-stretch w-full">
        {actionButtons.map((button, index) => (
          <Button
            key={index}
            variant={button.variant}
            asChild
            className={`h-auto ${
              button.variant === "outline"
                ? "w-[124px] border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent rounded-[100px]"
                : "w-[120px] bg-primitives-color-blue-gem rounded-[100px] shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]"
            }`}
          >
            <Link to={button.href}>
              <span
                className={`relative w-fit font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)] ${
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
    </nav>
  );
};

export default NavigationBarSection;
