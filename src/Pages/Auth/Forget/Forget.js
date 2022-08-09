import { Link } from "react-router-dom";
import "./Forget.scss";
import screenBackground from "../../../images/login-bg.jpg";

function Forget() {
  return (
    <div id="forget-password-page">
      <div
        className="login-page"
        style={{ backgroundImage: `url(${screenBackground})` }}
      >
        <div className="login-widget">
          <div className="back-home">
            <Link to="/">
              <i className="fas fa-times"></i>
            </Link>
          </div>
          <div className="login-inner-content">
            <div className="login-left-part">
              <div className="login-logo">
                <img src="images/header-logo.svg" alt="logo" />
              </div>
              <div className="login-form">
                <h2>Forget Password</h2>
                <div className="form-widget">
                  <label htmlFor="">Email address</label>
                  <input type="email" name="email" />
                </div>
                <div className="login-button">
                  <Link to="#">Submit</Link>
                </div>
                <div className="sign-up-link">
                  <p>
                    Back to
                    <Link to="/login">Sign In</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="login-right-part">
              <div className="login-social-widget">
                <img src="images/login-vector.svg" alt="login-vector" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Forget;
