import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationBarSection = () => {
  const navLinks = [
    { text: "Home", href: "aidreambuilders.com", external: true },
    { text: "About Us", to: "/about-us-u8226-desktop", external: false },
    {
      text: "Companies & Solutions",
      to: "/companies-and-solutions-u8226-desktop",
      external: false,
    },
  ];

  return (
    <div className="w-full bg-color-schemes-color-scheme-1-background">
      <header className="h-[72px] flex items-center justify-between px-[var(--spacing-sizing-page-padding-padding-global)] py-0 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-6">
            <div className="relative w-[84px] h-9">
              <img
                className="absolute w-9 h-9 top-0 left-[17px] object-cover"
                alt="Chatgpt image jun"
                src="/img/chatgpt-image-jun-3-2025-02-28-23-pm-1-9.png"
              />
            </div>

            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-8">
                {navLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    {link.external ? (
                      <a
                        className="flex items-start gap-2.5"
                        href={link.href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="font-text-regular-normal text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] tracking-[var(--text-regular-normal-letter-spacing)] whitespace-nowrap">
                          {link.text}
                        </span>
                      </a>
                    ) : (
                      <NavigationMenuLink asChild>
                        <Link className="flex items-start gap-2.5" to={link.to}>
                          <span className="font-text-regular-normal text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-regular-normal-font-size)] leading-[var(--text-regular-normal-line-height)] tracking-[var(--text-regular-normal-letter-spacing)] whitespace-nowrap">
                            {link.text}
                          </span>
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <Button
              asChild
              variant="outline"
              className="h-auto px-5 py-2 rounded-[100px] border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent"
            >
              <Link to="/contact-u8226-desktop">
                <span className="font-text-regular-medium text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap">
                  Contact Us
                </span>
              </Link>
            </Button>

            <Button
              asChild
              className="h-auto px-5 py-2 bg-primitives-color-blue-gem rounded-[100px] shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d]"
            >
              <Link to="/showcase-u8226-desktop">
                <span className="font-text-regular-medium text-[color:var(--primitives-color-white)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap">
                  Showcase
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};
