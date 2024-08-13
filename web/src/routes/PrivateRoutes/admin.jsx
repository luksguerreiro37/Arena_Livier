import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AdminContext } from "../../providers/adminContext";

export const PrivateRoutesAdmin = () => {
  const { adminToken } = useContext(AdminContext);

  return adminToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login-admin" />
  );
};
