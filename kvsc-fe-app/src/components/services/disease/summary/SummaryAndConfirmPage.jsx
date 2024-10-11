import { Card, List } from "antd";
import React from "react";

const SummaryAndConfirmPage = ({
  doctorData,
  formData,
  fishConditionData,
  onConfirm,
}) => {
  // Đảm bảo doctorData, formData và fishConditionData không undefined trước khi truy cập thuộc tính
  const doctorName = doctorData?.selectedDoctor
    ? doctorData.selectedDoctor
    : "Chưa chọn bác sĩ";
  const consultationTime = doctorData?.selectedTime
    ? doctorData.selectedTime
    : "Chưa chọn thời gian";
  const consultationDate = doctorData?.selectedDate
    ? doctorData.selectedDate
    : "Chưa chọn ngày";

  return (
    <div>
      <h2>Xác nhận thông tin</h2>

      <Card title="Thông tin cá nhân" style={{ marginBottom: 20 }}>
        <List>
          <List.Item>
            <strong>Họ và tên:</strong> {formData.name || "Chưa nhập"}
          </List.Item>
          <List.Item>
            <strong>Email:</strong> {formData.email || "Chưa nhập"}
          </List.Item>
          <List.Item>
            <strong>Số điện thoại:</strong> {formData.phone || "Chưa nhập"}
          </List.Item>
        </List>
      </Card>

      <Card title="Thông tin lịch kiểm tra" style={{ marginBottom: 20 }}>
        <List>
          <List.Item>
            <strong>Bác sĩ đã chọn:</strong> {doctorName}
          </List.Item>
          <List.Item>
            <strong>Ngày kiểm tra:</strong> {consultationDate}
          </List.Item>
          <List.Item>
            <strong>Khung giờ đã chọn:</strong> {consultationTime}
          </List.Item>
        </List>
      </Card>

      <Card title="Tình trạng bệnh của cá" style={{ marginBottom: 20 }}>
        <List>
          <List.Item>
            <strong>Loại cá:</strong>{" "}
            {fishConditionData.fishType || "Chưa nhập"}
          </List.Item>
          <List.Item>
            <strong>Triệu chứng:</strong>{" "}
            {fishConditionData.symptoms || "Chưa nhập"}
          </List.Item>
          <List.Item>
            <strong>Thời gian phát hiện bệnh:</strong>{" "}
            {fishConditionData.detectionTime || "Chưa nhập"}
          </List.Item>
        </List>
      </Card>
    </div>
  );
};

export default SummaryAndConfirmPage;
