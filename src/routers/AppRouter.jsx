import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../pages/Dashboard";
import Pagenotfound from "../pages/Pagenotfound";
import Profile from "../pages/Profile";
import TransactionForm from "../pages/TransactionForm";
import ProtectedRoute from "./ProtectedRoute";

const MainLayout = lazy(() => import("../layout/MainLayout"));

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="/" element={<ProtectedRoute />}>
          <Route
            path="/"
            element={
              <Suspense fallback={"loading...."}>
                <MainLayout />
              </Suspense>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="transaction-from" element={<TransactionForm />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>

        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
