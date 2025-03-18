import { useAuth } from "@/context/auth-context";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PrivateRoute;
