import {
  AppstoreOutlined,
  CalendarOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  LoginOutlined,
  MedicineBoxOutlined,
  MenuOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { PhoneOutlined } from "@mui/icons-material";
import { Button, Drawer, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.scss";

const { Header } = Layout;

const Navigation = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setCurrent(location.pathname);
  }, [location.pathname]);

  const handleClick = (e) => {
    setCurrent(e.key);
    setVisible(false); // Đóng Drawer khi chọn mục menu
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Header className="navigation">
      <div className="nav-container">
        {/* Phần bên trái: Logo và các đường link điều hướng */}
        <div className="nav-left">
          <div className="logo">
            <Link to="/">KoiVet</Link>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[current]}
            onClick={handleClick}
            className="menu desktop-menu"
          >
            <Menu.Item key="/" icon={<HomeOutlined />}>
              <Link to="/">Trang Chủ</Link>
            </Menu.Item>
            <Menu.Item key="/about" icon={<InfoCircleOutlined />}>
              <Link to="/about">Giới Thiệu</Link>
            </Menu.Item>
            <Menu.Item key="/services" icon={<AppstoreOutlined />}>
              <Link to="/services">Dịch Vụ</Link>
            </Menu.Item>
            <Menu.Item key="/appointments" icon={<CalendarOutlined />}>
              <Link to="/appointments">Đặt Lịch Hẹn</Link>
            </Menu.Item>
            <Menu.Item key="/veterian" icon={<MedicineBoxOutlined />}>
              <Link to="/veterian">Bác sĩ</Link>
            </Menu.Item>
            <Menu.Item key="/contact" icon={<PhoneOutlined />}>
              <Link to="/contact">Liên hệ</Link>
            </Menu.Item>
          </Menu>
        </div>

        {/* Phần bên phải: Đăng ký và Đăng nhập */}
        <div className="nav-right">
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[]}
            className="menu user-menu desktop-menu"
          >
            <Menu.Item key="/register" icon={<UserAddOutlined />}>
              <Link to="/register">Đăng Ký</Link>
            </Menu.Item>
            <Menu.Item key="/login" icon={<LoginOutlined />}>
              <Link to="/login">Đăng Nhập</Link>
            </Menu.Item>
          </Menu>
          {/* Nút Menu cho thiết bị di động */}
          <Button
            className="menu-button"
            type="primary"
            onClick={showDrawer}
            icon={<MenuOutlined />}
          />
        </div>
      </div>

      {/* Drawer cho thiết bị di động */}
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        className="mobile-menu"
      >
        <Menu mode="vertical" selectedKeys={[current]} onClick={handleClick}>
          <Menu.Item key="/" icon={<HomeOutlined />}>
            <Link to="/">Trang Chủ</Link>
          </Menu.Item>
          <Menu.Item key="/services" icon={<AppstoreOutlined />}>
            <Link to="/services">Dịch Vụ</Link>
          </Menu.Item>
          <Menu.Item key="/appointment" icon={<CalendarOutlined />}>
            <Link to="/appointment">Đặt Lịch Hẹn</Link>
          </Menu.Item>
          <Menu.Item key="/veterian" icon={<MedicineBoxOutlined />}>
            <Link to="/veterian">Bác sĩ</Link>
          </Menu.Item>
          <Menu.Item key="/contact" icon={<PhoneOutlined />}>
            <Link to="/contact">Liên hệ</Link>
          </Menu.Item>
          <Menu.Item key="/register" icon={<UserAddOutlined />}>
            <Link to="/register">Đăng Ký</Link>
          </Menu.Item>
          <Menu.Item key="/login" icon={<LoginOutlined />}>
            <Link to="/login">Đăng Nhập</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
};

export default Navigation;
