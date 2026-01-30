import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/common/ProtectedRoute";
import RecruiterDashboard from "../pages/dashboard/RecruiterDashboard";
import CandidateDashboard from "../pages/dashboard/CandidateDashboard";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Jobs from "../pages/jobs/Jobs";
import JobDetails from "../pages/jobs/JobDetails";
import NotFound from "../pages/NotFound";


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/dashboard/recruiter"
          element={
            <ProtectedRoute>
              <RecruiterDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/candidate"
          element={
            <ProtectedRoute>
              <CandidateDashboard />
            </ProtectedRoute>
          }
        />
    </Routes>
  );
};

export default AppRoutes;