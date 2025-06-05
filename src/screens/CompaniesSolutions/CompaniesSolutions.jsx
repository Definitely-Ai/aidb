import React from "react";
import { Link } from "react-router-dom";
import { useWindowWidth } from "../../breakpoints";
import { Button } from "../../components/Button";
import { CompanyLogo } from "../../components/CompanyLogo";
import { Automation2 } from "../../icons/Automation2";
import { ChevronRight3 } from "../../icons/ChevronRight3";
import { Close } from "../../icons/Close";
import { ContentCut2 } from "../../icons/ContentCut2";
import { Facebook2 } from "../../icons/Facebook2";
import { Maximize } from "../../icons/Maximize";
import "./style.css";

export const CompaniesSolutions = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="companies-solutions"
      style={{
        minHeight:
          screenWidth < 1460
            ? "7399px"
            : screenWidth >= 1460
              ? "6108px"
              : undefined,
        minWidth:
          screenWidth < 1460
            ? "395px"
            : screenWidth >= 1460
              ? "1460px"
              : undefined,
      }}
    >
      <div className="companies-and">
        <div
          className="navbar-4"
          style={{
            padding: screenWidth < 1460 ? "0px 0px 38px" : undefined,
          }}
          data-spacing-sizing-mode={screenWidth < 1460 ? "mobile" : undefined}
          data-typography-mode={screenWidth < 1460 ? "mobile" : undefined}
        >
          {screenWidth < 1460 && (
            <>
              <div className="content-31">
                <div className="div-6">
                  <CompanyLogo alternate={false} className="company-logo-4" />
                </div>

                <div className="close-instance-wrapper">
                  <Close className="instance-node-7" />
                </div>
              </div>

              <div className="row-8">
                <div className="column-12">
                  <a
                    className="link-text-wrapper-7"
                    href="aidreambuilders.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="link-text-7">Home</div>
                  </a>

                  <Link className="link-text-wrapper-7" to="/about-us-desktop">
                    <div className="link-text-7">About Us</div>
                  </Link>

                  <Link
                    className="link-text-wrapper-7"
                    to="/companies-u38-solutions-mobile"
                  >
                    <div className="link-text-7">Companies &amp; Solutions</div>
                  </Link>
                </div>
              </div>

              <div className="actions-9">
                <Button
                  alternate={false}
                  className="button-19"
                  iconPosition="no-icon"
                  small
                  style="secondary"
                  text="Contact Us"
                  to="/contact-us-desktop"
                />
                <Button
                  alternate={false}
                  className="button-20"
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
            <header className="header-6">
              <div className="container-17">
                <div className="div-6">
                  <CompanyLogo alternate={false} className="company-logo-4" />
                  <div className="column-13">
                    <a
                      className="link-text-wrapper-8"
                      href="aidreambuilders.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="link-text-8">Home</div>
                    </a>

                    <Link
                      className="link-text-wrapper-8"
                      to="/about-us-desktop"
                    >
                      <div className="link-text-8">About Us</div>
                    </Link>

                    <Link
                      className="link-text-wrapper-8"
                      to="/companies-u38-solutions-mobile"
                    >
                      <div className="link-text-8">
                        Companies &amp; Solutions
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="actions-10">
                  <Button
                    alternate={false}
                    className="contact-us-4"
                    iconPosition="no-icon"
                    small
                    style="secondary"
                    text="Contact Us"
                    to="/contact-us-desktop"
                  />
                  <Button
                    alternate={false}
                    className="button-21"
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
          className="header-7"
          style={{
            backgroundImage:
              screenWidth < 1460
                ? "url(/img/header-65-1-2x.png)"
                : screenWidth >= 1460
                  ? "url(/img/header-65-1.png)"
                  : undefined,
            gap:
              screenWidth < 1460
                ? "48px"
                : screenWidth >= 1460
                  ? "80px"
                  : undefined,
            justifyContent: screenWidth >= 1460 ? "center" : undefined,
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
            className="container-18"
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
              className="section-title-wrapper"
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
                className="section-title-7"
                style={{
                  gap:
                    screenWidth < 1460
                      ? "12px"
                      : screenWidth >= 1460
                        ? "16px"
                        : undefined,
                }}
              >
                {screenWidth >= 1460 && <div className="tagline-wrapper-4" />}

                <div
                  className="content-32"
                  style={{
                    gap:
                      screenWidth >= 1460
                        ? "24px"
                        : screenWidth < 1460
                          ? "20px"
                          : undefined,
                  }}
                >
                  <div className="text-wrapper-14">Transform Your Vision</div>

                  <p
                    className="text-wrapper-15"
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
                    Explore our groundbreaking companies and solutions that are
                    reshaping industries with AI technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="layout-5"
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
            className="container-19"
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
              className="component-8"
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
                className="content-left-2"
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
                  className="section-title-8"
                  style={{
                    gap:
                      screenWidth >= 1460
                        ? "16px"
                        : screenWidth < 1460
                          ? "12px"
                          : undefined,
                  }}
                >
                  <div
                    className="content-33"
                    style={{
                      gap:
                        screenWidth >= 1460
                          ? "24px"
                          : screenWidth < 1460
                            ? "20px"
                            : undefined,
                    }}
                  >
                    <p className="text-wrapper-16">
                      Custom Solutions for Your Unique Challenges
                    </p>

                    <p
                      className="text-11"
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
                      At AI Dream Builders, we specialize in crafting tailored
                      software and hardware solutions that meet the specific
                      needs of our clients. Our collaborative approach ensures
                      that your vision is transformed into a practical,
                      impactful reality.
                    </p>
                  </div>
                </div>

                {screenWidth >= 1460 && (
                  <div className="div-6">
                    <Button
                      alternate={false}
                      className="button-22"
                      iconPosition="no-icon"
                      small={false}
                      style="secondary"
                      text="Learn More"
                    />
                    <Button
                      alternate={false}
                      className="button-23"
                      icon={<ChevronRight3 className="instance-node-7" />}
                      iconPosition="trailing"
                      small={false}
                      style="link"
                      text="Sign Up"
                    />
                  </div>
                )}
              </div>

              <img
                className="placeholder-image-8"
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
                    ? "/img/placeholder-image-17.png"
                    : screenWidth >= 1460
                      ? "/img/placeholder-image-12.png"
                      : undefined
                }
              />
            </div>
          </div>
        </div>

        <div
          className="layout-6"
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
            className="container-20"
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
              className="section-title-9"
              style={{
                gap:
                  screenWidth < 1460
                    ? "12px"
                    : screenWidth >= 1460
                      ? "16px"
                      : undefined,
              }}
            >
              <div className="tagline-wrapper-5">
                <div className="tagline-4">Innovate</div>
              </div>

              <div
                className="content-34"
                style={{
                  gap:
                    screenWidth < 1460
                      ? "20px"
                      : screenWidth >= 1460
                        ? "24px"
                        : undefined,
                }}
              >
                <p className="text-wrapper-16">
                  Transforming Industries with Advanced AI Solutions
                </p>

                <p
                  className="lorem-ipsum-dolor-3"
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
                  At AI Dream Builders, we specialize in creating innovative
                  solutions tailored to your needs. Our cutting-edge
                  technologies empower industries to achieve unprecedented
                  efficiency and insight.
                </p>
              </div>
            </div>

            <div
              className="row-9"
              style={{
                gap:
                  screenWidth < 1460
                    ? "32px"
                    : screenWidth >= 1460
                      ? "64px"
                      : undefined,
              }}
            >
              {screenWidth < 1460 && (
                <>
                  <div className="div-7">
                    <img
                      className="placeholder-image-9"
                      alt="Placeholder image"
                      src="/img/placeholder-image-23.png"
                    />

                    <div className="content-35">
                      <div className="medium-length">
                        Livestock Technologies: Revolutionizing Agriculture
                      </div>

                      <p className="text-wrapper-17">
                        Enhancing cattle welfare and ranch efficiency through
                        advanced computer vision and real-time data processing.
                      </p>
                    </div>
                  </div>

                  <div className="div-7">
                    <img
                      className="placeholder-image-9"
                      alt="Placeholder image"
                      src="/img/placeholder-image-18.png"
                    />

                    <div className="content-35">
                      <p className="medium-length">
                        SocialEdge AI: Your Social Media Partner
                      </p>

                      <p className="text-wrapper-17">
                        Automating social media management to boost engagement
                        and grow your online presence effortlessly.
                      </p>
                    </div>
                  </div>

                  <div className="div-7">
                    <img
                      className="placeholder-image-9"
                      alt="Placeholder image"
                      src="/img/placeholder-image-35.png"
                    />

                    <div className="content-35">
                      <p className="medium-length">
                        Cutting-Edge AI Solutions for Every Industry
                      </p>

                      <p className="text-wrapper-17">
                        Delivering actionable insights through advanced AI in
                        forestry, traffic, and beyond.
                      </p>
                    </div>
                  </div>

                  <div className="div-7">
                    <img
                      className="placeholder-image-9"
                      alt="Placeholder image"
                      src="/img/placeholder-image-22.png"
                    />

                    <div className="content-35">
                      <p className="medium-length">
                        Join Us in Building the Future
                      </p>

                      <p className="text-wrapper-17">
                        Partner with us to turn your visionary ideas into
                        scalable solutions that drive real impact.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {screenWidth >= 1460 && (
                <div className="row-10">
                  <div className="div-8">
                    <img
                      className="placeholder-image-10"
                      alt="Placeholder image"
                      src="/img/placeholder-image-32.png"
                    />

                    <div className="content-36">
                      <div className="medium-length">
                        Livestock Technologies: Revolutionizing Agriculture
                      </div>

                      <p className="text-wrapper-17">
                        Enhancing cattle welfare and ranch efficiency through
                        advanced computer vision and real-time data processing.
                      </p>
                    </div>
                  </div>

                  <div className="div-8">
                    <img
                      className="placeholder-image-10"
                      alt="Placeholder image"
                      src="/img/placeholder-image-13.png"
                    />

                    <div className="content-36">
                      <p className="medium-length">
                        SocialEdge AI: Your Social Media Partner
                      </p>

                      <p className="text-wrapper-17">
                        Automating social media management to boost engagement
                        and grow your online presence effortlessly.
                      </p>
                    </div>
                  </div>

                  <div className="div-8">
                    <img
                      className="placeholder-image-10"
                      alt="Placeholder image"
                      src="/img/placeholder-image-33.png"
                    />

                    <div className="content-36">
                      <p className="medium-length">
                        Cutting-Edge AI Solutions for Every Industry
                      </p>

                      <p className="text-wrapper-17">
                        Delivering actionable insights through advanced AI in
                        forestry, traffic, and beyond.
                      </p>
                    </div>
                  </div>

                  <div className="div-8">
                    <img
                      className="placeholder-image-10"
                      alt="Placeholder image"
                      src="/img/placeholder-image-34.png"
                    />

                    <div className="content-36">
                      <p className="medium-length">
                        Join Us in Building the Future
                      </p>

                      <p className="text-wrapper-17">
                        Partner with us to turn your visionary ideas into
                        scalable solutions that drive real impact.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="div-6">
              <Button
                alternate={false}
                className={`${screenWidth < 1460 && "button-22"} ${screenWidth >= 1460 && "class"}`}
                divClassName={`${screenWidth >= 1460 && "class-2"}`}
                iconPosition="no-icon"
                small={false}
                style="secondary"
                text="View Our Showcase"
              />
              <Button
                alternate={false}
                className="button-23"
                icon={<ChevronRight3 className="instance-node-7" />}
                iconPosition="trailing"
                small={false}
                style="link"
                text="Contact"
              />
            </div>
          </div>
        </div>

        <div
          className="layout-7"
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
            className="container-21"
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
              className="component-9"
              style={{
                alignItems:
                  screenWidth < 1460
                    ? "flex-start"
                    : screenWidth >= 1460
                      ? "center"
                      : undefined,
                alignSelf: screenWidth < 1460 ? "stretch" : undefined,
                flexDirection: screenWidth < 1460 ? "column" : undefined,
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
                      ? "1280px"
                      : undefined,
              }}
            >
              {screenWidth < 1460 && (
                <>
                  <div className="content-37">
                    <div className="div-7">
                      <p className="heading-8">
                        Transforming Agriculture with Advanced Computer Vision
                        and Real-Time Data Solutions
                      </p>

                      <p className="text-12">
                        Livestock Technologies harnesses the power of custom
                        computer vision software and robust on-premise servers
                        to revolutionize cattle ranching. Our innovative system
                        processes live camera feeds, providing ranchers with
                        critical data and real-time updates to enhance cattle
                        welfare and operational efficiency.
                      </p>
                    </div>

                    <div className="list-2">
                      <div className="list-item-4">
                        <div className="text-wrapper-18">Innovative</div>

                        <p className="text-12">
                          Enhancing ranching efficiency through real-time data
                          processing.
                        </p>
                      </div>

                      <div className="list-item-4">
                        <div className="text-wrapper-18">Reliable</div>

                        <p className="text-12">
                          Empowering ranchers with actionable insights and
                          updates.
                        </p>
                      </div>
                    </div>
                  </div>

                  <img
                    className="placeholder-image-11"
                    alt="Placeholder image"
                    src="/img/placeholder-image-19.png"
                  />
                </>
              )}

              {screenWidth >= 1460 && (
                <>
                  <img
                    className="placeholder-image-12"
                    alt="Placeholder image"
                    src="/img/placeholder-image-14.png"
                  />

                  <div className="content-38">
                    <div className="content-37">
                      <p className="heading-9">
                        Transforming Agriculture with Advanced Computer Vision
                        and Real-Time Data Solutions
                      </p>

                      <p className="text-13">
                        Livestock Technologies harnesses the power of custom
                        computer vision software and robust on-premise servers
                        to revolutionize cattle ranching. Our innovative system
                        processes live camera feeds, providing ranchers with
                        critical data and real-time updates to enhance cattle
                        welfare and operational efficiency.
                      </p>
                    </div>

                    <div className="row-wrapper">
                      <div className="row-11">
                        <div className="list-item-5">
                          <div className="text-wrapper-16">Innovative</div>

                          <p className="text-wrapper-17">
                            Enhancing ranching efficiency through real-time data
                            processing.
                          </p>
                        </div>

                        <div className="list-item-5">
                          <div className="text-wrapper-16">Reliable</div>

                          <p className="text-wrapper-17">
                            Empowering ranchers with actionable insights and
                            updates.
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
          className="layout-8"
          style={{
            gap:
              screenWidth < 1460
                ? "48px"
                : screenWidth >= 1460
                  ? "80px"
                  : undefined,
            padding:
              screenWidth < 1460
                ? "30px var(--spacing-sizing-page-padding-padding-global) var(--spacing-sizing-section-padding-padding-section-large) var(--spacing-sizing-page-padding-padding-global)"
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
            className="container-22"
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
              className="component-10"
              style={{
                alignItems:
                  screenWidth < 1460
                    ? "flex-start"
                    : screenWidth >= 1460
                      ? "center"
                      : undefined,
                flexDirection: screenWidth < 1460 ? "column" : undefined,
                gap: screenWidth >= 1460 ? "80px" : undefined,
              }}
            >
              <div
                className="content-39"
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
                  className="content-40"
                  style={{
                    gap:
                      screenWidth < 1460
                        ? "20px"
                        : screenWidth >= 1460
                          ? "24px"
                          : undefined,
                  }}
                >
                  <p className="heading-9">
                    Transform Your Social Media Strategy with SocialEdge AI
                    Automation
                  </p>

                  <p
                    className="text-14"
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
                    SocialEdge AI is designed specifically for real estate
                    professionals, streamlining your social media presence. With
                    automated posts and audience analysis, it maximizes your
                    engagement and reach effortlessly.
                  </p>
                </div>

                <div className="list-3">
                  <div className="list-item-6">
                    <Automation2 className="instance-node-8" />
                    <p className="lorem-ipsum-dolor-4">
                      Automated posts tailored for your audience’s preferences.
                    </p>
                  </div>

                  <div className="list-item-6">
                    <ContentCut2 className="instance-node-8" />
                    <p className="lorem-ipsum-dolor-4">
                      Engage your followers with captivating content daily.
                    </p>
                  </div>

                  <div className="list-item-6">
                    <Maximize className="instance-node-8" />
                    <p className="lorem-ipsum-dolor-4">
                      Maximize your online impact with minimal effort.
                    </p>
                  </div>
                </div>
              </div>

              <img
                className="placeholder-image-13"
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
                    ? "/img/placeholder-image-20.png"
                    : screenWidth >= 1460
                      ? "/img/placeholder-image-15.png"
                      : undefined
                }
              />
            </div>
          </div>
        </div>

        <div
          className="layout-9"
          style={{
            gap:
              screenWidth < 1460
                ? "48px"
                : screenWidth >= 1460
                  ? "80px"
                  : undefined,
            padding:
              screenWidth < 1460
                ? "var(--spacing-sizing-section-padding-padding-section-large) var(--spacing-sizing-page-padding-padding-global) 0px var(--spacing-sizing-page-padding-padding-global)"
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
            className="container-23"
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
              className="component-11"
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
                  <div className="div-7">
                    <p className="heading-9">
                      Transforming Industries with Advanced AI Solutions for
                      Forestry and Traffic Management
                    </p>

                    <p className="text-wrapper-17">
                      Our innovative AI tools are revolutionizing the forestry
                      and traffic sectors by providing real-time data analysis
                      and actionable insights. From optimizing traffic flow to
                      enhancing forest management practices, we empower
                      industries to make informed decisions and drive
                      efficiency.
                    </p>
                  </div>

                  <img
                    className="placeholder-image-14"
                    alt="Placeholder image"
                    src="/img/placeholder-image-21.png"
                  />
                </>
              )}

              {screenWidth >= 1460 && (
                <>
                  <img
                    className="placeholder-image-15"
                    alt="Placeholder image"
                    src="/img/placeholder-image-16.png"
                  />

                  <div className="div-8">
                    <p className="heading-9">
                      Transforming Industries with Advanced AI Solutions for
                      Forestry and Traffic Management
                    </p>

                    <p className="text-13">
                      Our innovative AI tools are revolutionizing the forestry
                      and traffic sectors by providing real-time data analysis
                      and actionable insights. From optimizing traffic flow to
                      enhancing forest management practices, we empower
                      industries to make informed decisions and drive
                      efficiency.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div
          className="CTA-4"
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
            className="container-24"
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
              className="content-41"
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
                className="content-42"
                style={{
                  gap:
                    screenWidth < 1460
                      ? "20px"
                      : screenWidth >= 1460
                        ? "24px"
                        : undefined,
                }}
              >
                <p className="text-wrapper-18">
                  Transform Your Business with AI
                </p>

                <p
                  className="text-15"
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
                  Join us to unlock innovative AI solutions tailored to your
                  business needs and goals.
                </p>
              </div>

              <div className="actions-11">
                <Button
                  alternate={false}
                  className="button-21"
                  iconPosition="no-icon"
                  small={false}
                  style="primary"
                  text="Partner"
                  to="/contact-us-desktop"
                />
                <Button
                  alternate={false}
                  className="button-24"
                  iconPosition="no-icon"
                  small={false}
                  style="secondary"
                  text="About Us"
                  to="/about-us-desktop"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="footer-4"
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
            className="container-25"
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
              className="content-43"
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
                className="logo-2"
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
                <CompanyLogo alternate={false} className="company-logo-4" />
              </div>

              <div
                className="links-4"
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
                  className="text-wrapper-19"
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
                  className="text-wrapper-20"
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
                  className="text-wrapper-21"
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
                className="facebook-3-wrapper"
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
                <Facebook2 className="instance-node-7" />
              </a>
            </div>

            <div
              className="credits-4"
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
                className="divider-4"
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
                className="row-12"
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
                  className="footer-links-4"
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
                    <div className="text-wrapper-22">Terms of Service</div>
                  )}

                  {screenWidth >= 1460 && (
                    <p className="text-wrapper-87">
                      © 2023 AI Dream Builders. All rights reserved.
                    </p>
                  )}
                </div>

                <div
                  className="element-AI-dream-4"
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
