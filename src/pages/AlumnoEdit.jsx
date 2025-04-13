import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAlumnos } from "../context/AlumnoContext";
import Swal from "sweetalert2";

const AlumnoEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getAlumnoById, updateAlumno } = useAlumnos();

  const [form, setForm] = useState({
    name: "",
    edad: "",
    curso: "",
    escuela: "",
    avatar: "",
    activo: true,
  });

  useEffect(() => {
    const fetchAlumno = async () => {
      const alumno = await getAlumnoById(id);
      setForm(alumno);
    };
    fetchAlumno();
  }, [id, getAlumnoById]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, edad, curso, escuela, avatar } = form;

    if (!name || !edad || !curso || !escuela) {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Completá todos los campos obligatorios.",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    if (name.trim().length < 3) {
      Swal.fire({
        icon: "error",
        title: "Nombre muy corto",
        text: "El nombre debe tener al menos 3 caracteres.",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    const edadNum = Number(edad);
    if (isNaN(edadNum) || edadNum < 10 || edadNum > 25) {
      Swal.fire({
        icon: "error",
        title: "Edad inválida",
        text: "La edad debe estar entre 10 y 25 años.",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    if (avatar && !avatar.startsWith("http")) {
      Swal.fire({
        icon: "error",
        title: "URL no válida",
        text: "La URL del avatar debe comenzar con http o https.",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    const alumnoEditado = {
      ...form,
      edad: edadNum,
      avatar:
        avatar.trim() !== ""
          ? avatar
          : "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    };

    updateAlumno(id, alumnoEditado);

    Swal.fire({
      icon: "success",
      title: "Alumno actualizado",
      text: "Los datos se modificaron correctamente.",
      confirmButtonText: "Aceptar",
    }).then(() => navigate("/alumnos"));
  };

  return (
    <div className="p-6 max-w-lg mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4">Editar Alumno</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded text-black"
          required
        />
        <input
          type="number"
          name="edad"
          placeholder="Edad"
          value={form.edad}
          onChange={handleChange}
          min={10}
          max={25}
          className="w-full border p-2 rounded text-black"
          required
        />
        <input
          type="text"
          name="curso"
          placeholder="Curso (ej: 4to A)"
          value={form.curso}
          onChange={handleChange}
          className="w-full border p-2 rounded text-black"
          required
        />
        <input
          type="text"
          name="escuela"
          placeholder="Escuela"
          value={form.escuela}
          onChange={handleChange}
          className="w-full border p-2 rounded text-black"
          required
        />
        <input
          type="text"
          name="avatar"
          placeholder="URL del Avatar"
          value={form.avatar}
          onChange={handleChange}
          className="w-full border p-2 rounded text-black"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="activo"
            checked={form.activo}
            onChange={handleChange}
          />
          Activo
        </label>

        {/* Botones */}
        <div className="flex gap-4 justify-between mt-4">
          <button
            type="submit"
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
          >
            Guardar Cambios
          </button>
          <button
            type="button"
            onClick={() => navigate("/alumnos")}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AlumnoEdit;
