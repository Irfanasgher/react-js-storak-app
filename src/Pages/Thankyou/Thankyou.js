import { Fragment } from "react";
import { Link } from "react-router-dom";
import { CheckCircleOutlined } from "@ant-design/icons";

import screenBackground from "./../../images/thankyou-bg.jpg";
import "./Thankyou.scss";

function Thankyou() {
  return (
    <div className="welcome-page">
      <Fragment>
        <div className="container">
          <div className="thankyou-top">
            <div className="check-icon">
              <CheckCircleOutlined />
            </div>
            <div className="thankyou-heading">
              <h2>
                Thank <span>You</span>
              </h2>
              <p>for shopping with us</p>
              <h3>"Arslan"</h3>
            </div>
            <div className="shipping-info">
              <h2>Your Shipping Information</h2>
              <div className="shipping-content">
                <h3>Your Product Code</h3>
                <p>Invoice # 0045</p>
                <h3>Address</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>

                <Link to="/">Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="thankyou-bottom">
            <div className="wow-section">
              <div className="wow-image">
                <img src="/images/victory.svg" alt="" />
              </div>
              <div className="wow-detail">
                <h2>WOW!</h2>
                <p>you’ve just joined an amazing group</p>
              </div>
            </div>
            <div
              className="top-offer-section"
              style={{ backgroundImage: `url(${screenBackground})` }}
            >
              <h2>Still hungrey for shopping?</h2>
              <p>Check out our special offers here.</p>
              <Link to="">Top Offers</Link>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
}
export default Thankyou;
