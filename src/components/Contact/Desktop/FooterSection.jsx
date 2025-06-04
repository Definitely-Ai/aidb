import { FacebookIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "../../../ui/separator";

const FooterSection = () => {
  // Navigation links data
  const navLinks = [
    { text: "Contact Us", path: "/contact-u8226-desktop" },
    { text: "About Us", path: "/about-us-u8226-desktop" },
    {
      text: "Companies & Solutions",
      path: "/companies-and-solutions-u8226-desktop",
    },
  ];

  return (
    <footer className="w-full flex flex-col items-center gap-20 py-[var(--spacing-sizing-section-padding-padding-section-medium)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-color-schemes-color-scheme-1-background">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-20 w-full">
        {/* Top section with logo, navigation and social icons */}
        <div className="flex items-center gap-8 w-full">
          {/* Logo section */}
          <div className="flex flex-col items-start gap-6 flex-1">
            <div className="relative w-[84px] h-9">
              <img
                className="absolute w-9 h-9 top-0 left-[17px] object-cover"
                alt="Chatgpt image jun"
                src="/img/chatgpt-image-jun-3-2025-02-28-23-pm-1-9.png"
              />
            </div>
          </div>

          {/* Navigation links */}
          <nav className="inline-flex items-start justify-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className="w-fit mt-[-1.00px] font-text-small-semi-bold font-[number:var(--text-small-semi-bold-font-weight)] text-[length:var(--text-small-semi-bold-font-size)] leading-[var(--text-small-semi-bold-line-height)] whitespace-nowrap text-[color:var(--color-schemes-color-scheme-1-text)] tracking-[var(--text-small-semi-bold-letter-spacing)] [font-style:var(--text-small-semi-bold-font-style)]"
                to={link.path}
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* Social media icons */}
          <div className="flex items-center justify-end gap-3 flex-1">
            <FacebookIcon className="w-6 h-6" />
          </div>
        </div>

        {/* Bottom section with divider, copyright and terms */}
        <div className="flex flex-col items-center gap-8 w-full">
          <Separator className="w-full h-0.5 mt-[-2.00px]" />

          <div className="inline-flex items-start gap-6">
            <div className="w-fit mt-[-1.00px] font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap [font-style:var(--text-small-normal-font-style)]">
              © 2023 AI Dream Builders. All rights reserved.
            </div>

            <div className="w-fit mt-[-1.00px] font-text-small-link font-[number:var(--text-small-link-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)]">
              Terms of Service
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
