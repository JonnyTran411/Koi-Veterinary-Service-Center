import { Layout } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
// import "./CustomerLayout.scss";
import Footer from "../layout/footer/Footer";
import Navigation from "../layout/navigation/Navigation";

const { Content } = Layout;

const CustomerLayout = () => {
  return (
    <Layout>
      <Navigation />
      <Content style={{ padding: "80px 0px 0px 0px" }}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};
export default CustomerLayout;
