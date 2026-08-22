function LeaveRequests() {
  const leaveRequests = [
    {
      id: 1,
      employee: "Arjun Mehta",
      department: "Human Resources",
      leaveType: "Casual Leave",
      from: "25 Aug 2026",
      to: "27 Aug 2026",
      days: 3,
      status: "Pending",
    },
    {
      id: 2,
      employee: "Priya Singh",
      department: "Design",
      leaveType: "Sick Leave",
      from: "28 Aug 2026",
      to: "29 Aug 2026",
      days: 2,
      status: "Pending",
    },
    {
      id: 3,
      employee: "Rahul Sharma",
      department: "Engineering",
      leaveType: "Annual Leave",
      from: "01 Sep 2026",
      to: "05 Sep 2026",
      days: 5,
      status: "Approved",
    },
    {
      id: 4,
      employee: "Ananya Gupta",
      department: "Engineering",
      leaveType: "Casual Leave",
      from: "10 Sep 2026",
      to: "11 Sep 2026",
      days: 2,
      status: "Rejected",
    },
  ];

  return (
    <div className="attendance-page">
      <header className="page-header">
        <div>
          <h1>Leave Requests</h1>
          <p>Review and manage employee leave requests.</p>
        </div>

        <button>Export Report</button>
      </header>

      <section className="attendance-summary">
        <div>
          <h3>Pending Requests</h3>
          <p>2</p>
        </div>

        <div>
          <h3>Approved</h3>
          <p>1</p>
        </div>

        <div>
          <h3>Rejected</h3>
          <p>1</p>
        </div>

        <div>
          <h3>Total Requests</h3>
          <p>4</p>
        </div>
      </section>

      <section className="attendance-table-section">
        <div className="section-header">
          <h2>Leave Requests</h2>
          <button>Filter</button>
        </div>

        <table className="attendance-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Leave Type</th>
              <th>From</th>
              <th>To</th>
              <th>Days</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {leaveRequests.map((request) => (
              <tr key={request.id}>
                <td>{request.employee}</td>
                <td>{request.department}</td>
                <td>{request.leaveType}</td>
                <td>{request.from}</td>
                <td>{request.to}</td>
                <td>{request.days}</td>
                <td>
                  <span
                    className={
                      request.status === "Approved"
                        ? "status present"
                        : request.status === "Rejected"
                        ? "status rejected"
                        : "status leave"
                    }
                  >
                    {request.status}
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

export default LeaveRequests;