import { Button, Layout, Menu } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import React from "react";
import "./Navigation.scss";

const { Header } = Layout;

const Navigation = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo">
          {/* Thay thế bằng logo thật nếu có */}
          <img src="logo192.png" alt="Koi Veterinary Center" />
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          className="menu"
        >
          <Menu.Item key="1">Trang chủ</Menu.Item>
          <Menu.Item key="2">Giới thiệu</Menu.Item>
          <Menu.Item key="3">Dịch vụ</Menu.Item>

          {/* SubMenu cho Đặt lịch hẹn */}
          <SubMenu key="SubMenu" title="Đặt lịch hẹn">
            <Menu.Item key="4">Tư vấn trực tuyến</Menu.Item>
            <Menu.Item key="5">Kiểm tra tại nhà</Menu.Item>
            <Menu.Item key="6">Điều trị bệnh</Menu.Item>
          </SubMenu>

          <Menu.Item key="7">Hỗ trợ</Menu.Item>
        </Menu>
        <div className="buttons">
          <Button type="default" className="register-btn">
            Đăng ký
          </Button>
          <Button type="primary" className="login-btn">
            Đăng nhập
          </Button>
        </div>
      </Header>
    </Layout>
  );
};

export default Navigation;
