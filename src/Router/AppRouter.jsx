import { Routes, Route, Navigate } from "react-router-dom";
import AlumnoList from "../pages/AlumnoList";
import AlumnoCreate from "../pages/AlumnoCreate";
import AlumnoDetail from "../pages/AlumnoDetail";
import AlumnoEdit from "../pages/AlumnoEdit";
import Contacto from "../pages/Contacto";
import SobreNosotros from "../pages/SobreNosotros";
import NotFound from "../pages/NotFound"; 

const AppRouter = () => {
  return (
    <Routes>
      {/* Redirección desde raíz */}
      <Route path="/" element={<Navigate to="/alumnos" />} />

      <Route path="/alumnos" element={<AlumnoList />} />
      <Route path="/alumnos/create" element={<AlumnoCreate />} />
      <Route path="/alumnos/:id" element={<AlumnoDetail />} />
      <Route path="/alumnos/edit/:id" element={<AlumnoEdit />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/sobre-nosotros" element={<SobreNosotros />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
