// src/components/home/Home.jsx
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button, Card, Carousel, Col, Form, Input, message, Row } from "antd";
import React from "react";
import "./Homepage.scss";

// Sample data for services
const services = [
  {
    title: "Khám Sức Khỏe",
    description:
      "Đảm bảo sức khỏe cho thú cưng của bạn với các gói khám toàn diện.",
    icon: <PhoneOutlined style={{ fontSize: "40px", color: "#1890ff" }} />,
  },
  {
    title: "Phẫu Thuật",
    description: "Cung cấp các dịch vụ phẫu thuật chuyên nghiệp và an toàn.",
    icon: (
      <EnvironmentOutlined style={{ fontSize: "40px", color: "#1890ff" }} />
    ),
  },
  {
    title: "Tiêm Phòng",
    description:
      "Bảo vệ thú cưng khỏi các bệnh nguy hiểm thông qua tiêm phòng.",
    icon: <MailOutlined style={{ fontSize: "40px", color: "#1890ff" }} />,
  },
  // Thêm các dịch vụ khác nếu cần
];

// Sample data for testimonials
const testimonials = [
  {
    name: "Nguyễn Văn A",
    feedback: "Trung tâm thú y KoiVet luôn chăm sóc thú cưng của tôi rất tốt!",
  },
  {
    name: "Trần Thị B",
    feedback: "Dịch vụ chuyên nghiệp và thân thiện. Rất đáng tin cậy!",
  },
  {
    name: "Lê Văn C",
    feedback: "Giá cả hợp lý và đội ngũ bác sĩ rất tận tâm.",
  },
  // Thêm các phản hồi khác nếu cần
];

const Homepage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    message.success("Đăng ký nhận tin thành công!");
    form.resetFields();
    // Xử lý đăng ký nhận tin tại đây (gọi API, validation, v.v.)
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <Carousel autoplay>
          <div>
            <img src="/images/hero1.jpg" alt="Hero 1" />
            <div className="carousel-caption">
              <h1>Chăm sóc sức khỏe thú cưng của bạn</h1>
              <p>
                Đảm bảo một cuộc sống khỏe mạnh và hạnh phúc cho thú cưng của
                bạn.
              </p>
              <Button type="primary" size="large">
                Đặt Lịch Hẹn
              </Button>
            </div>
          </div>
          <div>
            <img src="/images/hero2.jpg" alt="Hero 2" />
            <div className="carousel-caption">
              <h1>Dịch vụ chuyên nghiệp</h1>
              <p>Đội ngũ bác sĩ thú y giàu kinh nghiệm và tận tâm.</p>
              <Button type="primary" size="large">
                Khám Sức Khỏe
              </Button>
            </div>
          </div>
          {/* Thêm các slide khác nếu cần */}
        </Carousel>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} md={12}>
            <img
              src="/images/about-us.jpg"
              alt="About Us"
              className="about-image"
            />
          </Col>
          <Col xs={24} md={12}>
            <h2>Về Chúng Tôi</h2>
            <p>
              Trung tâm thú y KoiVet cam kết mang đến dịch vụ chăm sóc sức khỏe
              tốt nhất cho thú cưng của bạn. Với đội ngũ bác sĩ chuyên nghiệp và
              cơ sở vật chất hiện đại, chúng tôi luôn nỗ lực để đảm bảo sự hài
              lòng của khách hàng.
            </p>
            <Button type="primary">Tìm Hiểu Thêm</Button>
          </Col>
        </Row>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Dịch Vụ Của Chúng Tôi</h2>
        <Row gutter={[16, 16]}>
          {services.map((service, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card
                hoverable
                className="service-card"
                cover={<div className="service-icon">{service.icon}</div>}
              >
                <Card.Meta
                  title={service.title}
                  description={service.description}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Phản Hồi Khách Hàng</h2>
        <Carousel autoplay>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <p>"{testimonial.feedback}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>Thư Viện Ảnh</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8} lg={6}>
            <img
              src="/images/gallery1.jpg"
              alt="Gallery 1"
              className="gallery-image"
            />
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <img
              src="/images/gallery2.jpg"
              alt="Gallery 2"
              className="gallery-image"
            />
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <img
              src="/images/gallery3.jpg"
              alt="Gallery 3"
              className="gallery-image"
            />
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <img
              src="/images/gallery4.jpg"
              alt="Gallery 4"
              className="gallery-image"
            />
          </Col>
          {/* Thêm các hình ảnh khác nếu cần */}
        </Row>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="newsletter">
        <h2>Đăng Ký Nhận Tin</h2>
        <Form
          form={form}
          name="newsletter"
          onFinish={onFinish}
          className="newsletter-form"
        >
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={16} md={12} lg={8}>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Vui lòng nhập email!" },
                  { type: "email", message: "Email không hợp lệ!" },
                ]}
              >
                <Input
                  placeholder="Nhập email của bạn"
                  prefix={<MailOutlined />}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={8} md={4} lg={4}>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Đăng Ký
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </section>
    </div>
  );
};

export default Homepage;
