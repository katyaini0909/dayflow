function Payroll() {
  const payrollData = [
    {
      id: 1,
      employee: "Rahul Sharma",
      department: "Engineering",
      salary: "₹80,000",
      deductions: "₹6,000",
      netPay: "₹74,000",
      status: "Processed",
    },
    {
      id: 2,
      employee: "Priya Singh",
      department: "Design",
      salary: "₹70,000",
      deductions: "₹5,000",
      netPay: "₹65,000",
      status: "Processed",
    },
    {
      id: 3,
      employee: "Arjun Mehta",
      department: "Human Resources",
      salary: "₹65,000",
      deductions: "₹4,500",
      netPay: "₹60,500",
      status: "Pending",
    },
    {
      id: 4,
      employee: "Ananya Gupta",
      department: "Engineering",
      salary: "₹75,000",
      deductions: "₹5,500",
      netPay: "₹69,500",
      status: "Processed",
    },
  ];

  return (
    <div className="attendance-page">
      <header className="page-header">
        <div>
          <h1>Payroll</h1>
          <p>Manage employee salaries and payroll records.</p>
        </div>

        <button>Generate Report</button>
      </header>

      <section className="attendance-summary">
        <div>
          <h3>Total Payroll</h3>
          <p>₹2.90L</p>
        </div>

        <div>
          <h3>Processed</h3>
          <p>3</p>
        </div>

        <div>
          <h3>Pending</h3>
          <p>1</p>
        </div>

        <div>
          <h3>Employees</h3>
          <p>42</p>
        </div>
      </section>

      <section className="attendance-table-section">
        <div className="section-header">
          <h2>Payroll Records</h2>
          <button>Filter</button>
        </div>

        <table className="attendance-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Salary</th>
              <th>Deductions</th>
              <th>Net Pay</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {payrollData.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.employee}</td>
                <td>{employee.department}</td>
                <td>{employee.salary}</td>
                <td>{employee.deductions}</td>
                <td>{employee.netPay}</td>
                <td>
                  <span
                    className={
                      employee.status === "Processed"
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

export default Payroll;