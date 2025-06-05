import React from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import { Button } from "../../components/Button";
import { CompanyLogo } from "../../components/CompanyLogo";
import { Analytics2 } from "../../icons/Analytics2";
import { Analytics3 } from "../../icons/Analytics3";
import { ChevronRight3 } from "../../icons/ChevronRight3";
import { Close } from "../../icons/Close";
import { Facebook2 } from "../../icons/Facebook2";
import { Hardware } from "../../icons/Hardware";
import { Manufacturing1 } from "../../icons/Manufacturing1";
import { PartnerExchange2 } from "../../icons/PartnerExchange2";
import { Productivity2 } from "../../icons/Productivity2";
import "./style.css";

export const HomeMobile = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="home-mobile"
      style={{
        display:
          screenWidth < 1460
            ? "inline-flex"
            : screenWidth >= 1460
              ? "flex"
              : undefined,
        height: screenWidth >= 1460 ? "4186px" : undefined,
        minHeight: screenWidth < 1460 ? "4692.44px" : undefined,
        minWidth:
          screenWidth < 1460
            ? "395px"
            : screenWidth >= 1460
              ? "1460px"
              : undefined,
      }}
    >
      <div className="div-3">
        <div
          className="navbar-2"
          style={{
            padding: screenWidth < 1460 ? "0px 0px 38px" : undefined,
          }}
          data-spacing-sizing-mode={screenWidth < 1460 ? "mobile" : undefined}
          data-typography-mode={screenWidth < 1460 ? "mobile" : undefined}
        >
          {screenWidth < 1460 && (
            <>
              <div className="content-9">
                <div className="div-4">
                  <CompanyLogo alternate={false} className="company-logo-2" />
                </div>

                <div className="close-wrapper">
                  <Close className="instance-node-3" />
                </div>
              </div>

              <div className="column-wrapper">
                <div className="column-4">
                  <a
                    className="link-text-wrapper-3"
                    href="aidreambuilders.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="link-text-3">Home</div>
                  </a>

                  <Link className="link-text-wrapper-3" to="/about-us-desktop">
                    <div className="link-text-3">About Us</div>
                  </Link>

                  <Link
                    className="link-text-wrapper-3"
                    to="/companies-u38-solutions-mobile"
                  >
                    <div className="link-text-3">Companies &amp; Solutions</div>
                  </Link>
                </div>
              </div>

              <div className="actions-3">
                <Button
                  alternate={false}
                  className="button-4"
                  iconPosition="no-icon"
                  small
                  style="secondary"
                  text="Contact Us"
                  to="/contact-us-desktop"
                />
                <Button
                  alternate={false}
                  className="button-5"
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
            <header className="header-2">
              <div className="container-5">
                <div className="div-4">
                  <CompanyLogo alternate={false} className="company-logo-2" />
                  <div className="column-5">
                    <a
                      className="link-text-wrapper-4"
                      href="aidreambuilders.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="link-text-4">Home</div>
                    </a>

                    <Link
                      className="link-text-wrapper-4"
                      to="/about-us-desktop"
                    >
                      <div className="link-text-4">About Us</div>
                    </Link>

                    <Link
                      className="link-text-wrapper-4"
                      to="/companies-u38-solutions-mobile"
                    >
                      <div className="link-text-4">
                        Companies &amp; Solutions
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="actions-4">
                  <Button
                    alternate={false}
                    className="contact-us-2"
                    iconPosition="no-icon"
                    small
                    style="secondary"
                    text="Contact Us"
                    to="/contact-us-desktop"
                  />
                  <Button
                    alternate={false}
                    className="button-6"
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
          className="header-3"
          style={{
            boxShadow:
              screenWidth >= 1460 ? "0px 4px 4px #00000040" : undefined,
            gap:
              screenWidth < 1460
                ? "48px"
                : screenWidth >= 1460
                  ? "80px"
                  : undefined,
            padding:
              screenWidth < 1460
                ? "var(--spacing-sizing-section-padding-padding-section-large) var(--spacing-sizing-page-padding-padding-global) var(--spacing-sizing-section-padding-padding-section-large) var(--spacing-sizing-page-padding-padding-global)"
                : screenWidth >= 1460
                  ? "50px var(--spacing-sizing-page-padding-padding-global) 61px var(--spacing-sizing-page-padding-padding-global)"
                  : undefined,
          }}
          data-spacing-sizing-mode={screenWidth < 1460 ? "mobile" : undefined}
          data-typography-mode={screenWidth < 1460 ? "mobile" : undefined}
        >
          <div
            className="container-6"
            style={{
              gap:
                screenWidth < 1460
                  ? "48px"
                  : screenWidth >= 1460
                    ? "41px"
                    : undefined,
            }}
          >
            <div
              className="content-10"
              style={{
                backgroundColor: screenWidth >= 1460 ? "#ffffff" : undefined,
                flexDirection: screenWidth < 1460 ? "column" : undefined,
                gap: screenWidth < 1460 ? "20px" : undefined,
                justifyContent: screenWidth >= 1460 ? "center" : undefined,
              }}
            >
              <div
                className="medium-length-hero-wrapper"
                style={{
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
                <p
                  className="medium-length-hero"
                  style={{
                    color:
                      screenWidth < 1460
                        ? "var(--color-schemes-color-scheme-1-text)"
                        : screenWidth >= 1460
                          ? "var(--primitives-color-blue-gem)"
                          : undefined,
                  }}
                >
                  Transforming Ideas into Reality with AI
                </p>
              </div>

              <div
                className="column-6"
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
                  gap:
                    screenWidth < 1460
                      ? "24px"
                      : screenWidth >= 1460
                        ? "32px"
                        : undefined,
                  height: screenWidth >= 1460 ? "264px" : undefined,
                  justifyContent: screenWidth >= 1460 ? "center" : undefined,
                  width: screenWidth < 1460 ? "100%" : undefined,
                }}
              >
                <p
                  className="lorem-ipsum-dolor"
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
                    marginTop: screenWidth < 1460 ? "-1.00px" : undefined,
                  }}
                >
                  At AI Dream Builders, we harness the power of artificial
                  intelligence to create innovative solutions tailored to your
                  needs. Join us on a journey to shape the future together.
                </p>

                <div className="actions-5">
                  <Button
                    alternate={false}
                    className="button-6"
                    iconPosition="no-icon"
                    small={false}
                    style="primary"
                    text="Showcase"
                    to="/showcase-desktop"
                  />
                  <Button
                    alternate={false}
                    className="button-7"
                    iconPosition="no-icon"
                    small={false}
                    style="secondary"
                    text="Contact us"
                    to="/contact-us-desktop"
                  />
                </div>
              </div>
            </div>

            <video
              className="placeholder-lightbox"
              style={{
                boxShadow:
                  screenWidth >= 1460 ? "12px 20px 4px #eee7f5" : undefined,
                height:
                  screenWidth < 1460
                    ? "188.44px"
                    : screenWidth >= 1460
                      ? "720px"
                      : undefined,
              }}
              autoplay="autoplay"
              height="100%"
              loop
              muted
              playsinline
              src="https://cdn.animaapp.com/projects/682f5a093c77459e8b8a213f/files/video_ready_neon_motherboard.mp4"
              width="100%"
            />
          </div>
        </div>

        <div
          className="layout"
          style={{
            gap:
              screenWidth < 1460
                ? "48px"
                : screenWidth >= 1460
                  ? "80px"
                  : undefined,
          }}
          data-spacing-sizing-mode={screenWidth < 1460 ? "mobile" : undefined}
          data-typography-mode={screenWidth < 1460 ? "mobile" : undefined}
        >
          <div
            className="container-7"
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
              className="component-3"
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
                className="content-11"
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
                  className="content-12"
                  style={{
                    gap:
                      screenWidth < 1460
                        ? "20px"
                        : screenWidth >= 1460
                          ? "32px"
                          : undefined,
                  }}
                >
                  <div
                    className="content-wrapper"
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
                      className="content-13"
                      style={{
                        gap:
                          screenWidth < 1460
                            ? "20px"
                            : screenWidth >= 1460
                              ? "24px"
                              : undefined,
                      }}
                    >
                      <p className="heading-4">
                        Transforming Ideas into AI-Powered Solutions
                      </p>

                      <p
                        className="text-3"
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
                        At AI Dream Builders, we harness the power of
                        cutting-edge AI technology to create innovative
                        solutions tailored to your needs. Our consulting
                        services empower businesses to thrive in a rapidly
                        evolving digital landscape.
                      </p>
                    </div>
                  </div>

                  <div className="list">
                    <div
                      className="list-item"
                      style={{
                        alignItems:
                          screenWidth < 1460
                            ? "flex-start"
                            : screenWidth >= 1460
                              ? "center"
                              : undefined,
                      }}
                    >
                      {screenWidth < 1460 && (
                        <Analytics2 className="instance-node-4" />
                      )}

                      {screenWidth >= 1460 && (
                        <Analytics3 className="instance-node-4" />
                      )}

                      <p className="lorem-ipsum-dolor-2">
                        Advanced AI for Real-World Applications and Impact
                      </p>
                    </div>

                    <div
                      className="list-item-2"
                      style={{
                        alignItems:
                          screenWidth < 1460
                            ? "flex-start"
                            : screenWidth >= 1460
                              ? "center"
                              : undefined,
                      }}
                    >
                      <Manufacturing1 className="instance-node-4" />
                      <p className="lorem-ipsum-dolor-2">
                        Custom Solutions for Every Industry and Challenge
                      </p>
                    </div>

                    <div
                      className="list-item-3"
                      style={{
                        alignItems:
                          screenWidth < 1460
                            ? "flex-start"
                            : screenWidth >= 1460
                              ? "center"
                              : undefined,
                      }}
                    >
                      <PartnerExchange2 className="instance-node-4" />
                      <p className="lorem-ipsum-dolor-2">
                        Partnering with You to Build the Future Together
                      </p>
                    </div>
                  </div>
                </div>

                <div className="div-4">
                  <Button
                    alternate={false}
                    className="button-8"
                    divClassName="button-9"
                    iconPosition="no-icon"
                    small={false}
                    style="secondary"
                    text="View Our Showcase"
                    to="/showcase-desktop"
                  />
                  <Button
                    alternate={false}
                    className="button-10"
                    icon={<ChevronRight3 className="instance-node-3" />}
                    iconPosition="trailing"
                    small={false}
                    style="link"
                    text="Contact Us"
                    to="/contact-us-desktop"
                  />
                </div>
              </div>

              <img
                className="img"
                style={{
                  flex: screenWidth >= 1460 ? "1" : undefined,
                  flexGrow: screenWidth >= 1460 ? "1" : undefined,
                  height:
                    screenWidth < 1460
                      ? "220px"
                      : screenWidth >= 1460
                        ? "412px"
                        : undefined,
                  marginRight: screenWidth >= 1460 ? "-14.00px" : undefined,
                  width: screenWidth < 1460 ? "330px" : undefined,
                }}
                alt="Placeholder image"
                src={
                  screenWidth < 1460
                    ? "/img/placeholder-image-1.png"
                    : screenWidth >= 1460
                      ? "/img/placeholder-image-4.png"
                      : undefined
                }
              />
            </div>
          </div>
        </div>

        <div
          className="layout-2"
          style={{
            gap:
              screenWidth < 1460
                ? "48px"
                : screenWidth >= 1460
                  ? "80px"
                  : undefined,
          }}
          data-spacing-sizing-mode={screenWidth < 1460 ? "mobile" : undefined}
          data-typography-mode={screenWidth < 1460 ? "mobile" : undefined}
        >
          <div
            className="container-8"
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
              className="section-title-2"
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
                className="content-14"
                style={{
                  gap:
                    screenWidth < 1460
                      ? "20px"
                      : screenWidth >= 1460
                        ? "24px"
                        : undefined,
                }}
              >
                <p className="heading-5">
                  Transforming Ideas into Intelligent Solutions
                </p>

                <p
                  className="text-4"
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
                  At AI Dream Builders, we specialize in harnessing the power of
                  artificial intelligence to create transformative solutions.
                  Our focus on computer vision, automation, and custom hardware
                  empowers businesses to thrive in a digital landscape.
                </p>
              </div>
            </div>

            <div
              className="content-15"
              style={{
                alignItems:
                  screenWidth < 1460
                    ? "flex-start"
                    : screenWidth >= 1460
                      ? "center"
                      : undefined,
                flexDirection: screenWidth < 1460 ? "column" : undefined,
                justifyContent: screenWidth < 1460 ? "center" : undefined,
              }}
            >
              {screenWidth < 1460 && (
                <>
                  <div className="column-7">
                    <div className="content-16">
                      <Analytics2 className="instance-node-5" />
                      <div className="content-17">
                        <div className="heading-6">
                          Computer Vision Expertise
                        </div>

                        <p className="text-5">
                          Unlock insights from real-time video analytics to
                          enhance decision-making and operational efficiency.
                        </p>
                      </div>
                    </div>

                    <div className="content-16">
                      <Productivity2 className="instance-node-5" />
                      <div className="content-17">
                        <div className="heading-6">AI Automation Solutions</div>

                        <p className="text-5">
                          Streamline workflows and boost productivity with our
                          advanced AI-powered automation tools.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="column-7">
                    <div className="content-16">
                      <Hardware className="instance-node-5" />
                      <div className="content-17">
                        <div className="heading-6">
                          Custom Hardware Development
                        </div>

                        <p className="text-5">
                          Tailored server infrastructure designed to meet your
                          unique operational needs and performance demands.
                        </p>
                      </div>
                    </div>

                    <div className="content-16">
                      <PartnerExchange2 className="instance-node-5" />
                      <div className="content-17">
                        <div className="heading-6">
                          Collaborative Partnerships
                        </div>

                        <p className="text-5">
                          We work closely with clients to turn innovative ideas
                          into scalable, impactful solutions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <img
                    className="placeholder-image-2"
                    alt="Placeholder image"
                    src="/img/placeholder-image-2.png"
                  />
                </>
              )}

              {screenWidth >= 1460 && (
                <>
                  <div className="column-8">
                    <div className="content-18">
                      <Analytics2 className="instance-node-5" />
                      <div className="content-19">
                        <div className="heading-6">
                          Computer Vision Expertise
                        </div>

                        <p className="text-5">
                          Unlock insights from real-time video analytics to
                          enhance decision-making and operational efficiency.
                        </p>
                      </div>
                    </div>

                    <div className="content-18">
                      <Productivity2 className="instance-node-5" />
                      <div className="content-19">
                        <div className="heading-6">AI Automation Solutions</div>

                        <p className="text-5">
                          Streamline workflows and boost productivity with our
                          advanced AI-powered automation tools.
                        </p>
                      </div>
                    </div>
                  </div>

                  <img
                    className="placeholder-image-3"
                    alt="Placeholder image"
                    src="/img/placeholder-image-5.png"
                  />

                  <div className="column-8">
                    <div className="content-18">
                      <Hardware className="instance-node-5" />
                      <div className="content-19">
                        <div className="heading-6">
                          Custom Hardware Development
                        </div>

                        <p className="text-5">
                          Tailored server infrastructure designed to meet your
                          unique operational needs and performance demands.
                        </p>
                      </div>
                    </div>

                    <div className="content-18">
                      <PartnerExchange2 className="instance-node-5" />
                      <div className="content-19">
                        <div className="heading-6">
                          Collaborative Partnerships
                        </div>

                        <p className="text-5">
                          We work closely with clients to turn innovative ideas
                          into scalable, impactful solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="div-4">
              <Button
                alternate={false}
                className="button-8"
                divClassName="button-9"
                iconPosition="no-icon"
                small={false}
                style="secondary"
                text="View Our Showcase"
                to="/showcase-desktop"
              />
              <Button
                alternate={false}
                className="button-10"
                icon={<ChevronRight3 className="instance-node-3" />}
                iconPosition="trailing"
                small={false}
                style="link"
                text="Contact Us"
                to="/contact-us-desktop"
              />
            </div>
          </div>
        </div>

        <div
          className="CTA-2"
          style={{
            gap:
              screenWidth < 1460
                ? "48px"
                : screenWidth >= 1460
                  ? "80px"
                  : undefined,
          }}
          data-spacing-sizing-mode={screenWidth < 1460 ? "mobile" : undefined}
          data-typography-mode={screenWidth < 1460 ? "mobile" : undefined}
        >
          <div
            className="container-9"
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
              className="content-20"
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
                className="content-21"
                style={{
                  gap:
                    screenWidth >= 1460
                      ? "24px"
                      : screenWidth < 1460
                        ? "20px"
                        : undefined,
                }}
              >
                <p className="heading-5">Start Your Journey with Us</p>

                <p
                  className="text-6"
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
                  Unlock the potential of AI for your business. Contact us for a
                  personalized consultation today!
                </p>
              </div>

              {screenWidth >= 1460 && (
                <div className="actions-5">
                  <Button
                    alternate={false}
                    className="button-6"
                    iconPosition="no-icon"
                    small={false}
                    style="primary"
                    text="Contact"
                    to="/contact-us-desktop"
                  />
                  <Button
                    alternate={false}
                    className="button-7"
                    iconPosition="no-icon"
                    small={false}
                    style="secondary"
                    text="Showcase"
                    to="/showcase-desktop"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className="footer-2"
          style={{
            gap:
              screenWidth < 1460
                ? "48px"
                : screenWidth >= 1460
                  ? "80px"
                  : undefined,
          }}
          data-spacing-sizing-mode={screenWidth < 1460 ? "mobile" : undefined}
          data-typography-mode={screenWidth < 1460 ? "mobile" : undefined}
        >
          <div
            className="container-10"
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
              className="content-22"
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
                className="company-logo-wrapper"
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
                <CompanyLogo alternate={false} className="company-logo-2" />
              </div>

              <div
                className="links-2"
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
                  className="text-wrapper-6"
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
                  className="text-wrapper-7"
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
                  className="companies-solutions-3"
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
                className="facebook-wrapper"
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
                <Facebook2 className="instance-node-3" />
              </a>
            </div>

            <div
              className="credits-2"
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
                className="divider-2"
                alt="Divider"
                src={
                  screenWidth < 1460
                    ? "/img/divider-1.svg"
                    : screenWidth >= 1460
                      ? "/img/divider.svg"
                      : undefined
                }
              />

              <div
                className="row-5"
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
                  className="footer-links-2"
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
                    <div className="text-wrapper-8">Terms of Service</div>
                  )}

                  {screenWidth >= 1460 && (
                    <p className="text-wrapper-87">
                      © 2023 AI Dream Builders. All rights reserved.
                    </p>
                  )}
                </div>

                <div
                  className="element-AI-dream-2"
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
