import { Form, Input, Select } from "antd";
import React, { useEffect } from "react";

const { Option } = Select;

const FishConditionForm = ({ formData, setFormInstance, onSubmit }) => {
  const [form] = Form.useForm();

  // Gửi instance của form lên parent để xử lý submit bên ngoài
  useEffect(() => {
    if (setFormInstance) {
      setFormInstance(form);
    }
  }, [form, setFormInstance]);

  // Điền lại dữ liệu form nếu có
  useEffect(() => {
    if (formData) {
      form.setFieldsValue(formData);
    }
  }, [formData, form]);

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onSubmit}
      style={{ maxWidth: "600px", margin: "auto" }}
    >
      <Form.Item
        label="Loại cá"
        name="fishType"
        rules={[{ required: true, message: "Vui lòng chọn loại cá" }]}
      >
        <Select placeholder="Chọn loại cá">
          <Option value="Koi">Cá Koi</Option>
          <Option value="Betta">Cá Betta</Option>
          <Option value="Goldfish">Cá Vàng</Option>
          <Option value="Other">Khác</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Triệu chứng hoặc tình trạng bệnh"
        name="fishCondition"
        rules={[
          { required: true, message: "Vui lòng nhập tình trạng bệnh của cá" },
        ]}
      >
        <Input.TextArea
          rows={4}
          placeholder="Nhập triệu chứng hoặc tình trạng bệnh hiện tại của cá"
        />
      </Form.Item>

      <Form.Item
        label="Thời gian phát hiện bệnh"
        name="diseaseDuration"
        rules={[
          { required: true, message: "Vui lòng nhập thời gian phát hiện bệnh" },
        ]}
      >
        <Input placeholder="Ví dụ: 2 ngày, 1 tuần..." />
      </Form.Item>
    </Form>
  );
};

export default FishConditionForm;
