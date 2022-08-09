import screenBackground from "../../images/vendor-landing-bg.jpg";
import getStartedBackground from "../../images/started-wave.svg";
import { Link } from "react-router-dom";

import { Row, Col } from "antd";

import "./VendorLanding.scss";

function VendorLanding() {
  return (
    <div className="vendor-landing">
      <div
        className="vendor-landing-banner"
        style={{ backgroundImage: `url(${screenBackground})` }}
      >
        <div className="container">
          <div className="vendor-landing-inner">
            <h2>Start your</h2>
            <h3>Online Business</h3>
            <h4>with us in 3 easy steps</h4>
            <h5>Become a part of the digital economy with us</h5>
            <br />
            <h6>Start Selling</h6>
          </div>
        </div>
      </div>
      <div className="vendor-landing-detail">
        <div className="steps-heading">
          <div className="container">
            <div className="steps-heading-inner">
              <h2>Become a successful seller in 3 steps</h2>
              <h3>Just like this, simply done!</h3>
            </div>
            <div className="info-graphy">
              <img src="/images/infography.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="steps-main">
          <div className="container">
            <div className="step-widget">
              <Row gutter={24}>
                <Col sm={24} md={12} lg={14}>
                  <div className="steps-content">
                    <h2 className="right-step">Step 1</h2>
                    <h3>Register & List your product</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </Col>
                <Col sm={24} md={12} lg={10}>
                  <div className="steps-image">
                    <img src="/images/step-1.svg" alt="" />
                  </div>
                </Col>
              </Row>
            </div>
            <div className="step-widget">
              <Row gutter={24}>
                <Col sm={24} md={12} lg={10}>
                  <div className="steps-image">
                    <img src="/images/step-2.svg" alt="" />
                  </div>
                </Col>
                <Col sm={24} md={12} lg={14}>
                  <div className="steps-content">
                    <h2 className="left-step">Step 2</h2>
                    <h3>Receive Oders & Sell Across the Seas</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="step-widget">
              <Row gutter={24}>
                <Col sm={24} md={12} lg={14}>
                  <div className="steps-content">
                    <h2 className="right-step">Step 3</h2>
                    <h3>Get Payments & Grow Your Business</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </Col>
                <Col sm={24} md={12} lg={10}>
                  <div className="steps-image">
                    <img src="/images/step-3.svg" alt="" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="featured-benefits">
          <div className="container">
            <div className="feature-heading">
              <h2>Features and Benefits</h2>
            </div>
            <div className="featured-main">
              <Row gutter={12}>
                <Col xs={12} sm={12} md={8} lg={4}>
                  <div className="featured-widget">
                    <div className="featured-icon">
                      <img src="/images/Icon-01.svg" alt="" />
                    </div>
                    <h2>No Registration Fee</h2>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={8} lg={4}>
                  <div className="featured-widget">
                    <div className="featured-icon">
                      <img src="/images/Icon-02.svg" alt="" />
                    </div>
                    <h2>Sell Across Seas</h2>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={8} lg={4}>
                  <div className="featured-widget">
                    <div className="featured-icon">
                      <img src="/images/Icon-03.svg" alt="" />
                    </div>
                    <h2>Reach Millions of Customers</h2>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={8} lg={4}>
                  <div className="featured-widget">
                    <div className="featured-icon">
                      <img src="/images/Icon-04.svg" alt="" />
                    </div>
                    <h2>Fast & Reliable Shipping</h2>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={8} lg={4}>
                  <div className="featured-widget">
                    <div className="featured-icon">
                      <img src="/images/Icon-05.svg" alt="" />
                    </div>
                    <h2>Timely Payments</h2>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={8} lg={4}>
                  <div className="featured-widget">
                    <div className="featured-icon">
                      <img src="/images/Icon-06.svg" alt="" />
                    </div>
                    <h2>E-commerce Training</h2>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="featured-adv">
              <img src="/images/vendor-adv.jpg" alt="" />
            </div>
            <div className="vendor-services">
              <Row>
                <Col xs={24} sm={24} md={24} lg={12}>
                  <div className="vendor-service-heading">
                    <h2>Everything you need to run your online business</h2>
                    <h3>
                      From inventory to fulfillment, we’ve got the tools you
                      need and can connect to anything you already use
                    </h3>
                  </div>
                </Col>
              </Row>
              <Row gutter={24}>
                <Col xs={24} sm={12} md={12} lg={8}>
                  <div className="service-widget">
                    <h2>1</h2>
                    <h3>Inventory management</h3>
                    <p>
                      You’ll gain access to a variety of tools that help you
                      list, bulk upload, and integrate with APIs. You can also
                      use third-party tools.
                    </p>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={8}>
                  <div className="service-widget">
                    <h2>2</h2>
                    <h3>Manage orders</h3>
                    <p>
                      Our sellers receive discounted shipping labels from major
                      carriers. We also offer international fulfillment with
                      intermediated shipping options.
                    </p>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={8}>
                  <div className="service-widget">
                    <h2>3</h2>
                    <h3>Research & Insights</h3>
                    <p>
                      Terapeak, an exclusive eBay insights tool, is an effective
                      way to research what your competitors are doing, how
                      they’re doing it, and how you can improve your own
                      listings on eBay.
                    </p>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={8}>
                  <div className="service-widget">
                    <h2>4</h2>
                    <h3>Marketing tools</h3>
                    <p>
                      Use our robust suite of marketing tools to create
                      promotions to grow your sales. Increase the visibility of
                      your listings using Promoted Listings.
                    </p>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={8}>
                  <div className="service-widget">
                    <h2>5</h2>
                    <h3>Brand building tools</h3>
                    <p>
                      Get an eBay Store subscription to unlock a customizable
                      storefront where you can showcase your brand and inventory
                      to buyers.
                    </p>
                  </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={8}>
                  <div className="service-widget">
                    <h2>6</h2>
                    <h3>The Storak app</h3>
                    <p>
                      Manage your business on the go with our app. Control
                      listings, fulfill orders, respond to buyers, and more from
                      anywhere, at any time.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="selling-faq">
          <div className="container">
            <div className="feature-heading">
              <h2>Selling FAQs</h2>
            </div>
            <div className="faqs-main">
              <ul>
                <li>
                  <div className="question">
                    How Do I Open My Shop on Storak?
                  </div>
                  <div className="answer">
                    To register with Storak as Seller visit Sign Up page on
                    Storak website.
                  </div>
                </li>
                <li>
                  <div className="question">How Does Storak Seller Work?</div>
                  <div className="answer">
                    Storak Seller Center is a platform made specifically for
                    Storak Sellers where you can receive orders and sell across
                    Pakistan by registering your products and uploading them on
                    Storak’s online marketplace from where you receive the
                    payment of your order directly in your account.
                  </div>
                </li>
                <li>
                  <div className="question">What is Storak Commission?</div>
                  <div className="answer">
                    Storak deducts a small percentage of commission from the
                    payment of your orders. Each product commission depends on
                    the type of category it falls under.
                  </div>
                </li>
                <li>
                  <div className="question">
                    How Can I Check My Storak Commission?
                  </div>
                  <div className="answer">
                    You can check how much commission will be charged on your
                    product by going to Storak from your Storak Seller Account.
                    From there scroll down and click on “Marketplace Commission
                    Structure” where you’ll find a whole list commission
                    percentages on charges.
                  </div>
                </li>
                <li>
                  <div className="question">
                    How Can I Upload My Product on Storak?
                  </div>
                  <div className="answer">
                    Log in to your Storak Seller Center account and from the
                    homepage, click on “Products” then select “Add Products.”
                    Enter all details of your products and description that need
                    to be added and enter “Submit” on the bottom of the page and
                    your product will be uploaded!
                  </div>
                </li>
                <li>
                  <div className="question">
                    Is it worth it to sell on Storak.qa?
                  </div>
                  <div className="answer">
                    Storak seller account gives you access to millions of
                    customers for your products at 0% commission rates. In
                    addition, Storak helps your business by assisting with fast
                    and reliable shipping, professional services & secure and
                    timely payment.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="get-started-section"
          style={{ backgroundImage: `url(${getStartedBackground})` }}
        >
          <div className="container">
            <div className="get-started-inner">
              <h2>Start selling today</h2>
              <p>
                Put your products in front of the millions of customers who
                search Storak.qa every day.
              </p>
              <Link to="#">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VendorLanding;
