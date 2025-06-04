import React from "react";

export const HeaderSection = () => {
  return (
    <section className="w-full py-28 px-16 bg-primitives-color-blue-gem-lightest">
      <div className="flex flex-col w-full max-w-[var(--spacing-sizing-container-container-large)] mx-auto">
        <div className="flex flex-col max-w-[var(--spacing-sizing-max-width-max-width-large)] gap-6">
          <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--heading-h1-font-size)] tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
            Explore AI Possibilities
          </h1>
          <p className="font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[color:var(--color-schemes-color-scheme-1-text)] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
            Discover cutting-edge AI solutions designed to inspire, innovative
            ideas, and empower your business.
          </p>
        </div>
      </div>
    </section>
  );
};
