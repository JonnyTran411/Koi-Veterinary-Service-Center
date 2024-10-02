// src/components/services/Services.jsx
import {
  CalendarOutlined,
  MedicineBoxOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row, Typography } from "antd";
import React from "react";
import service1 from "../../assets/home/service1.jpg";
import service2 from "../../assets/home/service2.jpg";
import service3 from "../../assets/home/service3.jpg";
import "./Services.scss";

const { Title, Paragraph, Text } = Typography;

const services = [
  {
    id: 1,
    title: "Tư Vấn Trực Tuyến",
    description:
      "Đặt dịch vụ tư vấn trực tuyến với bác sĩ thú y để nhận được sự hỗ trợ chuyên nghiệp ngay tại nhà.",
    price: "200.000 VND",
    image: service1,
    icon: <CalendarOutlined />,
    link: "/appointments/online-consultation",
  },
  {
    id: 2,
    title: "Đánh Giá Hồ Cá Tại Nhà",
    description:
      "Đặt dịch vụ hẹn để bác sĩ thú y tới tận nhà đánh giá chất lượng hồ cá Koi và tư vấn cải thiện đạt chuẩn.",
    price: "500.000 VND + Chi Phí Di Chuyển",
    image: service2,
    icon: <PhoneOutlined />,
    link: "/appointments/home-evaluation",
  },
  {
    id: 3,
    title: "Điều Trị Bệnh Cho Cá",
    description:
      "Dịch vụ điều trị bệnh cho cá Koi tại nhà hoặc tại trung tâm với kê đơn thuốc cần thiết.",
    price: "300.000 VND - 700.000 VND",
    image: service3,
    icon: <MedicineBoxOutlined />,
    link: "/appointments/treatment",
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-header">
        <Title level={2}>Các Dịch Vụ Chúng Tôi Cung Cấp</Title>
        <Paragraph>
          KoiVet cung cấp các dịch vụ chuyên nghiệp để chăm sóc sức khỏe và phát
          triển hồ cá Koi của bạn. Chọn dịch vụ phù hợp để đảm bảo sức khỏe và
          sự phát triển tốt nhất cho cá Koi của bạn.
        </Paragraph>
      </section>

      <section className="services-list">
        <Row gutter={[16, 16]}>
          {services.map((service) => (
            <Col xs={24} sm={12} md={8} key={service.id}>
              <Card
                hoverable
                cover={<img alt={service.title} src={service.image} />}
                className="service-card"
              >
                <Card.Meta
                  avatar={service.icon}
                  title={<Title level={4}>{service.title}</Title>}
                  description={<Paragraph>{service.description}</Paragraph>}
                />
                <div className="service-price">
                  <Text strong>Giá: {service.price}</Text>
                </div>
                <Button
                  type="primary"
                  block
                  href={service.link}
                  icon={<CalendarOutlined />}
                >
                  Đặt Lịch Hẹn
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Services;
