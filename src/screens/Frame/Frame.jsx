import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Call } from "../../components/Call";
import { CompanyLogo } from "../../components/CompanyLogo";
import { LocationOnWrapper } from "../../components/LocationOnWrapper";
import { Mail } from "../../components/Mail";
import { Facebook2 } from "../../icons/Facebook2";
import "./style.css";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="contact-desktop">
        <div className="header-wrapper">
          <header className="header-10">
            <div className="container-34">
              <div className="content-61">
                <CompanyLogo
                  alternate={false}
                  className="design-component-instance-node"
                />
                <div className="column-16">
                  <a
                    className="link-text-wrapper-11"
                    href="aidreambuilders.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="link-text-11">Home</div>
                  </a>

                  <Link className="link-text-wrapper-11" to="/about-us-desktop">
                    <div className="link-text-11">About Us</div>
                  </Link>

                  <Link
                    className="link-text-wrapper-11"
                    to="/companies-u38-solutions-mobile"
                  >
                    <div className="link-text-11">
                      Companies &amp; Solutions
                    </div>
                  </Link>
                </div>
              </div>

              <div className="actions-14">
                <Button
                  alternate={false}
                  className="contact-us-6"
                  iconPosition="no-icon"
                  small
                  style="secondary"
                  text="Contact Us"
                  to="/contact-us-desktop"
                />
                <Button
                  alternate={false}
                  className="button-28"
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

        <div className="header-11">
          <div className="container-35">
            <div className="component-16">
              <div className="text-wrapper-28">Connect with Us</div>

              <p className="text-wrapper-29">
                Ready to turn your vision into reality? Let&#39;s discuss your
                AI project today!
              </p>
            </div>
          </div>
        </div>

        <div className="CTA-6">
          <div className="container-36">
            <div className="component-17">
              <div className="column-17">
                <div className="content-62">
                  <p className="heading-15">
                    Let&#39;s Build Your Future Together
                  </p>

                  <p className="text-wrapper-29">
                    We&#39;re excited to help you turn your innovative ideas
                    into reality with our AI expertise.
                  </p>
                </div>

                <div className="actions-15">
                  <Button
                    alternate={false}
                    className="button-28"
                    iconPosition="no-icon"
                    small={false}
                    style="primary"
                    text="Showcase"
                    to="/showcase-desktop"
                  />
                </div>
              </div>

              <img
                className="placeholder-image-21"
                alt="Placeholder image"
                src="/img/placeholder-image.png"
              />
            </div>
          </div>
        </div>

        <div className="contact-3">
          <div className="container-37">
            <div className="section-title-12">
              <div className="tagline-wrapper-6">
                <div className="tagline-5">Connect</div>
              </div>

              <div className="div-9">
                <div className="heading-16">Get in Touch</div>

                <p className="text-24">
                  We&#39;re here to help with your AI needs.
                </p>
              </div>
            </div>

            <div className="content-63">
              <div className="row-17">
                <div className="content-64">
                  <Mail />
                  <div className="div-9">
                    <div className="content-65">
                      <div className="heading-17">Email</div>

                      <p className="text-25">
                        Reach us anytime at admin@aidreambuilder.tech.
                      </p>
                    </div>

                    <div className="link-6">admin@aidreambuilder.tech</div>
                  </div>
                </div>

                <div className="content-64">
                  <Call />
                  <div className="div-9">
                    <div className="content-65">
                      <div className="heading-17">Phone</div>

                      <p className="text-25">
                        Call us at 239-544-6990 for inquiries.
                      </p>
                    </div>

                    <div className="link-7">+1 (239) 544-6990</div>
                  </div>
                </div>

                <div className="content-64">
                  <LocationOnWrapper />
                  <div className="div-9">
                    <div className="content-65">
                      <div className="heading-17">Worldwide</div>

                      <div className="text-25">Operating around the world</div>
                    </div>

                    <div className="link-7">
                      Headquartered in Naples, Florida
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-6">
          <div className="container-36">
            <div className="content-66">
              <div className="logo-4">
                <CompanyLogo
                  alternate={false}
                  className="design-component-instance-node"
                />
              </div>

              <div className="links-6">
                <Link className="text-wrapper-30" to="/contact-us-desktop">
                  Contact Us
                </Link>

                <Link className="text-wrapper-30" to="/about-us-desktop">
                  About Us
                </Link>

                <Link
                  className="text-wrapper-30"
                  to="/companies-u38-solutions-mobile"
                >
                  Companies &amp; Solutions
                </Link>
              </div>

              <div className="social-links-3">
                <Facebook2 className="facebook" />
              </div>
            </div>

            <div className="credits-6">
              <img className="divider-6" alt="Divider" src="/img/divider.svg" />

              <div className="row-18">
                <p className="text-wrapper-31">
                  © 2023 AI Dream Builders. All rights reserved.
                </p>

                <div className="text-wrapper-32">Terms of Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
