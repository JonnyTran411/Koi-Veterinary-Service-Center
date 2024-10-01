import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import Footer from "./components/footer/Footer";
import Navigation from "./components/layout/navigation/Navigation";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Layout>
      <Navigation />
      <Content style={{ padding: "100px 50px 50px 50px" }}>
        <AppRoutes />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        © {new Date().getFullYear()} Koi Veterinary Service Center. All rights
        reserved.
      </Footer>
    </Layout>
  );
}

export default App;
