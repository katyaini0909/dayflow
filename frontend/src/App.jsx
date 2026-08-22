import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./auth/login";
import EmployeeDashboard from "./employee/EmployeeDashboard";

import AdminDashboard from "./admin/pages/AdminDashboard";
import Employees from "./admin/pages/Employees";
import Attendance from "./admin/pages/Attendance";
import LeaveRequests from "./admin/pages/LeaveRequests";
import Payroll from "./admin/pages/Payroll";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/employee/dashboard"
          element={<EmployeeDashboard />}
        />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/employees" element={<Employees />} />
        <Route path="/admin/attendance" element={<Attendance />} />
        <Route path="/admin/leave" element={<LeaveRequests />} />
        <Route path="/admin/payroll" element={<Payroll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;