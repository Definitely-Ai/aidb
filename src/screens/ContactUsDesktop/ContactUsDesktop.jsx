import React from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import { Button } from "../../components/Button";
import { CompanyLogo } from "../../components/CompanyLogo";
import { Call2 } from "../../icons/Call2";
import { Close } from "../../icons/Close";
import { Facebook2 } from "../../icons/Facebook2";
import { LocationOn2 } from "../../icons/LocationOn2";
import { Mail1 } from "../../icons/Mail1";
import "./style.css";

export const ContactUsDesktop = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="contact-us-desktop"
      style={{
        minHeight:
          screenWidth < 1460
            ? "2803px"
            : screenWidth >= 1460
              ? "2105px"
              : undefined,
        minWidth:
          screenWidth < 1460
            ? "395px"
            : screenWidth >= 1460
              ? "1460px"
              : undefined,
      }}
    >
      <div className="contact-mobile">
        <div
          className="navbar"
          style={{
            padding: screenWidth < 1460 ? "0px 0px 38px" : undefined,
          }}
          data-spacing-sizing-mode={screenWidth < 1460 ? "mobile" : undefined}
          data-typography-mode={screenWidth < 1460 ? "mobile" : undefined}
        >
          {screenWidth < 1460 && (
            <>
              <div className="content">
                <div className="content-2">
                  <CompanyLogo
                    alternate={false}
                    className="company-logo-instance"
                  />
                </div>

                <div className="icon">
                  <Close className="instance-node" />
                </div>
              </div>

              <div className="row">
                <div className="column">
                  <a
                    className="link-text-wrapper"
                    href="aidreambuilders.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="link-text">Home</div>
                  </a>

                  <Link className="link-text-wrapper" to="/about-us-desktop">
                    <div className="link-text">About Us</div>
                  </Link>

                  <Link
                    className="link-text-wrapper"
                    to="/companies-u38-solutions-mobile"
                  >
                    <div className="link-text">Companies &amp; Solutions</div>
                  </Link>
                </div>
              </div>

              <div className="actions">
                <Button
                  alternate={false}
                  className="button-instance"
                  iconPosition="no-icon"
                  small
                  style="secondary"
                  text="Contact Us"
                  to="/contact-us-desktop"
                />
                <Button
                  alternate={false}
                  className="button-2"
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
            <header className="header">
              <div className="container">
                <div className="content-2">
                  <CompanyLogo
                    alternate={false}
                    className="company-logo-instance"
                  />
                  <div className="column-2">
                    <a
                      className="link-text-wrapper-2"
                      href="aidreambuilders.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="link-text-2">Home</div>
                    </a>

                    <Link
                      className="link-text-wrapper-2"
                      to="/about-us-desktop"
                    >
                      <div className="link-text-2">About Us</div>
                    </Link>

                    <Link
                      className="link-text-wrapper-2"
                      to="/companies-u38-solutions-mobile"
                    >
                      <div className="link-text-2">
                        Companies &amp; Solutions
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="actions-2">
                  <Button
                    alternate={false}
                    className="contact-us"
                    iconPosition="no-icon"
                    small
                    style="secondary"
                    text="Contact Us"
                    to="/contact-us-desktop"
                  />
                  <Button
                    alternate={false}
                    className="button-3"
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
          className="container-wrapper"
          style={{
            flex: screenWidth < 1460 ? "0 0 auto" : undefined,
            gap:
              screenWidth < 1460
                ? "48px"
                : screenWidth >= 1460
                  ? "80px"
                  : undefined,
            height: screenWidth >= 1460 ? "369px" : undefined,
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
            className="component-wrapper"
            style={{
              flex:
                screenWidth < 1460
                  ? "0 0 auto"
                  : screenWidth >= 1460
                    ? "1"
                    : undefined,
              flexGrow: screenWidth >= 1460 ? "1" : undefined,
              gap:
                screenWidth < 1460
                  ? "48px"
                  : screenWidth >= 1460
                    ? "80px"
                    : undefined,
            }}
          >
            <div
              className="component"
              style={{
                flex:
                  screenWidth < 1460
                    ? "0 0 auto"
                    : screenWidth >= 1460
                      ? "1"
                      : undefined,
                flexGrow: screenWidth >= 1460 ? "1" : undefined,
                gap:
                  screenWidth < 1460
                    ? "20px"
                    : screenWidth >= 1460
                      ? "24px"
                      : undefined,
              }}
            >
              <div className="text-wrapper-2">Connect with Us</div>

              <p
                className="ready-to-turn-your"
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
                Ready to turn your vision into reality? Let&#39;s discuss your
                AI project today!
              </p>
            </div>
          </div>
        </div>

        <div
          className="CTA"
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
            className="container-2"
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
              className="component-2"
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
                className="column-3"
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
                  gap:
                    screenWidth < 1460
                      ? "24px"
                      : screenWidth >= 1460
                        ? "32px"
                        : undefined,
                  justifyContent: screenWidth < 1460 ? "center" : undefined,
                  width: screenWidth < 1460 ? "100%" : undefined,
                }}
              >
                <div
                  className="content-3"
                  style={{
                    gap:
                      screenWidth < 1460
                        ? "20px"
                        : screenWidth >= 1460
                          ? "24px"
                          : undefined,
                  }}
                >
                  <p className="heading">
                    Let&#39;s Build Your Future Together
                  </p>

                  <p
                    className="text"
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
                    We&#39;re excited to help you turn your innovative ideas
                    into reality with our AI expertise.
                  </p>
                </div>

                <Link className="button-wrapper" to="/showcase-desktop">
                  <Button
                    alternate={false}
                    className="button-3"
                    iconPosition="no-icon"
                    small={false}
                    style="primary"
                    text="Showcase"
                  />
                </Link>
              </div>

              <img
                className="placeholder-image"
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
                    ? "/img/placeholder-image-3.png"
                    : screenWidth >= 1460
                      ? "/img/placeholder-image.png"
                      : undefined
                }
              />
            </div>
          </div>
        </div>

        <div
          className="contact"
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
            className="container-3"
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
              className="section-title"
              style={{
                gap:
                  screenWidth < 1460
                    ? "12px"
                    : screenWidth >= 1460
                      ? "16px"
                      : undefined,
              }}
            >
              <div
                className="tagline-wrapper"
                style={{
                  alignSelf: screenWidth < 1460 ? "stretch" : undefined,
                }}
              >
                <div className="tagline">Connect</div>
              </div>

              <div
                className="content-4"
                style={{
                  gap:
                    screenWidth < 1460
                      ? "20px"
                      : screenWidth >= 1460
                        ? "24px"
                        : undefined,
                }}
              >
                <div className="heading-2">Get in Touch</div>

                <p
                  className="p"
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
                  We&#39;re here to help with your AI needs.
                </p>
              </div>
            </div>

            <div
              className="row-2"
              style={{
                gap:
                  screenWidth < 1460
                    ? "48px"
                    : screenWidth >= 1460
                      ? "64px"
                      : undefined,
              }}
            >
              {screenWidth < 1460 && (
                <>
                  <div className="div-2">
                    <Mail1 className="instance-node-2" />
                    <div className="div-2">
                      <div className="content-5">
                        <div className="heading-3">Email</div>

                        <p className="text-2">
                          Reach us anytime at admin@aidreambuilder.tech.
                        </p>
                      </div>

                      <div className="link-2">admin@aidreambuilder.tech</div>
                    </div>
                  </div>

                  <div className="div-2">
                    <Call2 className="instance-node-2" />
                    <div className="div-2">
                      <div className="content-5">
                        <div className="heading-3">Phone</div>

                        <p className="text-2">
                          Call us at 239-544-6990 for inquiries.
                        </p>
                      </div>

                      <div className="link-3">+1 (239) 544-6990</div>
                    </div>
                  </div>

                  <div className="div-2">
                    <LocationOn2 className="instance-node-2" />
                    <div className="div-2">
                      <div className="content-5">
                        <div className="heading-3">Worldwide</div>

                        <div className="text-2">Operating around the world</div>
                      </div>

                      <div className="link-3">
                        Headquartered in Naples, Florida
                      </div>
                    </div>
                  </div>
                </>
              )}

              {screenWidth >= 1460 && (
                <div className="row-3">
                  <div className="content-6">
                    <Mail1 className="instance-node-2" />
                    <div className="contact-info">
                      <div className="content-7">
                        <div className="heading-3">Email</div>

                        <p className="text-2">
                          Reach us anytime at admin@aidreambuilder.tech.
                        </p>
                      </div>

                      <div className="link-2">admin@aidreambuilder.tech</div>
                    </div>
                  </div>

                  <div className="content-6">
                    <Call2 className="instance-node-2" />
                    <div className="contact-info">
                      <div className="content-7">
                        <div className="heading-3">Phone</div>

                        <p className="text-2">
                          Call us at 239-544-6990 for inquiries.
                        </p>
                      </div>

                      <div className="link-3">+1 (239) 544-6990</div>
                    </div>
                  </div>

                  <div className="content-6">
                    <LocationOn2 className="instance-node-2" />
                    <div className="contact-info">
                      <div className="content-7">
                        <div className="heading-3">Worldwide</div>

                        <div className="text-2">Operating around the world</div>
                      </div>

                      <div className="link-3">
                        Headquartered in Naples, Florida
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className="footer"
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
            className="container-4"
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
              className="content-8"
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
                className="logo"
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
                <CompanyLogo
                  alternate={false}
                  className="company-logo-instance"
                />
              </div>

              <div
                className="links"
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
                  className="text-wrapper-3"
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
                  className="text-wrapper-4"
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
                  className="companies-solutions-2"
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
                className="social-links"
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
                <Facebook2 className="instance-node" />
              </a>
            </div>

            <div
              className="credits"
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
                className="divider"
                alt="Divider"
                src={
                  screenWidth < 1460
                    ? "/img/divider-2.svg"
                    : screenWidth >= 1460
                      ? "/img/divider.svg"
                      : undefined
                }
              />

              <div
                className="row-4"
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
                  className="footer-links"
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
                    <div className="text-wrapper-5">Terms of Service</div>
                  )}

                  {screenWidth >= 1460 && (
                    <p className="text-wrapper-87">
                      © 2023 AI Dream Builders. All rights reserved.
                    </p>
                  )}
                </div>

                <div
                  className="element-AI-dream"
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
