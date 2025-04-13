import { useAlumnos } from "../context/AlumnoContext";
import { Link } from "react-router-dom";
import AlumnoCard from "../components/AlumnoCard";

const AlumnoList = () => {
  const { alumnos } = useAlumnos();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Listado de Alumnos</h1>
        <Link
          to="/alumnos/create"
          className="bg-pink-700 text-white px-3 py-1 rounded hover:bg-green-700 transition"
        >
          Agregar Alumno
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {alumnos.map((alumno) => (
          <AlumnoCard key={alumno.id} alumno={alumno} />
        ))}
      </div>
    </div>
  );
};

export default AlumnoList;
