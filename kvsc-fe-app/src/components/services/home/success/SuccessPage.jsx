import { Button, Result } from "antd";
import React from "react";

const SuccessPage = ({ onBackToHome }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Result
        status="success"
        title="Đặt lịch thành công!"
        subTitle="Chúng tôi đã nhận được yêu cầu đặt lịch kiểm tra của bạn. Chúng tôi sẽ liên hệ với bạn sớm nhất có thể."
        extra={[
          <Button type="primary" key="home" onClick={onBackToHome}>
            Về trang chủ
          </Button>,
        ]}
      />
    </div>
  );
};

export default SuccessPage;
