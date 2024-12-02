import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Auth/login";
import RegisterPage from "./pages/Auth/register";
import StaffPage from "./pages/Staff/dashboard";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={< />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/staff" element={<StaffPage />} />
      </Routes>
    </Router>
  );
};

export default App;
