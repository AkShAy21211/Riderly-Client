import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../pages/customer/Register";
import Login from "../pages/customer/Login";
import Layout from "../components/layout/Layout";
import Home from "../pages/customer/Home";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "../middleware/ProtectedRoute";
import GuestRoute from "../middleware/GuestRoute";
import { Toaster } from "sonner";

const Customer = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes for Guests */}
        <Route
          path="/login"
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
        />
        <Route
          path="/register"
          element={
            <GuestRoute>
              <Register />
            </GuestRoute>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
      <Toaster/>
    </AuthProvider>
  );
};

export default Customer;
