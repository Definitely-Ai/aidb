import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../ui/button";
import { Card, CardContent } from "../../../ui/card";

const HeaderSection = () => {
  return (
    <header className="flex flex-col items-center gap-20 px-[var(--spacing-sizing-page-padding-padding-global)] py-12 w-full bg-color-schemes-color-scheme-1-background shadow-md">
      <div className="flex-col max-w-[var(--spacing-sizing-container-container-large)] items-start gap-10 w-full flex">
        <Card className="w-full border-none shadow-none bg-[#ffffff]">
          <CardContent className="flex flex-row items-start p-0">
            <div className="flex flex-col items-start flex-1">
              <h1 className="self-stretch [text-shadow:0px_4px_4px_#00000040] [-webkit-text-stroke:1px_#000000] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-primitives-color-blue-gem text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                Transforming Ideas into Reality with AI
              </h1>
            </div>

            <div className="flex flex-col h-[264px] items-center justify-center gap-8 flex-1">
              <p className="self-stretch font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                At AI Dream Builders, we harness the power of artificial
                intelligence to create innovative solutions tailored to your
                needs. Join us on a journey to shape the future together.
              </p>

              <div className="flex items-start gap-4">
                <Button
                  asChild
                  className="px-6 py-2.5 bg-primitives-color-blue-gem rounded-[100px] shadow-[0px_1px_2px_#0000000d,inset_0px_-2px_1px_#00000033,inset_0px_0px_0px_1px_#00000026,inset_0px_2px_1px_#ffffff40,inset_0px_32px_24px_#ffffff0d] h-auto"
                >
                  <Link to="/showcase-u8226-desktop">
                    <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                      Showcase
                    </span>
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="px-6 py-2.5 rounded-[100px] border-2 border-solid border-[color:var(--primitives-color-neutral-darkest)] bg-primitives-opacity-transparent h-auto"
                >
                  <Link to="/contact-u8226-desktop">
                    <span className="font-text-regular-medium font-[number:var(--text-regular-medium-font-weight)] text-[color:var(--primitives-color-neutral-darkest)] text-[length:var(--text-regular-medium-font-size)] tracking-[var(--text-regular-medium-letter-spacing)] leading-[var(--text-regular-medium-line-height)] whitespace-nowrap [font-style:var(--text-regular-medium-font-style)]">
                      Contact us
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="w-full h-[720px] rounded-[var(--UI-styles-radius-large)] shadow-[12px_20px_4px_#eee7f5]" />
      </div>
    </header>
  );
};

export default HeaderSection;
