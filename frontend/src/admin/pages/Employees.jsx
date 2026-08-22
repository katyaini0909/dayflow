import { useEffect, useState } from "react";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(
          "http://localhost:5000/api/admin/employees",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch employees");
        }

        setEmployees(data.employees);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  if (loading) {
    return (
      <div className="attendance-page">
        Loading employees...
      </div>
    );
  }

  if (error) {
    return (
      <div className="attendance-page">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="attendance-page">
      <header className="page-header">
        <div>
          <h1>Employees</h1>
          <p>Manage employee information and records.</p>
        </div>

        <button>Add Employee</button>
      </header>

      <section className="attendance-table-section">
        <div className="section-header">
          <h2>Employee Directory</h2>
          <button>Filter</button>
        </div>

        <table className="attendance-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.employeeId}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Employees;