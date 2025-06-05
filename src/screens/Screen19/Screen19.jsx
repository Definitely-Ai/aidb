import React from "react";
import { Link } from "react-router-dom";
import { ActionKey } from "../../components/ActionKey";
import { Apps } from "../../components/Apps";
import { Button } from "../../components/Button";
import { CompanyLogo } from "../../components/CompanyLogo";
import { ManufacturingWrapper } from "../../components/ManufacturingWrapper";
import { Call3 } from "../../icons/Call3";
import { Close } from "../../icons/Close";
import { Enterprise1 } from "../../icons/Enterprise1";
import { Facebook2 } from "../../icons/Facebook2";
import { LocationOn } from "../../icons/LocationOn";
import { Mail3 } from "../../icons/Mail3";
import { PartnerExchange2 } from "../../icons/PartnerExchange2";
import "./style.css";

export const Screen19 = () => {
  return (
    <div className="screen-19">
      <div className="showcase-mobile-2">
        <div
          className="navbar-14"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="content-112">
            <div className="content-113">
              <CompanyLogo alternate={false} className="company-logo-14" />
            </div>

            <div className="icon-7">
              <Close className="icon-instance-node-12" />
            </div>
          </div>

          <div className="row-36">
            <div className="column-31">
              <a
                className="link-text-wrapper-20"
                href="aidreambuilders.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="link-text-20">Home</div>
              </a>

              <Link className="link-text-wrapper-20" to="/about-us-desktop">
                <div className="link-text-20">About Us</div>
              </Link>

              <Link
                className="link-text-wrapper-20"
                to="/companies-u38-solutions-mobile"
              >
                <div className="link-text-20">Companies &amp; Solutions</div>
              </Link>
            </div>
          </div>

          <div className="actions-32">
            <Button
              alternate={false}
              className="button-67"
              iconPosition="no-icon"
              small
              style="secondary"
              text="Contact Us"
              to="/contact-us-desktop"
            />
            <Button
              alternate={false}
              className="button-68"
              iconPosition="no-icon"
              small
              style="primary"
              text="Showcase"
              to="/showcase-desktop"
            />
          </div>
        </div>

        <div
          className="container-wrapper-13"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-65">
            <div className="component-33">
              <div className="text-wrapper-81">Explore AI Possibilities</div>

              <p className="text-wrapper-82">
                Discover cutting-edge AI demos designed to inspire innovative
                ideas and empower your business.
              </p>
            </div>
          </div>
        </div>

        <div
          className="layout-19"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-65">
            <div className="div-34">
              <div className="content-114">
                <div className="content-114">
                  <div className="div-35">
                    <div className="content-115">
                      <p className="heading-37">
                        Unleash the Power of AI Innovation
                      </p>

                      <p className="text-38">
                        Experience the transformative potential of AI through
                        our innovative solutions. From enhancing operational
                        efficiency to unlocking new insights, see how we can
                        elevate your business.
                      </p>
                    </div>
                  </div>

                  <div className="div-36">
                    <div className="list-item-19">
                      <ActionKey />
                      <div className="subheading-one-2">AI in Action</div>

                      <p className="text-39">
                        Explore groundbreaking projects that redefine
                        possibilities across various industries.
                      </p>
                    </div>

                    <div className="list-item-20">
                      <Enterprise1 className="enterprise-1" color="#56129C" />
                      <div className="subheading-two-2">Real-World Impact</div>

                      <p className="text-38">
                        Discover how AI solutions drive measurable results and
                        enhance business performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="placeholder-image-43"
                alt="Placeholder image"
                src="/img/placeholder-image-28.png"
              />
            </div>
          </div>
        </div>

        <div
          className="container-wrapper-13"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-65">
            <div className="div-34">
              <div className="content-114">
                <div className="content-115">
                  <p className="heading-38">
                    Transform Your Operations with Advanced AI Solutions
                    Tailored for You
                  </p>

                  <p className="text-wrapper-82">
                    Explore our innovative AI technologies that enhance
                    efficiency and drive growth. From real-time monitoring to
                    insightful data analysis, we empower your business to
                    thrive.
                  </p>
                </div>

                <div className="div-36">
                  <div className="div-35">
                    <div className="heading-39">Vehicle Detection</div>

                    <p className="text-wrapper-82">
                      Instantly identify and track vehicles and people for
                      enhanced security and logistics.
                    </p>
                  </div>

                  <div className="div-35">
                    <div className="heading-39">Data Insights</div>

                    <p className="text-wrapper-82">
                      Transform raw data into actionable insights for smarter
                      business decisions.
                    </p>
                  </div>
                </div>
              </div>

              <img
                className="placeholder-image-43"
                alt="Placeholder image"
                src="/img/placeholder-image-31.png"
              />
            </div>
          </div>
        </div>

        <div
          className="container-wrapper-14"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-65">
            <div className="div-34">
              <div className="content-115">
                <div className="content-115">
                  <p className="heading-38">
                    Unlock the Potential of AI Tailored to Your Business Needs
                  </p>

                  <p className="text-wrapper-82">
                    Imagine the transformative power of AI in your industry.
                    From agriculture to logistics, our custom solutions can
                    elevate your business.
                  </p>
                </div>

                <div className="list-13">
                  <div className="list-item-21">
                    <ManufacturingWrapper />
                    <p className="lorem-ipsum-dolor-12">
                      Custom solutions for every industry and challenge.
                    </p>
                  </div>

                  <div className="list-item-21">
                    <Apps />
                    <p className="lorem-ipsum-dolor-12">
                      Innovative AI applications that drive real results.
                    </p>
                  </div>

                  <div className="list-item-21">
                    <PartnerExchange2 className="partner-exchange-3" />
                    <p className="lorem-ipsum-dolor-12">
                      Partner with us to turn ideas into reality.
                    </p>
                  </div>
                </div>
              </div>

              <img
                className="placeholder-image-43"
                alt="Placeholder image"
                src="/img/placeholder-image-29.png"
              />
            </div>
          </div>
        </div>

        <div
          className="container-wrapper-13"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-66">
            <div className="content-116">
              <div className="content-117">
                <p className="heading-37">Ready to Build the Future?</p>

                <p className="text-38">
                  Let’s collaborate and make your vision a reality. Contact us
                  to explore partnership opportunities.
                </p>
              </div>

              <div className="actions-33">
                <Button
                  alternate={false}
                  className="button-69"
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
          className="container-wrapper-14"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-65">
            <div className="div-34">
              <div className="div-35">
                <div className="content-115">
                  <div className="heading-40">Get in Touch</div>

                  <p className="text-wrapper-82">
                    We’re here to help you explore AI solutions tailored to your
                    needs.
                  </p>
                </div>
              </div>

              <div className="div-36">
                <div className="content-118">
                  <Mail3 className="icon-instance-node-12" />
                  <div className="contact-info-4">
                    <div className="heading-39">Email</div>

                    <div className="link-12">admin@aidreambuilder.tech</div>
                  </div>
                </div>

                <div className="content-118">
                  <Call3 className="icon-instance-node-12" />
                  <div className="contact-info-4">
                    <div className="heading-39">Phone</div>

                    <div className="link-13">+1 (239) 544-6990</div>
                  </div>
                </div>

                <div className="content-118">
                  <LocationOn className="icon-instance-node-12" />
                  <div className="contact-info-4">
                    <div className="heading-39">Worldwide</div>

                    <div className="text-wrapper-82">
                      Headquarters in Naples Florida
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img
              className="placeholder-image-44"
              alt="Placeholder image"
              src="/img/placeholder-image-30.png"
            />
          </div>
        </div>

        <div
          className="footer-15"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-65">
            <div className="content-119">
              <div className="div-37">
                <CompanyLogo alternate={false} className="company-logo-14" />
              </div>

              <div className="div-37">
                <Link className="text-wrapper-83" to="/contact-us-desktop">
                  Contact Us
                </Link>

                <Link className="text-wrapper-84" to="/about-us-desktop">
                  About Us
                </Link>

                <Link
                  className="text-wrapper-84"
                  to="/companies-u38-solutions-mobile"
                >
                  Companies &amp; Solutions
                </Link>
              </div>

              <a
                className="social-links-12"
                href="https://www.facebook.com/profile.php?id=61560854473620"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook2 className="icon-instance-node-12" />
              </a>
            </div>

            <div className="credits-15">
              <img
                className="divider-15"
                alt="Divider"
                src="/img/divider-2.svg"
              />

              <div className="row-37">
                <div className="footer-links-10">
                  <div className="text-wrapper-85">Terms of Service</div>
                </div>

                <p className="text-wrapper-86">
                  © 2023 AI Dream Builders. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
