function AdminDashboard() {
  return (
    <div className="admin-dashboard">
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

      <main className="admin-main">
        <h1>Admin / HR Dashboard</h1>

        <section>
          <h2>Employees</h2>
          <p>Employee list will appear here.</p>
        </section>

        <section>
          <h2>Attendance</h2>
          <p>Attendance records will appear here.</p>
        </section>

        <section>
          <h2>Leave Requests</h2>
          <p>Leave approval requests will appear here.</p>
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;