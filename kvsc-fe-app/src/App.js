import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import Footer from "./components/layout/footer/Footer";
import Navigation from "./components/layout/navigation/Navigation";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Layout>
      <Navigation />
      <Content style={{ padding: "50px 0px 0px 0px" }}>
        <AppRoutes />
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
