import { useHistory, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./ProfileSidebar.scss";
import {
  SmileOutlined,
  InboxOutlined,
  HeartOutlined,
  PicLeftOutlined,
  RollbackOutlined,
  EnvironmentOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const items = [
  {
    key: "/profile/manage-profile",
    label: "Profile",
    path: "/profile/manage-profile",
    icon: <SmileOutlined />,
  },
  {
    key: "/profile/order",
    label: "My Order",
    path: "/profile/order",
    icon: <InboxOutlined />,
  },
  {
    key: "/profile/followed-store",
    label: "WishList and Followed Store",
    path: "/profile/followed-store",
    icon: <HeartOutlined />,
  },
  {
    key: "/profile/review",
    label: "My Review",
    path: "/profile/review",
    icon: <PicLeftOutlined />,
  },
  {
    key: "/profile/question",
    label: "My Question",
    path: "/profile/question",
    icon: <QuestionCircleOutlined />,
  },
  {
    key: "/profile/address",
    label: "Address",
    path: "/profile/address",
    icon: <EnvironmentOutlined />,
  },
  {
    key: "/profile/return",
    label: "Refunds",
    path: "/profile/return",
    icon: <RollbackOutlined />,
  },
];
function ProfileSidebar() {
  const location = useLocation();
  const history = useHistory();

  const onClickMenu = (item) => {
    const clicked = items.find((_item) => _item.key === item.key);
    history.push(clicked.path);
  };
  return (
    <div>
      <Layout.Sider
        className="sidebar"
        breakpoint={"lg"}
        theme="light"
        collapsedWidth={85}
        trigger={null}
        width={250}
      >
        <div className="user-dashboar-sidebar">
          <Menu
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
            defaultOpenKeys={[location.pathname]}
            selectedKeys={[location.pathname]}
            onClick={onClickMenu}
            style={{ height: "100%", borderRight: 0 }}
          >
            {items.map((item) => (
              <Menu.Item icon={item.icon} key={item.key}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </Layout.Sider>
    </div>

    // <Sider width={250} className="site-layout-background">
    //   <div className="user-dashboar-sidebar">
    //     <Menu
    //       mode="inline"
    //       defaultSelectedKeys={[location.pathname]}
    //       defaultOpenKeys={[location.pathname]}
    //       selectedKeys={[location.pathname]}
    //       onClick={onClickMenu}
    //       style={{ height: "100%", borderRight: 0 }}
    //     >
    //       {items.map((item) => (
    //         <Menu.Item icon={item.icon} key={item.key}>
    //           {item.label}
    //         </Menu.Item>
    //       ))}
    //     </Menu>
    //   </div>
    // </Sider>
  );
}
export default ProfileSidebar;
