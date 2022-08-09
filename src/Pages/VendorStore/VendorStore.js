import { Fragment } from "react";
import { Tooltip, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { StarFilled, ShoppingCartOutlined } from "@ant-design/icons";

import screenBackground from "./../../images/thankyou-bg.jpg";
import VendorProductCard from "../../Components/VendorProductCard/VendorProductCard";
import VendorRatedProductCard from "../../Components/VendorRatedProductCard/VendorRatedProductCard";
import "./VendorStore.scss";

function VendorStore() {
  return (
    <div className="vendor-store-page">
      <Fragment>
        <div className="store-banner">
          <img src="/images/store-banner.jpg" alt="store-cover-banner" />
        </div>
        <div className="store-inner-detail">
          <div className="latest-product-store">
            <div className="container">
              <div className="store-section">
                <div className="store-heading">
                  <h2>Latest Product</h2>
                </div>
                <Row gutter={12}>
                  <Col xs={12} sm={12} md={12} lg={6}>
                    <div className="store-widget">
                      <Row gutter={12}>
                        <Col md={10}>
                          <div className="store-widget-image">
                            <img src="/images/product1.png" alt="" />
                          </div>
                        </Col>
                        <Col md={14}>
                          <div className="store-widget-detail">
                            <h2>Ice White Airpods</h2>
                            <h3>899 QAR</h3>
                            <ul>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                            </ul>
                            <Tooltip placement="right" title="Add to Cart">
                              <Link to="#">
                                <ShoppingCartOutlined />
                              </Link>
                            </Tooltip>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6}>
                    <div className="store-widget">
                      <Row gutter={12}>
                        <Col md={10}>
                          <div className="store-widget-image">
                            <img src="/images/product1.png" alt="" />
                          </div>
                        </Col>
                        <Col md={14}>
                          <div className="store-widget-detail">
                            <h2>Ice White Airpods</h2>
                            <h3>899 QAR</h3>
                            <ul>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                            </ul>
                            <Tooltip placement="right" title="Add to Cart">
                              <Link to="#">
                                <ShoppingCartOutlined />
                              </Link>
                            </Tooltip>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6}>
                    <div className="store-widget">
                      <Row gutter={12}>
                        <Col md={10}>
                          <div className="store-widget-image">
                            <img src="/images/product1.png" alt="" />
                          </div>
                        </Col>
                        <Col md={14}>
                          <div className="store-widget-detail">
                            <h2>Ice White Airpods</h2>
                            <h3>899 QAR</h3>
                            <ul>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                            </ul>
                            <Tooltip placement="right" title="Add to Cart">
                              <Link to="#">
                                <ShoppingCartOutlined />
                              </Link>
                            </Tooltip>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6}>
                    <div className="store-widget">
                      <Row gutter={12}>
                        <Col md={10}>
                          <div className="store-widget-image">
                            <img src="/images/product1.png" alt="" />
                          </div>
                        </Col>
                        <Col md={14}>
                          <div className="store-widget-detail">
                            <h2>Ice White Airpods</h2>
                            <h3>899 QAR</h3>
                            <ul>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                            </ul>
                            <Tooltip placement="right" title="Add to Cart">
                              <Link to="#">
                                <ShoppingCartOutlined />
                              </Link>
                            </Tooltip>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6}>
                    <div className="store-widget">
                      <Row gutter={12}>
                        <Col md={10}>
                          <div className="store-widget-image">
                            <img src="/images/product1.png" alt="" />
                          </div>
                        </Col>
                        <Col md={14}>
                          <div className="store-widget-detail">
                            <h2>Ice White Airpods</h2>
                            <h3>899 QAR</h3>
                            <ul>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                            </ul>
                            <Tooltip placement="right" title="Add to Cart">
                              <Link to="#">
                                <ShoppingCartOutlined />
                              </Link>
                            </Tooltip>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6}>
                    <div className="store-widget">
                      <Row gutter={12}>
                        <Col md={10}>
                          <div className="store-widget-image">
                            <img src="/images/product1.png" alt="" />
                          </div>
                        </Col>
                        <Col md={14}>
                          <div className="store-widget-detail">
                            <h2>Ice White Airpods</h2>
                            <h3>899 QAR</h3>
                            <ul>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                            </ul>
                            <Tooltip placement="right" title="Add to Cart">
                              <Link to="#">
                                <ShoppingCartOutlined />
                              </Link>
                            </Tooltip>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6}>
                    <div className="store-widget">
                      <Row gutter={12}>
                        <Col md={10}>
                          <div className="store-widget-image">
                            <img src="/images/product1.png" alt="" />
                          </div>
                        </Col>
                        <Col md={14}>
                          <div className="store-widget-detail">
                            <h2>Ice White Airpods</h2>
                            <h3>899 QAR</h3>
                            <ul>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                            </ul>
                            <Tooltip placement="right" title="Add to Cart">
                              <Link to="#">
                                <ShoppingCartOutlined />
                              </Link>
                            </Tooltip>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6}>
                    <div className="store-widget">
                      <Row gutter={12}>
                        <Col md={10}>
                          <div className="store-widget-image">
                            <img src="/images/product1.png" alt="" />
                          </div>
                        </Col>
                        <Col md={14}>
                          <div className="store-widget-detail">
                            <h2>Ice White Airpods</h2>
                            <h3>899 QAR</h3>
                            <ul>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                              <li>
                                <StarFilled />
                              </li>
                            </ul>
                            <Tooltip placement="right" title="Add to Cart">
                              <Link to="#">
                                <ShoppingCartOutlined />
                              </Link>
                            </Tooltip>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div
            className="top-featured-store"
            style={{ backgroundImage: `url(${screenBackground})` }}
          >
            <div className="container">
              <div className="featured-product-inner">
                <div className="load-more-featured">
                  <Link to="/store-featured-product">View More</Link>
                </div>
                <div className="store-heading">
                  <h2>Featured Product</h2>
                </div>
                <Row gutter={12}>
                  <Col xs={12} sm={12} md={8} lg={4}>
                    <VendorProductCard />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={4}>
                    <VendorProductCard />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={4}>
                    <VendorProductCard />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={4}>
                    <VendorProductCard />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={4}>
                    <VendorProductCard />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={4}>
                    <VendorProductCard />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={4}>
                    <VendorProductCard />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={4}>
                    <VendorProductCard />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={4}>
                    <VendorProductCard />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={4}>
                    <VendorProductCard />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={4}>
                    <VendorProductCard />
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={4}>
                    <VendorProductCard />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div className="top-rated-store">
            <div className="container">
              <div className="featured-product-inner">
                <div className="load-more-featured">
                  <Link to="#">View More</Link>
                </div>
                <div className="store-heading">
                  <h2>Top Rated Product</h2>
                </div>
                <div className="top-rated-store-inner">
                  <Row gutter={12}>
                    <Col xs={12} sm={12} md={8} lg={4}>
                      <div className="top-rated-store-widget">
                        <Tooltip placement="top" title="Add to Cart">
                          <Link to="#" className="cart-hover">
                            <ShoppingCartOutlined />
                          </Link>
                        </Tooltip>
                        <img src="/images/product1.png" alt="" />
                        <div className="new">QAR 999</div>
                        <div className="old">QAR 1045</div>
                        <h2>Digital Camera XF-21</h2>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={4}>
                      <div className="top-rated-store-widget">
                        <Tooltip placement="top" title="Add to Cart">
                          <Link to="#" className="cart-hover">
                            <ShoppingCartOutlined />
                          </Link>
                        </Tooltip>
                        <img src="/images/product1.png" alt="" />
                        <div className="new">QAR 999</div>
                        <div className="old">QAR 1045</div>
                        <h2>Digital Camera XF-21</h2>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={4}>
                      <div className="top-rated-store-widget">
                        <Tooltip placement="top" title="Add to Cart">
                          <Link to="#" className="cart-hover">
                            <ShoppingCartOutlined />
                          </Link>
                        </Tooltip>
                        <img src="/images/product1.png" alt="" />
                        <div className="new">QAR 999</div>
                        <div className="old">QAR 1045</div>
                        <h2>Digital Camera XF-21</h2>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={4}>
                      <div className="top-rated-store-widget">
                        <Tooltip placement="top" title="Add to Cart">
                          <Link to="#" className="cart-hover">
                            <ShoppingCartOutlined />
                          </Link>
                        </Tooltip>
                        <img src="/images/product1.png" alt="" />
                        <div className="new">QAR 999</div>
                        <div className="old">QAR 1045</div>
                        <h2>Digital Camera XF-21</h2>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={4}>
                      <div className="top-rated-store-widget">
                        <Tooltip placement="top" title="Add to Cart">
                          <Link to="#" className="cart-hover">
                            <ShoppingCartOutlined />
                          </Link>
                        </Tooltip>
                        <img src="/images/product1.png" alt="" />
                        <div className="new">QAR 999</div>
                        <div className="old">QAR 1045</div>
                        <h2>Digital Camera XF-21</h2>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={4}>
                      <div className="top-rated-store-widget">
                        <Tooltip placement="top" title="Add to Cart">
                          <Link to="#" className="cart-hover">
                            <ShoppingCartOutlined />
                          </Link>
                        </Tooltip>
                        <img src="/images/product1.png" alt="" />
                        <div className="new">QAR 999</div>
                        <div className="old">QAR 1045</div>
                        <h2>Digital Camera XF-21</h2>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={4}>
                      <div className="top-rated-store-widget">
                        <Tooltip placement="top" title="Add to Cart">
                          <Link to="#" className="cart-hover">
                            <ShoppingCartOutlined />
                          </Link>
                        </Tooltip>
                        <img src="/images/product1.png" alt="" />
                        <div className="new">QAR 999</div>
                        <div className="old">QAR 1045</div>
                        <h2>Digital Camera XF-21</h2>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={4}>
                      <div className="top-rated-store-widget">
                        <Tooltip placement="top" title="Add to Cart">
                          <Link to="#" className="cart-hover">
                            <ShoppingCartOutlined />
                          </Link>
                        </Tooltip>
                        <img src="/images/product1.png" alt="" />
                        <div className="new">QAR 999</div>
                        <div className="old">QAR 1045</div>
                        <h2>Digital Camera XF-21</h2>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={4}>
                      <div className="top-rated-store-widget">
                        <Tooltip placement="top" title="Add to Cart">
                          <Link to="#" className="cart-hover">
                            <ShoppingCartOutlined />
                          </Link>
                        </Tooltip>
                        <img src="/images/product1.png" alt="" />
                        <div className="new">QAR 999</div>
                        <div className="old">QAR 1045</div>
                        <h2>Digital Camera XF-21</h2>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={4}>
                      <div className="top-rated-store-widget">
                        <Tooltip placement="top" title="Add to Cart">
                          <Link to="#" className="cart-hover">
                            <ShoppingCartOutlined />
                          </Link>
                        </Tooltip>
                        <img src="/images/product1.png" alt="" />
                        <div className="new">QAR 999</div>
                        <div className="old">QAR 1045</div>
                        <h2>Digital Camera XF-21</h2>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={4}>
                      <div className="top-rated-store-widget">
                        <Tooltip placement="top" title="Add to Cart">
                          <Link to="#" className="cart-hover">
                            <ShoppingCartOutlined />
                          </Link>
                        </Tooltip>
                        <img src="/images/product1.png" alt="" />
                        <div className="new">QAR 999</div>
                        <div className="old">QAR 1045</div>
                        <h2>Digital Camera XF-21</h2>
                      </div>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={4}>
                      <div className="top-rated-store-widget">
                        <Tooltip placement="top" title="Add to Cart">
                          <Link to="#" className="cart-hover">
                            <ShoppingCartOutlined />
                          </Link>
                        </Tooltip>
                        <img src="/images/product1.png" alt="" />
                        <div className="new">QAR 999</div>
                        <div className="old">QAR 1045</div>
                        <h2>Digital Camera XF-21</h2>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
          <div className="top-rated-store backgound-gray">
            <div className="container">
              <div className="featured-product-inner">
                <div className="load-more-featured">
                  <Link to="/store-top-rated-product">View More</Link>
                </div>
                <div className="store-heading">
                  <h2>Top Rated Sale Product</h2>
                </div>
                <Row gutter={24}>
                  <Col xs={12} sm={12} md={12} lg={6}>
                    <VendorRatedProductCard />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6}>
                    <VendorRatedProductCard />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6}>
                    <VendorRatedProductCard />
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={6}>
                    <VendorRatedProductCard />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
}
export default VendorStore;
