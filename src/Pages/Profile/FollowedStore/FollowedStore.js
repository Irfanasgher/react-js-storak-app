import ProfileSidebar from "../../../Components/ProfileSidebar/ProfileSidebar";

import { Layout, Breadcrumb, Tabs, Row, Col } from "antd";

import { Link } from "react-router-dom";

const { Content } = Layout;

const { TabPane } = Tabs;

function FollowedStore() {
  return (
    <div id="order-page">
      <div className="order-page-inner">
        <div className="container">
          <Layout style={{ background: "#fff" }}>
            <ProfileSidebar />

            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Profile</Breadcrumb.Item>
                <Breadcrumb.Item>Wishlist and Followed Store</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Tabs defaultActiveKey="whishlist">
                  <TabPane tab="My Wishlist" key="whishlist">
                    <Row gutter={12}>
                      <Col xs={12} sm={12} md={8} lg={6}>
                        <div className="product-widget-theme-3">
                          <div className="product-image-theme-3">
                            <img
                              src="/images/product-theme-3-1.jpg"
                              alt="product"
                            />
                            <div className="product-category">Sony</div>
                            <Link to="#" className="cart-button">
                              Add to Cart
                            </Link>
                          </div>
                          <div className="product-desc-theme-3">
                            <Link to="product-detail" className="title">
                              ClassNameic Essentials 24-Piece Dinnerware Set
                              Silver 24-Piece
                            </Link>

                            <h2 className="Price">QAR 77.00</h2>
                            <div className="prev-price">
                              <div className="old-price">QAR 225.00</div>
                              <div className="percentage">42%</div>
                            </div>
                            <div className="product-bottom-detail">
                              <div className="rating">
                                <span>
                                  {" "}
                                  <i className="fas fa-star"></i>4.6
                                </span>
                                <p>(501)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} sm={12} md={8} lg={6}>
                        <div className="product-widget-theme-3">
                          <div className="product-image-theme-3">
                            <img
                              src="/images/product-theme-3-1.jpg"
                              alt="product"
                            />
                            <div className="product-category">Sony</div>
                            <Link to="#" className="cart-button">
                              Add to Cart
                            </Link>
                          </div>
                          <div className="product-desc-theme-3">
                            <Link to="product-detail" className="title">
                              ClassNameic Essentials 24-Piece Dinnerware Set
                              Silver 24-Piece
                            </Link>

                            <h2 className="Price">QAR 77.00</h2>
                            <div className="prev-price">
                              <div className="old-price">QAR 225.00</div>
                              <div className="percentage">42%</div>
                            </div>
                            <div className="product-bottom-detail">
                              <div className="rating">
                                <span>
                                  {" "}
                                  <i className="fas fa-star"></i>4.6
                                </span>
                                <p>(501)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} sm={12} md={8} lg={6}>
                        <div className="product-widget-theme-3">
                          <div className="product-image-theme-3">
                            <img
                              src="/images/product-theme-3-1.jpg"
                              alt="product"
                            />
                            <div className="product-category">Sony</div>
                            <Link to="#" className="cart-button">
                              Add to Cart
                            </Link>
                          </div>
                          <div className="product-desc-theme-3">
                            <Link to="product-detail" className="title">
                              ClassNameic Essentials 24-Piece Dinnerware Set
                              Silver 24-Piece
                            </Link>

                            <h2 className="Price">QAR 77.00</h2>
                            <div className="prev-price">
                              <div className="old-price">QAR 225.00</div>
                              <div className="percentage">42%</div>
                            </div>
                            <div className="product-bottom-detail">
                              <div className="rating">
                                <span>
                                  {" "}
                                  <i className="fas fa-star"></i>4.6
                                </span>
                                <p>(501)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} sm={12} md={8} lg={6}>
                        <div className="product-widget-theme-3">
                          <div className="product-image-theme-3">
                            <img
                              src="/images/product-theme-3-1.jpg"
                              alt="product"
                            />
                            <div className="product-category">Sony</div>
                            <Link to="#" className="cart-button">
                              Add to Cart
                            </Link>
                          </div>
                          <div className="product-desc-theme-3">
                            <Link to="product-detail" className="title">
                              ClassNameic Essentials 24-Piece Dinnerware Set
                              Silver 24-Piece
                            </Link>

                            <h2 className="Price">QAR 77.00</h2>
                            <div className="prev-price">
                              <div className="old-price">QAR 225.00</div>
                              <div className="percentage">42%</div>
                            </div>
                            <div className="product-bottom-detail">
                              <div className="rating">
                                <span>
                                  {" "}
                                  <i className="fas fa-star"></i>4.6
                                </span>
                                <p>(501)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} sm={12} md={8} lg={6}>
                        <div className="product-widget-theme-3">
                          <div className="product-image-theme-3">
                            <img
                              src="/images/product-theme-3-1.jpg"
                              alt="product"
                            />
                            <div className="product-category">Sony</div>
                            <Link to="#" className="cart-button">
                              Add to Cart
                            </Link>
                          </div>
                          <div className="product-desc-theme-3">
                            <Link to="product-detail" className="title">
                              ClassNameic Essentials 24-Piece Dinnerware Set
                              Silver 24-Piece
                            </Link>

                            <h2 className="Price">QAR 77.00</h2>
                            <div className="prev-price">
                              <div className="old-price">QAR 225.00</div>
                              <div className="percentage">42%</div>
                            </div>
                            <div className="product-bottom-detail">
                              <div className="rating">
                                <span>
                                  {" "}
                                  <i className="fas fa-star"></i>4.6
                                </span>
                                <p>(501)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} sm={12} md={8} lg={6}>
                        <div className="product-widget-theme-3">
                          <div className="product-image-theme-3">
                            <img
                              src="/images/product-theme-3-1.jpg"
                              alt="product"
                            />
                            <div className="product-category">Sony</div>
                            <Link to="#" className="cart-button">
                              Add to Cart
                            </Link>
                          </div>
                          <div className="product-desc-theme-3">
                            <Link to="product-detail" className="title">
                              ClassNameic Essentials 24-Piece Dinnerware Set
                              Silver 24-Piece
                            </Link>

                            <h2 className="Price">QAR 77.00</h2>
                            <div className="prev-price">
                              <div className="old-price">QAR 225.00</div>
                              <div className="percentage">42%</div>
                            </div>
                            <div className="product-bottom-detail">
                              <div className="rating">
                                <span>
                                  {" "}
                                  <i className="fas fa-star"></i>4.6
                                </span>
                                <p>(501)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} sm={12} md={8} lg={6}>
                        <div className="product-widget-theme-3">
                          <div className="product-image-theme-3">
                            <img
                              src="/images/product-theme-3-1.jpg"
                              alt="product"
                            />
                            <div className="product-category">Sony</div>
                            <Link to="#" className="cart-button">
                              Add to Cart
                            </Link>
                          </div>
                          <div className="product-desc-theme-3">
                            <Link to="product-detail" className="title">
                              ClassNameic Essentials 24-Piece Dinnerware Set
                              Silver 24-Piece
                            </Link>

                            <h2 className="Price">QAR 77.00</h2>
                            <div className="prev-price">
                              <div className="old-price">QAR 225.00</div>
                              <div className="percentage">42%</div>
                            </div>
                            <div className="product-bottom-detail">
                              <div className="rating">
                                <span>
                                  {" "}
                                  <i className="fas fa-star"></i>4.6
                                </span>
                                <p>(501)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} sm={12} md={8} lg={6}>
                        <div className="product-widget-theme-3">
                          <div className="product-image-theme-3">
                            <img
                              src="/images/product-theme-3-1.jpg"
                              alt="product"
                            />
                            <div className="product-category">Sony</div>
                            <Link to="#" className="cart-button">
                              Add to Cart
                            </Link>
                          </div>
                          <div className="product-desc-theme-3">
                            <Link to="product-detail" className="title">
                              ClassNameic Essentials 24-Piece Dinnerware Set
                              Silver 24-Piece
                            </Link>

                            <h2 className="Price">QAR 77.00</h2>
                            <div className="prev-price">
                              <div className="old-price">QAR 225.00</div>
                              <div className="percentage">42%</div>
                            </div>
                            <div className="product-bottom-detail">
                              <div className="rating">
                                <span>
                                  {" "}
                                  <i className="fas fa-star"></i>4.6
                                </span>
                                <p>(501)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tab="Last Purchases" key="LastPurchases">
                    Last Purchases
                  </TabPane>
                  <TabPane tab="Followed Stores" key="FollowedStore">
                    FollowedStore
                  </TabPane>
                </Tabs>
              </Content>
            </Layout>
          </Layout>
        </div>
      </div>
    </div>
  );
}
export default FollowedStore;
