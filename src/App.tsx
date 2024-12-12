// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Auth/login";
import RegisterPage from "./pages/Auth/register";
import StaffPage from "./pages/Staff/dashboard";
import "./App.css";
import Auth from "./middleware/Auth";
import PageNotFound from "./pages/404";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route
          path="/staff"
          element={
            <Auth requiredRole="staff">
              <StaffPage />
            </Auth>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
