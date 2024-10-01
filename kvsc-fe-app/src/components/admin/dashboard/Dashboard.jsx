// src/components/admin/Dashboard.jsx
import {
  AppstoreOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  DollarOutlined,
  ExclamationCircleOutlined,
  MessageOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Card,
  Col,
  Divider,
  List,
  Row,
  Statistic,
  Typography,
} from "antd";
import React from "react";
import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Dashboard.scss";

const { Title, Text } = Typography;

// Mock data for statistics
const statsData = [
  {
    title: "Doanh Thu Tổng",
    value: 5000000,
    icon: <DollarOutlined style={{ color: "#52c41a" }} />,
  },
  {
    title: "Số Lượng Lịch Hẹn",
    value: 75,
    icon: <CalendarOutlined style={{ color: "#faad14" }} />,
  },
  {
    title: "Số Lượng Người Dùng",
    value: 150,
    icon: <UserOutlined style={{ color: "#1890ff" }} />,
  },
  {
    title: "Số Lượng Dịch Vụ",
    value: 20,
    icon: <AppstoreOutlined style={{ color: "#13c2c2" }} />,
  },
];

// Mock data for revenue chart
const revenueData = [
  { month: "Tháng 1", revenue: 400000 },
  { month: "Tháng 2", revenue: 300000 },
  { month: "Tháng 3", revenue: 500000 },
  { month: "Tháng 4", revenue: 450000 },
  { month: "Tháng 5", revenue: 600000 },
  { month: "Tháng 6", revenue: 700000 },
  { month: "Tháng 7", revenue: 800000 },
  { month: "Tháng 8", revenue: 750000 },
  { month: "Tháng 9", revenue: 900000 },
  { month: "Tháng 10", revenue: 850000 },
  { month: "Tháng 11", revenue: 950000 },
  { month: "Tháng 12", revenue: 1000000 },
];

// Mock data for recent activities
const recentActivities = [
  {
    id: "1",
    type: "user",
    icon: <UserOutlined style={{ color: "#1890ff", fontSize: "20px" }} />,
    description: "Nguyễn Văn A đã đăng ký tài khoản mới.",
    time: "2 giờ trước",
  },
  {
    id: "2",
    type: "appointment",
    icon: <CalendarOutlined style={{ color: "#faad14", fontSize: "20px" }} />,
    description: "Lịch hẹn cho Trần Thị B đã được đặt.",
    time: "1 giờ trước",
  },
  {
    id: "3",
    type: "message",
    icon: <MessageOutlined style={{ color: "#13c2c2", fontSize: "20px" }} />,
    description:
      'Tin nhắn mới từ khách hàng: "Tôi cần hẹn lịch khám cho chó của mình."',
    time: "30 phút trước",
  },
  {
    id: "4",
    type: "notification",
    icon: (
      <NotificationOutlined style={{ color: "#eb2f96", fontSize: "20px" }} />
    ),
    description: "Đã cập nhật danh sách dịch vụ mới.",
    time: "15 phút trước",
  },
];

// Colors for Pie Chart
const pieColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Overview Statistics */}
      <Row gutter={[16, 16]}>
        {statsData.map((stat) => (
          <Col xs={24} sm={12} md={6} key={stat.title}>
            <Card className="stat-card">
              <Statistic
                title={stat.title}
                value={stat.value}
                prefix={stat.icon}
                valueStyle={{ color: "#3f8600" }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Divider */}
      <Divider />

      {/* Charts and Quick Info */}
      <Row gutter={[16, 16]}>
        {/* Revenue Chart */}
        <Col xs={24} lg={12}>
          <Card title="Doanh Thu Theo Tháng" bordered={false}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip
                  formatter={(value) =>
                    new Intl.NumberFormat("vi-VN").format(value)
                  }
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#1890ff"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        {/* Quick Info: Recent Messages */}
        <Col xs={24} lg={12}>
          <Card title="Tin Nhắn Mới" bordered={false}>
            <List
              itemLayout="horizontal"
              dataSource={[
                {
                  id: "1",
                  sender: "Nguyễn Văn A",
                  message:
                    "Chào admin, tôi muốn hỏi về dịch vụ khám sức khỏe cho chó.",
                  time: "2 giờ trước",
                },
                {
                  id: "2",
                  sender: "Trần Thị B",
                  message:
                    "Tôi cần hẹn lịch cho mèo của mình vào cuối tuần này.",
                  time: "1 giờ trước",
                },
                // Thêm các tin nhắn khác nếu cần
              ]}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar icon={<MessageOutlined />} />}
                    title={<Text strong>{item.sender}</Text>}
                    description={<Text>{item.message}</Text>}
                  />
                  <div>{item.time}</div>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      {/* Divider */}
      <Divider />

      {/* Recent Activities and Pie Chart */}
      <Row gutter={[16, 16]}>
        {/* Recent Activities */}
        <Col xs={24} lg={12}>
          <Card title="Hoạt Động Gần Đây" bordered={false}>
            <List
              itemLayout="horizontal"
              dataSource={recentActivities}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Badge
                        dot
                        status={item.type === "user" ? "success" : "processing"}
                      >
                        {item.icon}
                      </Badge>
                    }
                    title={<Text strong>{item.description}</Text>}
                    description={<Text type="secondary">{item.time}</Text>}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>

        {/* Content Distribution Pie Chart */}
        <Col xs={24} lg={12}>
          <Card title="Phân Bố Nội Dung" bordered={false}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: "Trang", value: 20 },
                    { name: "Blog", value: 35 },
                    { name: "Gallery", value: 25 },
                    { name: "Khác", value: 20 },
                  ]}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {[
                    { name: "Trang", value: 20 },
                    { name: "Blog", value: 35 },
                    { name: "Gallery", value: 25 },
                    { name: "Khác", value: 20 },
                  ].map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={pieColors[index % pieColors.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      {/* Divider */}
      <Divider />

      {/* Notifications */}
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Card title="Thông Báo" bordered={false}>
            <List
              itemLayout="horizontal"
              dataSource={[
                {
                  id: "1",
                  type: "notification",
                  icon: (
                    <CheckCircleOutlined
                      style={{ color: "#52c41a", fontSize: "20px" }}
                    />
                  ),
                  message: "Đã cập nhật danh sách dịch vụ mới.",
                  time: "10 phút trước",
                },
                {
                  id: "2",
                  type: "alert",
                  icon: (
                    <ExclamationCircleOutlined
                      style={{ color: "#faad14", fontSize: "20px" }}
                    />
                  ),
                  message: "Lịch hẹn cho khách hàng Nguyễn Văn A đã bị hủy.",
                  time: "30 phút trước",
                },
                // Thêm các thông báo khác nếu cần
              ]}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={item.icon}
                    title={<Text>{item.message}</Text>}
                    description={<Text type="secondary">{item.time}</Text>}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
