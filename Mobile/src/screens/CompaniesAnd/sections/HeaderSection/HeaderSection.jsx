import React from "react";

export const HeaderSection = () => {
  return (
    <section
      className="flex flex-col w-full items-center gap-12 py-[var(--spacing-sizing-section-padding-padding-section-large)] px-[var(--spacing-sizing-page-padding-padding-global)] relative bg-[url(/img/header-65.png)] bg-cover bg-center"
      data-spacing-sizing-mode="mobile"
      data-typography-mode="mobile"
    >
      <div className="flex flex-col max-w-[var(--spacing-sizing-container-container-large)] items-center gap-12 relative w-full">
        <div className="max-w-[var(--spacing-sizing-max-width-max-width-large)] items-center gap-6 flex flex-col relative w-full">
          <div className="flex flex-col items-center gap-3 relative w-full">
            <div className="flex flex-col items-center gap-5 relative w-full">
              <h1 className="relative w-full mt-[-1.00px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                Transform Your Vision
              </h1>

              <p className="relative w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[color:var(--primitives-color-white)] text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                Explore our groundbreaking companies and solutions that are
                reshaping industries with AI technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
