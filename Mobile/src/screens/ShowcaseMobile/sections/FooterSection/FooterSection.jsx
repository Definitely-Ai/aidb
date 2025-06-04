import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = () => {
  const navigationLinks = [
    { text: "Contact Us", path: "/contact-u8226-mobile" },
    { text: "About Us", path: "/about-us-u8226-mobile" },
    {
      text: "Companies & Solutions",
      path: "/companies-and-solutions-u8226-mobile",
    },
  ];

  return (
    <footer
      className="flex flex-col items-center gap-12 py-[var(--spacing-sizing-section-padding-padding-section-medium)] px-[var(--spacing-sizing-page-padding-padding-global)] w-full bg-color-schemes-color-scheme-1-background"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col items-start gap-12 w-full max-w-[var(--spacing-sizing-container-container-large)]">
        <div className="flex flex-col items-center gap-12 w-full">
          {/* Logo section */}
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="relative w-[84px] h-9">
              <img
                className="absolute w-9 h-9 top-0 left-[17px] object-cover"
                alt="Chatgpt image"
                src="/img/chatgpt-image-jun-3-2025-02-28-23-pm-1-9.png"
              />
            </div>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-col items-center gap-6 w-full">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                className="w-full font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-small-semi-bold-font-size)] text-center tracking-[var(--text-small-semi-bold-letter-spacing)] leading-[var(--text-small-semi-bold-line-height)] [font-style:var(--text-small-semi-bold-font-style)]"
                to={link.path}
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* Social media */}
          <a
            className="flex items-center justify-center w-full"
            href="https://www.facebook.com/profile.php?id=61560854473620"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img className="w-6 h-6" alt="Facebook" src="/img/facebook-4.svg" />
          </a>
        </div>

        {/* Footer bottom section */}
        <div className="flex flex-col items-center gap-6 pb-4 w-full">
          <Separator className="w-full h-0.5" />

          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-4">
              <button className="font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline [font-style:var(--text-small-link-font-style)]">
                Terms of Service
              </button>
            </div>

            <div className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
              © 2023 AI Dream Builders. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
