import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Roles from "./pages/Roles";
import Compliance from "./pages/Compliance";
import Candidates from "./pages/Candidates";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/privacy-compliance" element={<Compliance />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/job-seekers" element={<Candidates />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/employers" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
