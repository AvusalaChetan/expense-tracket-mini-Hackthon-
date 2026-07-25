import {Navigate, Route, Routes, useNavigate} from "react-router";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<MainLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <p>
              404
              <button onClick={() => navigate("/auth/register")}>
                go register page
              </button>
              <button onClick={() => navigate("/auth/login")}>
                go login page
              </button>
            </p>
          }
        />
      </Routes>
    </div>
  );
};

export default AppRouter;
