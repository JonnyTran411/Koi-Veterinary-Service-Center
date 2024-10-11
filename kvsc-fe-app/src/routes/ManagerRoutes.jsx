import React, { lazy } from "react";
import { Route } from "react-router-dom";

const AppointmentManagement = lazy(() =>
  import("../components/admin/appointmentManagement/AppointmentManagement")
);
const Chat = lazy(() => import("../components/admin/chat/Chat"));
const ContentManagement = lazy(() =>
  import("../components/admin/contentManagement/ContentManagement")
);
const ReportManagement = lazy(() =>
  import("../components/admin/reports/ReportManagement")
);
const UserManagement = lazy(() =>
  import("../components/admin/userManagement/UserManagement")
);
const Welcome = lazy(() => import("../components/admin/welcome/Welcome"));

const ManagerRoutes = (
  <>
    <Route index element={<Welcome />} />
    <Route path="dashboard" element={<Welcome />} />
    <Route path="users" element={<UserManagement />} />
    <Route path="chat" element={<Chat />} />
    <Route path="appointments" element={<AppointmentManagement />} />
    <Route path="reports" element={<ReportManagement />} />
    <Route path="content" element={<ContentManagement />} />
  </>
);

export default ManagerRoutes;
