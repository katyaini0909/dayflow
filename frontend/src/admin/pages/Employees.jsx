function Employees() {
  const employees = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Software Engineer",
      department: "Engineering",
      email: "rahul@dayflow.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Singh",
      role: "UI/UX Designer",
      department: "Design",
      email: "priya@dayflow.com",
      status: "Active",
    },
    {
      id: 3,
      name: "Arjun Mehta",
      role: "HR Executive",
      department: "Human Resources",
      email: "arjun@dayflow.com",
      status: "On Leave",
    },
    {
      id: 4,
      name: "Ananya Gupta",
      role: "Frontend Developer",
      department: "Engineering",
      email: "ananya@dayflow.com",
      status: "Active",
    },
  ];

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
              <th>Name</th>
              <th>Role</th>
              <th>Department</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.role}</td>
                <td>{employee.department}</td>
                <td>{employee.email}</td>
                <td>
                  <span
                    className={
                      employee.status === "Active"
                        ? "status present"
                        : "status leave"
                    }
                  >
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Employees;