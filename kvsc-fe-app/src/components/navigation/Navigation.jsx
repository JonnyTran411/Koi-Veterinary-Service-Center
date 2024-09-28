import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Biểu tượng Menu */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo / Tiêu đề */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Logo
        </Typography>

        {/* Các nút điều hướng */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={RouterLink} to="/">
            Trang chủ
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            Giới thiệu
          </Button>
          <Button color="inherit" component={RouterLink} to="/services">
            Dịch vụ
          </Button>
          <Button color="inherit" component={RouterLink} to="/contact">
            Liên hệ
          </Button>
          <Button color="inherit" component={RouterLink} to="/register">
            Sign In
          </Button>
          <Button color="inherit" component={RouterLink} to="/login">
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
