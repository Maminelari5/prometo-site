import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Realisations from '../pages/Realisations';
import Contact from '../pages/Contact';
import Login from '../pages/admin/Login';
import Dashboard from '../pages/admin/Dashboard';
import AddProject from '../pages/admin/AddProject';
import EditProject from '../pages/admin/EditProject';
import ProtectedRoute from '../components/ProtectedRoute';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/admin" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/projects/create"
          element={
            <ProtectedRoute>
              <AddProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/projects/:id/edit"
          element={
            <ProtectedRoute>
              <EditProject />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;