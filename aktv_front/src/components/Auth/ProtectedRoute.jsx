import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, role, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user || !role) {
    return <Navigate to="/auth" replace />;
  }

  if (requiredRole !== undefined && role !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children
};

export default ProtectedRoute;