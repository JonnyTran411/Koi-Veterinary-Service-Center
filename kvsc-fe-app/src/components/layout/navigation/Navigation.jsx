import { Button, Menu } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  const location = useLocation(); // Lấy đường dẫn hiện tại
  const selectedKey = location.pathname; // Lấy pathname hiện tại để làm key cho menu

  return (
    <div className="navigation">
      {/* Logo */}
      <div className="logo">
        <img
          src="/logo192.png"
          alt="Koi Veterinary Center"
          style={{ height: "40px" }}
        />
      </div>

      {/* Menu */}
      <Menu mode="horizontal" selectedKeys={[selectedKey]} className="menu">
        <Menu.Item key="/">
          <Link to="/">Trang chủ</Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/about">Giới thiệu</Link>
        </Menu.Item>
        <Menu.Item key="/services">
          <Link to="/services">Dịch vụ</Link>
        </Menu.Item>

        <Menu.SubMenu key="/services/appointment" title="Đặt lịch hẹn">
          <Menu.Item key="/services/online-consultation">
            <Link to="/services/online-consultation">Tư vấn trực tuyến</Link>
          </Menu.Item>
          <Menu.Item key="/services/home-checkup">
            <Link to="/services/home-checkup">Kiểm tra tại nhà</Link>
          </Menu.Item>
          <Menu.Item key="/services/treatment">
            <Link to="/services/treatment">Điều trị bệnh</Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key="/support">
          <Link to="/support">Hỗ trợ</Link>
        </Menu.Item>
      </Menu>

      {/* Nút Đăng ký và Đăng nhập */}
      <div className="auth-buttons">
        <Button type="default" className="register-btn">
          <Link to="/register">Đăng ký</Link>
        </Button>
        <Button type="primary" className="login-btn">
          <Link to="/login">Đăng nhập</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
