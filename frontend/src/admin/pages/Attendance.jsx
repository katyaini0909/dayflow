function Attendance() {
  const attendanceData = [
    {
      id: 1,
      name: "Rahul Sharma",
      department: "Engineering",
      date: "22 Aug 2026",
      checkIn: "09:02 AM",
      checkOut: "06:01 PM",
      status: "Present",
    },
    {
      id: 2,
      name: "Priya Singh",
      department: "Design",
      date: "22 Aug 2026",
      checkIn: "09:15 AM",
      checkOut: "05:58 PM",
      status: "Present",
    },
    {
      id: 3,
      name: "Arjun Mehta",
      department: "Human Resources",
      date: "22 Aug 2026",
      checkIn: "-",
      checkOut: "-",
      status: "On Leave",
    },
    {
      id: 4,
      name: "Ananya Gupta",
      department: "Engineering",
      date: "22 Aug 2026",
      checkIn: "08:55 AM",
      checkOut: "06:10 PM",
      status: "Present",
    },
  ];

  return (
    <div className="attendance-page">
      <header className="page-header">
        <div>
          <h1>Attendance</h1>
          <p>Monitor employee attendance and working hours.</p>
        </div>

        <button>Export Report</button>
      </header>

      <section className="attendance-summary">
        <div>
          <h3>Present Today</h3>
          <p>38</p>
        </div>

        <div>
          <h3>On Leave</h3>
          <p>4</p>
        </div>

        <div>
          <h3>Late Arrivals</h3>
          <p>3</p>
        </div>

        <div>
          <h3>Absent</h3>
          <p>0</p>
        </div>
      </section>

      <section className="attendance-table-section">
        <div className="section-header">
          <h2>Today's Attendance</h2>
          <button>Filter</button>
        </div>

        <table className="attendance-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Date</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {attendanceData.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.date}</td>
                <td>{employee.checkIn}</td>
                <td>{employee.checkOut}</td>
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
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Attendance;