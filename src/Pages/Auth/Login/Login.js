import { Link, Redirect } from "react-router-dom";
import "./Login.scss";
import { Button } from "antd";
import { useState, useEffect } from "react";
import screenBackground from "../../../images/login-bg.jpg";
import axios from "axios";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(getjwt);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("/login", {
        email,
        password,
      })
      .then((response) => {
        const jwt = response.data.token;

        console.log(response);
        const userObject = response.data.user;

        localStorage.setItem("token", jwt);
        localStorage.setItem("user", JSON.stringify(userObject));
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });

    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/" />;
  }
  //const getjwt = Cookies.get("token");
  const getjwt = localStorage.getItem("token");
  //const getUser = Cookies.getJSON("user");
  const getUser = localStorage.getItem("user");
  console.log("gwt token", getjwt);
  console.log("gwt user", JSON.parse(getUser));

  return (
    <div id="login-page">
      <div
        className="login-page"
        style={{ backgroundImage: `url(${screenBackground})` }}
      >
        <div className="login-widget">
          <div>
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
                  <h2>Sign In</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-widget">
                      <label htmlFor="">Email address</label>
                      <input
                        type="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-widget">
                      <label htmlFor="">Password</label>
                      <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="forget-link">
                      <Link to="/forget-password">Forget Password ?</Link>
                    </div>
                    <div className="login-button">
                      <Button type="primary" htmlType="submit">
                        Login
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
                  <div className="sign-up-link">
                    <p>
                      Don't have an account?
                      <Link to="/register">Sign Up</Link>
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
    </div>
  );
}

export default Login;
