// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isSignedUp = localStorage.getItem("isSignedUp") === "true";
  return isSignedUp ? children : <Navigate to="/signup" />;
};

export default ProtectedRoute;
