import React from "react";
import { Link } from "react-router-dom";
import { Analytics } from "../../components/Analytics";
import { Button } from "../../components/Button";
import { CompanyLogo } from "../../components/CompanyLogo";
import { ManufacturingWrapper } from "../../components/ManufacturingWrapper";
import { ProductivityWrapper } from "../../components/ProductivityWrapper";
import { Analytics2 } from "../../icons/Analytics2";
import { ChevronRight3 } from "../../icons/ChevronRight3";
import { Facebook2 } from "../../icons/Facebook2";
import { Hardware } from "../../icons/Hardware";
import { PartnerExchange2 } from "../../icons/PartnerExchange2";
import "./style.css";

export const DivWrapper = () => {
  return (
    <div className="div-wrapper">
      <div className="home-desktop">
        <div className="navbar-8">
          <header className="header-12">
            <div className="container-42">
              <div className="div-17">
                <CompanyLogo alternate={false} className="company-logo-8" />
                <div className="column-22">
                  <a
                    className="link-text-wrapper-14"
                    href="aidreambuilders.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="link-text-14">Home</div>
                  </a>

                  <Link className="link-text-wrapper-14" to="/about-us-desktop">
                    <div className="link-text-14">About Us</div>
                  </Link>

                  <Link
                    className="link-text-wrapper-14"
                    to="/companies-u38-solutions-mobile"
                  >
                    <div className="link-text-14">
                      Companies &amp; Solutions
                    </div>
                  </Link>
                </div>
              </div>

              <div className="actions-20">
                <Button
                  alternate={false}
                  className="contact-us-7"
                  iconPosition="no-icon"
                  small
                  style="secondary"
                  text="Contact Us"
                  to="/contact-us-desktop"
                />
                <Button
                  alternate={false}
                  className="button-39"
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

        <div className="header-13">
          <div className="container-43">
            <div className="content-78">
              <div className="column-23">
                <p className="medium-length-hero-3">
                  Transforming Ideas into Reality with AI
                </p>
              </div>

              <div className="column-24">
                <p className="text-wrapper-43">
                  At AI Dream Builders, we harness the power of artificial
                  intelligence to create innovative solutions tailored to your
                  needs. Join us on a journey to shape the future together.
                </p>

                <div className="actions-21">
                  <Button
                    alternate={false}
                    className="button-39"
                    iconPosition="no-icon"
                    small={false}
                    style="primary"
                    text="Showcase"
                    to="/showcase-desktop"
                  />
                  <Button
                    alternate={false}
                    className="button-40"
                    iconPosition="no-icon"
                    small={false}
                    style="secondary"
                    text="Contact us"
                    to="/contact-us-desktop"
                  />
                </div>
              </div>
            </div>

            <div className="placeholder-lightbox-3" />
          </div>
        </div>

        <div className="container-wrapper-5">
          <div className="container-44">
            <div className="component-20">
              <div className="content-79">
                <div className="content-80">
                  <div className="section-title-16">
                    <div className="content-81">
                      <p className="heading-24">
                        Transforming Ideas into AI-Powered Solutions
                      </p>

                      <p className="text-wrapper-43">
                        At AI Dream Builders, we harness the power of
                        cutting-edge AI technology to create innovative
                        solutions tailored to your needs. Our consulting
                        services empower businesses to thrive in a rapidly
                        evolving digital landscape.
                      </p>
                    </div>
                  </div>

                  <div className="list-8">
                    <div className="list-item-13">
                      <Analytics />
                      <p className="lorem-ipsum-dolor-8">
                        Advanced AI for Real-World Applications and Impact
                      </p>
                    </div>

                    <div className="list-item-13">
                      <ManufacturingWrapper />
                      <p className="lorem-ipsum-dolor-8">
                        Custom Solutions for Every Industry and Challenge
                      </p>
                    </div>

                    <div className="list-item-13">
                      <PartnerExchange2 className="partner-exchange-2" />
                      <p className="lorem-ipsum-dolor-8">
                        Partnering with You to Build the Future Together
                      </p>
                    </div>
                  </div>
                </div>

                <div className="div-17">
                  <Button
                    alternate={false}
                    className="button-41"
                    divClassName="button-42"
                    iconPosition="no-icon"
                    small={false}
                    style="secondary"
                    text="View Our Showcase"
                    to="/showcase-desktop"
                  />
                  <Button
                    alternate={false}
                    className="button-43"
                    icon={<ChevronRight3 className="icon-instance-node-4" />}
                    iconPosition="trailing"
                    small={false}
                    style="link"
                    text="Contact Us"
                    to="/contact-us-desktop"
                  />
                </div>
              </div>

              <img
                className="placeholder-image-25"
                alt="Placeholder image"
                src="/img/placeholder-image-4.png"
              />
            </div>
          </div>
        </div>

        <div className="layout-13">
          <div className="container-45">
            <div className="section-title-17">
              <div className="content-82">
                <p className="heading-25">
                  Transforming Ideas into Intelligent Solutions
                </p>

                <p className="text-29">
                  At AI Dream Builders, we specialize in harnessing the power of
                  artificial intelligence to create transformative solutions.
                  Our focus on computer vision, automation, and custom hardware
                  empowers businesses to thrive in a digital landscape.
                </p>
              </div>
            </div>

            <div className="content-83">
              <div className="column-25">
                <div className="content-82">
                  <Analytics2 className="icon-instance-node-5" />
                  <div className="content-84">
                    <div className="heading-26">Computer Vision Expertise</div>

                    <p className="text-30">
                      Unlock insights from real-time video analytics to enhance
                      decision-making and operational efficiency.
                    </p>
                  </div>
                </div>

                <div className="content-82">
                  <ProductivityWrapper />
                  <div className="content-84">
                    <div className="heading-26">AI Automation Solutions</div>

                    <p className="text-30">
                      Streamline workflows and boost productivity with our
                      advanced AI-powered automation tools.
                    </p>
                  </div>
                </div>
              </div>

              <img
                className="placeholder-image-26"
                alt="Placeholder image"
                src="/img/placeholder-image-5.png"
              />

              <div className="column-25">
                <div className="content-82">
                  <Hardware className="icon-instance-node-5" />
                  <div className="content-84">
                    <div className="heading-26">
                      Custom Hardware Development
                    </div>

                    <p className="text-30">
                      Tailored server infrastructure designed to meet your
                      unique operational needs and performance demands.
                    </p>
                  </div>
                </div>

                <div className="content-82">
                  <PartnerExchange2 className="icon-instance-node-5" />
                  <div className="content-84">
                    <div className="heading-26">Collaborative Partnerships</div>

                    <p className="text-30">
                      We work closely with clients to turn innovative ideas into
                      scalable, impactful solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="div-17">
              <Button
                alternate={false}
                className="button-41"
                divClassName="button-42"
                iconPosition="no-icon"
                small={false}
                style="secondary"
                text="View Our Showcase"
                to="/showcase-desktop"
              />
              <Button
                alternate={false}
                className="button-43"
                icon={<ChevronRight3 className="icon-instance-node-4" />}
                iconPosition="trailing"
                small={false}
                style="link"
                text="Contact Us"
                to="/contact-us-desktop"
              />
            </div>
          </div>
        </div>

        <div className="container-wrapper-5">
          <div className="container-46">
            <div className="content-85">
              <div className="content-82">
                <p className="heading-25">Start Your Journey with Us</p>

                <p className="text-29">
                  Unlock the potential of AI for your business. Contact us for a
                  personalized consultation today!
                </p>
              </div>

              <div className="actions-21">
                <Button
                  alternate={false}
                  className="button-39"
                  iconPosition="no-icon"
                  small={false}
                  style="primary"
                  text="Contact"
                  to="/contact-us-desktop"
                />
                <Button
                  alternate={false}
                  className="button-40"
                  iconPosition="no-icon"
                  small={false}
                  style="secondary"
                  text="Showcase"
                  to="/showcase-desktop"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-9">
          <div className="container-47">
            <div className="content-86">
              <div className="logo-5">
                <CompanyLogo alternate={false} className="company-logo-8" />
              </div>

              <div className="links-7">
                <Link className="text-wrapper-44" to="/contact-us-desktop">
                  Contact Us
                </Link>

                <Link className="text-wrapper-44" to="/about-us-desktop">
                  About Us
                </Link>

                <Link
                  className="text-wrapper-44"
                  to="/companies-u38-solutions-mobile"
                >
                  Companies &amp; Solutions
                </Link>
              </div>

              <div className="social-links-6">
                <Facebook2 className="icon-instance-node-4" />
              </div>
            </div>

            <div className="credits-9">
              <img className="divider-9" alt="Divider" src="/img/divider.svg" />

              <div className="row-23">
                <p className="text-wrapper-45">
                  © 2023 AI Dream Builders. All rights reserved.
                </p>

                <div className="text-wrapper-46">Terms of Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
