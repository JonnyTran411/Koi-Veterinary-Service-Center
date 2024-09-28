import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import ForgetPassword from "./pages/auth/forgot-password/ForgetPassword";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import HomePage from "./pages/home/Homepage";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  // Danh sách các đường dẫn không hiển thị thanh điều hướng và chân trang
  const authPaths = ["/login", "/register", "/forgot-password"];

  // Kiểm tra xem đường dẫn hiện tại có nằm trong danh sách không
  const shouldHideNavAndFooter = authPaths.includes(location.pathname);

  return (
    <>
      {/* Hiển thị Navigation nếu không nằm trong authPaths */}
      {!shouldHideNavAndFooter && <Navigation />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/gioi-thieu" element={<GioiThieu />} /> */}
        {/* <Route path="/dich-vu" element={<DichVu />} /> */}
        {/* <Route path="/lien-he" element={<LienHe />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        {/* Thêm các route khác nếu cần */}
      </Routes>

      {/* Hiển thị Footer nếu không nằm trong authPaths */}
      {!shouldHideNavAndFooter && <Footer />}
    </>
  );
}

export default App;
