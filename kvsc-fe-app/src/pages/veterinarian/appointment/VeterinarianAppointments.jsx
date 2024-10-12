import { Button, Table, Tag } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./VeterinarianAppointment.scss";

const VeterinarianAppointments = () => {
  // Example mock data for appointments
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      petName: "Bobby",
      ownerName: "John Doe",
      appointmentDate: "2024-10-14",
      appointmentTime: "10:00 AM",
      status: "Pending",
    },
    {
      id: 2,
      petName: "Luna",
      ownerName: "Emily Clark",
      appointmentDate: "2024-10-15",
      appointmentTime: "2:00 PM",
      status: "Confirmed",
    },
    {
      id: 3,
      petName: "Max",
      ownerName: "Michael Smith",
      appointmentDate: "2024-10-16",
      appointmentTime: "11:00 AM",
      status: "Cancelled",
    },
  ]);

  // Table columns definition
  const columns = [
    {
      title: "Pet Name",
      dataIndex: "petName",
      key: "petName",
    },
    {
      title: "Owner Name",
      dataIndex: "ownerName",
      key: "ownerName",
    },
    {
      title: "Appointment Date",
      dataIndex: "appointmentDate",
      key: "appointmentDate",
    },
    {
      title: "Appointment Time",
      dataIndex: "appointmentTime",
      key: "appointmentTime",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color;
        if (status === "Pending") {
          color = "orange";
        } else if (status === "Confirmed") {
          color = "green";
        } else if (status === "Cancelled") {
          color = "red";
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Link to={`/veterinarian/appointments/${record.id}`}>
            <Button type="primary">View Details</Button>
          </Link>
        </>
      ),
    },
  ];

  return (
    <div className="veterinarian-appointments">
      <h2>Manage Appointments</h2>
      <Table
        columns={columns}
        dataSource={appointments}
        rowKey={(record) => record.id}
      />
    </div>
  );
};

export default VeterinarianAppointments;
