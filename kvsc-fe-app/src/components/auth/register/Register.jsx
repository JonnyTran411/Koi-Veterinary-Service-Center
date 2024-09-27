import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../redux/actions/authActions";
import "./Register.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    fullName: "",
    phone: "",
    email: "",
    role: {
      roleId: 1,
      roleName: "Customer",
    },
  });

  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleInputChange}
          placeholder="Nhập tên đăng nhập"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Nhập mật khẩu"
          required
        />
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          placeholder="Nhập họ và tên"
          required
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Nhập số điện thoại"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Nhập email"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Đang đăng ký..." : "Đăng ký"}
        </button>

        {/* Display error message */}
        {error && <p className="error-message">{error}</p>}

        {/* Display success message */}
        {data && (
          <p className="success-message">
            Registration successful! Welcome, {data.userName}!
          </p>
        )}
      </form>
    </div>
  );
};

export default Register;
