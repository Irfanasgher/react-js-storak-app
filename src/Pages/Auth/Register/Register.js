import { Link, Redirect } from "react-router-dom";
import "./Register.scss";
import { Button } from "antd";
import { useState } from "react";
import screenBackground from "../../../images/login-bg.jpg";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://api.storak.qa/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        confirmPassword,
      }),
    });

    setRedirect(true);

    console.log(redirect);
  };
  if (redirect) {
    alert("redirect");
    return <Redirect to="login" />;
  }
  console.log(redirect);

  return (
    <div id="register-page">
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
                <img src="images/header-logo.svg" alt="login" />
              </div>
              <div className="login-form">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-widget">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="{name}"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-widget">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      name="{email}"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-widget">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="{password}"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-widget">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  <div className="login-button">
                    <Button type="primary" htmlType="submit">
                      Sign Up
                    </Button>
                  </div>
                </form>

                <div className="login-social">
                  <ul>
                    <li>
                      <Link to="#">
                        <img src="images/google.svg" alt="google" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="images/facebook.svg" alt="facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <img src="images/twitter.svg" alt="twitter" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="sign-up-link-home">
                  <div className="go-sign-up">
                    <p>
                      If you have an account? Please
                      <Link to="/login">Sign In</Link>
                    </p>
                  </div>
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
export default Register;
