import { Button, Descriptions, Tag } from "antd";
import React from "react";
import { useParams } from "react-router-dom";

const AppointmentDetails = () => {
  const { id } = useParams();

  // Mock appointment data for the sake of demonstration
  const appointment = {
    id: 1,
    petName: "Bobby",
    ownerName: "John Doe",
    appointmentDate: "2024-10-14",
    appointmentTime: "10:00 AM",
    status: "Pending",
    notes: "Owner mentioned pet has been sick for 3 days.",
  };

  return (
    <div>
      <h2>Appointment Details for #{id}</h2>
      <Descriptions bordered>
        <Descriptions.Item label="Pet Name">
          {appointment.petName}
        </Descriptions.Item>
        <Descriptions.Item label="Owner Name">
          {appointment.ownerName}
        </Descriptions.Item>
        <Descriptions.Item label="Appointment Date">
          {appointment.appointmentDate}
        </Descriptions.Item>
        <Descriptions.Item label="Appointment Time">
          {appointment.appointmentTime}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          <Tag color="orange">{appointment.status}</Tag>
        </Descriptions.Item>
        <Descriptions.Item label="Notes">{appointment.notes}</Descriptions.Item>
      </Descriptions>

      <div style={{ marginTop: 20 }}>
        <Button type="primary">Confirm Appointment</Button>
        <Button type="danger" style={{ marginLeft: 10 }}>
          Cancel Appointment
        </Button>
      </div>
    </div>
  );
};

export default AppointmentDetails;
