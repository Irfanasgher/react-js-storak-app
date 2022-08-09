import "./Footer.scss";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
function Footer() {
  return (
    <footer>
      <div className="main-footer">
        <div className="container">
          <Row gutter={24}>
            <Col sm={24} md={8} lg={6}>
              <div className="footer-widget">
                <div className="footer-logo">
                  <router-link to="/">
                    <img src="/images/footer-logo.svg" alt="footer-logo" />
                  </router-link>
                </div>
                <div className="footer-about">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                  <div className="footer-about-widget">
                    <div className="icon address">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </span>
                  </div>
                  <div className="footer-about-widget">
                    <div className="icon">
                      <i className="fas fa-phone-square-alt"></i>
                    </div>
                    <Link to="#">+92-300-1234567</Link>
                  </div>
                  <div className="footer-about-widget">
                    <div className="icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <Link to="#">support@storak.qa</Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={8} lg={6}>
              <div className="footer-widget">
                <h2>Get to Know Us</h2>
                <ul>
                  <li>
                    <Link to="/vendor-landing">Sell on Storak</Link>
                  </li>
                  <li>
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="#">Terms and Conditions</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">FAQs</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} sm={12} md={8} lg={6}>
              <div className="footer-widget">
                <h2>Let Us Help You</h2>
                <ul>
                  <li>
                    <Link to="#">Your Account</Link>
                  </li>
                  <li>
                    <Link to="#">Your Order</Link>
                  </li>
                  <li>
                    <Link to="#">Shipping Rates & Policies</Link>
                  </li>
                  <li>
                    <Link to="#">Returns & Replacements</Link>
                  </li>
                  <li>
                    <Link to="#">Help</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={6}>
              <div className="footer-widget">
                <h2 className="newsletter">Join our newsletter</h2>
                <div className="footer-newsletter">
                  <p>Get weekly access to our best deals, tips and tricks</p>
                  <input
                    className="subscribe-field"
                    type="email"
                    name="subscribe"
                    placeholder="Enter your email address"
                  />
                  <button className="subscribe-btn">Subscribe</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <Row gutter={12}>
            <Col xs={24} sm={24} md={24} lg={12}>
              <div className="copyright-text">
                <p>Copyright © Storak. All rights reserved</p>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12}>
              <div className="footer-icons-main">
                <div className="footer-card">
                  <ul>
                    <li>
                      <img src="/images/master-card.svg" alt="master-card" />
                    </li>
                    <li>
                      <img src="/images/visa.svg" alt="visa" />
                    </li>
                    <li>
                      <img src="/images/money.svg" alt="money" />
                    </li>
                    <li>
                      <img src="/images/american.svg" alt="american" />
                    </li>
                  </ul>
                </div>
                <div className="apps-icons">
                  <ul>
                    <li>
                      <Link to="#">
                        <img src="/images/andriod-icon.png" alt="andriod" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="/images/apple-icon.png" alt="apple-icon" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
