import React from "react";
import { Link } from "react-router-dom";
import { Analytics } from "../../components/Analytics";
import { Button } from "../../components/Button";
import { CompanyLogo } from "../../components/CompanyLogo";
import { ManufacturingWrapper } from "../../components/ManufacturingWrapper";
import { ProductivityWrapper } from "../../components/ProductivityWrapper";
import { Analytics2 } from "../../icons/Analytics2";
import { ChevronRight3 } from "../../icons/ChevronRight3";
import { Close } from "../../icons/Close";
import { Facebook2 } from "../../icons/Facebook2";
import { Hardware } from "../../icons/Hardware";
import { PartnerExchange2 } from "../../icons/PartnerExchange2";
import "./style.css";

export const FrameScreen = () => {
  return (
    <div className="frame-screen">
      <div className="home-mobile-2">
        <div
          className="navbar-6"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="content-67">
            <div className="div-10">
              <CompanyLogo alternate={false} className="company-logo-6" />
            </div>

            <div className="icon-3">
              <Close className="icon-instance-node" />
            </div>
          </div>

          <div className="row-19">
            <div className="column-18">
              <a
                className="link-text-wrapper-12"
                href="aidreambuilders.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="link-text-12">Home</div>
              </a>

              <Link className="link-text-wrapper-12" to="/about-us-desktop">
                <div className="link-text-12">About Us</div>
              </Link>

              <Link
                className="link-text-wrapper-12"
                to="/companies-u38-solutions-mobile"
              >
                <div className="link-text-12">Companies &amp; Solutions</div>
              </Link>
            </div>
          </div>

          <div className="actions-16">
            <Button
              alternate={false}
              className="button-29"
              iconPosition="no-icon"
              small
              style="secondary"
              text="Contact Us"
              to="/contact-us-desktop"
            />
            <Button
              alternate={false}
              className="button-30"
              iconPosition="no-icon"
              small
              style="primary"
              text="Showcase"
              to="/showcase-desktop"
            />
          </div>
        </div>

        <div
          className="container-wrapper-2"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-38">
            <div className="content-68">
              <div className="column-19">
                <p className="medium-length-hero-2">
                  Transforming Ideas into Reality with AI
                </p>
              </div>

              <div className="div-11">
                <p className="lorem-ipsum-dolor-6">
                  At AI Dream Builders, we harness the power of artificial
                  intelligence to create innovative solutions tailored to your
                  needs. Join us on a journey to shape the future together.
                </p>

                <div className="actions-17">
                  <Button
                    alternate={false}
                    className="button-31"
                    iconPosition="no-icon"
                    small={false}
                    style="primary"
                    text="Showcase"
                    to="/showcase-desktop"
                  />
                  <Button
                    alternate={false}
                    className="button-32"
                    iconPosition="no-icon"
                    small={false}
                    style="secondary"
                    text="Contact us"
                    to="/contact-us-desktop"
                  />
                </div>
              </div>
            </div>

            <div className="placeholder-lightbox-2" />
          </div>
        </div>

        <div
          className="container-wrapper-3"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-38">
            <div className="component-18">
              <div className="div-11">
                <div className="content-68">
                  <div className="section-title-13">
                    <div className="content-68">
                      <p className="heading-18">
                        Transforming Ideas into AI-Powered Solutions
                      </p>

                      <p className="text-26">
                        At AI Dream Builders, we harness the power of
                        cutting-edge AI technology to create innovative
                        solutions tailored to your needs. Our consulting
                        services empower businesses to thrive in a rapidly
                        evolving digital landscape.
                      </p>
                    </div>
                  </div>

                  <div className="list-7">
                    <div className="list-item-12">
                      <Analytics />
                      <p className="lorem-ipsum-dolor-7">
                        Advanced AI for Real-World Applications and Impact
                      </p>
                    </div>

                    <div className="list-item-12">
                      <ManufacturingWrapper />
                      <p className="lorem-ipsum-dolor-7">
                        Custom Solutions for Every Industry and Challenge
                      </p>
                    </div>

                    <div className="list-item-12">
                      <PartnerExchange2 className="partner-exchange" />
                      <p className="lorem-ipsum-dolor-7">
                        Partnering with You to Build the Future Together
                      </p>
                    </div>
                  </div>
                </div>

                <div className="div-10">
                  <Button
                    alternate={false}
                    className="button-33"
                    divClassName="button-34"
                    iconPosition="no-icon"
                    small={false}
                    style="secondary"
                    text="View Our Showcase"
                    to="/showcase-desktop"
                  />
                  <Button
                    alternate={false}
                    className="button-35"
                    icon={<ChevronRight3 className="icon-instance-node" />}
                    iconPosition="trailing"
                    small={false}
                    style="link"
                    text="Contact Us"
                    to="/contact-us-desktop"
                  />
                </div>
              </div>

              <img
                className="placeholder-image-22"
                alt="Placeholder image"
                src="/img/placeholder-image-1.png"
              />
            </div>
          </div>
        </div>

        <div
          className="container-wrapper-2"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-39">
            <div className="section-title-14">
              <div className="content-69">
                <p className="heading-19">
                  Transforming Ideas into Intelligent Solutions
                </p>

                <p className="text-27">
                  At AI Dream Builders, we specialize in harnessing the power of
                  artificial intelligence to create transformative solutions.
                  Our focus on computer vision, automation, and custom hardware
                  empowers businesses to thrive in a digital landscape.
                </p>
              </div>
            </div>

            <div className="content-70">
              <div className="div-12">
                <div className="content-69">
                  <Analytics2 className="icon-instance-node-2" />
                  <div className="content-71">
                    <div className="heading-20">Computer Vision Expertise</div>

                    <p className="text-27">
                      Unlock insights from real-time video analytics to enhance
                      decision-making and operational efficiency.
                    </p>
                  </div>
                </div>

                <div className="content-69">
                  <ProductivityWrapper />
                  <div className="content-71">
                    <div className="heading-20">AI Automation Solutions</div>

                    <p className="text-27">
                      Streamline workflows and boost productivity with our
                      advanced AI-powered automation tools.
                    </p>
                  </div>
                </div>
              </div>

              <div className="div-12">
                <div className="content-69">
                  <Hardware className="icon-instance-node-2" />
                  <div className="content-71">
                    <div className="heading-20">
                      Custom Hardware Development
                    </div>

                    <p className="text-27">
                      Tailored server infrastructure designed to meet your
                      unique operational needs and performance demands.
                    </p>
                  </div>
                </div>

                <div className="content-69">
                  <PartnerExchange2 className="icon-instance-node-2" />
                  <div className="content-71">
                    <div className="heading-20">Collaborative Partnerships</div>

                    <p className="text-27">
                      We work closely with clients to turn innovative ideas into
                      scalable, impactful solutions.
                    </p>
                  </div>
                </div>
              </div>

              <img
                className="placeholder-image-23"
                alt="Placeholder image"
                src="/img/placeholder-image-2.png"
              />
            </div>

            <div className="div-10">
              <Button
                alternate={false}
                className="button-33"
                divClassName="button-34"
                iconPosition="no-icon"
                small={false}
                style="secondary"
                text="View Our Showcase"
                to="/showcase-desktop"
              />
              <Button
                alternate={false}
                className="button-35"
                icon={<ChevronRight3 className="icon-instance-node" />}
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
          className="container-wrapper-3"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-39">
            <div className="content-72">
              <div className="content-69">
                <p className="heading-19">Start Your Journey with Us</p>

                <p className="text-27">
                  Unlock the potential of AI for your business. Contact us for a
                  personalized consultation today!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="footer-7"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-38">
            <div className="div-12">
              <div className="div-13">
                <CompanyLogo alternate={false} className="company-logo-6" />
              </div>

              <div className="div-13">
                <Link className="text-wrapper-33" to="/contact-us-desktop">
                  Contact Us
                </Link>

                <Link className="text-wrapper-34" to="/about-us-desktop">
                  About Us
                </Link>

                <Link
                  className="text-wrapper-34"
                  to="/companies-u38-solutions-mobile"
                >
                  Companies &amp; Solutions
                </Link>
              </div>

              <a
                className="social-links-4"
                href="https://www.facebook.com/profile.php?id=61560854473620"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook2 className="icon-instance-node" />
              </a>
            </div>

            <div className="credits-7">
              <img
                className="divider-7"
                alt="Divider"
                src="/img/divider-1.svg"
              />

              <div className="row-20">
                <div className="footer-links-6">
                  <div className="text-wrapper-35">Terms of Service</div>
                </div>

                <p className="text-wrapper-36">
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
