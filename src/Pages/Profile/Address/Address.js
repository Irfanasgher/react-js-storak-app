import { useState } from "react";
import ProfileSidebar from "../../../Components/ProfileSidebar/ProfileSidebar";

import "./Address.scss";

import { Layout, Breadcrumb, Button, Row, Col, Modal, Form, Input } from "antd";

const { Content } = Layout;

function Address() {
  const [isModelVisbile, setIsModelVisbile] = useState(false);
  const showModel = () => {
    setIsModelVisbile(true);
    console.log("showmodel");
  };
  const handleCancel = () => {
    setIsModelVisbile(false);
  };
  const handleOk = () => {
    setIsModelVisbile(false);
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
                <Breadcrumb.Item>Address</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <div className="address-main-part">
                  <div className="new-address">
                    <Button type="primary" onClick={showModel}>
                      Add a new address
                    </Button>
                    <Modal
                      title="Add New Address"
                      visible={isModelVisbile}
                      onCancel={handleCancel}
                      onOk={handleOk}
                      okText="Add"
                    >
                      <div className="address-field">
                        <Form layout="vertical">
                          <Row>
                            <Col span={24}>
                              <Form.Item label="Mobile Phone">
                                <Input />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row gutter={12}>
                            <Col span={12}>
                              <Form.Item label="First Name">
                                <Input />
                              </Form.Item>
                            </Col>
                            <Col span={12}>
                              <Form.Item label="Last Name">
                                <Input />
                              </Form.Item>
                            </Col>
                          </Row>
                          <Row>
                            <Col span={24}>
                              <Form.Item label="Introduction">
                                <Input.TextArea />
                              </Form.Item>
                            </Col>
                          </Row>
                        </Form>
                      </div>
                    </Modal>
                  </div>
                  <div className="address-widget">
                    <h2 className="heading">Primary Address</h2>
                    <div className="inner-address-widget">
                      <Row gutter={16}>
                        <Col md={6}>
                          <div className="address-content-widget">
                            <span>Name</span>
                            <p>User Name</p>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="address-content-widget">
                            <span>Address</span>
                            <p>
                              Al Badaa, Aswaaq community mall, Al Badaa,
                              opposite to the mall entrance,
                            </p>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="address-content-widget">
                            <span>Phone Number</span>
                            <p>+971-50-1234567</p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className="address-widget">
                    <h2 className="heading">Other Addressess</h2>
                    <div className="inner-address-widget">
                      <Row gutter={16}>
                        <Col md={6}>
                          <div className="address-content-widget">
                            <span>Name</span>
                            <p>User Name</p>
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="address-content-widget">
                            <span>Address</span>
                            <p>
                              Al Badaa, Aswaaq community mall, Al Badaa,
                              opposite to the mall entrance,
                            </p>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="address-content-widget">
                            <span>Phone Number</span>
                            <p>+971-50-1234567</p>
                          </div>
                        </Col>
                      </Row>
                    </div>
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
export default Address;
