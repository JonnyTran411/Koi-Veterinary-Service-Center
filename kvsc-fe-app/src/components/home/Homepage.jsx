import { Container, Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Chào mừng đến với Koi Veterinary Service Center
      </Typography>
      <Typography variant="body1">
        Đây là trang chủ của trung tâm dịch vụ thú y cá Koi.
      </Typography>
    </Container>
  );
};

export default HomePage;
