import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const ProtectedRoute = ({ children }) => {
  const { currentuser } = useAuth();

  if (!currentuser) {
    return <Navigate to="/login" replace />;
  }
  return children;
}