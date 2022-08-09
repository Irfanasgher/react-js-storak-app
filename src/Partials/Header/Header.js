import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BackTop, Row, Col, Menu } from "antd";

import {
  SmileOutlined,
  InboxOutlined,
  HeartOutlined,
  PicLeftOutlined,
  RollbackOutlined,
  LogoutOutlined,
  EnvironmentOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { baseUrl } from "../../Routes/apiRoutes";
import "./Header.scss";

function Header(props) {
  const [scroll, setScroll] = useState(false);
  const [categories, setCategories] = useState("");
  const [navCategories, setNavCategories] = useState("");

  // const history = useHistory();

  const getUser = JSON.parse(localStorage && localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  const manageAccount = () => {
    console.log("manage account");
  };

  const token = Boolean(localStorage && localStorage.getItem("token"));

  useEffect(() => {
    headerScroller();
    categoriesList();
    navCategoriesList();
  }, []);

  const headerScroller = () => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  };

  const profileMenu = (
    <Menu>
      <Menu.Item onClick={manageAccount} icon={<SmileOutlined />}>
        <Link to="/profile/manage-profile">Profile</Link>
      </Menu.Item>
      <Menu.Item icon={<InboxOutlined />}>
        <Link to="/profile/order">My Order</Link>
      </Menu.Item>
      <Menu.Item icon={<HeartOutlined />}>
        <Link to="/profile/followed-store">Wishlist and Followed Store</Link>
      </Menu.Item>
      <Menu.Item icon={<PicLeftOutlined />}>
        <Link to="/profile/review">My Review</Link>
      </Menu.Item>
      <Menu.Item icon={<QuestionCircleOutlined />}>
        <Link to="/profile/question">My Question</Link>
      </Menu.Item>
      <Menu.Item icon={<EnvironmentOutlined />}>
        <Link to="/profile/address">Address</Link>
      </Menu.Item>
      <Menu.Item icon={<RollbackOutlined />}>
        <Link to="/profile/return">Refunds</Link>
      </Menu.Item>
      <Menu.Item danger onClick={logout} icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  const categoriesList = async (e) => {
    await axios
      .get("/categories-with-subcategories")
      .then((response) => {
        const cat = response.data.categories;
        setCategories(cat);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const navCategoriesList = async (e) => {
    await axios
      .get("/categories/featured")
      .then((response) => {
        console.log(response);
        const navcat = response.data.fCategories;
        setNavCategories(navcat);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div className="header">
      <div className="top-header">
        <div className="container">
          <Row gutter={12}>
            <Col xs={14} sm={16} md={12}>
              <div className="left-top-bar">
                <p>Welcome to Storak | Online Market Place</p>
              </div>
            </Col>
            <Col xs={10} sm={8} md={12}>
              <div className="top-bar-right">
                {/* {token ? (
                  <div className="user-info">
                    <Dropdown
                      overlay={profileMenu}
                      placement="bottomLeft"
                      arrow
                    >
                      <Link
                        to="#"
                        className="ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        {getUser && <p>{getUser.email}</p>} <DownOutlined />
                      </Link>
                    </Dropdown>
                  </div>
                ) : (
                  <div className="login-nav">
                    <ul>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/Register">Register</Link>
                      </li>
                    </ul>
                  </div>
                )} */}
                <div className="social-nav">
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-google-plus-g"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={scroll ? "main-header scrolled" : "main-header"}>
        <div className="container">
          <Row gutter={12}>
            <Col xs={10} sm={6} md={4} lg={4} xl={4}>
              <div className="logo">
                <Link to="/">
                  <img src="/images/header-logo.svg" alt="logo" />
                </Link>
              </div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={14}>
              <div className="header-search">
                <input
                  className="search-input"
                  type="text"
                  name=""
                  placeholder="What are you looking for?"
                />
                <Link to="/search-product">
                  <button className="search-icon">
                    <i className="fas fa-search"></i>
                  </button>
                </Link>
              </div>
            </Col>
            <Col xs={24} sm={6} md={8} lg={8} xl={6}>
              <div className="cart-widget">
                <div className="wishlist-comp">
                  <Link to="/wish-list">
                    <div className="wishlist-widget">
                      <i className="fas fa-heart"></i>
                      <p>Wishlist</p>
                      <span>(0)</span>
                    </div>
                  </Link>
                </div>
                {/* <div className="shopping-cart">
                  <div className="shoping-cart-image">
                    <img src="/images/Cart-01.svg" alt="cart" />
                    <span>0</span>
                  </div>
                  <div className="shoping-cart-detail">
                    <Link to="/cart">
                      <p>Your Cart:</p>
                      <span>179.00 QAR</span>
                    </Link>
                  </div>
                </div> */}
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="menu-nav">
        <div className="menu-bar-inner">
          <div className="category-sidebar">
            <div className="category-widget">
              <Link to="#" className="all-cat-link">
                <h2>All Categories</h2>
                <i className="fas fa-caret-down"></i>
              </Link>
              <div className="cat-menu">
                <ul>
                  {categories.length > 0 &&
                    categories.map(function (cat, id) {
                      return (
                        <li className="category-list" key={id}>
                          <div className="category-list-link">{cat.title}</div>
                          <div className="submenu">
                            <div className="submenu-heading">
                              <h2>{cat.title}</h2>
                            </div>
                            <div className="submenu-detail">
                              <Row gutter={12}>
                                {cat.subcategories.length > 0 &&
                                  cat.subcategories.map((subcat, id) => {
                                    return (
                                      <Col sm={12} md={6} key={id}>
                                        <div className="list-product">
                                          <h3>{subcat.title}</h3>
                                          <ul>
                                            {subcat.childcategories.length >
                                              0 &&
                                              subcat.childcategories.map(
                                                (childcat, id) => {
                                                  return (
                                                    <li key={id}>
                                                      <Link to="/sub-cat-product">
                                                        {childcat.title}
                                                      </Link>
                                                    </li>
                                                  );
                                                }
                                              )}
                                          </ul>
                                        </div>
                                      </Col>
                                    );
                                  })}
                              </Row>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  {/* <li className="category-list">
                    <div className="category-list-link">
                      Electronics & Mobiles
                    </div>
                    <div className="submenu">
                      <div className="submenu-heading">
                        <h2>Electronics & Mobiles</h2>
                      </div>
                      <div className="row">
                        <div className="col-sm-6 col-md-6">
                          <div className="list-product">
                            <h3>Most Popular</h3>
                            <ul>
                              <li>
                                <Link to="/sub-cat-product">Mobiles</Link>
                              </li>
                              <li>
                                <Link to="/sub-cat-product">Laptops</Link>
                              </li>
                              <li>
                                <Link to="#">Computer</Link>
                              </li>
                              <li>
                                <Link to="#">Video Games</Link>
                              </li>
                              <li>
                                <Link to="#">Televisions</Link>
                              </li>
                              <li>
                                <Link to="#">Power Banks</Link>
                              </li>
                              <li>
                                <Link to="#">HeadPhones & Earphones</Link>
                              </li>
                              <li>
                                <Link to="#">Speakers</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                          <div className="list-product">
                            <h3>Top Brands</h3>
                            <ul>
                              <li>
                                <Link to="#">Mobiles</Link>
                              </li>
                              <li>
                                <Link to="#">Laptops</Link>
                              </li>
                              <li>
                                <Link to="#">Computer</Link>
                              </li>
                              <li>
                                <Link to="#">Video Games</Link>
                              </li>
                              <li>
                                <Link to="#">Televisions</Link>
                              </li>
                              <li>
                                <Link to="#">Power Banks</Link>
                              </li>
                              <li>
                                <Link to="#">HeadPhones & Earphones</Link>
                              </li>
                              <li>
                                <Link to="#">Speakers</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="inner-menu">
            <ul>
              {navCategories.length > 0 &&
                navCategories.map((cat, id) => {
                  return (
                    <li key={id}>
                      <Link to={"/cat-product/" + cat.id}>{cat.title}</Link>
                      <div className="cat-sub-menu">
                        <Row gutter={24}>
                          <Col xs={24} sm={16} md={16}>
                            <div className="mega-menu-list">
                              <ul>
                                {cat.subcategories.length > 0 &&
                                  cat.subcategories.map((subcat, id) => {
                                    return (
                                      <li key={id}>
                                        <img
                                          src={`${baseUrl}admin/images/subcategories/md/${subcat.image}`}
                                          onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src =
                                              "/images/default-image.jpg";
                                          }}
                                          alt="category"
                                        />

                                        <Link to="#">{subcat.title}</Link>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </Col>
                          <Col xs={24} sm={8} md={8}>
                            <div className="category-image">
                              <img
                                src={`${baseUrl}admin/images/categories/logo/org/${cat.logo_image}`}
                                alt="catImage"
                              />
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      <BackTop>
        <div className="back-to-top">
          <i className="fas fa-arrow-up"></i>
        </div>
      </BackTop>
    </div>
  );
}
export default Header;
