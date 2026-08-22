import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./auth/login";
import EmployeeDashboard from "./employee/EmployeeDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
