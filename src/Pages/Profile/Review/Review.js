import ProfileSidebar from "../../../Components/ProfileSidebar/ProfileSidebar";
import { Select } from "antd";
import "./Review.scss";

import { Layout, Breadcrumb, Row, Col } from "antd";

const { Content } = Layout;

function Review() {
  const { Option } = Select;
  return (
    <div id="order-page">
      <div className="order-page-inner">
        <div className="container">
          <Layout style={{ background: "#fff" }}>
            <ProfileSidebar />

            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Profile</Breadcrumb.Item>
                <Breadcrumb.Item>Reviews</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <div className="profile-content-box">
                  <div className="review-system-main">
                    <div className="review-list-top">
                      <div className="review-total-info">
                        <p>1-8 of 28 Reviews</p>
                      </div>
                      <div className="review-sorting">
                        <Select
                          defaultValue="relevent"
                          style={{ width: "180px" }}
                        >
                          <Option value="relevent">
                            Sort by Most Relevent
                          </Option>
                          <Option value="top">Sort by Top</Option>
                          <Option value="bottom">Sort by Bottom</Option>
                        </Select>
                      </div>
                    </div>
                    <Row gutter={12}>
                      <Col xs={24} sm={24} md={4}>
                        <div className="review-product-widget">
                          <img src="/images/deal6.jpg" alt="" />
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={20}>
                        <div className="review-widget-listing">
                          <div className="user-review">
                            <h3>15-dw2030ne Laptop With 15.6-Inch Display,</h3>
                            <div className="user-stars">
                              <ul>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="far fa-star"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="user-rating-detail">
                              <h2>Date: April 20, 2020</h2>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row gutter={12}>
                      <Col xs={24} sm={24} md={4}>
                        <div className="review-product-widget">
                          <img src="/images/deal6.jpg" alt="" />
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={20}>
                        <div className="review-widget-listing">
                          <div className="user-review">
                            <h3>15-dw2030ne Laptop With 15.6-Inch Display,</h3>
                            <div className="user-stars">
                              <ul>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="far fa-star"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="user-rating-detail">
                              <h2>Date: April 20, 2020</h2>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                              </p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Content>
            </Layout>
          </Layout>
        </div>
      </div>
    </div>
  );
}
export default Review;
