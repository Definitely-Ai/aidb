import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { CompanyLogo } from "../../components/CompanyLogo";
import { ChevronRight3 } from "../../icons/ChevronRight3";
import { Facebook2 } from "../../icons/Facebook2";
import "./style.css";

export const Screen14 = () => {
  return (
    <div className="screen-14">
      <div className="about-us-desktop-2">
        <div className="navbar-9">
          <header className="header-14">
            <div className="container-48">
              <div className="div-18">
                <CompanyLogo alternate={false} className="company-logo-9" />
                <div className="column-26">
                  <a
                    className="link-text-wrapper-15"
                    href="aidreambuilders.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="link-text-15">Home</div>
                  </a>

                  <Link className="link-text-wrapper-15" to="/about-us-desktop">
                    <div className="link-text-15">About Us</div>
                  </Link>

                  <Link
                    className="link-text-wrapper-15"
                    to="/companies-u38-solutions-mobile"
                  >
                    <div className="link-text-15">
                      Companies &amp; Solutions
                    </div>
                  </Link>
                </div>
              </div>

              <div className="actions-22">
                <Button
                  alternate={false}
                  className="contact-us-8"
                  iconPosition="no-icon"
                  small
                  style="secondary"
                  text="Contact Us"
                  to="/contact-us-desktop"
                />
                <Button
                  alternate={false}
                  className="button-44"
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

        <div className="container-wrapper-6">
          <div className="container-49">
            <div className="component-21">
              <div className="section-title-18">
                <div className="tagline-wrapper-8">
                  <div className="tagline-7">Innovate</div>
                </div>

                <div className="content-87">
                  <div className="text-wrapper-47">Empowering Your Vision</div>

                  <p className="text-wrapper-48">
                    At AI Dream Builders, we transform ambitious ideas into
                    impactful solutions through advanced AI technology.
                  </p>
                </div>
              </div>

              <div className="actions-23">
                <Button
                  alternate={false}
                  className="button-44"
                  iconPosition="no-icon"
                  small={false}
                  style="primary"
                  text="View Our Showcase"
                />
                <Button
                  alternate={false}
                  className="button-45"
                  iconPosition="no-icon"
                  small={false}
                  style="secondary"
                  text="Join Us"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container-wrapper-7">
          <div className="container-50">
            <div className="component-22">
              <div className="div-19">
                <div className="section-title-19">
                  <div className="tagline-wrapper-9">
                    <div className="tagline-8">Innovate</div>
                  </div>

                  <div className="content-88">
                    <p className="heading-27">
                      Empowering Ideas Through Advanced AI Solutions
                    </p>

                    <p className="text-31">
                      Founded in 2023 by Zechariah Myrick, AI Dream Builders is
                      dedicated to transforming ambitious ideas into impactful
                      realities. Our mission is to harness the power of
                      artificial intelligence to create innovative solutions
                      that drive success for our partners.
                    </p>
                  </div>
                </div>

                <div className="div-18">
                  <Button
                    alternate={false}
                    className="button-46"
                    divClassName="button-47"
                    iconPosition="no-icon"
                    small={false}
                    style="secondary"
                    text="View Our Showcase"
                  />
                  <Button
                    alternate={false}
                    className="button-48"
                    icon={<ChevronRight3 className="icon-instance-node-6" />}
                    iconPosition="trailing"
                    small={false}
                    style="link"
                    text="Contact"
                  />
                </div>
              </div>

              <img
                className="placeholder-image-27"
                alt="Placeholder image"
                src="/img/placeholder-image-6.png"
              />
            </div>
          </div>
        </div>

        <div className="container-wrapper-6">
          <div className="container-50">
            <div className="component-23">
              <img
                className="placeholder-image-28"
                alt="Placeholder image"
                src="/img/placeholder-image-7.png"
              />

              <div className="div-19">
                <div className="section-title-19">
                  <div className="tagline-wrapper-9">
                    <div className="tagline-8">Innovate</div>
                  </div>

                  <div className="content-88">
                    <p className="heading-27">Unlock the Power of AI with Us</p>

                    <p className="text-31">
                      Partnering with AI Dream Builders means accessing the
                      latest advancements in artificial intelligence and custom
                      technology solutions. Our collaborative approach ensures
                      that your unique vision is transformed into a scalable
                      reality.
                    </p>
                  </div>
                </div>

                <div className="div-18">
                  <Button
                    alternate={false}
                    className="button-49"
                    iconPosition="no-icon"
                    small={false}
                    style="secondary"
                    text="View Our Showcase"
                  />
                  <Button
                    alternate={false}
                    className="button-48"
                    icon={<ChevronRight3 className="icon-instance-node-6" />}
                    iconPosition="trailing"
                    small={false}
                    style="link"
                    text="Contact"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-wrapper-7">
          <div className="container-51">
            <div className="component-23">
              <div className="div-19">
                <div className="content-88">
                  <p className="heading-27">Let’s Build the Future Together</p>

                  <p className="text-31">
                    Contact us today to explore how we can turn your ideas into
                    reality with AI.
                  </p>
                </div>

                <div className="actions-23">
                  <Button
                    alternate={false}
                    className="button-44"
                    iconPosition="no-icon"
                    small={false}
                    style="primary"
                    text="View Our Showcase"
                  />
                  <Button
                    alternate={false}
                    className="button-45"
                    iconPosition="no-icon"
                    small={false}
                    style="secondary"
                    text="Contact"
                  />
                </div>
              </div>

              <img
                className="placeholder-image-29"
                alt="Placeholder image"
                src="/img/placeholder-image-8.png"
              />
            </div>
          </div>
        </div>

        <div className="footer-10">
          <div className="container-51">
            <div className="content-89">
              <div className="logo-6">
                <CompanyLogo alternate={false} className="company-logo-9" />
              </div>

              <div className="links-8">
                <Link className="text-wrapper-49" to="/contact-us-desktop">
                  Contact Us
                </Link>

                <Link className="text-wrapper-49" to="/about-us-desktop">
                  About Us
                </Link>

                <Link
                  className="text-wrapper-49"
                  to="/companies-u38-solutions-mobile"
                >
                  Companies &amp; Solutions
                </Link>
              </div>

              <div className="social-links-7">
                <Facebook2 className="icon-instance-node-6" />
              </div>
            </div>

            <div className="credits-10">
              <img
                className="divider-10"
                alt="Divider"
                src="/img/divider-4.svg"
              />

              <div className="row-24">
                <p className="text-wrapper-50">
                  © 2023 AI Dream Builders. All rights reserved.
                </p>

                <div className="text-wrapper-51">Terms of Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
