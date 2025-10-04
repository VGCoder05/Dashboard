import { Route, Routes } from "react-router-dom";
import DashboardPages from "../pages/DashboardPages";
import ProtectedRoute from "../components/common/ProtectedRoute/ProtectedRoute";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardPages />
          </ProtectedRoute> 
        }
      />
      <Route
        path="/product"
        element={
          <ProtectedRoute>
            <DashboardPages />
          </ProtectedRoute> 
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default MainRoutes;
