import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { CompanyLogo } from "../../components/CompanyLogo";
import { Close } from "../../icons/Close";
import { Facebook2 } from "../../icons/Facebook2";
import "./style.css";

export const Screen15 = () => {
  return (
    <div className="screen-15">
      <div className="about-us-mobile-2">
        <div
          className="navbar-10"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="content-90">
            <div className="content-91">
              <CompanyLogo alternate={false} className="company-logo-10" />
            </div>

            <div className="icon-5">
              <Close className="icon-instance-node-7" />
            </div>
          </div>

          <div className="row-25">
            <div className="column-27">
              <a
                className="link-text-wrapper-16"
                href="aidreambuilders.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="link-text-16">Home</div>
              </a>

              <Link className="link-text-wrapper-16" to="/about-us-desktop">
                <div className="link-text-16">About Us</div>
              </Link>

              <Link
                className="link-text-wrapper-16"
                to="/companies-u38-solutions-mobile"
              >
                <div className="link-text-16">Companies &amp; Solutions</div>
              </Link>
            </div>
          </div>

          <div className="actions-24">
            <Button
              alternate={false}
              className="button-50"
              iconPosition="no-icon"
              small
              style="secondary"
              text="Contact Us"
              to="/contact-us-desktop"
            />
            <Button
              alternate={false}
              className="button-51"
              iconPosition="no-icon"
              small
              style="primary"
              text="Showcase"
              to="/showcase-desktop"
            />
          </div>
        </div>

        <div
          className="container-wrapper-8"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-52">
            <div className="component-24">
              <div className="section-title-20">
                <div className="tagline-wrapper-10">
                  <div className="tagline-9">Innovate</div>
                </div>

                <div className="content-92">
                  <div className="text-wrapper-52">Empowering Your Vision</div>

                  <p className="text-wrapper-53">
                    At AI Dream Builders, we transform ambitious ideas into
                    impactful solutions through advanced AI technology.
                  </p>
                </div>
              </div>

              <div className="actions-25">
                <Button
                  alternate={false}
                  className="button-52"
                  iconPosition="no-icon"
                  small={false}
                  style="primary"
                  text="View Our Showcase"
                  to="/showcase-desktop"
                />
                <Button
                  alternate={false}
                  className="button-53"
                  iconPosition="no-icon"
                  small={false}
                  style="secondary"
                  text="Join Us"
                  to="/contact-us-desktop"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="layout-14"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-52">
            <div className="component-25">
              <div className="div-20">
                <div className="section-title-21">
                  <div className="tagline-wrapper-11">
                    <div className="tagline-10">Innovate</div>
                  </div>

                  <div className="content-93">
                    <p className="heading-28">
                      Empowering Ideas Through Advanced AI Solutions
                    </p>

                    <p className="text-32">
                      Founded in 2023 by Zechariah Myrick, AI Dream Builders is
                      dedicated to transforming ambitious ideas into impactful
                      realities. Our mission is to harness the power of
                      artificial intelligence to create innovative solutions
                      that drive success for our partners.
                    </p>
                  </div>
                </div>
              </div>

              <img
                className="placeholder-image-30"
                alt="Placeholder image"
                src="/img/placeholder-image-9.png"
              />
            </div>
          </div>
        </div>

        <div
          className="container-wrapper-8"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-53">
            <div className="component-25">
              <div className="div-20">
                <div className="section-title-21">
                  <div className="tagline-wrapper-11">
                    <div className="tagline-10">Innovate</div>
                  </div>

                  <div className="content-93">
                    <p className="heading-28">Unlock the Power of AI with Us</p>

                    <p className="text-32">
                      Partnering with AI Dream Builders means accessing the
                      latest advancements in artificial intelligence and custom
                      technology solutions. Our collaborative approach ensures
                      that your unique vision is transformed into a scalable
                      reality.
                    </p>
                  </div>
                </div>
              </div>

              <img
                className="placeholder-image-31"
                alt="Placeholder image"
                src="/img/placeholder-image-10.png"
              />
            </div>
          </div>
        </div>

        <div
          className="CTA-8"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-53">
            <div className="component-25">
              <div className="div-20">
                <div className="content-93">
                  <p className="heading-28">Let’s Build the Future Together</p>

                  <p className="text-32">
                    Contact us today to explore how we can turn your ideas into
                    reality with AI.
                  </p>
                </div>

                <div className="actions-25">
                  <Button
                    alternate={false}
                    className="button-52"
                    iconPosition="no-icon"
                    small={false}
                    style="primary"
                    text="View Our Showcase"
                    to="/showcase-desktop"
                  />
                  <Button
                    alternate={false}
                    className="button-53"
                    iconPosition="no-icon"
                    small={false}
                    style="secondary"
                    text="Contact"
                    to="/contact-us-desktop"
                  />
                </div>
              </div>

              <img
                className="placeholder-image-32"
                alt="Placeholder image"
                src="/img/placeholder-image-11.png"
              />
            </div>
          </div>
        </div>

        <div
          className="footer-11"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-53">
            <div className="content-94">
              <div className="div-21">
                <CompanyLogo alternate={false} className="company-logo-10" />
              </div>

              <div className="div-21">
                <Link className="text-wrapper-54" to="/contact-us-desktop">
                  Contact Us
                </Link>

                <Link className="text-wrapper-55" to="/about-us-desktop">
                  About Us
                </Link>

                <Link
                  className="text-wrapper-55"
                  to="/companies-u38-solutions-mobile"
                >
                  Companies &amp; Solutions
                </Link>
              </div>

              <a
                className="social-links-8"
                href="https://www.facebook.com/profile.php?id=61560854473620"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook2 className="icon-instance-node-7" />
              </a>
            </div>

            <div className="credits-11">
              <img
                className="divider-11"
                alt="Divider"
                src="/img/divider-2.svg"
              />

              <div className="row-26">
                <div className="footer-links-8">
                  <div className="text-wrapper-56">Terms of Service</div>
                </div>

                <p className="text-wrapper-57">
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
