import React from "react";
import { Link } from "react-router-dom";
import { AutomationWrapper } from "../../components/AutomationWrapper";
import { Button } from "../../components/Button";
import { CompanyLogo } from "../../components/CompanyLogo";
import { ContentCutWrapper } from "../../components/ContentCutWrapper";
import { ChevronRight3 } from "../../icons/ChevronRight3";
import { Facebook2 } from "../../icons/Facebook2";
import { Maximize } from "../../icons/Maximize";
import "./style.css";

export const Screen16 = () => {
  return (
    <div className="screen-16">
      <div className="companies-and-2">
        <div className="navbar-11">
          <header className="header-15">
            <div className="container-54">
              <div className="div-22">
                <CompanyLogo alternate={false} className="company-logo-11" />
                <div className="column-28">
                  <a
                    className="link-text-wrapper-17"
                    href="aidreambuilders.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="link-text-17">Home</div>
                  </a>

                  <Link className="link-text-wrapper-17" to="/about-us-desktop">
                    <div className="link-text-17">About Us</div>
                  </Link>

                  <Link
                    className="link-text-wrapper-17"
                    to="/companies-u38-solutions-mobile"
                  >
                    <div className="link-text-17">
                      Companies &amp; Solutions
                    </div>
                  </Link>
                </div>
              </div>

              <div className="actions-26">
                <Button
                  alternate={false}
                  className="contact-us-9"
                  iconPosition="no-icon"
                  small
                  style="secondary"
                  text="Contact Us"
                  to="/contact-us-desktop"
                />
                <Button
                  alternate={false}
                  className="button-54"
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

        <div className="header-16">
          <div className="container-55">
            <div className="div-23">
              <div className="div-24">
                <div className="tagline-wrapper-12" />

                <div className="content-95">
                  <div className="text-wrapper-58">Transform Your Vision</div>

                  <p className="text-wrapper-59">
                    Explore our groundbreaking companies and solutions that are
                    reshaping industries with AI technology.
                  </p>
                </div>
              </div>

              <div className="actions-27">
                <Button
                  alternate
                  className="button-54"
                  iconPosition="no-icon"
                  small={false}
                  style="primary"
                  text="Learn More"
                />
                <Button
                  alternate
                  className="button-55"
                  iconPosition="no-icon"
                  small={false}
                  style="secondary"
                  text="Sign Up"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="layout-15">
          <div className="container-56">
            <div className="component-26">
              <div className="div-25">
                <div className="div-wrapper-2">
                  <div className="content-96">
                    <p className="text-wrapper-60">
                      Custom Solutions for Your Unique Challenges
                    </p>

                    <p className="text-wrapper-61">
                      At AI Dream Builders, we specialize in crafting tailored
                      software and hardware solutions that meet the specific
                      needs of our clients. Our collaborative approach ensures
                      that your vision is transformed into a practical,
                      impactful reality.
                    </p>
                  </div>
                </div>

                <div className="div-22">
                  <Button
                    alternate={false}
                    className="button-56"
                    iconPosition="no-icon"
                    small={false}
                    style="secondary"
                    text="Learn More"
                  />
                  <Button
                    alternate={false}
                    className="button-57"
                    icon={<ChevronRight3 className="icon-instance-node-8" />}
                    iconPosition="trailing"
                    small={false}
                    style="link"
                    text="Sign Up"
                  />
                </div>
              </div>

              <img
                className="placeholder-image-33"
                alt="Placeholder image"
                src="/img/placeholder-image-12.png"
              />
            </div>
          </div>
        </div>

        <div className="container-wrapper-9">
          <div className="container-56">
            <div className="section-title-22">
              <div className="tagline-wrapper-13">
                <div className="tagline-11">Innovate</div>
              </div>

              <div className="content-96">
                <p className="text-wrapper-60">
                  Transforming Industries with Advanced AI Solutions
                </p>

                <p className="text-wrapper-61">
                  At AI Dream Builders, we specialize in creating innovative
                  solutions tailored to your needs. Our cutting-edge
                  technologies empower industries to achieve unprecedented
                  efficiency and insight.
                </p>
              </div>
            </div>

            <div className="content-97">
              <div className="row-27">
                <div className="div-26">
                  <img
                    className="placeholder-image-34"
                    alt="Placeholder image"
                    src="/img/placeholder-image-32.png"
                  />

                  <div className="div-24">
                    <div className="medium-length-2">
                      Livestock Technologies: Revolutionizing Agriculture
                    </div>

                    <p className="text-wrapper-62">
                      Enhancing cattle welfare and ranch efficiency through
                      advanced computer vision and real-time data processing.
                    </p>
                  </div>
                </div>

                <div className="div-26">
                  <img
                    className="placeholder-image-34"
                    alt="Placeholder image"
                    src="/img/placeholder-image-13.png"
                  />

                  <div className="div-24">
                    <p className="medium-length-2">
                      SocialEdge AI: Your Social Media Partner
                    </p>

                    <p className="text-wrapper-62">
                      Automating social media management to boost engagement and
                      grow your online presence effortlessly.
                    </p>
                  </div>
                </div>

                <div className="div-26">
                  <img
                    className="placeholder-image-34"
                    alt="Placeholder image"
                    src="/img/placeholder-image-33.png"
                  />

                  <div className="div-24">
                    <p className="medium-length-2">
                      Cutting-Edge AI Solutions for Every Industry
                    </p>

                    <p className="text-wrapper-62">
                      Delivering actionable insights through advanced AI in
                      forestry, traffic, and beyond.
                    </p>
                  </div>
                </div>

                <div className="div-26">
                  <img
                    className="placeholder-image-34"
                    alt="Placeholder image"
                    src="/img/placeholder-image-34.png"
                  />

                  <div className="div-24">
                    <p className="medium-length-2">
                      Join Us in Building the Future
                    </p>

                    <p className="text-wrapper-62">
                      Partner with us to turn your visionary ideas into scalable
                      solutions that drive real impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="div-22">
              <Button
                alternate={false}
                className="button-58"
                divClassName="button-59"
                iconPosition="no-icon"
                small={false}
                style="secondary"
                text="View Our Showcase"
              />
              <Button
                alternate={false}
                className="button-57"
                icon={<ChevronRight3 className="icon-instance-node-8" />}
                iconPosition="trailing"
                small={false}
                style="link"
                text="Contact"
              />
            </div>
          </div>
        </div>

        <div className="layout-15">
          <div className="container-56">
            <div className="component-27">
              <img
                className="placeholder-image-35"
                alt="Placeholder image"
                src="/img/placeholder-image-14.png"
              />

              <div className="content-98">
                <div className="content-96">
                  <p className="heading-29">
                    Transforming Agriculture with Advanced Computer Vision and
                    Real-Time Data Solutions
                  </p>

                  <p className="text-wrapper-61">
                    Livestock Technologies harnesses the power of custom
                    computer vision software and robust on-premise servers to
                    revolutionize cattle ranching. Our innovative system
                    processes live camera feeds, providing ranchers with
                    critical data and real-time updates to enhance cattle
                    welfare and operational efficiency.
                  </p>
                </div>

                <div className="div-wrapper-2">
                  <div className="row-28">
                    <div className="list-item-14">
                      <div className="text-wrapper-60">Innovative</div>

                      <p className="text-wrapper-62">
                        Enhancing ranching efficiency through real-time data
                        processing.
                      </p>
                    </div>

                    <div className="list-item-14">
                      <div className="text-wrapper-60">Reliable</div>

                      <p className="text-wrapper-62">
                        Empowering ranchers with actionable insights and
                        updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-wrapper-9">
          <div className="container-56">
            <div className="component-28">
              <div className="div-25">
                <div className="content-96">
                  <p className="heading-29">
                    Transform Your Social Media Strategy with SocialEdge AI
                    Automation
                  </p>

                  <p className="text-wrapper-61">
                    SocialEdge AI is designed specifically for real estate
                    professionals, streamlining your social media presence. With
                    automated posts and audience analysis, it maximizes your
                    engagement and reach effortlessly.
                  </p>
                </div>

                <div className="list-9">
                  <div className="list-item-15">
                    <AutomationWrapper />
                    <p className="lorem-ipsum-dolor-9">
                      Automated posts tailored for your audience’s preferences.
                    </p>
                  </div>

                  <div className="list-item-15">
                    <ContentCutWrapper />
                    <p className="lorem-ipsum-dolor-9">
                      Engage your followers with captivating content daily.
                    </p>
                  </div>

                  <div className="list-item-15">
                    <Maximize className="maximize-2" />
                    <p className="lorem-ipsum-dolor-9">
                      Maximize your online impact with minimal effort.
                    </p>
                  </div>
                </div>
              </div>

              <img
                className="placeholder-image-36"
                alt="Placeholder image"
                src="/img/placeholder-image-15.png"
              />
            </div>
          </div>
        </div>

        <div className="layout-15">
          <div className="container-56">
            <div className="component-28">
              <img
                className="placeholder-image-36"
                alt="Placeholder image"
                src="/img/placeholder-image-16.png"
              />

              <div className="div-26">
                <p className="heading-29">
                  Transforming Industries with Advanced AI Solutions for
                  Forestry and Traffic Management
                </p>

                <p className="text-wrapper-61">
                  Our innovative AI tools are revolutionizing the forestry and
                  traffic sectors by providing real-time data analysis and
                  actionable insights. From optimizing traffic flow to enhancing
                  forest management practices, we empower industries to make
                  informed decisions and drive efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-wrapper-9">
          <div className="container-55">
            <div className="div-23">
              <div className="content-95">
                <p className="heading-30">Transform Your Business with AI</p>

                <p className="text-33">
                  Join us to unlock innovative AI solutions tailored to your
                  business needs and goals.
                </p>
              </div>

              <div className="actions-27">
                <Button
                  alternate={false}
                  className="button-54"
                  iconPosition="no-icon"
                  small={false}
                  style="primary"
                  text="Partner"
                  to="/contact-us-desktop"
                />
                <Button
                  alternate={false}
                  className="button-55"
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

        <div className="footer-12">
          <div className="container-57">
            <div className="content-99">
              <div className="div-26">
                <CompanyLogo alternate={false} className="company-logo-11" />
              </div>

              <div className="links-9">
                <Link className="text-wrapper-63" to="/contact-us-desktop">
                  Contact Us
                </Link>

                <Link className="text-wrapper-63" to="/about-us-desktop">
                  About Us
                </Link>

                <Link
                  className="text-wrapper-63"
                  to="/companies-u38-solutions-mobile"
                >
                  Companies &amp; Solutions
                </Link>
              </div>

              <div className="social-links-9">
                <Facebook2 className="icon-instance-node-8" />
              </div>
            </div>

            <div className="credits-12">
              <img
                className="divider-12"
                alt="Divider"
                src="/img/divider.svg"
              />

              <div className="row-29">
                <p className="text-wrapper-64">
                  © 2023 AI Dream Builders. All rights reserved.
                </p>

                <div className="text-wrapper-65">Terms of Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
