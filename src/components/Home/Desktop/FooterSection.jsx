import { FacebookIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "../../../ui/separator";

// Navigation links data
const navLinks = [
  { text: "Contact Us", path: "/contact-u8226-desktop" },
  { text: "About Us", path: "/about-us-u8226-desktop" },
  {
    text: "Companies & Solutions",
    path: "/companies-and-solutions-u8226-desktop",
  },
];

const FooterSection = () => {
  return (
    <footer className="py-[var(--spacing-sizing-section-padding-padding-section-medium)] px-[var(--spacing-sizing-page-padding-padding-global)] bg-color-schemes-color-scheme-1-background w-full">
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] mx-auto gap-20 w-full">
        <div className="flex items-center gap-8 w-full">
          {/* Logo section */}
          <div className="flex-1">
            <div className="relative w-[84px] h-9">
              <img
                className="absolute w-9 h-9 top-0 left-[17px] object-cover"
                alt="Chatgpt image jun"
                src="/img/chatgpt-image-jun-3-2025-02-28-23-pm-1-9.png"
              />
            </div>
          </div>

          {/* Navigation links */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className="font-text-small-semi-bold text-[length:var(--text-small-semi-bold-font-size)] leading-[var(--text-small-semi-bold-line-height)] tracking-[var(--text-small-semi-bold-letter-spacing)] text-[color:var(--color-schemes-color-scheme-1-text)] whitespace-nowrap"
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

        <div className="flex flex-col items-center gap-8 w-full">
          <Separator className="w-full h-0.5" />

          <div className="flex flex-wrap items-center gap-6">
            <p className="font-text-small-normal text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)]">
              © 2023 AI Dream Builders. All rights reserved.
            </p>

            <Link
              className="font-text-small-link text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] text-[color:var(--color-schemes-color-scheme-1-text)] underline"
              to="#"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
