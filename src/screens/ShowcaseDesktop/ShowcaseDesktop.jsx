import React from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
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
  const screenWidth = useWindowWidth();

  return (
    <div
      className="showcase-desktop"
      style={{
        minHeight:
          screenWidth < 1460
            ? "5335px"
            : screenWidth >= 1460
              ? "5292px"
              : undefined,
        minWidth:
          screenWidth < 1460
            ? "395px"
            : screenWidth >= 1460
              ? "1460px"
              : undefined,
      }}
    >
      <div className="showcase-mobile">
        <div
          className="navbar-5"
          style={{
            padding: screenWidth < 1460 ? "0px 0px 38px" : undefined,
          }}
          data-spacing-sizing-mode={screenWidth < 1460 ? "mobile" : undefined}
          data-typography-mode={screenWidth < 1460 ? "mobile" : undefined}
        >
          {screenWidth < 1460 && (
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
                  <a
                    className="link-text-wrapper-9"
                    href="aidreambuilders.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="link-text-9">Home</div>
                  </a>

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

          {screenWidth >= 1460 && (
            <header className="header-8">
              <div className="container-26">
                <div className="content-45">
                  <CompanyLogo alternate={false} className="company-logo-5" />
                  <div className="column-15">
                    <a
                      className="link-text-wrapper-10"
                      href="aidreambuilders.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="link-text-10">Home</div>
                    </a>

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
            flex: screenWidth < 1460 ? "0 0 auto" : undefined,
            gap:
              screenWidth < 1460
                ? "48px"
                : screenWidth >= 1460
                  ? "80px"
                  : undefined,
            height: screenWidth >= 1460 ? "444px" : undefined,
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
            className="container-27"
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
              className="component-12"
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
              <div className="text-wrapper-23">Explore AI Possibilities</div>

              <div
                className="discover-cutting"
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
                  marginBottom: screenWidth >= 1460 ? "-47.00px" : undefined,
                }}
              >
                {screenWidth < 1460 && (
                  <p className="text-wrapper-87">
                    Discover cutting-edge AI demos designed to inspire
                    innovative ideas and empower your business.
                  </p>
                )}

                {screenWidth >= 1460 && (
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
            gap:
              screenWidth < 1460
                ? "48px"
                : screenWidth >= 1460
                  ? "80px"
                  : undefined,
            padding:
              screenWidth < 1460
                ? "0px var(--spacing-sizing-page-padding-padding-global) var(--spacing-sizing-section-padding-padding-section-large) var(--spacing-sizing-page-padding-padding-global)"
                : screenWidth >= 1460
                  ? "var(--spacing-sizing-section-padding-padding-section-large) var(--spacing-sizing-page-padding-padding-global) var(--spacing-sizing-section-padding-padding-section-large) var(--spacing-sizing-page-padding-padding-global)"
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
            className="container-28"
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
              className="component-13"
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
                className="content-46"
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
                  className="content-47"
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
                    className="section-title-10"
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
                      className="content-48"
                      style={{
                        gap:
                          screenWidth < 1460
                            ? "20px"
                            : screenWidth >= 1460
                              ? "24px"
                              : undefined,
                      }}
                    >
                      <p
                        className="heading-10"
                        style={{
                          textAlign: screenWidth < 1460 ? "center" : undefined,
                        }}
                      >
                        Unleash the Power of AI Innovation
                      </p>

                      <p
                        className="text-16"
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
                          textAlign: screenWidth < 1460 ? "center" : undefined,
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
                      gap:
                        screenWidth < 1460
                          ? "24px"
                          : screenWidth >= 1460
                            ? "16px"
                            : undefined,
                      padding: screenWidth < 1460 ? "8px 0px" : undefined,
                    }}
                  >
                    {screenWidth < 1460 && (
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

                    {screenWidth >= 1460 && (
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
                  alignSelf: screenWidth < 1460 ? "stretch" : undefined,
                  flex: screenWidth >= 1460 ? "1" : undefined,
                  flexGrow: screenWidth >= 1460 ? "1" : undefined,
                  height:
                    screenWidth < 1460
                      ? "348px"
                      : screenWidth >= 1460
                        ? "640px"
                        : undefined,
                  width: screenWidth < 1460 ? "100%" : undefined,
                }}
                alt="Placeholder image"
                src={
                  screenWidth < 1460
                    ? "/img/placeholder-image-28.png"
                    : screenWidth >= 1460
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
            className="container-29"
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
              className="component-14"
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

              {screenWidth >= 1460 && (
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
            className="container-30"
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
              className="component-15"
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
                className="content-53"
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
                      ? "20px"
                      : screenWidth >= 1460
                        ? "32px"
                        : undefined,
                  width: screenWidth < 1460 ? "100%" : undefined,
                }}
              >
                <div
                  className="content-54"
                  style={{
                    gap:
                      screenWidth < 1460
                        ? "20px"
                        : screenWidth >= 1460
                          ? "24px"
                          : undefined,
                  }}
                >
                  <p className="heading-11">
                    Unlock the Potential of AI Tailored to Your Business Needs
                  </p>

                  <p
                    className="text-21"
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
                  alignSelf: screenWidth < 1460 ? "stretch" : undefined,
                  flex: screenWidth >= 1460 ? "1" : undefined,
                  flexGrow: screenWidth >= 1460 ? "1" : undefined,
                  height:
                    screenWidth < 1460
                      ? "348px"
                      : screenWidth >= 1460
                        ? "640px"
                        : undefined,
                  width: screenWidth < 1460 ? "100%" : undefined,
                }}
                alt="Placeholder image"
                src={
                  screenWidth < 1460
                    ? "/img/placeholder-image-29.png"
                    : screenWidth >= 1460
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
            className="container-31"
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
              className="content-55"
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
                className="content-56"
                style={{
                  gap:
                    screenWidth < 1460
                      ? "20px"
                      : screenWidth >= 1460
                        ? "24px"
                        : undefined,
                }}
              >
                <p className="heading-13">Ready to Build the Future?</p>

                <p
                  className="text-22"
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
            className="container-32"
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
              className="content-57"
              style={{
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
                className="section-title-11"
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
                      ? "12px"
                      : screenWidth >= 1460
                        ? "16px"
                        : undefined,
                  width: screenWidth < 1460 ? "100%" : undefined,
                }}
              >
                <div
                  className="content-58"
                  style={{
                    gap:
                      screenWidth < 1460
                        ? "20px"
                        : screenWidth >= 1460
                          ? "24px"
                          : undefined,
                  }}
                >
                  <div className="heading-14">Get in Touch</div>

                  <p
                    className="text-23"
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
                    We’re here to help you explore AI solutions tailored to your
                    needs.
                  </p>
                </div>
              </div>

              <div
                className="row-15"
                style={{
                  alignSelf: screenWidth < 1460 ? "stretch" : undefined,
                  flex: screenWidth < 1460 ? "0 0 auto" : undefined,
                  width:
                    screenWidth < 1460
                      ? "100%"
                      : screenWidth >= 1460
                        ? "500px"
                        : undefined,
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
                alignSelf: screenWidth < 1460 ? "stretch" : undefined,
                height:
                  screenWidth < 1460
                    ? "188px"
                    : screenWidth >= 1460
                      ? "720px"
                      : undefined,
                width:
                  screenWidth < 1460
                    ? "100%"
                    : screenWidth >= 1460
                      ? "1280px"
                      : undefined,
              }}
              alt="Placeholder image"
              src={
                screenWidth < 1460
                  ? "/img/placeholder-image-30.png"
                  : screenWidth >= 1460
                    ? "/img/placeholder-image-27.png"
                    : undefined
              }
            />
          </div>
        </div>

        <div
          className="footer-5"
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
            className="container-33"
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
              className="content-60"
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
                className="logo-3"
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
                <CompanyLogo alternate={false} className="company-logo-5" />
              </div>

              <div
                className="links-5"
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
                  className="text-wrapper-25"
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
                  className="text-wrapper-26"
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
                  className="companies-solutions-5"
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
                className="social-links-2"
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
                <Facebook2 className="instance-node-9" />
              </a>
            </div>

            <div
              className="credits-5"
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
                className="divider-5"
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
                className="row-16"
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
                  className="footer-links-5"
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
                    <div className="text-wrapper-27">Terms of Service</div>
                  )}

                  {screenWidth >= 1460 && (
                    <p className="text-wrapper-87">
                      © 2023 AI Dream Builders. All rights reserved.
                    </p>
                  )}
                </div>

                <div
                  className="element-AI-dream-5"
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
