import { Link } from "react-router-dom";
import { useAlumnos } from "../context/AlumnoContext";
import Swal from "sweetalert2";

const AlumnoCard = ({ alumno }) => {
  const { deleteAlumno } = useAlumnos();

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: `Eliminar a ${alumno.name} es irreversible.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      await deleteAlumno(alumno.id);
      Swal.fire({
        title: "Eliminado",
        text: "El alumno fue eliminado.",
        icon: "success",
        confirmButtonText: "Aceptar",
        allowOutsideClick: false,
        allowEscapeKey: false,
      });
    }
  };

  return (
    <div className="bg-gray-500 text-black border p-5 rounded shadow text-center transform scale-90 hover:scale-95 transition-transform duration-200">

      <img
        src={alumno.avatar}
        alt={alumno.name}
        className="w-20 h-20 rounded-full mx-auto mb-2"
      />
      <h2 className="text-lg font-semibold">{alumno.name}</h2>
      <p className="text-sm">Curso: {alumno.curso}</p>
      <p className="text-sm mb-2">Escuela: {alumno.escuela}</p>

      <div className="flex justify-center gap-2 mt-2">
        <Link
          to={`/alumnos/${alumno.id}`}
          className="text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded text-xs"
        >
          Ver
        </Link>
        <Link
          to={`/alumnos/edit/${alumno.id}`}
          className="text-white bg-yellow-500 hover:bg-yellow-600 px-2 py-1 rounded text-xs"
        >
          Editar
        </Link>
        <button
          onClick={handleDelete}
          className="text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-xs"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default AlumnoCard;
