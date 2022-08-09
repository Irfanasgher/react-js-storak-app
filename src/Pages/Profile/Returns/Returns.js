import ProfileSidebar from "../../../Components/ProfileSidebar/ProfileSidebar";

import { Layout, Breadcrumb, Table, Button } from "antd";

import "./Returns.scss";

const { Content } = Layout;
const dataSource = [
  {
    key: "1",
    productimage: "/images/deal6.jpg",
    title: "title name",
    quantity: 1,
    status: "pending",
  },
  {
    key: "2",
    productimage: "/images/deal5.jpg",
    title: "title name",
    quantity: 1,
    status: "cancelled",
  },
  {
    key: "3",
    productimage: "/images/deal6.jpg",
    title: "title name",
    quantity: 1,
    status: "pending",
  },
  {
    key: "4",
    productimage: "/images/deal5.jpg",
    title: "title name",
    quantity: 1,
    status: "cancelled",
  },
];

const columns = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (text, record) => {
      return (
        <div className="return-iamge">
          <img src={record.productimage} alt="" />
        </div>
      );
    },
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (_, record) => (
      <Button type="primary" danger={!record.status}>
        {_}
      </Button>
    ),
  },
];
function Returns() {
  return (
    <div id="order-page">
      <div className="order-page-inner">
        <div className="container">
          <Layout style={{ background: "#fff" }}>
            <ProfileSidebar />

            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Profile</Breadcrumb.Item>
                <Breadcrumb.Item>Returns</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Table dataSource={dataSource} columns={columns} />
              </Content>
            </Layout>
          </Layout>
        </div>
      </div>
    </div>
  );
}
export default Returns;
