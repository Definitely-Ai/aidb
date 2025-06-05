import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { CompanyLogo } from "../../components/CompanyLogo";
import { Automation2 } from "../../icons/Automation2";
import { ChevronRight3 } from "../../icons/ChevronRight3";
import { Close } from "../../icons/Close";
import { ContentCut2 } from "../../icons/ContentCut2";
import { Facebook2 } from "../../icons/Facebook2";
import { Maximize } from "../../icons/Maximize";
import "./style.css";

export const Screen17 = () => {
  return (
    <div className="screen-17">
      <div className="companies-and-3">
        <div
          className="navbar-12"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="content-100">
            <div className="div-27">
              <CompanyLogo alternate={false} className="company-logo-12" />
            </div>

            <div className="icon-6">
              <Close className="icon-instance-node-9" />
            </div>
          </div>

          <div className="row-30">
            <div className="column-29">
              <a
                className="link-text-wrapper-18"
                href="aidreambuilders.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="link-text-18">Home</div>
              </a>

              <Link className="link-text-wrapper-18" to="/about-us-desktop">
                <div className="link-text-18">About Us</div>
              </Link>

              <Link
                className="link-text-wrapper-18"
                to="/companies-u38-solutions-mobile"
              >
                <div className="link-text-18">Companies &amp; Solutions</div>
              </Link>
            </div>
          </div>

          <div className="actions-28">
            <Button
              alternate={false}
              className="button-60"
              iconPosition="no-icon"
              small
              style="secondary"
              text="Contact Us"
              to="/contact-us-desktop"
            />
            <Button
              alternate={false}
              className="button-61"
              iconPosition="no-icon"
              small
              style="primary"
              text="Showcase"
              to="/showcase-desktop"
            />
          </div>
        </div>

        <div
          className="header-17"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-58">
            <div className="div-28">
              <div className="div-29">
                <div className="content-101">
                  <div className="text-wrapper-66">Transform Your Vision</div>

                  <p className="text-wrapper-67">
                    Explore our groundbreaking companies and solutions that are
                    reshaping industries with AI technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="layout-16"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-58">
            <div className="component-29">
              <div className="div-30">
                <div className="section-title-23">
                  <div className="div-31">
                    <p className="text-wrapper-68">
                      Custom Solutions for Your Unique Challenges
                    </p>

                    <p className="text-wrapper-69">
                      At AI Dream Builders, we specialize in crafting tailored
                      software and hardware solutions that meet the specific
                      needs of our clients. Our collaborative approach ensures
                      that your vision is transformed into a practical,
                      impactful reality.
                    </p>
                  </div>
                </div>
              </div>

              <img
                className="placeholder-image-37"
                alt="Placeholder image"
                src="/img/placeholder-image-17.png"
              />
            </div>
          </div>
        </div>

        <div
          className="container-wrapper-10"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-59">
            <div className="section-title-24">
              <div className="tagline-wrapper-14">
                <div className="tagline-12">Innovate</div>
              </div>

              <div className="div-31">
                <p className="text-wrapper-68">
                  Transforming Industries with Advanced AI Solutions
                </p>

                <p className="text-wrapper-69">
                  At AI Dream Builders, we specialize in creating innovative
                  solutions tailored to your needs. Our cutting-edge
                  technologies empower industries to achieve unprecedented
                  efficiency and insight.
                </p>
              </div>
            </div>

            <div className="row-31">
              <div className="div-31">
                <img
                  className="placeholder-image-38"
                  alt="Placeholder image"
                  src="/img/placeholder-image-23.png"
                />

                <div className="div-29">
                  <div className="medium-length-3">
                    Livestock Technologies: Revolutionizing Agriculture
                  </div>

                  <p className="text-wrapper-69">
                    Enhancing cattle welfare and ranch efficiency through
                    advanced computer vision and real-time data processing.
                  </p>
                </div>
              </div>

              <div className="div-31">
                <img
                  className="placeholder-image-38"
                  alt="Placeholder image"
                  src="/img/placeholder-image-18.png"
                />

                <div className="div-29">
                  <p className="medium-length-3">
                    SocialEdge AI: Your Social Media Partner
                  </p>

                  <p className="text-wrapper-69">
                    Automating social media management to boost engagement and
                    grow your online presence effortlessly.
                  </p>
                </div>
              </div>

              <div className="div-31">
                <img
                  className="placeholder-image-38"
                  alt="Placeholder image"
                  src="/img/placeholder-image-35.png"
                />

                <div className="div-29">
                  <p className="medium-length-3">
                    Cutting-Edge AI Solutions for Every Industry
                  </p>

                  <p className="text-wrapper-69">
                    Delivering actionable insights through advanced AI in
                    forestry, traffic, and beyond.
                  </p>
                </div>
              </div>

              <div className="div-31">
                <img
                  className="placeholder-image-38"
                  alt="Placeholder image"
                  src="/img/placeholder-image-22.png"
                />

                <div className="div-29">
                  <p className="medium-length-3">
                    Join Us in Building the Future
                  </p>

                  <p className="text-wrapper-69">
                    Partner with us to turn your visionary ideas into scalable
                    solutions that drive real impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="div-27">
              <Button
                alternate={false}
                className="button-62"
                iconPosition="no-icon"
                small={false}
                style="secondary"
                text="View Our Showcase"
                to="/showcase-desktop"
              />
              <Button
                alternate={false}
                className="button-63"
                icon={<ChevronRight3 className="icon-instance-node-9" />}
                iconPosition="trailing"
                small={false}
                style="link"
                text="Contact"
                to="/contact-us-desktop"
              />
            </div>
          </div>
        </div>

        <div
          className="layout-16"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-59">
            <div className="component-29">
              <div className="div-30">
                <div className="div-31">
                  <p className="heading-31">
                    Transforming Agriculture with Advanced Computer Vision and
                    Real-Time Data Solutions
                  </p>

                  <p className="text-34">
                    Livestock Technologies harnesses the power of custom
                    computer vision software and robust on-premise servers to
                    revolutionize cattle ranching. Our innovative system
                    processes live camera feeds, providing ranchers with
                    critical data and real-time updates to enhance cattle
                    welfare and operational efficiency.
                  </p>
                </div>

                <div className="list-10">
                  <div className="list-item-16">
                    <div className="text-wrapper-70">Innovative</div>

                    <p className="text-34">
                      Enhancing ranching efficiency through real-time data
                      processing.
                    </p>
                  </div>

                  <div className="list-item-16">
                    <div className="text-wrapper-70">Reliable</div>

                    <p className="text-34">
                      Empowering ranchers with actionable insights and updates.
                    </p>
                  </div>
                </div>
              </div>

              <img
                className="placeholder-image-37"
                alt="Placeholder image"
                src="/img/placeholder-image-19.png"
              />
            </div>
          </div>
        </div>

        <div
          className="layout-17"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-59">
            <div className="component-30">
              <div className="div-31">
                <div className="div-31">
                  <p className="heading-32">
                    Transform Your Social Media Strategy with SocialEdge AI
                    Automation
                  </p>

                  <p className="text-wrapper-69">
                    SocialEdge AI is designed specifically for real estate
                    professionals, streamlining your social media presence. With
                    automated posts and audience analysis, it maximizes your
                    engagement and reach effortlessly.
                  </p>
                </div>

                <div className="list-11">
                  <div className="list-item-17">
                    <Automation2 className="icon-instance-node-10" />
                    <p className="lorem-ipsum-dolor-10">
                      Automated posts tailored for your audience’s preferences.
                    </p>
                  </div>

                  <div className="list-item-17">
                    <ContentCut2 className="icon-instance-node-10" />
                    <p className="lorem-ipsum-dolor-10">
                      Engage your followers with captivating content daily.
                    </p>
                  </div>

                  <div className="list-item-17">
                    <Maximize className="icon-instance-node-10" />
                    <p className="lorem-ipsum-dolor-10">
                      Maximize your online impact with minimal effort.
                    </p>
                  </div>
                </div>
              </div>

              <img
                className="placeholder-image-39"
                alt="Placeholder image"
                src="/img/placeholder-image-20.png"
              />
            </div>
          </div>
        </div>

        <div
          className="layout-18"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-59">
            <div className="component-29">
              <div className="div-31">
                <p className="heading-32">
                  Transforming Industries with Advanced AI Solutions for
                  Forestry and Traffic Management
                </p>

                <p className="text-wrapper-69">
                  Our innovative AI tools are revolutionizing the forestry and
                  traffic sectors by providing real-time data analysis and
                  actionable insights. From optimizing traffic flow to enhancing
                  forest management practices, we empower industries to make
                  informed decisions and drive efficiency.
                </p>
              </div>

              <img
                className="placeholder-image-39"
                alt="Placeholder image"
                src="/img/placeholder-image-21.png"
              />
            </div>
          </div>
        </div>

        <div
          className="container-wrapper-10"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-58">
            <div className="div-28">
              <div className="content-101">
                <p className="text-wrapper-70">
                  Transform Your Business with AI
                </p>

                <p className="text-34">
                  Join us to unlock innovative AI solutions tailored to your
                  business needs and goals.
                </p>
              </div>

              <div className="actions-29">
                <Button
                  alternate={false}
                  className="button-64"
                  iconPosition="no-icon"
                  small={false}
                  style="primary"
                  text="Partner"
                  to="/contact-us-desktop"
                />
                <Button
                  alternate={false}
                  className="button-65"
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
          className="footer-13"
          data-spacing-sizing-mode="mobile"
          data-typography-mode="mobile"
        >
          <div className="container-59">
            <div className="content-102">
              <div className="div-32">
                <CompanyLogo alternate={false} className="company-logo-12" />
              </div>

              <div className="div-32">
                <Link className="text-wrapper-71" to="/contact-us-desktop">
                  Contact Us
                </Link>

                <Link className="text-wrapper-72" to="/about-us-desktop">
                  About Us
                </Link>

                <Link
                  className="text-wrapper-72"
                  to="/companies-u38-solutions-mobile"
                >
                  Companies &amp; Solutions
                </Link>
              </div>

              <a
                className="social-links-10"
                href="https://www.facebook.com/profile.php?id=61560854473620"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook2 className="icon-instance-node-9" />
              </a>
            </div>

            <div className="credits-13">
              <img
                className="divider-13"
                alt="Divider"
                src="/img/divider-2.svg"
              />

              <div className="row-32">
                <div className="footer-links-9">
                  <div className="text-wrapper-73">Terms of Service</div>
                </div>

                <p className="text-wrapper-74">
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
