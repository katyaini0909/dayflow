import { useState } from "react";
import "../AdminDashboard.css";
import AnimatedNumber from "../components/AnimatedNumber";
import Reveal from "../components/Reveal";
const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Software Engineer",
    department: "Engineering",
    status: "Present",
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "UI/UX Designer",
    department: "Design",
    status: "Present",
  },
  {
    id: 3,
    name: "Arjun Mehta",
    role: "HR Executive",
    department: "Human Resources",
    status: "On Leave",
  },
  {
    id: 4,
    name: "Ananya Gupta",
    role: "Frontend Developer",
    department: "Engineering",
    status: "Present",
  },
];
function AdminDashboard() {
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);
  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2>Dayflow</h2>

        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Employees</li>
            <li>Attendance</li>
            <li>Leave Requests</li>
            <li>Payroll</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <div>
            <h1>Admin / HR Dashboard</h1>
            <p>Manage employees and monitor HR activities.</p>
          </div>

          <div className="admin-user">
            <span>HR Admin</span>
          </div>
        </header>

        {/* Summary Cards */}
        <reveal>
        <section className="summary-cards">
          <div className="summary-card">
            <h3>Total Employees</h3>
            <p><AnimatedNumber value={42} /></p>
          </div>

          <div className="summary-card">
            <h3>Present Today</h3>
            <p><AnimatedNumber value={38} /></p>
          </div>

          <div className="summary-card">
            <h3>On Leave</h3>
            <p><AnimatedNumber value={4} /></p>
          </div>

          <div className="summary-card">
            <h3>Pending Requests</h3>
            <p><AnimatedNumber value={7} /></p>
          </div>
        </section>
        </reveal>
        {/* Employee Section */}
        <reveal>
        <section className="dashboard-section">
  <div className="section-header">
    <h2>Employees</h2>
    <button>View All</button>
  </div>

  <div className="employee-table-wrapper">
    <table className="employee-table">
      <thead>
        <tr>
  <th>Name</th>
  <th>Role</th>
  <th>Department</th>
  <th>Status</th>
  <th>Action</th>
</tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.role}</td>
            <td>{employee.department}</td>
            <td>
              <span
                className={
                  employee.status === "Present"
                    ? "status present"
                    : "status leave"
                }
              >
                {employee.status}
              </span>
            </td>
            <td>
  <button onClick={() => setSelectedEmployee(employee)}>
    Select
  </button>
</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  <div className="selected-employee">
  <h3>Selected Employee</h3>

  <p>
    <strong>Name:</strong> {selectedEmployee.name}
  </p>

  <p>
    <strong>Role:</strong> {selectedEmployee.role}
  </p>

  <p>
    <strong>Department:</strong> {selectedEmployee.department}
  </p>

  <p>
    <strong>Status:</strong> {selectedEmployee.status}
  </p>
</div>
</section>
</reveal>

        {/* Attendance Section */}
        <reveal>
        <section className="dashboard-section">
          <div className="section-header">
            <h2>Attendance</h2>
            <button>View Attendance</button>
          </div>

          <p>Attendance records will appear here.</p>
        </section>
        </reveal>

        {/* Leave Requests Section */}
        <reveal>
        <section className="dashboard-section">
          <div className="section-header">
            <h2>Leave Requests</h2>
            <button>View Requests</button>
          </div>

          <p>Leave approval requests will appear here.</p>
        </section>
        </reveal>
      </main>
    </div>
  );
}

export default AdminDashboard;