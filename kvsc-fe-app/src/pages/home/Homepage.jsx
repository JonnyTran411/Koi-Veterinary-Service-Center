// src/components/home/Homepage.jsx
import {
  CalendarOutlined,
  DollarOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Carousel, Col, Row, Steps, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/home/koi_images1.jpg";
import service1 from "../../assets/home/service1.jpg";
import service2 from "../../assets/home/service2.jpg";
import service3 from "../../assets/home/service3.jpg";
import "./Homepage.scss";

const { Title, Paragraph, Text } = Typography;
const { Step } = Steps;

const Homepage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <img
          src={heroImage}
          alt="Koi Veterinary Service Center"
          className="hero-image"
        />
        <div className="hero-content">
          <Title level={1} className="hero-title">
            Chăm Sóc Sức Khỏe Cho Hồ Cá Koi Của Bạn
          </Title>
          <Paragraph className="hero-description">
            Đem lại sự an tâm và hạnh phúc cho hồ cá Koi của bạn với các dịch vụ
            y tế chuyên nghiệp và tận tâm.
          </Paragraph>
          <Link to="/appointments">
            <Button type="primary" size="large">
              Đặt Lịch Hẹn Ngay
            </Button>
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction-section">
        <Row gutter={[16, 16]}>
          {/* <Col xs={12} md={6}>
            <img src={heroImage} alt="Giới Thiệu" className="intro-image" />
          </Col> */}
          <Col xs={24} md={12}>
            <Title level={2}>Về Chúng Tôi</Title>
            <Paragraph>
              Koi Veterinary Service Center cam kết mang đến các dịch vụ chăm
              sóc sức khỏe chất lượng cao cho cá Koi của bạn. Đội ngũ bác sĩ thú
              y chuyên nghiệp và tận tâm sẽ đảm bảo sức khỏe và vẻ đẹp cho hồ cá
              của bạn.
            </Paragraph>
            <Link to="/about">
              <Button type="default">Tìm Hiểu Thêm</Button>
            </Link>
          </Col>
        </Row>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <Title level={2} className="section-title">
          Các Dịch Vụ Chính
        </Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="Tư Vấn Trực Tuyến" src={service1} />}
              className="service-card"
            >
              <Card.Meta
                title="Tư Vấn Trực Tuyến"
                description="Đặt dịch vụ tư vấn trực tuyến với bác sĩ thú y để nhận được sự tư vấn chuyên nghiệp ngay tại nhà."
              />
              <Link to="/online-consultation">
                <Button type="link" icon={<QuestionCircleOutlined />}>
                  Đặt Lịch Tư Vấn
                </Button>
              </Link>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="Đánh Giá Hồ Cá Tại Nhà" src={service2} />}
              className="service-card"
            >
              <Card.Meta
                title="Đánh Giá Hồ Cá Tại Nhà"
                description="Bác sĩ thú y sẽ tới tận nhà bạn để đánh giá chất lượng hồ cá Koi và tư vấn cải thiện đạt chuẩn."
              />
              <Link to="/home-assessment">
                <Button type="link" icon={<CalendarOutlined />}>
                  Đặt Lịch Đánh Giá
                </Button>
              </Link>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              cover={<img alt="Điều Trị Bệnh Cá" src={service3} />}
              className="service-card"
            >
              <Card.Meta
                title="Điều Trị Bệnh Cá"
                description="Cung cấp dịch vụ điều trị bệnh cho cá Koi tại nhà hoặc tại trung tâm, kèm theo kê đơn thuốc nếu cần."
              />
              <Link to="/disease-treatment">
                <Button type="link" icon={<DollarOutlined />}>
                  Đặt Dịch Vụ Điều Trị
                </Button>
              </Link>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Booking Process Section */}
      <section className="booking-process-section">
        <Title level={2} className="section-title">
          Quy Trình Đặt Dịch Vụ
        </Title>
        <Steps direction="vertical" current={4} className="steps">
          <Step
            title="Đặt Dịch Vụ"
            description="Khách hàng đặt dịch vụ thông qua hệ thống đặt lịch trực tuyến."
            icon={<UserOutlined />}
          />
          <Step
            title="Phân Công Bác Sĩ"
            description="Trung tâm sẽ phân công bác sĩ thực hiện dịch vụ hoặc khách hàng có thể chỉ định bác sĩ mong muốn."
            icon={<TeamOutlined />}
          />
          <Step
            title="Thực Hiện Dịch Vụ"
            description="Bác sĩ thực hiện dịch vụ và ghi nhận kết quả thực hiện."
            icon={<CalendarOutlined />}
          />
          <Step
            title="Đánh Giá Dịch Vụ"
            description="Khách hàng đánh giá kết quả thực hiện dịch vụ để cải thiện chất lượng."
            icon={<DollarOutlined />}
          />
        </Steps>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <Title level={2} className="section-title">
          Nhận Xét Khách Hàng
        </Title>
        <Carousel autoplay>
          <div className="testimonial">
            <Row gutter={[16, 16]} justify="center" align="middle">
              {/* <Col xs={24} md={6}>
                <img
                  src={testimonial1}
                  alt="Khách Hàng 1"
                  className="testimonial-avatar"
                />
              </Col> */}
              <Col xs={24} md={18}>
                <Text strong>
                  "Dịch vụ tuyệt vời! Hồ cá Koi của tôi đã được chăm sóc tận
                  tình và sức khỏe cá được cải thiện rõ rệt."
                </Text>
                <br />
                <Text type="secondary">- Trần Thị B</Text>
              </Col>
            </Row>
          </div>
          <div className="testimonial">
            <Row gutter={[16, 16]} justify="center" align="middle">
              {/* <Col xs={24} md={6}>
                <img
                  src={testimonial2}
                  alt="Khách Hàng 2"
                  className="testimonial-avatar"
                />
              </Col> */}
              <Col xs={24} md={18}>
                <Text strong>
                  "Đội ngũ bác sĩ rất chuyên nghiệp và thân thiện. Tôi hoàn toàn
                  tin tưởng để chăm sóc hồ cá Koi của mình tại đây."
                </Text>
                <br />
                <Text type="secondary">- Nguyễn Văn A</Text>
              </Col>
            </Row>
          </div>
        </Carousel>
      </section>

      {/* FAQs Section */}
      <section className="faqs-section">
        <Title level={2} className="section-title">
          Câu Hỏi Thường Gặp
        </Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card
              title="Làm thế nào để đặt dịch vụ tư vấn trực tuyến?"
              bordered={false}
            >
              <Paragraph>
                Bạn có thể đặt dịch vụ tư vấn trực tuyến bằng cách nhấn vào nút
                "Đặt Lịch Hẹn Ngay" ở phần Hero hoặc truy cập vào trang "Tư Vấn
                Trực Tuyến".
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card title="Các dịch vụ tại nhà bao gồm gì?" bordered={false}>
              <Paragraph>
                Các dịch vụ tại nhà bao gồm đánh giá hồ cá Koi, tư vấn cải thiện
                hồ cá, và điều trị bệnh cho cá Koi tại nơi bạn đang sinh sống.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              title="Tôi có thể chỉ định bác sĩ cụ thể cho dịch vụ không?"
              bordered={false}
            >
              <Paragraph>
                Có, bạn có thể chỉ định bác sĩ mà bạn muốn thực hiện dịch vụ
                trong quá trình đặt dịch vụ. Nếu không chỉ định, trung tâm sẽ
                phân công bác sĩ phù hợp nhất.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              title="Chi phí dịch vụ được tính như thế nào?"
              bordered={false}
            >
              <Paragraph>
                Chi phí dịch vụ bao gồm phí dịch vụ cơ bản và phí di chuyển nếu
                dịch vụ được thực hiện tại nhà khách hàng. Bạn có thể xem bảng
                giá chi tiết trên trang "Bảng Giá".
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <Row justify="center" align="middle">
          <Col xs={24} md={16} style={{ textAlign: "center" }}>
            <Title level={2}>
              Bạn Đã Sẵn Sàng Chăm Sóc Hồ Cá Koi Của Mình?
            </Title>
            <Paragraph>
              Hãy đặt dịch vụ ngay hôm nay để nhận được sự chăm sóc tận tình từ
              các bác sĩ thú y chuyên nghiệp.
            </Paragraph>
            <Link to="/appointments">
              <Button type="primary" size="large">
                Đặt Dịch Vụ Ngay
              </Button>
            </Link>
          </Col>
        </Row>
      </section>

      {/* Footer */}
      <footer className="homepage-footer">
        <Row justify="space-between" align="middle">
          <Col>
            <Text>
              &copy; {new Date().getFullYear()} Koi Veterinary Service Center.
              All rights reserved.
            </Text>
          </Col>
          <Col>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneOutlined
                style={{
                  fontSize: "24px",
                  color: "#3b5998",
                  marginRight: "16px",
                }}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneOutlined
                style={{
                  fontSize: "24px",
                  color: "#C13584",
                  marginRight: "16px",
                }}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <PhoneOutlined style={{ fontSize: "24px", color: "#1DA1F2" }} />
            </a>
          </Col>
        </Row>
      </footer>
    </div>
  );
};

export default Homepage;
