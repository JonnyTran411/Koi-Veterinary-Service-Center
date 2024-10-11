import { Google as GoogleIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./Register.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullname: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic (e.g., call an API to create a new user)
    console.log("Register Data:", formData);
  };

  return (
    <Container className="register-container" maxWidth="sm">
      <Box className="register-box" boxShadow={3} p={4} borderRadius={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Đăng Ký
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            name="username"
            fullWidth
            variant="outlined"
            margin="normal"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <TextField
            label="Mật Khẩu"
            name="password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <TextField
            label="Họ và Tên"
            name="fullname"
            fullWidth
            variant="outlined"
            margin="normal"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          <TextField
            label="Số Điện Thoại"
            name="phone"
            fullWidth
            variant="outlined"
            margin="normal"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            variant="outlined"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="register-button"
          >
            Đăng Ký
          </Button>
        </form>

        <Divider sx={{ my: 2 }}>Hoặc</Divider>

        <Button
          variant="outlined"
          color="primary"
          fullWidth
          className="google-register-button"
          startIcon={<GoogleIcon />}
        >
          Đăng Ký bằng Google
        </Button>

        <Typography align="center" variant="body2" sx={{ mt: 2 }}>
          Bạn đã có tài khoản?{" "}
          <Link
            href="/auth/login"
            className="link-hover-effect"
            variant="body2"
          >
            Đăng Nhập
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Register;
