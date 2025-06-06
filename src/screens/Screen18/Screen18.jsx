import React from "react";
import { Link } from "react-router-dom";
import { ActionKey } from "../../components/ActionKey";
import { Apps } from "../../components/Apps";
import { Button } from "../../components/Button";
import { CompanyLogo } from "../../components/CompanyLogo";
import { ManufacturingWrapper } from "../../components/ManufacturingWrapper";
import { Call3 } from "../../icons/Call3";
import { Enterprise1 } from "../../icons/Enterprise1";
import { Facebook2 } from "../../icons/Facebook2";
import { LocationOn } from "../../icons/LocationOn";
import { Mail3 } from "../../icons/Mail3";
import { PartnerExchange2 } from "../../icons/PartnerExchange2";
import "./style.css";

export const Screen18 = () => {
  return (
    <div className="screen-18">
      <div className="showcase-desktop-2">
        <div className="navbar-13">
          <header className="header-18">
            <div className="container-60">
              <div className="content-103">
                <CompanyLogo alternate={false} className="company-logo-13" />
                <div className="column-30">
                  <Link
                    className="link-text-wrapper-19"
                    to="/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="link-text-19">Home</div>
                  </Link>

                  <Link className="link-text-wrapper-19" to="/about-us-desktop">
                    <div className="link-text-19">About Us</div>
                  </Link>

                  <Link
                    className="link-text-wrapper-19"
                    to="/companies-u38-solutions-mobile"
                  >
                    <div className="link-text-19">
                      Companies &amp; Solutions
                    </div>
                  </Link>
                </div>
              </div>

              <div className="actions-30">
                <Button
                  alternate={false}
                  className="contact-us-10"
                  iconPosition="no-icon"
                  small
                  style="secondary"
                  text="Contact Us"
                  to="/contact-us-desktop"
                />
                <Button
                  alternate={false}
                  className="button-66"
                  iconPosition="no-icon"
                  small
                  style="primary"
                  text="Showcase"
                  to="/showcase-desktop"
                />
              </div>
            </div>
          </header>
        </div>

        <div className="header-19">
          <div className="container-61">
            <div className="component-31">
              <div className="text-wrapper-75">Explore AI Possibilities</div>

              <p className="text-wrapper-76">
                Discover cutting-edge AI solutions designed to inspire,
                innovative ideas, and empower your business.
              </p>
            </div>
          </div>
        </div>

        <div className="container-wrapper-11">
          <div className="container-62">
            <div className="component-32">
              <div className="content-104">
                <div className="content-105">
                  <div className="div-wrapper-3">
                    <div className="content-106">
                      <p className="heading-33">
                        Unleash the Power of AI Innovation
                      </p>

                      <p className="text-35">
                        Experience the transformative potential of AI through
                        our innovative solutions. From enhancing operational
                        efficiency to unlocking new insights, see how we can
                        elevate your business.
                      </p>
                    </div>
                  </div>

                  <div className="div-wrapper-3">
                    <div className="row-33">
                      <div className="div-33">
                        <LinkctionKey />
                        <div className="text-wrapper-77">AI in Action</div>

                        <p className="text-36">
                          Explore groundbreaking projects that redefine
                          possibilities across various industries.
                        </p>
                      </div>

                      <div className="div-33">
                        <Enterprise1 className="enterprise" color="black" />
                        <div className="text-wrapper-77">Real-World Impact</div>

                        <p className="text-36">
                          Discover how AI solutions drive measurable results and
                          enhance business performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="placeholder-image-40"
                alt="Placeholder image"
                src="/img/placeholder-image-24.png"
              />
            </div>
          </div>
        </div>

        <div className="container-wrapper-12">
          <div className="container-62">
            <div className="component-32">
              <img
                className="placeholder-image-41"
                alt="Placeholder image"
                src="/img/placeholder-image-25.png"
              />

              <div className="content-104">
                <div className="content-106">
                  <p className="heading-34">
                    Transform Your Operations with Advanced AI Solutions
                    Tailored for You
                  </p>

                  <p className="text-35">
                    Explore our innovative AI technologies that enhance
                    efficiency and drive growth. From real-time monitoring to
                    insightful data analysis, we empower your business to
                    thrive.
                  </p>
                </div>

                <div className="div-wrapper-3">
                  <div className="row-33">
                    <div className="div-33">
                      <div className="heading-35">Vehicle Detection</div>

                      <p className="text-36">
                        Instantly identify and track vehicles and people for
                        enhanced security and logistics.
                      </p>
                    </div>

                    <div className="div-33">
                      <div className="heading-35">Data Insights</div>

                      <p className="text-36">
                        Transform raw data into actionable insights for smarter
                        business decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-wrapper-11">
          <div className="container-62">
            <div className="component-32">
              <div className="content-104">
                <div className="content-106">
                  <p className="heading-34">
                    Unlock the Potential of AI Tailored to Your Business Needs
                  </p>

                  <p className="text-35">
                    Imagine the transformative power of AI in your industry.
                    From agriculture to logistics, our custom solutions can
                    elevate your business.
                  </p>
                </div>

                <div className="list-12">
                  <div className="list-item-18">
                    <ManufacturingWrapper />
                    <p className="lorem-ipsum-dolor-11">
                      Custom solutions for every industry and challenge.
                    </p>
                  </div>

                  <div className="list-item-18">
                    <Linkpps />
                    <p className="lorem-ipsum-dolor-11">
                      Innovative AI applications that drive real results.
                    </p>
                  </div>

                  <div className="list-item-18">
                    <PartnerExchange2 className="partner-exchange-5" />
                    <p className="lorem-ipsum-dolor-11">
                      Partner with us to turn ideas into reality.
                    </p>
                  </div>
                </div>
              </div>

              <img
                className="placeholder-image-40"
                alt="Placeholder image"
                src="/img/placeholder-image-26.png"
              />
            </div>
          </div>
        </div>

        <div className="container-wrapper-12">
          <div className="container-63">
            <div className="content-107">
              <div className="content-108">
                <p className="heading-36">Ready to Build the Future?</p>

                <p className="text-37">
                  Let’s collaborate and make your vision a reality. Contact us
                  to explore partnership opportunities.
                </p>
              </div>

              <div className="actions-31">
                <Button
                  alternate={false}
                  className="button-66"
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

        <div className="container-wrapper-11">
          <div className="container-64">
            <div className="content-109">
              <div className="div-33">
                <div className="content-106">
                  <div className="heading-33">Get in Touch</div>

                  <p className="text-35">
                    We’re here to help you explore AI solutions tailored to your
                    needs.
                  </p>
                </div>
              </div>

              <div className="row-34">
                <div className="content-110">
                  <Mail3 className="icon-instance-node-11" />
                  <div className="contact-info-3">
                    <div className="heading-35">Email</div>

                    <div className="link-10">admin@aidreambuilder.tech</div>
                  </div>
                </div>

                <div className="content-110">
                  <Call3 className="icon-instance-node-11" />
                  <div className="contact-info-3">
                    <div className="heading-35">Phone</div>

                    <div className="link-11">+1 (239) 544-6990</div>
                  </div>
                </div>

                <div className="content-110">
                  <LocationOn className="icon-instance-node-11" />
                  <div className="contact-info-3">
                    <div className="heading-35">Worldwide</div>

                    <div className="text-36">
                      Headquarters in Naples Florida
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <img
              className="placeholder-image-42"
              alt="Placeholder image"
              src="/img/placeholder-image-27.png"
            />
          </div>
        </div>

        <div className="footer-14">
          <div className="container-64">
            <div className="content-111">
              <div className="logo-7">
                <CompanyLogo alternate={false} className="company-logo-13" />
              </div>

              <div className="links-10">
                <Link className="text-wrapper-78" to="/contact-us-desktop">
                  Contact Us
                </Link>

                <Link className="text-wrapper-78" to="/about-us-desktop">
                  About Us
                </Link>

                <Link
                  className="text-wrapper-78"
                  to="/companies-u38-solutions-mobile"
                >
                  Companies &amp; Solutions
                </Link>
              </div>

              <div className="social-links-11">
                <Facebook2 className="icon-instance-node-11" />
              </div>
            </div>

            <div className="credits-14">
              <img
                className="divider-14"
                alt="Divider"
                src="/img/divider.svg"
              />

              <div className="row-35">
                <p className="text-wrapper-79">
                  © 2023 AI Dream Builders. All rights reserved.
                </p>

                <div className="text-wrapper-80">Terms of Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

