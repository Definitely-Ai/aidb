import React from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import { Button } from "../../components/Button";
import { CompanyLogo } from "../../components/CompanyLogo";
import { ChevronRight3 } from "../../icons/ChevronRight3";
import { Close } from "../../icons/Close";
import { Facebook2 } from "../../icons/Facebook2";
import "./style.css";

export const AboutUsDesktop = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="about-us-desktop"
      style={{
        minHeight:
          screenWidth < 1460
            ? "3746px"
            : screenWidth >= 1460
              ? "3465.88px"
              : undefined,
        minWidth:
          screenWidth < 1460
            ? "395px"
            : screenWidth >= 1460
              ? "1460px"
              : undefined,
      }}
    >
      <div className="about-us-mobile">
        <div
          className="navbar-3"
          style={{
            padding: screenWidth < 1460 ? "0px 0px 38px" : undefined,
          }}
          data-spacing-sizing-mode={screenWidth < 1460 ? "mobile" : undefined}
          data-typography-mode={screenWidth < 1460 ? "mobile" : undefined}
        >
          {screenWidth < 1460 && (
            <>
              <div className="content-23">
                <div className="div-5">
                  <CompanyLogo alternate={false} className="company-logo-3" />
                </div>

                <div className="close-1-wrapper">
                  <Close className="instance-node-6" />
                </div>
              </div>

              <div className="row-6">
                <div className="column-9">
                  <a
                    className="link-text-wrapper-5"
                    href="aidreambuilders.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="link-text-5">Home</div>
                  </a>

                  <Link className="link-text-wrapper-5" to="/about-us-desktop">
                    <div className="link-text-5">About Us</div>
                  </Link>

                  <Link
                    className="link-text-wrapper-5"
                    to="/companies-u38-solutions-mobile"
                  >
                    <div className="link-text-5">Companies &amp; Solutions</div>
                  </Link>
                </div>
              </div>

              <div className="actions-6">
                <Button
                  alternate={false}
                  className="button-11"
                  iconPosition="no-icon"
                  small
                  style="secondary"
                  text="Contact Us"
                  to="/contact-us-desktop"
                />
                <Button
                  alternate={false}
                  className="button-12"
                  iconPosition="no-icon"
                  small
                  style="primary"
                  text="Showcase"
                  to="/showcase-desktop"
                />
              </div>
            </>
          )}

          {screenWidth >= 1460 && (
            <header className="header-4">
              <div className="container-11">
                <div className="div-5">
                  <CompanyLogo alternate={false} className="company-logo-3" />
                  <div className="column-10">
                    <a
                      className="link-text-wrapper-6"
                      href="aidreambuilders.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="link-text-6">Home</div>
                    </a>

                    <Link
                      className="link-text-wrapper-6"
                      to="/about-us-desktop"
                    >
                      <div className="link-text-6">About Us</div>
                    </Link>

                    <Link
                      className="link-text-wrapper-6"
                      to="/companies-u38-solutions-mobile"
                    >
                      <div className="link-text-6">
                        Companies &amp; Solutions
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="actions-7">
                  <Button
                    alternate={false}
                    className="contact-us-3"
                    iconPosition="no-icon"
                    small
                    style="secondary"
                    text="Contact Us"
                    to="/contact-us-desktop"
                  />
                  <Button
                    alternate={false}
                    className="button-13"
                    iconPosition="no-icon"
                    small
                    style="primary"
                    text="Showcase"
                    to="/showcase-desktop"
                  />
                </div>
              </div>
            </header>
          )}
        </div>

        <div
          className="header-5"
          style={{
            gap:
              screenWidth < 1460
                ? "48px"
                : screenWidth >= 1460
                  ? "80px"
                  : undefined,
            width:
              screenWidth < 1460
                ? "375px"
                : screenWidth >= 1460
                  ? "1440px"
                  : undefined,
          }}
          data-spacing-sizing-mode={screenWidth < 1460 ? "mobile" : undefined}
          data-typography-mode={screenWidth < 1460 ? "mobile" : undefined}
        >
          <div
            className="container-12"
            style={{
              gap:
                screenWidth < 1460
                  ? "48px"
                  : screenWidth >= 1460
                    ? "80px"
                    : undefined,
            }}
          >
            <div
              className="component-4"
              style={{
                gap:
                  screenWidth < 1460
                    ? "24px"
                    : screenWidth >= 1460
                      ? "32px"
                      : undefined,
              }}
            >
              <div
                className="section-title-3"
                style={{
                  gap:
                    screenWidth < 1460
                      ? "12px"
                      : screenWidth >= 1460
                        ? "16px"
                        : undefined,
                }}
              >
                <div className="tagline-wrapper-2">
                  <div className="tagline-2">Innovate</div>
                </div>

                <div
                  className="content-24"
                  style={{
                    gap:
                      screenWidth < 1460
                        ? "20px"
                        : screenWidth >= 1460
                          ? "24px"
                          : undefined,
                  }}
                >
                  <div className="text-wrapper-9">Empowering Your Vision</div>

                  <p
                    className="text-wrapper-10"
                    style={{
                      fontFamily:
                        screenWidth < 1460
                          ? "var(--text-regular-normal-font-family)"
                          : screenWidth >= 1460
                            ? "var(--text-medium-normal-font-family)"
                            : undefined,
                      fontSize:
                        screenWidth < 1460
                          ? "var(--text-regular-normal-font-size)"
                          : screenWidth >= 1460
                            ? "var(--text-medium-normal-font-size)"
                            : undefined,
                      fontStyle:
                        screenWidth < 1460
                          ? "var(--text-regular-normal-font-style)"
                          : screenWidth >= 1460
                            ? "var(--text-medium-normal-font-style)"
                            : undefined,
                      fontWeight:
                        screenWidth < 1460
                          ? "var(--text-regular-normal-font-weight)"
                          : screenWidth >= 1460
                            ? "var(--text-medium-normal-font-weight)"
                            : undefined,
                      letterSpacing:
                        screenWidth < 1460
                          ? "var(--text-regular-normal-letter-spacing)"
                          : screenWidth >= 1460
                            ? "var(--text-medium-normal-letter-spacing)"
                            : undefined,
                      lineHeight:
                        screenWidth < 1460
                          ? "var(--text-regular-normal-line-height)"
                          : screenWidth >= 1460
                            ? "var(--text-medium-normal-line-height)"
                            : undefined,
                    }}
                  >
                    At AI Dream Builders, we transform ambitious ideas into
                    impactful solutions through advanced AI technology.
                  </p>
                </div>
              </div>

              <div className="actions-8">
                <Button
                  alternate={false}
                  className="button-13"
                  iconPosition="no-icon"
                  small={false}
                  style="primary"
                  text="View Our Showcase"
                />
                <Button
                  alternate={false}
                  className="button-14"
                  iconPosition="no-icon"
                  small={false}
                  style="secondary"
                  text="Join Us"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="layout-3"
          style={{
            gap:
              screenWidth < 1460
                ? "48px"
                : screenWidth >= 1460
                  ? "80px"
                  : undefined,
            width:
              screenWidth < 1460
                ? "375px"
                : screenWidth >= 1460
                  ? "1440px"
                  : undefined,
          }}
          data-spacing-sizing-mode={screenWidth < 1460 ? "mobile" : undefined}
          data-typography-mode={screenWidth < 1460 ? "mobile" : undefined}
        >
          <div
            className="container-13"
            style={{
              alignItems:
                screenWidth < 1460
                  ? "center"
                  : screenWidth >= 1460
                    ? "flex-start"
                    : undefined,
              gap:
                screenWidth < 1460
                  ? "48px"
                  : screenWidth >= 1460
                    ? "80px"
                    : undefined,
              width:
                screenWidth < 1460
                  ? "100%"
                  : screenWidth >= 1460
                    ? "var(--spacing-sizing-container-container-large)"
                    : undefined,
            }}
          >
            <div
              className="component-5"
              style={{
                alignItems:
                  screenWidth < 1460
                    ? "flex-start"
                    : screenWidth >= 1460
                      ? "center"
                      : undefined,
                flex: screenWidth < 1460 ? "0 0 auto" : undefined,
                flexDirection: screenWidth < 1460 ? "column" : undefined,
                gap:
                  screenWidth < 1460
                    ? "48px"
                    : screenWidth >= 1460
                      ? "80px"
                      : undefined,
                height: screenWidth >= 1460 ? "640px" : undefined,
              }}
            >
              <div
                className="content-left"
                style={{
                  alignSelf: screenWidth < 1460 ? "stretch" : undefined,
                  flex:
                    screenWidth < 1460
                      ? "0 0 auto"
                      : screenWidth >= 1460
                        ? "1"
                        : undefined,
                  flexGrow: screenWidth >= 1460 ? "1" : undefined,
                  gap:
                    screenWidth < 1460
                      ? "24px"
                      : screenWidth >= 1460
                        ? "32px"
                        : undefined,
                  width: screenWidth < 1460 ? "100%" : undefined,
                }}
              >
                <div
                  className="section-title-4"
                  style={{
                    gap:
                      screenWidth >= 1460
                        ? "16px"
                        : screenWidth < 1460
                          ? "12px"
                          : undefined,
                  }}
                >
                  <div className="tagline-wrapper-3">
                    <div className="tagline-3">Innovate</div>
                  </div>

                  <div
                    className="content-25"
                    style={{
                      gap:
                        screenWidth >= 1460
                          ? "24px"
                          : screenWidth < 1460
                            ? "20px"
                            : undefined,
                    }}
                  >
                    <p className="heading-7">
                      Empowering Ideas Through Advanced AI Solutions
                    </p>

                    <p
                      className="text-7"
                      style={{
                        fontFamily:
                          screenWidth >= 1460
                            ? "var(--text-medium-normal-font-family)"
                            : screenWidth < 1460
                              ? "var(--text-regular-normal-font-family)"
                              : undefined,
                        fontSize:
                          screenWidth >= 1460
                            ? "var(--text-medium-normal-font-size)"
                            : screenWidth < 1460
                              ? "var(--text-regular-normal-font-size)"
                              : undefined,
                        fontStyle:
                          screenWidth >= 1460
                            ? "var(--text-medium-normal-font-style)"
                            : screenWidth < 1460
                              ? "var(--text-regular-normal-font-style)"
                              : undefined,
                        fontWeight:
                          screenWidth >= 1460
                            ? "var(--text-medium-normal-font-weight)"
                            : screenWidth < 1460
                              ? "var(--text-regular-normal-font-weight)"
                              : undefined,
                        letterSpacing:
                          screenWidth >= 1460
                            ? "var(--text-medium-normal-letter-spacing)"
                            : screenWidth < 1460
                              ? "var(--text-regular-normal-letter-spacing)"
                              : undefined,
                        lineHeight:
                          screenWidth >= 1460
                            ? "var(--text-medium-normal-line-height)"
                            : screenWidth < 1460
                              ? "var(--text-regular-normal-line-height)"
                              : undefined,
                      }}
                    >
                      Founded in 2023 by Zechariah Myrick, AI Dream Builders is
                      dedicated to transforming ambitious ideas into impactful
                      realities. Our mission is to harness the power of
                      artificial intelligence to create innovative solutions
                      that drive success for our partners.
                    </p>
                  </div>
                </div>

                {screenWidth >= 1460 && (
                  <div className="div-5">
                    <Button
                      alternate={false}
                      className="button-15"
                      divClassName="button-16"
                      iconPosition="no-icon"
                      small={false}
                      style="secondary"
                      text="View Our Showcase"
                    />
                    <Button
                      alternate={false}
                      className="button-17"
                      icon={<ChevronRight3 className="instance-node-6" />}
                      iconPosition="trailing"
                      small={false}
                      style="link"
                      text="Contact"
                    />
                  </div>
                )}
              </div>

              <img
                className="placeholder-image-4"
                style={{
                  flex: screenWidth >= 1460 ? "1" : undefined,
                  flexGrow: screenWidth >= 1460 ? "1" : undefined,
                  height:
                    screenWidth < 1460
                      ? "349px"
                      : screenWidth >= 1460
                        ? "640px"
                        : undefined,
                  marginRight: screenWidth < 1460 ? "-1.00px" : undefined,
                  objectFit: screenWidth >= 1460 ? "cover" : undefined,
                  width: screenWidth < 1460 ? "336px" : undefined,
                }}
                alt="Placeholder image"
                src={
                  screenWidth < 1460
                    ? "/img/placeholder-image-9.png"
                    : screenWidth >= 1460
                      ? "/img/placeholder-image-6.png"
                      : undefined
                }
              />
            </div>
          </div>
        </div>

        <div
          className="layout-4"
          style={{
            gap:
              screenWidth < 1460
                ? "48px"
                : screenWidth >= 1460
                  ? "80px"
                  : undefined,
            width:
              screenWidth < 1460
                ? "375px"
                : screenWidth >= 1460
                  ? "1440px"
                  : undefined,
          }}
          data-spacing-sizing-mode={screenWidth < 1460 ? "mobile" : undefined}
          data-typography-mode={screenWidth < 1460 ? "mobile" : undefined}
        >
          <div
            className="container-14"
            style={{
              gap:
                screenWidth < 1460
                  ? "48px"
                  : screenWidth >= 1460
                    ? "80px"
                    : undefined,
              width:
                screenWidth < 1460
                  ? "100%"
                  : screenWidth >= 1460
                    ? "var(--spacing-sizing-container-container-large)"
                    : undefined,
            }}
          >
            <div
              className="component-6"
              style={{
                alignItems:
                  screenWidth < 1460
                    ? "flex-start"
                    : screenWidth >= 1460
                      ? "center"
                      : undefined,
                flexDirection: screenWidth < 1460 ? "column" : undefined,
                gap:
                  screenWidth < 1460
                    ? "48px"
                    : screenWidth >= 1460
                      ? "80px"
                      : undefined,
              }}
            >
              {screenWidth < 1460 && (
                <>
                  <div className="content-26">
                    <div className="section-title-5">
                      <div className="tagline-wrapper-3">
                        <div className="tagline-3">Innovate</div>
                      </div>

                      <div className="content-27">
                        <p className="heading-7">
                          Unlock the Power of AI with Us
                        </p>

                        <p className="text-8">
                          Partnering with AI Dream Builders means accessing the
                          latest advancements in artificial intelligence and
                          custom technology solutions. Our collaborative
                          approach ensures that your unique vision is
                          transformed into a scalable reality.
                        </p>
                      </div>
                    </div>
                  </div>

                  <img
                    className="placeholder-image-5"
                    alt="Placeholder image"
                    src="/img/placeholder-image-10.png"
                  />
                </>
              )}

              {screenWidth >= 1460 && (
                <>
                  <img
                    className="placeholder-image-6"
                    alt="Placeholder image"
                    src="/img/placeholder-image-7.png"
                  />

                  <div className="content-28">
                    <div className="section-title-6">
                      <div className="tagline-wrapper-3">
                        <div className="tagline-3">Innovate</div>
                      </div>

                      <div className="content-26">
                        <p className="heading-7">
                          Unlock the Power of AI with Us
                        </p>

                        <p className="text-9">
                          Partnering with AI Dream Builders means accessing the
                          latest advancements in artificial intelligence and
                          custom technology solutions. Our collaborative
                          approach ensures that your unique vision is
                          transformed into a scalable reality.
                        </p>
                      </div>
                    </div>

                    <div className="div-5">
                      <Button
                        alternate={false}
                        className="button-18"
                        iconPosition="no-icon"
                        small={false}
                        style="secondary"
                        text="View Our Showcase"
                      />
                      <Button
                        alternate={false}
                        className="button-17"
                        icon={<ChevronRight3 className="instance-node-6" />}
                        iconPosition="trailing"
                        small={false}
                        style="link"
                        text="Contact"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div
          className="CTA-3"
          style={{
            alignItems:
              screenWidth < 1460
                ? "flex-start"
                : screenWidth >= 1460
                  ? "center"
                  : undefined,
            gap:
              screenWidth < 1460
                ? "48px"
                : screenWidth >= 1460
                  ? "80px"
                  : undefined,
            width:
              screenWidth < 1460
                ? "375px"
                : screenWidth >= 1460
                  ? "1440px"
                  : undefined,
          }}
          data-spacing-sizing-mode={screenWidth < 1460 ? "mobile" : undefined}
          data-typography-mode={screenWidth < 1460 ? "mobile" : undefined}
        >
          <div
            className="container-15"
            style={{
              gap:
                screenWidth < 1460
                  ? "48px"
                  : screenWidth >= 1460
                    ? "80px"
                    : undefined,
            }}
          >
            <div
              className="component-7"
              style={{
                alignItems:
                  screenWidth < 1460
                    ? "flex-start"
                    : screenWidth >= 1460
                      ? "center"
                      : undefined,
                flexDirection: screenWidth < 1460 ? "column" : undefined,
                gap:
                  screenWidth < 1460
                    ? "48px"
                    : screenWidth >= 1460
                      ? "80px"
                      : undefined,
              }}
            >
              <div
                className="column-11"
                style={{
                  alignSelf: screenWidth < 1460 ? "stretch" : undefined,
                  flex:
                    screenWidth < 1460
                      ? "0 0 auto"
                      : screenWidth >= 1460
                        ? "1"
                        : undefined,
                  flexGrow: screenWidth >= 1460 ? "1" : undefined,
                  gap:
                    screenWidth < 1460
                      ? "24px"
                      : screenWidth >= 1460
                        ? "32px"
                        : undefined,
                  width: screenWidth < 1460 ? "100%" : undefined,
                }}
              >
                <div
                  className="content-29"
                  style={{
                    gap:
                      screenWidth < 1460
                        ? "20px"
                        : screenWidth >= 1460
                          ? "24px"
                          : undefined,
                  }}
                >
                  <p className="heading-7">Let’s Build the Future Together</p>

                  <p
                    className="text-10"
                    style={{
                      fontFamily:
                        screenWidth < 1460
                          ? "var(--text-regular-normal-font-family)"
                          : screenWidth >= 1460
                            ? "var(--text-medium-normal-font-family)"
                            : undefined,
                      fontSize:
                        screenWidth < 1460
                          ? "var(--text-regular-normal-font-size)"
                          : screenWidth >= 1460
                            ? "var(--text-medium-normal-font-size)"
                            : undefined,
                      fontStyle:
                        screenWidth < 1460
                          ? "var(--text-regular-normal-font-style)"
                          : screenWidth >= 1460
                            ? "var(--text-medium-normal-font-style)"
                            : undefined,
                      fontWeight:
                        screenWidth < 1460
                          ? "var(--text-regular-normal-font-weight)"
                          : screenWidth >= 1460
                            ? "var(--text-medium-normal-font-weight)"
                            : undefined,
                      letterSpacing:
                        screenWidth < 1460
                          ? "var(--text-regular-normal-letter-spacing)"
                          : screenWidth >= 1460
                            ? "var(--text-medium-normal-letter-spacing)"
                            : undefined,
                      lineHeight:
                        screenWidth < 1460
                          ? "var(--text-regular-normal-line-height)"
                          : screenWidth >= 1460
                            ? "var(--text-medium-normal-line-height)"
                            : undefined,
                    }}
                  >
                    Contact us today to explore how we can turn your ideas into
                    reality with AI.
                  </p>
                </div>

                <div className="actions-8">
                  <Button
                    alternate={false}
                    className="button-13"
                    iconPosition="no-icon"
                    small={false}
                    style="primary"
                    text="View Our Showcase"
                  />
                  <Button
                    alternate={false}
                    className="button-14"
                    iconPosition="no-icon"
                    small={false}
                    style="secondary"
                    text="Contact"
                  />
                </div>
              </div>

              <img
                className="placeholder-image-7"
                style={{
                  alignSelf: screenWidth < 1460 ? "stretch" : undefined,
                  flex: screenWidth >= 1460 ? "1" : undefined,
                  flexGrow: screenWidth >= 1460 ? "1" : undefined,
                  height:
                    screenWidth < 1460
                      ? "218px"
                      : screenWidth >= 1460
                        ? "400px"
                        : undefined,
                  width: screenWidth < 1460 ? "100%" : undefined,
                }}
                alt="Placeholder image"
                src={
                  screenWidth < 1460
                    ? "/img/placeholder-image-11.png"
                    : screenWidth >= 1460
                      ? "/img/placeholder-image-8.png"
                      : undefined
                }
              />
            </div>
          </div>
        </div>

        <div
          className="footer-3"
          style={{
            alignSelf: screenWidth < 1460 ? "stretch" : undefined,
            gap:
              screenWidth < 1460
                ? "48px"
                : screenWidth >= 1460
                  ? "80px"
                  : undefined,
            width:
              screenWidth < 1460
                ? "100%"
                : screenWidth >= 1460
                  ? "1440px"
                  : undefined,
          }}
          data-spacing-sizing-mode={screenWidth < 1460 ? "mobile" : undefined}
          data-typography-mode={screenWidth < 1460 ? "mobile" : undefined}
        >
          <div
            className="container-16"
            style={{
              gap:
                screenWidth < 1460
                  ? "48px"
                  : screenWidth >= 1460
                    ? "80px"
                    : undefined,
            }}
          >
            <div
              className="content-30"
              style={{
                flexDirection: screenWidth < 1460 ? "column" : undefined,
                gap:
                  screenWidth < 1460
                    ? "48px"
                    : screenWidth >= 1460
                      ? "32px"
                      : undefined,
              }}
            >
              <div
                className="company-logo-instance-wrapper"
                style={{
                  alignItems:
                    screenWidth < 1460
                      ? "center"
                      : screenWidth >= 1460
                        ? "flex-start"
                        : undefined,
                  alignSelf: screenWidth < 1460 ? "stretch" : undefined,
                  flex:
                    screenWidth < 1460
                      ? "0 0 auto"
                      : screenWidth >= 1460
                        ? "1"
                        : undefined,
                  flexGrow: screenWidth >= 1460 ? "1" : undefined,
                  width: screenWidth < 1460 ? "100%" : undefined,
                }}
              >
                <CompanyLogo alternate={false} className="company-logo-3" />
              </div>

              <div
                className="links-3"
                style={{
                  alignItems:
                    screenWidth < 1460
                      ? "center"
                      : screenWidth >= 1460
                        ? "flex-start"
                        : undefined,
                  alignSelf: screenWidth < 1460 ? "stretch" : undefined,
                  display:
                    screenWidth < 1460
                      ? "flex"
                      : screenWidth >= 1460
                        ? "inline-flex"
                        : undefined,
                  flexDirection: screenWidth < 1460 ? "column" : undefined,
                  gap:
                    screenWidth < 1460
                      ? "24px"
                      : screenWidth >= 1460
                        ? "32px"
                        : undefined,
                  justifyContent: screenWidth >= 1460 ? "center" : undefined,
                  width: screenWidth < 1460 ? "100%" : undefined,
                }}
              >
                <Link
                  className="text-wrapper-11"
                  style={{
                    alignSelf: screenWidth < 1460 ? "stretch" : undefined,
                    textAlign: screenWidth < 1460 ? "center" : undefined,
                    whiteSpace: screenWidth >= 1460 ? "nowrap" : undefined,
                    width: screenWidth >= 1460 ? "fit-content" : undefined,
                  }}
                  to="/contact-us-desktop"
                >
                  Contact Us
                </Link>

                <Link
                  className="text-wrapper-12"
                  style={{
                    alignSelf: screenWidth < 1460 ? "stretch" : undefined,
                    marginTop: screenWidth >= 1460 ? "-1.00px" : undefined,
                    textAlign: screenWidth < 1460 ? "center" : undefined,
                    whiteSpace: screenWidth >= 1460 ? "nowrap" : undefined,
                    width: screenWidth >= 1460 ? "fit-content" : undefined,
                  }}
                  to="/about-us-desktop"
                >
                  About Us
                </Link>

                <Link
                  className="companies-solutions-4"
                  style={{
                    alignSelf: screenWidth < 1460 ? "stretch" : undefined,
                    marginTop: screenWidth >= 1460 ? "-1.00px" : undefined,
                    textAlign: screenWidth < 1460 ? "center" : undefined,
                    whiteSpace: screenWidth >= 1460 ? "nowrap" : undefined,
                    width: screenWidth >= 1460 ? "fit-content" : undefined,
                  }}
                  to="/companies-u38-solutions-mobile"
                >
                  Companies &amp; Solutions
                </Link>
              </div>

              <a
                className="facebook-2-wrapper"
                style={{
                  alignItems:
                    screenWidth < 1460
                      ? "flex-start"
                      : screenWidth >= 1460
                        ? "center"
                        : undefined,
                  alignSelf: screenWidth < 1460 ? "stretch" : undefined,
                  flex:
                    screenWidth < 1460
                      ? "0 0 auto"
                      : screenWidth >= 1460
                        ? "1"
                        : undefined,
                  flexGrow: screenWidth >= 1460 ? "1" : undefined,
                  justifyContent:
                    screenWidth < 1460
                      ? "center"
                      : screenWidth >= 1460
                        ? "flex-end"
                        : undefined,
                  width: screenWidth < 1460 ? "100%" : undefined,
                }}
                href="https://www.facebook.com/profile.php?id=61560854473620"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook2 className="instance-node-6" />
              </a>
            </div>

            <div
              className="credits-3"
              style={{
                gap:
                  screenWidth < 1460
                    ? "24px"
                    : screenWidth >= 1460
                      ? "32px"
                      : undefined,
                padding: screenWidth < 1460 ? "0px 0px 16px" : undefined,
              }}
            >
              <img
                className="divider-3"
                alt="Divider"
                src={
                  screenWidth < 1460
                    ? "/img/divider-2.svg"
                    : screenWidth >= 1460
                      ? "/img/divider-4.svg"
                      : undefined
                }
              />

              <div
                className="row-7"
                style={{
                  alignItems:
                    screenWidth < 1460
                      ? "center"
                      : screenWidth >= 1460
                        ? "flex-start"
                        : undefined,
                  flexDirection: screenWidth < 1460 ? "column" : undefined,
                  gap:
                    screenWidth < 1460
                      ? "32px"
                      : screenWidth >= 1460
                        ? "24px"
                        : undefined,
                }}
              >
                <div
                  className="footer-links-3"
                  style={{
                    alignItems: screenWidth < 1460 ? "center" : undefined,
                    color:
                      screenWidth >= 1460
                        ? "var(--color-schemes-color-scheme-1-text)"
                        : undefined,
                    display: screenWidth < 1460 ? "inline-flex" : undefined,
                    flex: screenWidth < 1460 ? "0 0 auto" : undefined,
                    flexDirection: screenWidth < 1460 ? "column" : undefined,
                    fontFamily:
                      screenWidth >= 1460
                        ? "var(--text-small-normal-font-family)"
                        : undefined,
                    fontSize:
                      screenWidth >= 1460
                        ? "var(--text-small-normal-font-size)"
                        : undefined,
                    fontStyle:
                      screenWidth >= 1460
                        ? "var(--text-small-normal-font-style)"
                        : undefined,
                    fontWeight:
                      screenWidth >= 1460
                        ? "var(--text-small-normal-font-weight)"
                        : undefined,
                    gap: screenWidth < 1460 ? "16px" : undefined,
                    letterSpacing:
                      screenWidth >= 1460
                        ? "var(--text-small-normal-letter-spacing)"
                        : undefined,
                    lineHeight:
                      screenWidth >= 1460
                        ? "var(--text-small-normal-line-height)"
                        : undefined,
                    marginTop: screenWidth >= 1460 ? "-1.00px" : undefined,
                    whiteSpace: screenWidth >= 1460 ? "nowrap" : undefined,
                    width: screenWidth >= 1460 ? "fit-content" : undefined,
                  }}
                >
                  {screenWidth < 1460 && (
                    <div className="text-wrapper-13">Terms of Service</div>
                  )}

                  {screenWidth >= 1460 && (
                    <p className="text-wrapper-87">
                      © 2023 AI Dream Builders. All rights reserved.
                    </p>
                  )}
                </div>

                <div
                  className="element-AI-dream-3"
                  style={{
                    fontFamily:
                      screenWidth < 1460
                        ? "var(--text-small-normal-font-family)"
                        : screenWidth >= 1460
                          ? "var(--text-small-link-font-family)"
                          : undefined,
                    fontSize:
                      screenWidth < 1460
                        ? "var(--text-small-normal-font-size)"
                        : screenWidth >= 1460
                          ? "var(--text-small-link-font-size)"
                          : undefined,
                    fontStyle:
                      screenWidth < 1460
                        ? "var(--text-small-normal-font-style)"
                        : screenWidth >= 1460
                          ? "var(--text-small-link-font-style)"
                          : undefined,
                    fontWeight:
                      screenWidth < 1460
                        ? "var(--text-small-normal-font-weight)"
                        : screenWidth >= 1460
                          ? "var(--text-small-link-font-weight)"
                          : undefined,
                    letterSpacing:
                      screenWidth < 1460
                        ? "var(--text-small-normal-letter-spacing)"
                        : screenWidth >= 1460
                          ? "var(--text-small-link-letter-spacing)"
                          : undefined,
                    lineHeight:
                      screenWidth < 1460
                        ? "var(--text-small-normal-line-height)"
                        : screenWidth >= 1460
                          ? "var(--text-small-link-line-height)"
                          : undefined,
                    marginTop: screenWidth >= 1460 ? "-1.00px" : undefined,
                    textDecoration:
                      screenWidth >= 1460 ? "underline" : undefined,
                  }}
                >
                  {screenWidth < 1460 && (
                    <p className="text-wrapper-87">
                      © 2023 AI Dream Builders. All rights reserved.
                    </p>
                  )}

                  {screenWidth >= 1460 && <>Terms of Service</>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
