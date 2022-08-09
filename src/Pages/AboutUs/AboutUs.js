import { Fragment } from "react";
import { Row, Col } from "antd";

import "./AboutUs.scss";

function AboutUs() {
  return (
    <div className="vendor-landing">
     
      <div className="about-page">
        <Fragment>
          <div className="about-section">
            <div className="container">
              <div className="heading">
                <h2>About Us</h2>
              </div>
              <Row gutter={24}>
                <Col md={8}>
                  <div className="about-top-text-left">
                    <h2>Lorem Ipsum</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </Col>
                <Col md={8}>
                  <div className="about-top-image">
                    <img src="/images/about-top.jpg" alt="" />
                  </div>
                </Col>
                <Col md={8}>
                  <div className="about-top-text-right">
                    <h2>Lorem Ipsum</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col md={8}>
                  <div className="about-top-text-bottom-left">
                    <h2>Lorem Ipsum</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </Col>
                <Col md={8}></Col>
                <Col md={8}>
                  <div className="about-top-text-bottom-right">
                    <h2>Lorem Ipsum</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="about-section-one">
            <div className="container">
              <Row gutter={24}>
                <Col md={12}>
                  <div className="about-section-image">
                    <img src="/images/aboutus-mission.jpg" alt="" />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="about-section-desc">
                    <div className="about-box  blue-theme"></div>
                    <div className="about-detail">
                      <h2 className="blue-theme">Our Mission</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat iust
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="about-section-two">
            <div className="container">
              <Row gutter={24}>
                <Col md={12}>
                  <div className="about-section-desc">
                    <div className="about-box  orange-theme"></div>
                    <div className="about-detail">
                      <h2 className="orange-theme">One Step Sourcing</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat iust
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="about-section-image">
                    <img src="/images/about-step-1.svg" alt="" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="about-section-one">
            <div className="container">
              <Row gutter={24}>
                <Col md={12}>
                  <div className="about-section-image">
                    <img src="/images/about-step-2.svg" alt="" />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="about-section-desc">
                    <div className="about-box  blue-theme"></div>
                    <div className="about-detail">
                      <h2 className="blue-theme">One Step Sourcing</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat iust
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Fragment>
      </div>
     
    </div>
  );
}
export default AboutUs;
