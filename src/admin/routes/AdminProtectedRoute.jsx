import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

const AdminProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (!user) {
    toast.error("Please login first");
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "admin") {
    toast.error("Access denied. Admins only.");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminProtectedRoute;