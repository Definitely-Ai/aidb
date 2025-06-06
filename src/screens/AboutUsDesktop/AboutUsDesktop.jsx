import React from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useIsMobile, useResponsiveTheme } from "../../breakpoints";
import { Button } from "../../components/Button";
import { CompanyLogo } from "../../components/CompanyLogo";
import { ChevronRight3 } from "../../icons/ChevronRight3";
import { Close } from "../../icons/Close";
import { Facebook2 } from "../../icons/Facebook2";
import "./style.css";

export const AboutUsDesktop = () => {
  const isMobile = useIsMobile();
  const themeProps = useResponsiveTheme();

  usePageTitle(
    "About Us",
    "Learn about AI Dream Builders - transforming ideas into reality with cutting-edge artificial intelligence, computer vision, automation, and custom hardware solutions."
  );

  return (
    <div
      className="about-us-desktop"
      style={{
        minHeight: isMobile ? "100vh" : !isMobile ? "3465.88px" : undefined,
        minWidth: !isMobile ? "1460px" : undefined,
        width: isMobile ? "100%" : undefined,
        maxWidth: isMobile ? "100vw" : undefined,
        overflowX: isMobile ? "hidden" : undefined,
      }}
    >
      <div className="about-us-mobile">
        <div
          className="navbar-3"
          style={{
            padding: isMobile ? "0px 0px 38px" : undefined,
          }}
          {...themeProps}
        >
          {isMobile && (
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
                  <Link className="link-text-wrapper-5" to="/">
                    <div className="link-text-5">Home</div>
                  </Link>

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

          {!isMobile && (
            <header className="header-4">
              <div className="container-11">
                <div className="div-5">
                  <CompanyLogo alternate={false} className="company-logo-3" />
                  <div className="column-10">
                    <Link className="link-text-wrapper-6" to="/">
                      <div className="link-text-6">Home</div>
                    </Link>

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
            gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            width: isMobile ? "100%" : !isMobile ? "1440px" : undefined,
          }}
          {...themeProps}
        >
          <div
            className="container-12"
            style={{
              gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            }}
          >
            <div
              className="component-4"
              style={{
                gap: isMobile ? "24px" : !isMobile ? "32px" : undefined,
              }}
            >
              <div
                className="section-title-3"
                style={{
                  gap: isMobile ? "12px" : !isMobile ? "16px" : undefined,
                }}
              >
                <div className="tagline-wrapper-2">
                  <div className="tagline-2">Innovate</div>
                </div>

                <div
                  className="content-24"
                  style={{
                    gap: isMobile ? "20px" : !isMobile ? "24px" : undefined,
                  }}
                >
                  <div className="text-wrapper-9">Empowering Your Vision</div>

                  <p
                    className="text-wrapper-10"
                    style={{
                      fontFamily: isMobile
                        ? "var(--text-regular-normal-font-family)"
                        : !isMobile
                        ? "var(--text-medium-normal-font-family)"
                        : undefined,
                      fontSize: isMobile
                        ? "var(--text-regular-normal-font-size)"
                        : !isMobile
                        ? "var(--text-medium-normal-font-size)"
                        : undefined,
                      fontStyle: isMobile
                        ? "var(--text-regular-normal-font-style)"
                        : !isMobile
                        ? "var(--text-medium-normal-font-style)"
                        : undefined,
                      fontWeight: isMobile
                        ? "var(--text-regular-normal-font-weight)"
                        : !isMobile
                        ? "var(--text-medium-normal-font-weight)"
                        : undefined,
                      letterSpacing: isMobile
                        ? "var(--text-regular-normal-letter-spacing)"
                        : !isMobile
                        ? "var(--text-medium-normal-letter-spacing)"
                        : undefined,
                      lineHeight: isMobile
                        ? "var(--text-regular-normal-line-height)"
                        : !isMobile
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
                  to="/showcase-desktop"
                />
                <Button
                  alternate={false}
                  className="button-14"
                  iconPosition="no-icon"
                  small={false}
                  style="secondary"
                  text="Join Us"
                  to="/contact-us-desktop"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="layout-3"
          style={{
            gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            width: isMobile ? "100%" : !isMobile ? "1440px" : undefined,
          }}
          {...themeProps}
        >
          <div
            className="container-13"
            style={{
              alignItems: isMobile
                ? "center"
                : !isMobile
                ? "flex-start"
                : undefined,
              gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
              width: isMobile
                ? "100%"
                : !isMobile
                ? "var(--spacing-sizing-container-container-large)"
                : undefined,
            }}
          >
            <div
              className="component-5"
              style={{
                alignItems: isMobile
                  ? "flex-start"
                  : !isMobile
                  ? "center"
                  : undefined,
                flex: isMobile ? "0 0 auto" : undefined,
                flexDirection: isMobile ? "column" : undefined,
                gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
                height: !isMobile ? "640px" : undefined,
              }}
            >
              <div
                className="content-left"
                style={{
                  alignSelf: isMobile ? "stretch" : undefined,
                  flex: isMobile ? "0 0 auto" : !isMobile ? "1" : undefined,
                  flexGrow: !isMobile ? "1" : undefined,
                  gap: isMobile ? "24px" : !isMobile ? "32px" : undefined,
                  width: isMobile ? "100%" : undefined,
                }}
              >
                <div
                  className="section-title-4"
                  style={{
                    gap: !isMobile ? "16px" : isMobile ? "12px" : undefined,
                  }}
                >
                  <div className="tagline-wrapper-3">
                    <div className="tagline-3">Innovate</div>
                  </div>

                  <div
                    className="content-25"
                    style={{
                      gap: !isMobile ? "24px" : isMobile ? "20px" : undefined,
                    }}
                  >
                    <p className="heading-7">
                      Empowering Ideas Through Advanced AI Solutions
                    </p>

                    <p
                      className="text-7"
                      style={{
                        fontFamily: !isMobile
                          ? "var(--text-medium-normal-font-family)"
                          : isMobile
                          ? "var(--text-regular-normal-font-family)"
                          : undefined,
                        fontSize: !isMobile
                          ? "var(--text-medium-normal-font-size)"
                          : isMobile
                          ? "var(--text-regular-normal-font-size)"
                          : undefined,
                        fontStyle: !isMobile
                          ? "var(--text-medium-normal-font-style)"
                          : isMobile
                          ? "var(--text-regular-normal-font-style)"
                          : undefined,
                        fontWeight: !isMobile
                          ? "var(--text-medium-normal-font-weight)"
                          : isMobile
                          ? "var(--text-regular-normal-font-weight)"
                          : undefined,
                        letterSpacing: !isMobile
                          ? "var(--text-medium-normal-letter-spacing)"
                          : isMobile
                          ? "var(--text-regular-normal-letter-spacing)"
                          : undefined,
                        lineHeight: !isMobile
                          ? "var(--text-medium-normal-line-height)"
                          : isMobile
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

                {!isMobile && (
                  <div className="div-5">
                    <Button
                      alternate={false}
                      className="button-15"
                      divClassName="button-16"
                      iconPosition="no-icon"
                      small={false}
                      style="secondary"
                      text="View Our Showcase"
                      to="/showcase-desktop"
                    />
                    <Button
                      alternate={false}
                      className="button-17"
                      icon={<ChevronRight3 className="instance-node-6" />}
                      iconPosition="trailing"
                      small={false}
                      style="link"
                      text="Contact"
                      to="/contact-us-desktop"
                    />
                  </div>
                )}
              </div>

              <img
                className="placeholder-image-4"
                style={{
                  flex: !isMobile ? "1" : undefined,
                  flexGrow: !isMobile ? "1" : undefined,
                  height: isMobile ? "349px" : !isMobile ? "640px" : undefined,
                  marginRight: isMobile ? "-1.00px" : undefined,
                  objectFit: !isMobile ? "cover" : undefined,
                  width: isMobile ? "336px" : undefined,
                }}
                alt="Placeholder image"
                src={
                  isMobile
                    ? "/img/placeholder-image-9.png"
                    : !isMobile
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
            gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            width: isMobile ? "100%" : !isMobile ? "1440px" : undefined,
          }}
          {...themeProps}
        >
          <div
            className="container-14"
            style={{
              gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
              width: isMobile
                ? "100%"
                : !isMobile
                ? "var(--spacing-sizing-container-container-large)"
                : undefined,
            }}
          >
            <div
              className="component-6"
              style={{
                alignItems: isMobile
                  ? "flex-start"
                  : !isMobile
                  ? "center"
                  : undefined,
                flexDirection: isMobile ? "column" : undefined,
                gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
              }}
            >
              {isMobile && (
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

              {!isMobile && (
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
                        to="/showcase-desktop"
                      />
                      <Button
                        alternate={false}
                        className="button-17"
                        icon={<ChevronRight3 className="instance-node-6" />}
                        iconPosition="trailing"
                        small={false}
                        style="link"
                        text="Contact"
                        to="/contact-us-desktop"
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
            alignItems: isMobile
              ? "flex-start"
              : !isMobile
              ? "center"
              : undefined,
            gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            width: isMobile ? "100%" : !isMobile ? "1440px" : undefined,
          }}
          {...themeProps}
        >
          <div
            className="container-15"
            style={{
              gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            }}
          >
            <div
              className="component-7"
              style={{
                alignItems: isMobile
                  ? "flex-start"
                  : !isMobile
                  ? "center"
                  : undefined,
                flexDirection: isMobile ? "column" : undefined,
                gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
              }}
            >
              <div
                className="column-11"
                style={{
                  alignSelf: isMobile ? "stretch" : undefined,
                  flex: isMobile ? "0 0 auto" : !isMobile ? "1" : undefined,
                  flexGrow: !isMobile ? "1" : undefined,
                  gap: isMobile ? "24px" : !isMobile ? "32px" : undefined,
                  width: isMobile ? "100%" : undefined,
                }}
              >
                <div
                  className="content-29"
                  style={{
                    gap: isMobile ? "20px" : !isMobile ? "24px" : undefined,
                  }}
                >
                  <p className="heading-7">Let’s Build the Future Together</p>

                  <p
                    className="text-10"
                    style={{
                      fontFamily: isMobile
                        ? "var(--text-regular-normal-font-family)"
                        : !isMobile
                        ? "var(--text-medium-normal-font-family)"
                        : undefined,
                      fontSize: isMobile
                        ? "var(--text-regular-normal-font-size)"
                        : !isMobile
                        ? "var(--text-medium-normal-font-size)"
                        : undefined,
                      fontStyle: isMobile
                        ? "var(--text-regular-normal-font-style)"
                        : !isMobile
                        ? "var(--text-medium-normal-font-style)"
                        : undefined,
                      fontWeight: isMobile
                        ? "var(--text-regular-normal-font-weight)"
                        : !isMobile
                        ? "var(--text-medium-normal-font-weight)"
                        : undefined,
                      letterSpacing: isMobile
                        ? "var(--text-regular-normal-letter-spacing)"
                        : !isMobile
                        ? "var(--text-medium-normal-letter-spacing)"
                        : undefined,
                      lineHeight: isMobile
                        ? "var(--text-regular-normal-line-height)"
                        : !isMobile
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
                    to="/showcase-desktop"
                  />
                  <Button
                    alternate={false}
                    className="button-14"
                    iconPosition="no-icon"
                    small={false}
                    style="secondary"
                    text="Contact"
                    to="/contact-us-desktop"
                  />
                </div>
              </div>

              <img
                className="placeholder-image-7"
                style={{
                  alignSelf: isMobile ? "stretch" : undefined,
                  flex: !isMobile ? "1" : undefined,
                  flexGrow: !isMobile ? "1" : undefined,
                  height: isMobile ? "218px" : !isMobile ? "400px" : undefined,
                  width: isMobile ? "100%" : undefined,
                }}
                alt="Placeholder image"
                src={
                  isMobile
                    ? "/img/placeholder-image-11.png"
                    : !isMobile
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
            alignSelf: isMobile ? "stretch" : undefined,
            gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            width: isMobile ? "100%" : !isMobile ? "1440px" : undefined,
          }}
          {...themeProps}
        >
          <div
            className="container-16"
            style={{
              gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            }}
          >
            <div
              className="content-30"
              style={{
                flexDirection: isMobile ? "column" : undefined,
                gap: isMobile ? "48px" : !isMobile ? "32px" : undefined,
              }}
            >
              <div
                className="company-logo-instance-wrapper"
                style={{
                  alignItems: isMobile
                    ? "center"
                    : !isMobile
                    ? "flex-start"
                    : undefined,
                  alignSelf: isMobile ? "stretch" : undefined,
                  flex: isMobile ? "0 0 auto" : !isMobile ? "1" : undefined,
                  flexGrow: !isMobile ? "1" : undefined,
                  width: isMobile ? "100%" : undefined,
                }}
              >
                <CompanyLogo alternate={false} className="company-logo-3" />
              </div>

              <div
                className="links-3"
                style={{
                  alignItems: isMobile
                    ? "center"
                    : !isMobile
                    ? "flex-start"
                    : undefined,
                  alignSelf: isMobile ? "stretch" : undefined,
                  display: isMobile
                    ? "flex"
                    : !isMobile
                    ? "inline-flex"
                    : undefined,
                  flexDirection: isMobile ? "column" : undefined,
                  gap: isMobile ? "24px" : !isMobile ? "32px" : undefined,
                  justifyContent: !isMobile ? "center" : undefined,
                  width: isMobile ? "100%" : undefined,
                }}
              >
                <Link
                  className="text-wrapper-11"
                  style={{
                    alignSelf: isMobile ? "stretch" : undefined,
                    textAlign: isMobile ? "center" : undefined,
                    whiteSpace: !isMobile ? "nowrap" : undefined,
                    width: !isMobile ? "fit-content" : undefined,
                  }}
                  to="/contact-us-desktop"
                >
                  Contact Us
                </Link>

                <Link
                  className="text-wrapper-12"
                  style={{
                    alignSelf: isMobile ? "stretch" : undefined,
                    marginTop: !isMobile ? "-1.00px" : undefined,
                    textAlign: isMobile ? "center" : undefined,
                    whiteSpace: !isMobile ? "nowrap" : undefined,
                    width: !isMobile ? "fit-content" : undefined,
                  }}
                  to="/about-us-desktop"
                >
                  About Us
                </Link>

                <Link
                  className="companies-solutions-4"
                  style={{
                    alignSelf: isMobile ? "stretch" : undefined,
                    marginTop: !isMobile ? "-1.00px" : undefined,
                    textAlign: isMobile ? "center" : undefined,
                    whiteSpace: !isMobile ? "nowrap" : undefined,
                    width: !isMobile ? "fit-content" : undefined,
                  }}
                  to="/companies-u38-solutions-mobile"
                >
                  Companies &amp; Solutions
                </Link>
              </div>

              <a
                className="facebook-2-wrapper"
                style={{
                  alignItems: isMobile
                    ? "flex-start"
                    : !isMobile
                    ? "center"
                    : undefined,
                  alignSelf: isMobile ? "stretch" : undefined,
                  flex: isMobile ? "0 0 auto" : !isMobile ? "1" : undefined,
                  flexGrow: !isMobile ? "1" : undefined,
                  justifyContent: isMobile
                    ? "center"
                    : !isMobile
                    ? "flex-end"
                    : undefined,
                  width: isMobile ? "100%" : undefined,
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
                gap: isMobile ? "24px" : !isMobile ? "32px" : undefined,
                padding: isMobile ? "0px 0px 16px" : undefined,
              }}
            >
              <img
                className="divider-3"
                alt="Divider"
                src={
                  isMobile
                    ? "/img/divider-2.svg"
                    : !isMobile
                    ? "/img/divider-4.svg"
                    : undefined
                }
              />

              <div
                className="row-7"
                style={{
                  alignItems: isMobile
                    ? "center"
                    : !isMobile
                    ? "flex-start"
                    : undefined,
                  flexDirection: isMobile ? "column" : undefined,
                  gap: isMobile ? "32px" : !isMobile ? "24px" : undefined,
                }}
              >
                <div
                  className="footer-links-3"
                  style={{
                    alignItems: isMobile ? "center" : undefined,
                    color: !isMobile
                      ? "var(--color-schemes-color-scheme-1-text)"
                      : undefined,
                    display: isMobile ? "inline-flex" : undefined,
                    flex: isMobile ? "0 0 auto" : undefined,
                    flexDirection: isMobile ? "column" : undefined,
                    fontFamily: !isMobile
                      ? "var(--text-small-normal-font-family)"
                      : undefined,
                    fontSize: !isMobile
                      ? "var(--text-small-normal-font-size)"
                      : undefined,
                    fontStyle: !isMobile
                      ? "var(--text-small-normal-font-style)"
                      : undefined,
                    fontWeight: !isMobile
                      ? "var(--text-small-normal-font-weight)"
                      : undefined,
                    gap: isMobile ? "16px" : undefined,
                    letterSpacing: !isMobile
                      ? "var(--text-small-normal-letter-spacing)"
                      : undefined,
                    lineHeight: !isMobile
                      ? "var(--text-small-normal-line-height)"
                      : undefined,
                    marginTop: !isMobile ? "-1.00px" : undefined,
                    whiteSpace: !isMobile ? "nowrap" : undefined,
                    width: !isMobile ? "fit-content" : undefined,
                  }}
                >
                  {isMobile && (
                    <div className="text-wrapper-13">Terms of Service</div>
                  )}

                  {!isMobile && (
                    <p className="text-wrapper-87">
                      © 2023 AI Dream Builders. All rights reserved.
                    </p>
                  )}
                </div>

                <div
                  className="element-AI-dream-3"
                  style={{
                    fontFamily: isMobile
                      ? "var(--text-small-normal-font-family)"
                      : !isMobile
                      ? "var(--text-small-link-font-family)"
                      : undefined,
                    fontSize: isMobile
                      ? "var(--text-small-normal-font-size)"
                      : !isMobile
                      ? "var(--text-small-link-font-size)"
                      : undefined,
                    fontStyle: isMobile
                      ? "var(--text-small-normal-font-style)"
                      : !isMobile
                      ? "var(--text-small-link-font-style)"
                      : undefined,
                    fontWeight: isMobile
                      ? "var(--text-small-normal-font-weight)"
                      : !isMobile
                      ? "var(--text-small-link-font-weight)"
                      : undefined,
                    letterSpacing: isMobile
                      ? "var(--text-small-normal-letter-spacing)"
                      : !isMobile
                      ? "var(--text-small-link-letter-spacing)"
                      : undefined,
                    lineHeight: isMobile
                      ? "var(--text-small-normal-line-height)"
                      : !isMobile
                      ? "var(--text-small-link-line-height)"
                      : undefined,
                    marginTop: !isMobile ? "-1.00px" : undefined,
                    textDecoration: !isMobile ? "underline" : undefined,
                  }}
                >
                  {isMobile && (
                    <p className="text-wrapper-87">
                      © 2023 AI Dream Builders. All rights reserved.
                    </p>
                  )}

                  {!isMobile && <>Terms of Service</>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
