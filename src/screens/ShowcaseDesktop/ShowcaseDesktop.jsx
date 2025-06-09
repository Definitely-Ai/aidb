import React from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useIsMobile, useResponsiveTheme } from "../../breakpoints";
import { Button } from "../../components/Button";
import { CompanyLogo } from "../../components/CompanyLogo";
import { ActionKey1 } from "../../icons/ActionKey1";
import { Apps2 } from "../../icons/Apps2";
import { Call3 } from "../../icons/Call3";
import { Close } from "../../icons/Close";
import { Enterprise1 } from "../../icons/Enterprise1";
import { Facebook2 } from "../../icons/Facebook2";
import { LocationOn } from "../../icons/LocationOn";
import { Mail3 } from "../../icons/Mail3";
import { Manufacturing1 } from "../../icons/Manufacturing1";
import { PartnerExchange2 } from "../../icons/PartnerExchange2";
import "./style.css";

export const ShowcaseDesktop = () => {
  const isMobile = useIsMobile();
  const themeProps = useResponsiveTheme();

  usePageTitle(
    "Showcase",
    "Explore AI possibilities with our cutting-edge technology showcase. Discover innovative AI demos, computer vision solutions, and automation tools."
  );

  return (
    <div
      className="showcase-desktop"
      style={{
        minHeight: isMobile ? "100vh" : "5292px",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
      }}
    >
      <div className="showcase-mobile">
        <div
          className="navbar-5"
          style={{
            padding: isMobile ? "0px 0px 38px" : undefined,
          }}
          {...themeProps}
        >
          {isMobile && (
            <>
              <div className="content-44">
                <div className="content-45">
                  <CompanyLogo alternate={false} className="company-logo-5" />
                </div>

                <div className="icon-2">
                  <Close className="instance-node-9" />
                </div>
              </div>

              <div className="row-13">
                <div className="column-14">
                  <Link className="link-text-wrapper-9" to="/">
                    <div className="link-text-9">Home</div>
                  </Link>

                  <Link className="link-text-wrapper-9" to="/about-us-desktop">
                    <div className="link-text-9">About Us</div>
                  </Link>

                  <Link
                    className="link-text-wrapper-9"
                    to="/companies-u38-solutions-mobile"
                  >
                    <div className="link-text-9">Companies &amp; Solutions</div>
                  </Link>
                </div>
              </div>

              <div className="actions-12">
                <Button
                  alternate={false}
                  className="button-25"
                  iconPosition="no-icon"
                  small
                  style="secondary"
                  text="Contact Us"
                  to="/contact-us-desktop"
                />
                <Button
                  alternate={false}
                  className="button-26"
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
            <header className="header-8">
              <div className="container-26">
                <div className="content-45">
                  <CompanyLogo alternate={false} className="company-logo-5" />
                  <div className="column-15">
                    <Link className="link-text-wrapper-10" to="/">
                      <div className="link-text-10">Home</div>
                    </Link>

                    <Link
                      className="link-text-wrapper-10"
                      to="/about-us-desktop"
                    >
                      <div className="link-text-10">About Us</div>
                    </Link>

                    <Link
                      className="link-text-wrapper-10"
                      to="/companies-u38-solutions-mobile"
                    >
                      <div className="link-text-10">
                        Companies &amp; Solutions
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="actions-13">
                  <Button
                    alternate={false}
                    className="contact-us-5"
                    iconPosition="no-icon"
                    small
                    style="secondary"
                    text="Contact Us"
                    to="/contact-us-desktop"
                  />
                  <Button
                    alternate={false}
                    className="button-27"
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
          className="header-9"
          style={{
            flex: isMobile ? "0 0 auto" : undefined,
            gap: isMobile ? "48px" : "80px",
            height: !isMobile ? "444px" : undefined,
            width: isMobile ? "100%" : "1440px",
          }}
          {...themeProps}
        >
          <div
            className="container-27"
            style={{
              flex: isMobile ? "0 0 auto" : "1",
              flexGrow: !isMobile ? "1" : undefined,
              gap: isMobile ? "48px" : "80px",
            }}
          >
            <div
              className="component-12"
              style={{
                flex: isMobile ? "0 0 auto" : "1",
                flexGrow: !isMobile ? "1" : undefined,
                gap: isMobile ? "20px" : "24px",
              }}
            >
              <div className="text-wrapper-23">Explore AI Possibilities</div>

              <div
                className="discover-cutting"
                style={{
                  fontFamily: isMobile
                    ? "var(--text-regular-normal-font-family)"
                    : "var(--text-medium-normal-font-family)",
                  fontSize: isMobile
                    ? "var(--text-regular-normal-font-size)"
                    : "var(--text-medium-normal-font-size)",
                  fontStyle: isMobile
                    ? "var(--text-regular-normal-font-style)"
                    : "var(--text-medium-normal-font-style)",
                  fontWeight: isMobile
                    ? "var(--text-regular-normal-font-weight)"
                    : "var(--text-medium-normal-font-weight)",
                  letterSpacing: isMobile
                    ? "var(--text-regular-normal-letter-spacing)"
                    : "var(--text-medium-normal-letter-spacing)",
                  lineHeight: isMobile
                    ? "var(--text-regular-normal-line-height)"
                    : "var(--text-medium-normal-line-height)",
                  marginBottom: !isMobile ? "-47.00px" : undefined,
                }}
              >
                {isMobile && (
                  <p className="text-wrapper-87">
                    Discover cutting-edge AI demos designed to inspire
                    innovative ideas and empower your business.
                  </p>
                )}

                {!isMobile && (
                  <p className="text-wrapper-87">
                    Discover cutting-edge AI solutions designed to inspire,
                    innovative ideas, and empower your business.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div
          className="layout-10"
          style={{
            gap: isMobile ? "48px" : "80px",
            padding: isMobile
              ? "0px var(--spacing-sizing-page-padding-padding-global) var(--spacing-sizing-section-padding-padding-section-large) var(--spacing-sizing-page-padding-padding-global)"
              : "var(--spacing-sizing-section-padding-padding-section-large) var(--spacing-sizing-page-padding-padding-global) var(--spacing-sizing-section-padding-padding-section-large) var(--spacing-sizing-page-padding-padding-global)",
            width: isMobile ? "100%" : "1440px",
          }}
          {...themeProps}
        >
          <div
            className="container-28"
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
              className="component-13"
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
                className="content-46"
                style={{
                  alignSelf: isMobile ? "stretch" : undefined,
                  flex: isMobile ? "0 0 auto" : !isMobile ? "1" : undefined,
                  flexGrow: !isMobile ? "1" : undefined,
                  gap: isMobile ? "24px" : !isMobile ? "32px" : undefined,
                  width: isMobile ? "100%" : undefined,
                }}
              >
                <div
                  className="content-47"
                  style={{
                    gap: isMobile ? "24px" : !isMobile ? "32px" : undefined,
                  }}
                >
                  <div
                    className="section-title-10"
                    style={{
                      gap: isMobile ? "12px" : !isMobile ? "16px" : undefined,
                    }}
                  >
                    <div
                      className="content-48"
                      style={{
                        gap: isMobile ? "20px" : !isMobile ? "24px" : undefined,
                      }}
                    >
                      <p
                        className="heading-10"
                        style={{
                          textAlign: isMobile ? "center" : undefined,
                        }}
                      >
                        Unleash the Power of AI Innovation
                      </p>

                      <p
                        className="text-16"
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
                          textAlign: isMobile ? "center" : undefined,
                        }}
                      >
                        Experience the transformative potential of AI through
                        our innovative solutions. From enhancing operational
                        efficiency to unlocking new insights, see how we can
                        elevate your business.
                      </p>
                    </div>
                  </div>

                  <div
                    className="list-4"
                    style={{
                      gap: isMobile ? "24px" : !isMobile ? "16px" : undefined,
                      padding: isMobile ? "8px 0px" : undefined,
                    }}
                  >
                    {isMobile && (
                      <>
                        <div className="list-item-7">
                          <ActionKey1
                            className="instance-node-10"
                            color="#56129C"
                          />
                          <div className="subheading-one">AI in Action</div>

                          <p className="text-17">
                            Explore groundbreaking projects that redefine
                            possibilities across various industries.
                          </p>
                        </div>

                        <div className="list-item-8">
                          <Enterprise1
                            className="instance-node-10"
                            color="#56129C"
                          />
                          <div className="subheading-two">
                            Real-World Impact
                          </div>

                          <p className="text-18">
                            Discover how AI solutions drive measurable results
                            and enhance business performance.
                          </p>
                        </div>
                      </>
                    )}

                    {!isMobile && (
                      <div className="row-14">
                        <div className="list-item-9">
                          <ActionKey1
                            className="instance-node-10"
                            color="black"
                          />
                          <div className="text-wrapper-24">AI in Action</div>

                          <p className="text-19">
                            Explore groundbreaking projects that redefine
                            possibilities across various industries.
                          </p>
                        </div>

                        <div className="list-item-9">
                          <Enterprise1
                            className="instance-node-10"
                            color="black"
                          />
                          <div className="text-wrapper-24">
                            Real-World Impact
                          </div>

                          <p className="text-19">
                            Discover how AI solutions drive measurable results
                            and enhance business performance.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <img
                className="placeholder-image-16"
                style={{
                  alignSelf: isMobile ? "stretch" : undefined,
                  flex: !isMobile ? "1" : undefined,
                  flexGrow: !isMobile ? "1" : undefined,
                  height: isMobile ? "348px" : !isMobile ? "640px" : undefined,
                  width: isMobile ? "100%" : undefined,
                }}
                alt="Placeholder image"
                src={
                  isMobile
                    ? "/img/placeholder-image-28.png"
                    : !isMobile
                    ? "/img/placeholder-image-24.png"
                    : undefined
                }
              />
            </div>
          </div>
        </div>

        <div
          className="layout-11"
          style={{
            gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            width: isMobile ? "100%" : !isMobile ? "1440px" : undefined,
          }}
          {...themeProps}
        >
          <div
            className="container-29"
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
              className="component-14"
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
                  <div className="content-49">
                    <div className="content-50">
                      <p className="heading-11">
                        Transform Your Operations with Advanced AI Solutions
                        Tailored for You
                      </p>

                      <p className="text-19">
                        Explore our innovative AI technologies that enhance
                        efficiency and drive growth. From real-time monitoring
                        to insightful data analysis, we empower your business to
                        thrive.
                      </p>
                    </div>

                    <div className="list-5">
                      <div className="list-item-10">
                        <div className="heading-12">Vehicle Detection</div>

                        <p className="text-19">
                          Instantly identify and track vehicles and people for
                          enhanced security and logistics.
                        </p>
                      </div>

                      <div className="list-item-10">
                        <div className="heading-12">Data Insights</div>

                        <p className="text-19">
                          Transform raw data into actionable insights for
                          smarter business decisions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <img
                    className="placeholder-image-17"
                    alt="Placeholder image"
                    src="/img/placeholder-image-31.png"
                  />
                </>
              )}

              {!isMobile && (
                <>
                  <img
                    className="placeholder-image-18"
                    alt="Placeholder image"
                    src="/img/placeholder-image-25.png"
                  />

                  <div className="content-51">
                    <div className="content-49">
                      <p className="heading-11">
                        Transform Your Operations with Advanced AI Solutions
                        Tailored for You
                      </p>

                      <p className="text-20">
                        Explore our innovative AI technologies that enhance
                        efficiency and drive growth. From real-time monitoring
                        to insightful data analysis, we empower your business to
                        thrive.
                      </p>
                    </div>

                    <div className="content-52">
                      <div className="row-14">
                        <div className="list-item-9">
                          <div className="heading-12">Vehicle Detection</div>

                          <p className="text-19">
                            Instantly identify and track vehicles and people for
                            enhanced security and logistics.
                          </p>
                        </div>

                        <div className="list-item-9">
                          <div className="heading-12">Data Insights</div>

                          <p className="text-19">
                            Transform raw data into actionable insights for
                            smarter business decisions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div
          className="layout-12"
          style={{
            gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            width: isMobile ? "100%" : !isMobile ? "1440px" : undefined,
          }}
          {...themeProps}
        >
          <div
            className="container-30"
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
              className="component-15"
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
                className="content-53"
                style={{
                  alignSelf: isMobile ? "stretch" : undefined,
                  flex: isMobile ? "0 0 auto" : !isMobile ? "1" : undefined,
                  flexGrow: !isMobile ? "1" : undefined,
                  gap: isMobile ? "20px" : !isMobile ? "32px" : undefined,
                  width: isMobile ? "100%" : undefined,
                }}
              >
                <div
                  className="content-54"
                  style={{
                    gap: isMobile ? "20px" : !isMobile ? "24px" : undefined,
                  }}
                >
                  <p className="heading-11">
                    Unlock the Potential of AI Tailored to Your Business Needs
                  </p>

                  <p
                    className="text-21"
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
                    Imagine the transformative power of AI in your industry.
                    From agriculture to logistics, our custom solutions can
                    elevate your business.
                  </p>
                </div>

                <div className="list-6">
                  <div className="list-item-11">
                    <Manufacturing1 className="instance-node-11" />
                    <p className="lorem-ipsum-dolor-5">
                      Custom solutions for every industry and challenge.
                    </p>
                  </div>

                  <div className="list-item-11">
                    <Apps2 className="instance-node-11" />
                    <p className="lorem-ipsum-dolor-5">
                      Innovative AI applications that drive real results.
                    </p>
                  </div>

                  <div className="list-item-11">
                    <PartnerExchange2 className="instance-node-11" />
                    <p className="lorem-ipsum-dolor-5">
                      Partner with us to turn ideas into reality.
                    </p>
                  </div>
                </div>
              </div>

              <img
                className="placeholder-image-19"
                style={{
                  alignSelf: isMobile ? "stretch" : undefined,
                  flex: !isMobile ? "1" : undefined,
                  flexGrow: !isMobile ? "1" : undefined,
                  height: isMobile ? "348px" : !isMobile ? "640px" : undefined,
                  width: isMobile ? "100%" : undefined,
                }}
                alt="Placeholder image"
                src={
                  isMobile
                    ? "/img/placeholder-image-29.png"
                    : !isMobile
                    ? "/img/placeholder-image-26.png"
                    : undefined
                }
              />
            </div>
          </div>
        </div>

        <div
          className="CTA-5"
          style={{
            gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            width: isMobile ? "100%" : !isMobile ? "1440px" : undefined,
          }}
          {...themeProps}
        >
          <div
            className="container-31"
            style={{
              gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            }}
          >
            <div
              className="content-55"
              style={{
                gap: isMobile ? "24px" : !isMobile ? "32px" : undefined,
              }}
            >
              <div
                className="content-56"
                style={{
                  gap: isMobile ? "20px" : !isMobile ? "24px" : undefined,
                }}
              >
                <p className="heading-13">Ready to Build the Future?</p>

                <p
                  className="text-22"
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
                  Let’s collaborate and make your vision a reality. Contact us
                  to explore partnership opportunities.
                </p>
              </div>

              <div className="button-instance-wrapper">
                <Button
                  alternate={false}
                  className="button-27"
                  iconPosition="no-icon"
                  small={false}
                  style="primary"
                  text="Contact"
                  to="/contact-us-desktop"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="contact-2"
          style={{
            gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            width: isMobile ? "100%" : !isMobile ? "1440px" : undefined,
          }}
          {...themeProps}
        >
          <div
            className="container-32"
            style={{
              gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            }}
          >
            <div
              className="content-57"
              style={{
                flexDirection: isMobile ? "column" : undefined,
                gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
              }}
            >
              <div
                className="section-title-11"
                style={{
                  alignSelf: isMobile ? "stretch" : undefined,
                  flex: isMobile ? "0 0 auto" : !isMobile ? "1" : undefined,
                  flexGrow: !isMobile ? "1" : undefined,
                  gap: isMobile ? "12px" : !isMobile ? "16px" : undefined,
                  width: isMobile ? "100%" : undefined,
                }}
              >
                <div
                  className="content-58"
                  style={{
                    gap: isMobile ? "20px" : !isMobile ? "24px" : undefined,
                  }}
                >
                  <div className="heading-14">Get in Touch</div>

                  <p
                    className="text-23"
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
                    We’re here to help you explore AI solutions tailored to your
                    needs.
                  </p>
                </div>
              </div>

              <div
                className="row-15"
                style={{
                  alignSelf: isMobile ? "stretch" : undefined,
                  flex: isMobile ? "0 0 auto" : undefined,
                  width: isMobile ? "100%" : !isMobile ? "500px" : undefined,
                }}
              >
                <div className="content-59">
                  <Mail3 className="instance-node-9" />
                  <div className="contact-info-2">
                    <div className="heading-12">Email</div>

                    <div className="link-4">admin@aidreambuilder.tech</div>
                  </div>
                </div>

                <div className="content-59">
                  <Call3 className="instance-node-9" />
                  <div className="contact-info-2">
                    <div className="heading-12">Phone</div>

                    <div className="link-5">+1 (239) 544-6990</div>
                  </div>
                </div>

                <div className="content-59">
                  <LocationOn className="instance-node-9" />
                  <div className="contact-info-2">
                    <div className="heading-12">Worldwide</div>

                    <div className="text-19">
                      Headquarters in Naples Florida
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img
              className="placeholder-image-20"
              style={{
                alignSelf: isMobile ? "stretch" : undefined,
                height: isMobile ? "188px" : !isMobile ? "720px" : undefined,
                width: isMobile ? "100%" : !isMobile ? "1280px" : undefined,
              }}
              alt="Placeholder image"
              src={
                isMobile
                  ? "/img/placeholder-image-30.png"
                  : !isMobile
                  ? "/img/placeholder-image-27.png"
                  : undefined
              }
            />
          </div>
        </div>

        <div
          className="footer-5"
          style={{
            alignSelf: isMobile ? "stretch" : undefined,
            gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            width: isMobile ? "100%" : !isMobile ? "1440px" : undefined,
          }}
          {...themeProps}
        >
          <div
            className="container-33"
            style={{
              gap: isMobile ? "48px" : !isMobile ? "80px" : undefined,
            }}
          >
            <div
              className="content-60"
              style={{
                flexDirection: isMobile ? "column" : undefined,
                gap: isMobile ? "48px" : !isMobile ? "32px" : undefined,
              }}
            >
              <div
                className="logo-3"
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
                <CompanyLogo alternate={false} className="company-logo-5" />
              </div>

              <div
                className="links-5"
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
                  className="text-wrapper-25"
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
                  className="text-wrapper-26"
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
                  className="companies-solutions-5"
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
                className="social-links-2"
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
                <Facebook2 className="instance-node-9" />
              </a>
            </div>

            <div
              className="credits-5"
              style={{
                gap: isMobile ? "24px" : !isMobile ? "32px" : undefined,
                padding: isMobile ? "0px 0px 16px" : undefined,
              }}
            >
              <img
                className="divider-5"
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
                className="row-16"
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
                  className="footer-links-5"
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
                    <div className="text-wrapper-27">Terms of Service</div>
                  )}

                  {!isMobile && (
                    <p className="text-wrapper-87">
                      © 2023 AI Dream Builders. All rights reserved.
                    </p>
                  )}
                </div>

                <div
                  className="element-AI-dream-5"
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
