import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../providers/authContext";

export const PrivateRoutesClient = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? (
    <Navigate to="/" />
    ) : (
    <Outlet />
  );
};
