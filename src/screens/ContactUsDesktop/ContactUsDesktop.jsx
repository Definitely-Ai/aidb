import React from "react";
import { Link } from "react-router-dom";
import { useIsMobile, useResponsiveTheme } from "../../breakpoints";
import { usePageTitle } from "../../hooks/usePageTitle";
import { Button } from "../../components/Button";

import { CompanyLogo } from "../../components/CompanyLogo";
import { Call2 } from "../../icons/Call2";
import { Close } from "../../icons/Close";
import { Facebook2 } from "../../icons/Facebook2";
import { LocationOn2 } from "../../icons/LocationOn2";
import { Mail1 } from "../../icons/Mail1";
import "./style.css";

export const ContactUsDesktop = () => {
  const isMobile = useIsMobile();
  const themeProps = useResponsiveTheme();

  usePageTitle(
    "Contact Us",
    "Get in touch with AI Dream Builders. Contact us for innovative technology solutions, AI automation, computer vision, and custom hardware development."
  );

  return (
    <div
      className="contact-us-desktop"
      style={{
        minHeight: isMobile ? "100vh" : !isMobile ? "2105px" : undefined,
        width: "100%",
        maxWidth: "100%",
        overflowX: "hidden",
      }}
    >
      <div className="contact-mobile">
        <div
          className="navbar"
          style={{
            padding: isMobile ? "0px 0px 38px" : undefined,
          }}
          {...themeProps}
        >
          {isMobile && (
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
                  <Link className="link-text-wrapper" to="/">
                    <div className="link-text">Home</div>
                  </Link>

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

          {!isMobile && (
            <header className="header">
              <div className="container">
                <div className="content-2">
                  <CompanyLogo
                    alternate={false}
                    className="company-logo-instance"
                  />
                  <div className="column-2">
                    <Link className="link-text-wrapper-2" to="/">
                      <div className="link-text-2">Home</div>
                    </Link>

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
            flex: isMobile ? "0 0 auto" : undefined,
            gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            height: !isMobile ? "369px" : undefined,
            width: isMobile ? "100%" : !isMobile ? "1440px" : undefined,
            maxWidth: isMobile ? "100vw" : undefined,
            overflowX: isMobile ? "hidden" : undefined,
          }}
          {...themeProps}
        >
          <div
            className="component-wrapper"
            style={{
              flex: isMobile ? "0 0 auto" : !isMobile ? "1" : undefined,
              flexGrow: !isMobile ? "1" : undefined,
              gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            }}
          >
            <div
              className="component"
              style={{
                flex: isMobile ? "0 0 auto" : !isMobile ? "1" : undefined,
                flexGrow: !isMobile ? "1" : undefined,
                gap: isMobile ? "20px" : !isMobile ? "24px" : undefined,
              }}
            >
              <div className="text-wrapper-2">Connect with Us</div>

              <p
                className="ready-to-turn-your"
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
                Ready to turn your vision into reality? Let&#39;s discuss your
                AI project today!
              </p>
            </div>
          </div>
        </div>

        <div
          className="CTA"
          style={{
            alignItems: isMobile
              ? "flex-start"
              : !isMobile
              ? "center"
              : undefined,
            gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            width: isMobile ? "100%" : !isMobile ? "1440px" : undefined,
            maxWidth: isMobile ? "100vw" : undefined,
            overflowX: isMobile ? "hidden" : undefined,
          }}
          {...themeProps}
        >
          <div
            className="container-2"
            style={{
              gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            }}
          >
            <div
              className="component-2"
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
                className="column-3"
                style={{
                  alignItems: isMobile
                    ? "center"
                    : !isMobile
                    ? "flex-start"
                    : undefined,
                  alignSelf: isMobile ? "stretch" : undefined,
                  flex: isMobile ? "0 0 auto" : !isMobile ? "1" : undefined,
                  flexGrow: !isMobile ? "1" : undefined,
                  gap: isMobile ? "24px" : !isMobile ? "32px" : undefined,
                  justifyContent: isMobile ? "center" : undefined,
                  width: isMobile ? "100%" : undefined,
                }}
              >
                <div
                  className="content-3"
                  style={{
                    gap: isMobile ? "20px" : !isMobile ? "24px" : undefined,
                  }}
                >
                  <p className="heading">
                    Let&#39;s Build Your Future Together
                  </p>

                  <p
                    className="text"
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
                  alignSelf: isMobile ? "stretch" : undefined,
                  flex: !isMobile ? "1" : undefined,
                  flexGrow: !isMobile ? "1" : undefined,
                  height: isMobile ? "218px" : !isMobile ? "400px" : undefined,
                  width: isMobile ? "100%" : undefined,
                }}
                alt="Placeholder image"
                src={
                  isMobile
                    ? "/img/placeholder-image-3.png"
                    : !isMobile
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
            gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            width: isMobile ? "100%" : !isMobile ? "1440px" : undefined,
            maxWidth: isMobile ? "100vw" : undefined,
            overflowX: isMobile ? "hidden" : undefined,
          }}
          {...themeProps}
        >
          <div
            className="container-3"
            style={{
              gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            }}
          >
            <div
              className="section-title"
              style={{
                gap: isMobile ? "12px" : !isMobile ? "16px" : undefined,
              }}
            >
              <div
                className="tagline-wrapper"
                style={{
                  alignSelf: isMobile ? "stretch" : undefined,
                }}
              >
                <div className="tagline">Connect</div>
              </div>

              <div
                className="content-4"
                style={{
                  gap: isMobile ? "20px" : !isMobile ? "24px" : undefined,
                }}
              >
                <div className="heading-2">Get in Touch</div>

                <p
                  className="p"
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
                  We&#39;re here to help with your AI needs.
                </p>
              </div>
            </div>

            <div
              className="row-2"
              style={{
                gap: isMobile ? "48px" : !isMobile ? "64px" : undefined,
              }}
            >
              {isMobile && (
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

              {!isMobile && (
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
            alignSelf: isMobile ? "stretch" : undefined,
            gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            width: isMobile ? "100%" : !isMobile ? "1440px" : undefined,
          }}
          {...themeProps}
        >
          <div
            className="container-4"
            style={{
              gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            }}
          >
            <div
              className="content-8"
              style={{
                flexDirection: isMobile ? "column" : undefined,
                gap: isMobile ? "48px" : !isMobile ? "32px" : undefined,
              }}
            >
              <div
                className="logo"
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
                <CompanyLogo
                  alternate={false}
                  className="company-logo-instance"
                />
              </div>

              <div
                className="links"
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
                  className="text-wrapper-3"
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
                  className="text-wrapper-4"
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
                  className="companies-solutions-2"
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
                className="social-links"
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
                <Facebook2 className="instance-node" />
              </a>
            </div>

            <div
              className="credits"
              style={{
                gap: isMobile ? "24px" : !isMobile ? "32px" : undefined,
                padding: isMobile ? "0px 0px 16px" : undefined,
              }}
            >
              <img
                className="divider"
                alt="Divider"
                src={
                  isMobile
                    ? "/img/divider-2.svg"
                    : !isMobile
                    ? "/img/divider.svg"
                    : undefined
                }
              />

              <div
                className="row-4"
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
                  className="footer-links"
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
                    <div className="text-wrapper-5">Terms of Service</div>
                  )}

                  {!isMobile && (
                    <p className="text-wrapper-87">
                      © 2023 AI Dream Builders. All rights reserved.
                    </p>
                  )}
                </div>

                <div
                  className="element-AI-dream"
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
