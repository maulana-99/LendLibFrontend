// LendLibFrontend/src/middleware/Auth.tsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

interface AuthProps {
  children: React.ReactNode;
  requiredRole?: string;
}

const Auth: React.FC<AuthProps> = ({ children, requiredRole }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
        // Decode token untuk mendapatkan peran
        const decoded: { role: string } = jwtDecode(token);
      
        // Cek apakah peran cocok dengan yang dibutuhkan
        if (requiredRole && decoded.role !== requiredRole) {
          navigate("/404");
        }
      } catch (err) {
        console.error("Invalid token:", err);
        localStorage.removeItem("token");
        navigate("/login");
      }
      
  }, [navigate, requiredRole]);

  return <>{children}</>;
};

export default Auth;
