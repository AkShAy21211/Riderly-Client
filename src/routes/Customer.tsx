import { Routes, Route } from "react-router-dom";
import Register from "../pages/customer/Register";
import Login from "../pages/customer/Login";
import Layout from "../components/layout/Layout";
import Home from "../pages/customer/Home";
const Customer = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
    </Routes>
  );
};

export default Customer;
