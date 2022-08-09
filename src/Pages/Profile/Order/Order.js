import { useState, useEffect } from "react";
import axios from "axios";

import ProfileSidebar from "../../../Components/ProfileSidebar/ProfileSidebar";
import "./Order.scss";

import {
  Layout,
  Breadcrumb,
  Select,
  Tabs,
  Modal,
  Form,
  Input,
  Button,
  Rate,
  Alert,
} from "antd";

const { Content } = Layout;

const { Option } = Select;

const { TabPane } = Tabs;

function Profile(props) {
  const [recentProduct, setRecentProduct] = useState("");
  const [productId, setProductId] = useState("");
  const [message, setMessage] = useState("");
  const userObject = JSON.parse(localStorage && localStorage.getItem("user"));
  const userId = userObject.id; // we will remove in future
  const [isModelVisbile, setIsModelVisbile] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  useEffect(() => {
    RecentProductList();
  }, []);
  const showModel = (products) => {
    setIsModelVisbile(true);
    const productIdData = products.id;
    setProductId(productIdData);
    console.log("order", products.id);
  };
  const handleCancel = () => {
    setIsModelVisbile(false);
  };
  // const handleChangeReview = (value) => {
  //   setRating({ value });
  // };
  const handleOk = async (e) => {
    setIsModelVisbile(false);
    await axios
      .post(`/products/${productId}/reviews`, {
        review,
        userId, // we will remove in future
        rating,
      })
      .then((response) => {
        const data = response.data;
        const messageData = response;
        setMessage(messageData);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
    console.log("submit rev");
  };
  const RecentProductList = async (e) => {
    try {
      await axios.get("/admin/products").then((response) => {
        const recentProductData = response.data.products;
        setRecentProduct(recentProductData);
        console.log(recentProductData);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="order-page">
      <div className="order-page-inner">
        <div className="container">
          <Layout style={{ background: "#fff" }}>
            <ProfileSidebar />

            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Profile</Breadcrumb.Item>
                <Breadcrumb.Item>Order</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Tabs defaultActiveKey="1">
                  <TabPane tab="All" key="1">
                    <div className="profile-content-box">
                      <div className="order-show">
                        <label>Sort: </label>
                        <Select defaultValue="all-order" style={{ width: 150 }}>
                          <Option value="last-5-orders">Last 5 orders</Option>
                          <Option value="last-15-days">Last 15 days</Option>
                          <Option value="last-30-days">Last 30 days</Option>
                          <Option value="last-6-month">Last 6 months</Option>
                          <Option value="all-order">All Order</Option>
                        </Select>
                      </div>
                      <div className="order-card">
                        <div className="order-card-heading">
                          <h2>
                            Order <span>#123456987987856</span>
                          </h2>
                          <p>Placed on 02 Jun 2021 14:56:10</p>
                        </div>
                        <div className="order-card-detail">
                          <div className="order-card-detail-list">
                            <div className="order-image">
                              <img src="/images/fashion.png" alt="fashion" />
                            </div>
                            <div className="order-title">
                              <h2>15-dw2030ne Laptop With 15.6-Inch Display</h2>
                            </div>
                            <div className="order-quality">
                              <h2>
                                Qty: <span>1</span>
                              </h2>
                            </div>
                            <div className="order-status">
                              <p className="delivered">Delivered</p>
                            </div>
                            <div className="order-date">
                              <p>Delivered on 02 Jun 2021</p>
                            </div>
                          </div>
                          <div className="order-card-detail-list">
                            <div className="order-image">
                              <img src="/images/deal6.jpg" alt="fashion" />
                            </div>
                            <div className="order-title">
                              <h2>15-dw2030ne Laptop With 15.6-Inch Display</h2>
                            </div>
                            <div className="order-quality">
                              <h2>
                                Qty: <span>1</span>
                              </h2>
                            </div>
                            <div className="order-status">
                              <p className="shipped">shipped</p>
                            </div>
                            <div className="order-date">
                              <p>Delivered on 02 Jun 2021</p>
                            </div>
                          </div>
                          <div className="order-card-detail-list">
                            <div className="order-image">
                              <img src="/images/product1.jpg" alt="fashion" />
                            </div>
                            <div className="order-title">
                              <h2>15-dw2030ne Laptop With 15.6-Inch Display</h2>
                            </div>
                            <div className="order-quality">
                              <h2>
                                Qty: <span>1</span>
                              </h2>
                            </div>
                            <div className="order-status">
                              <p className="pending">pending</p>
                            </div>
                            <div className="order-date">
                              <p>Delivered on 02 Jun 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="order-card">
                        <div className="order-card-heading">
                          <h2>
                            Order <span>#123456987987856</span>
                          </h2>
                          <p>Placed on 02 Jun 2021 14:56:10</p>
                        </div>
                        <div className="order-card-detail">
                          <div className="order-card-detail-list">
                            <div className="order-image">
                              <img src="/images/product6.jpg" alt="fashion" />
                            </div>
                            <div className="order-title">
                              <h2>15-dw2030ne Laptop With 15.6-Inch Display</h2>
                            </div>
                            <div className="order-quality">
                              <h2>
                                Qty: <span>1</span>
                              </h2>
                            </div>
                            <div className="order-status">
                              <p className="delivered">Delivered</p>
                            </div>
                            <div className="order-date">
                              <p>Delivered on 02 Jun 2021</p>
                            </div>
                          </div>
                          <div className="order-card-detail-list">
                            <div className="order-image">
                              <img src="/images/fashion.png" alt="fashion" />
                            </div>
                            <div className="order-title">
                              <h2>15-dw2030ne Laptop With 15.6-Inch Display</h2>
                            </div>
                            <div className="order-quality">
                              <h2>
                                Qty: <span>1</span>
                              </h2>
                            </div>
                            <div className="order-status">
                              <p className="shipped">shipped</p>
                            </div>
                            <div className="order-date">
                              <p>Delivered on 02 Jun 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tab="To Pay" key="2">
                    To Pay Content
                  </TabPane>
                  <TabPane tab="To Ship" key="3">
                    To Ship Content
                  </TabPane>
                  <TabPane tab="To Receive(1)" key="4">
                    {/* {message?.length > 0 && (
                      <Alert message={message} type="success" />
                    )} */}

                    {recentProduct.length > 0 &&
                      recentProduct.map((data, id) => {
                        return (
                          <div className="received-order" key={id}>
                            <div className="order-card-detail">
                              <div className="order-card-detail-list">
                                <div className="order-image">
                                  <img
                                    src="/images/fashion.png"
                                    alt="fashion"
                                  />
                                </div>
                                <div className="order-title">
                                  <h2>{data.name}</h2>
                                </div>
                                <div className="order-quality">
                                  <h2>
                                    Qty: <span>1</span>
                                  </h2>
                                </div>
                                <div className="order-status">
                                  <p className="delivered">Delivered</p>
                                </div>
                                <div className="order-date">
                                  <p>Delivered on 02 Jun 2021</p>
                                  <div className="add-review">
                                    <Button
                                      type="primary"
                                      onClick={() => {
                                        showModel(data);
                                      }}
                                    >
                                      Write a Review
                                    </Button>
                                    <Modal
                                      title="Write a Review"
                                      visible={isModelVisbile}
                                      onCancel={handleCancel}
                                      onOk={handleOk}
                                    >
                                      <Form>
                                        <div className="write-review-star">
                                          <Rate
                                            onChange={(value) => {
                                              setRating(value);
                                            }}
                                            value={rating}
                                          />
                                        </div>

                                        <Form.Item
                                          name={["user", "review"]}
                                          label="Review"
                                        >
                                          <Input.TextArea
                                            onChange={(e) =>
                                              setReview(e.target.value)
                                            }
                                          />
                                        </Form.Item>
                                      </Form>
                                    </Modal>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
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
export default Profile;
