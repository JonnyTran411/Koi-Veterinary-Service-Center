import { BellOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Dropdown, Layout, Menu } from "antd";
import React from "react";
import "./Header.scss";

const { Header } = Layout;

const VeterinarianHeader = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        Tài khoản của tôi
      </Menu.Item>
      <Menu.Item key="2" icon={<SettingOutlined />}>
        Cài đặt
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="admin-header">
      <div className="admin-header-left">Admin Panel</div>
      <div className="admin-header-right">
        <BellOutlined />
        <Dropdown overlay={menu}>
          <div className="ant-dropdown-trigger">
            <UserOutlined />
            <span className="admin-username">Veterinarian</span>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default VeterinarianHeader;
