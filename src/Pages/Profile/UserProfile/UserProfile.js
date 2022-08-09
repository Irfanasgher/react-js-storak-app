import ProfileSidebar from "../../../Components/ProfileSidebar/ProfileSidebar";
import "./UserProfile.scss";

import {
  Layout,
  Breadcrumb,
  Card,
  Form,
  Input,
  Row,
  Col,
  Select,
  Button,
} from "antd";

const { Content } = Layout;
const { Option } = Select;

function Profile() {
  return (
    <div id="order-page">
      <div className="order-page-inner">
        <div className="container">
          <Layout style={{ background: "#fff" }}>
            <ProfileSidebar />

            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Profile</Breadcrumb.Item>
                <Breadcrumb.Item>Manage Profile</Breadcrumb.Item>
              </Breadcrumb>
              <Content>
                <div className="profile-content-box">
                  <Card type="inner" title="General Information">
                    <Form>
                      <Row gutter={12}>
                        <Col xs={24} sm={24} md={12}>
                          <Form.Item label="Name" name="name">
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12}>
                          <Form.Item label="Email" name="Email">
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12}>
                          <Form.Item name="gender" label="Gender">
                            <Select placeholder="Select Gender" allowClear>
                              <Option value="male">Male</Option>
                              <Option value="female">Female</Option>
                              <Option value="other">Other</Option>
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={24} md={12}>
                          <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                              {
                                required: true,
                                message: "Please input your password!",
                              },
                            ]}
                          >
                            <Input.Password />
                          </Form.Item>
                        </Col>
                      </Row>
                      <div className="profile-save">
                        <Button type="primary">Save</Button>
                      </div>
                    </Form>
                  </Card>
                </div>
              </Content>
            </Layout>
          </Layout>
        </div>
      </div>
    </div>
  );
}
export default Profile;
