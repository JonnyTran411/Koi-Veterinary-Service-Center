import { Badge, Calendar, Card } from "antd";
import React, { useState } from "react";
import "./VeterinarianSchedule.scss";

const VeterinarianSchedule = () => {
  // Example data for shifts
  const [schedule, setSchedule] = useState([
    {
      date: "2024-10-15",
      shift: "Morning Shift",
      status: "Confirmed",
    },
    {
      date: "2024-10-16",
      shift: "Evening Shift",
      status: "Pending",
    },
    {
      date: "2024-10-17",
      shift: "Afternoon Shift",
      status: "Confirmed",
    },
  ]);

  // Function to get a badge for each shift status
  const getListData = (value) => {
    let listData = [];
    const formattedDate = value.format("YYYY-MM-DD");

    // Find if there is a shift on this day
    const shift = schedule.find((item) => item.date === formattedDate);
    if (shift) {
      listData = [
        {
          type: shift.status === "Confirmed" ? "success" : "warning",
          content: shift.shift,
        },
      ];
    }
    return listData;
  };

  // Function to display badges on the calendar
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item, index) => (
          <li key={index}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="veterinarian-schedule">
      <h2>Lịch làm việc của bác sĩ thú y</h2>
      <Card>
        <Calendar dateCellRender={dateCellRender} />
      </Card>
    </div>
  );
};

export default VeterinarianSchedule;
