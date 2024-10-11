import { Button, Steps, message } from "antd";
import React, { useState } from "react";
import SuccessPage from "../../home/success/SuccessPage";
import DoctorAndDateForm from "../doctor-date/DoctorAndDateForm";
import FishConditionForm from "../form/fish/FishConditionForm";
import PersonalInfoForm from "../form/personal/PersonalInfoForm";
import SummaryAndConfirmPage from "../summary/SummaryAndConfirmPage";

const { Step } = Steps;

const TreatmentBookingSteps = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({});
  const [doctorData, setDoctorData] = useState({});
  const [fishConditionData, setFishConditionData] = useState({}); // State mới để lưu dữ liệu của tình trạng cá
  const [formInstance, setFormInstance] = useState(null);

  // Hàm xử lý khi nhấn "Tiếp theo"
  const next = () => {
    if ((current === 1 || current === 2) && formInstance) {
      formInstance
        .validateFields()
        .then((values) => {
          if (current === 1) {
            setFormData({ ...formData, ...values });
          }
          if (current === 2) {
            setFishConditionData(values); // Lưu thông tin về tình trạng cá
          }
          setCurrent(current + 1);
        })
        .catch((errorInfo) => {
          console.log("Validate failed:", errorInfo);
        });
    } else {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const confirmBooking = () => {
    message.success("Xác nhận thành công!");
    next();
  };

  const steps = [
    {
      title: "Chọn Bác Sĩ & Thời Gian",
      content: (
        <DoctorAndDateForm
          initialData={doctorData}
          setFormInstance={(form) => setFormInstance(form)}
          onSubmit={(values) => {
            setDoctorData(values); // Lưu thông tin về bác sĩ và thời gian
            next();
          }}
        />
      ),
    },
    {
      title: "Điền Thông Tin Cá Nhân",
      content: (
        <PersonalInfoForm
          formData={formData}
          setFormInstance={(form) => setFormInstance(form)}
          onSubmit={(values) => {
            setFormData(values);
            next();
          }}
        />
      ),
    },
    {
      title: "Tình Trạng Bệnh của Cá",
      content: (
        <FishConditionForm
          formData={fishConditionData}
          setFormInstance={(form) => setFormInstance(form)}
          onSubmit={(values) => {
            setFishConditionData(values); // Lưu thông tin về tình trạng cá
            next();
          }}
        />
      ),
    },
    {
      title: "Xác Nhận Thông Tin",
      content: (
        <SummaryAndConfirmPage
          doctorData={doctorData} // Truyền toàn bộ dữ liệu bác sĩ đã chọn
          formData={formData}
          fishConditionData={fishConditionData}
        />
      ),
    },
    {
      title: "Hoàn thành",
      content: <SuccessPage />,
    },
  ];

  return (
    <div>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <div className="steps-content">{steps[current].content}</div>

      <div className="steps-action" style={{ marginTop: 20 }}>
        {current < steps.length - 1 && current !== 3 && (
          <Button
            type="primary"
            onClick={() => {
              if (current === 1 || current === 2) {
                formInstance.submit();
              } else {
                next();
              }
            }}
          >
            Tiếp theo
          </Button>
        )}

        {current === 3 && (
          <>
            <Button type="primary" onClick={confirmBooking}>
              Xác nhận
            </Button>
            <Button style={{ margin: "0 8px" }} onClick={prev}>
              Quay lại
            </Button>
          </>
        )}

        {current > 0 && current < steps.length - 1 && current !== 3 && (
          <Button style={{ margin: "0 8px" }} onClick={prev}>
            Quay lại
          </Button>
        )}
      </div>
    </div>
  );
};

export default TreatmentBookingSteps;
