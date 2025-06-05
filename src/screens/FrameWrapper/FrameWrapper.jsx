import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Call } from "../../components/Call";
import { CompanyLogo } from "../../components/CompanyLogo";
import { LocationOnWrapper } from "../../components/LocationOnWrapper";
import { Mail } from "../../components/Mail";
import { Close } from "../../icons/Close";
import { Facebook2 } from "../../icons/Facebook2";
import "./style.css";

export const FrameWrapper = () => {
  return (
    <div className="frame-wrapper">
      <div className="contact-mobile-2">
        <div
          className="navbar-7"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="content-73">
            <div className="content-74">
              <CompanyLogo alternate={false} className="company-logo-7" />
            </div>

            <div className="icon-4">
              <Close className="icon-instance-node-3" />
            </div>
          </div>

          <div className="row-21">
            <div className="column-20">
              <a
                className="link-text-wrapper-13"
                href="aidreambuilders.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="link-text-13">Home</div>
              </a>

              <Link className="link-text-wrapper-13" to="/about-us-desktop">
                <div className="link-text-13">About Us</div>
              </Link>

              <Link
                className="link-text-wrapper-13"
                to="/companies-u38-solutions-mobile"
              >
                <div className="link-text-13">Companies &amp; Solutions</div>
              </Link>
            </div>
          </div>

          <div className="actions-18">
            <Button
              alternate={false}
              className="button-36"
              iconPosition="no-icon"
              small
              style="secondary"
              text="Contact Us"
              to="/contact-us-desktop"
            />
            <Button
              alternate={false}
              className="button-37"
              iconPosition="no-icon"
              small
              style="primary"
              text="Showcase"
              to="/showcase-desktop"
            />
          </div>
        </div>

        <div
          className="container-wrapper-4"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-40">
            <div className="component-19">
              <div className="text-wrapper-37">Connect with Us</div>

              <p className="text-wrapper-38">
                Ready to turn your vision into reality? Let&#39;s discuss your
                AI project today!
              </p>
            </div>
          </div>
        </div>

        <div
          className="CTA-7"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-40">
            <div className="div-14">
              <div className="column-21">
                <div className="content-75">
                  <p className="heading-21">
                    Let&#39;s Build Your Future Together
                  </p>

                  <p className="text-wrapper-38">
                    We&#39;re excited to help you turn your innovative ideas
                    into reality with our AI expertise.
                  </p>
                </div>

                <Link className="actions-19" to="/showcase-desktop">
                  <Button
                    alternate={false}
                    className="button-38"
                    iconPosition="no-icon"
                    small={false}
                    style="primary"
                    text="Showcase"
                  />
                </Link>
              </div>

              <img
                className="placeholder-image-24"
                alt="Placeholder image"
                src="/img/placeholder-image-3.png"
              />
            </div>
          </div>
        </div>

        <div
          className="container-wrapper-4"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-41">
            <div className="section-title-15">
              <div className="tagline-wrapper-7">
                <div className="tagline-6">Connect</div>
              </div>

              <div className="div-15">
                <div className="heading-22">Get in Touch</div>

                <p className="text-28">
                  We&#39;re here to help with your AI needs.
                </p>
              </div>
            </div>

            <div className="div-14">
              <div className="div-15">
                <Mail />
                <div className="div-15">
                  <div className="content-76">
                    <div className="heading-23">Email</div>

                    <p className="text-28">
                      Reach us anytime at admin@aidreambuilder.tech.
                    </p>
                  </div>

                  <div className="link-8">admin@aidreambuilder.tech</div>
                </div>
              </div>

              <div className="div-15">
                <Call />
                <div className="div-15">
                  <div className="content-76">
                    <div className="heading-23">Phone</div>

                    <p className="text-28">
                      Call us at 239-544-6990 for inquiries.
                    </p>
                  </div>

                  <div className="link-9">+1 (239) 544-6990</div>
                </div>
              </div>

              <div className="div-15">
                <LocationOnWrapper />
                <div className="div-15">
                  <div className="content-76">
                    <div className="heading-23">Worldwide</div>

                    <div className="text-28">Operating around the world</div>
                  </div>

                  <div className="link-9">Headquartered in Naples, Florida</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="footer-8"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-40">
            <div className="content-77">
              <div className="div-16">
                <CompanyLogo alternate={false} className="company-logo-7" />
              </div>

              <div className="div-16">
                <Link className="text-wrapper-39" to="/contact-us-desktop">
                  Contact Us
                </Link>

                <Link className="text-wrapper-40" to="/about-us-desktop">
                  About Us
                </Link>

                <Link
                  className="text-wrapper-40"
                  to="/companies-u38-solutions-mobile"
                >
                  Companies &amp; Solutions
                </Link>
              </div>

              <a
                className="social-links-5"
                href="https://www.facebook.com/profile.php?id=61560854473620"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook2 className="icon-instance-node-3" />
              </a>
            </div>

            <div className="credits-8">
              <img
                className="divider-8"
                alt="Divider"
                src="/img/divider-2.svg"
              />

              <div className="row-22">
                <div className="footer-links-7">
                  <div className="text-wrapper-41">Terms of Service</div>
                </div>

                <p className="text-wrapper-42">
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
