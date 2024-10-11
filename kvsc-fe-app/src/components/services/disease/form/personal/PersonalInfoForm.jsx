import { Form, Input, Radio } from "antd";
import React, { useEffect, useState } from "react";

const PersonalInfoForm = ({ formData, setFormInstance, onSubmit }) => {
  const [form] = Form.useForm();
  const [isHomeVisit, setIsHomeVisit] = useState(false); // Quản lý trạng thái chọn Khám tại nhà hay Trung tâm

  // Gửi instance của form lên parent để xử lý submit từ bên ngoài
  useEffect(() => {
    if (setFormInstance) {
      setFormInstance(form);
    }
  }, [form, setFormInstance]);

  // Khi có formData, điền giá trị vào form
  useEffect(() => {
    if (formData) {
      form.setFieldsValue(formData);
      setIsHomeVisit(formData.visitType === "home"); // Kiểm tra giá trị để hiện/ẩn trường địa chỉ
    }
  }, [formData, form]);

  // Xử lý khi người dùng chọn Khám tại nhà hoặc Trung tâm
  const handleVisitTypeChange = (value) => {
    setIsHomeVisit(value === "home");
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onSubmit}
      initialValues={formData}
      style={{ maxWidth: "600px", margin: "auto" }}
    >
      <Form.Item
        label="Họ và tên"
        name="name"
        rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
      >
        <Input placeholder="Nhập họ và tên của bạn" />
      </Form.Item>

      <Form.Item
        label="Số điện thoại"
        name="phone"
        rules={[
          { required: true, message: "Vui lòng nhập số điện thoại của bạn" },
          {
            pattern: /^[0-9]{10}$/,
            message: "Số điện thoại phải có 10 chữ số",
          },
        ]}
      >
        <Input placeholder="Nhập số điện thoại" />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Vui lòng nhập email của bạn" },
          { type: "email", message: "Email không hợp lệ" },
        ]}
      >
        <Input placeholder="Nhập email của bạn" />
      </Form.Item>

      <Form.Item
        label="Chọn loại khám"
        name="visitType"
        rules={[{ required: true, message: "Vui lòng chọn loại khám" }]}
      >
        <Radio.Group onChange={(e) => handleVisitTypeChange(e.target.value)}>
          <Radio value="center">Khám tại trung tâm</Radio>
          <Radio value="home">Khám tại nhà</Radio>
        </Radio.Group>
      </Form.Item>

      {isHomeVisit && (
        <Form.Item
          label="Địa chỉ khám tại nhà"
          name="address"
          rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}
        >
          <Input placeholder="Nhập địa chỉ của bạn" />
        </Form.Item>
      )}

      <Form.Item
        label="Ghi chú"
        name="notes"
        rules={[{ message: "Bạn có thể nhập ghi chú thêm" }]}
      >
        <Input.TextArea
          placeholder="Nhập ghi chú hoặc yêu cầu bổ sung"
          rows={4}
        />
      </Form.Item>
    </Form>
  );
};

export default PersonalInfoForm;
