import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useAlumnos } from "../context/AlumnoContext";

const AlumnoDetail = () => {
  const { id } = useParams();
  const { getAlumnoById } = useAlumnos();
  const [alumno, setAlumno] = useState(null);

  useEffect(() => {
    const fetchAlumno = async () => {
      const data = await getAlumnoById(id);
      setAlumno(data);
    };
    fetchAlumno();
  }, [id, getAlumnoById]);

  if (!alumno)
    return <p className="text-center mt-10 text-lg text-white">Cargando...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow-lg rounded-lg text-center text-black">
      <img
        src={alumno.avatar}
        alt={alumno.name}
        className="w-28 h-28 object-cover rounded-full mx-auto mb-4 shadow"
      />
      <h2 className="text-2xl font-bold mb-2">{alumno.name}</h2>
      <p className="mb-1"><span className="font-semibold">Edad:</span> {alumno.edad}</p>
      <p className="mb-1"><span className="font-semibold">Curso:</span> {alumno.curso}</p>
      <p className="mb-2"><span className="font-semibold">Escuela:</span> {alumno.escuela}</p>
      <p
        className={`text-sm font-medium mt-1 ${
          alumno.activo ? "text-green-600" : "text-red-600"
        }`}
      >
        {alumno.activo ? "Activo" : "Inactivo"}
      </p>

      <Link
        to="/alumnos"
        className="mt-6 inline-block bg-gray-700 text-white px-6 py-2 rounded shadow hover:bg-gray-600 transition"
      >
        Volver
      </Link>
    </div>
  );
};

export default AlumnoDetail;
