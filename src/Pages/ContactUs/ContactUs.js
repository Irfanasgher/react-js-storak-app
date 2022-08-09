import { Fragment } from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import {
  EnvironmentOutlined,
  MobileOutlined,
  MailOutlined,
} from "@ant-design/icons";
// import RoundedButton from "../../Components/Button/RoundedButton";

import "./ContactUs.scss";

function ContactUs() {
  return (
    <Fragment>
      <div className="contact-page">
        <div className="contact-banner">
          <h2>How can our assistants help you?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="container">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2493348320018!2d51.535018914328674!3d25.26219663526112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45cf8b3d237459%3A0x6ec48fa0dbeec549!2s128%20Najma%20St%2C%20Doha%2C%20Qatar!5e0!3m2!1sen!2s!4v1625130333446!5m2!1sen!2s"
              width="100%"
              height="450"
              style="border:0"
              style={{ border: 0 }}
            ></iframe>
          </div>
          <div className="address-bar">
            <Row gutter={24}>
              <Col xs={24} sm={8} md={8}>
                <div className="address-widget">
                  <EnvironmentOutlined />
                  <p>
                    PO BOX 5763 No.128 Najma Street, AL Hilal, Doha, State of
                    Qatar
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={8} md={8}>
                <div className="address-widget">
                  <MobileOutlined />
                  <Link to="tel:+974 5560 6609">+974 5560 6609</Link>
                  <Link to="tel:+92 308 123 1113">+92 308 123 1113</Link>
                </div>
              </Col>
              <Col xs={24} sm={8} md={8}>
                <div className="address-widget">
                  <MailOutlined />
                  <Link to="maitlto:info@storakdigital.com">
                    info@storakdigital.com
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
          <div className="contact-form">
            <div className="contact-form-widget">
              <div className="contact-message">Leave a message</div>
              <h2>Tell us about yourself</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <Form layout="vertical">
              <Row gutter={24}>
                <Col xs={24} sm={12}>
                  <Form.Item label="Your name">
                    <Input placeholder="Name" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item label="Your email address">
                    <Input placeholder="Email" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item label="Subject">
                    <Input placeholder="Subject" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item label="Your Phone Number">
                    <Input placeholder="Phone" />
                  </Form.Item>
                </Col>
                <Col xs={24}>
                  <Form.Item label="How can we help you?">
                    <Input placeholder="Your Message" />
                  </Form.Item>
                </Col>
              </Row>
              <div className="submit-form">
                <Button type="submit">Submit</Button>
                <p>We'll get back to you in 1-2 business days.</p>
              </div>
              {/* <RoundedButton /> */}
            </Form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default ContactUs;
