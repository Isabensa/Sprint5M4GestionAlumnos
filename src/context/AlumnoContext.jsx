import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AlumnoContext = createContext();

const API_URL = "https://67f2b957ec56ec1a36d3ffaf.mockapi.io/alumnos";

export const AlumnoProvider = ({ children }) => {
  const [alumnos, setAlumnos] = useState([]);

  const getAlumnos = async () => {
    try {
      const res = await axios.get(API_URL);
      setAlumnos(res.data);
    } catch (error) {
      console.error("Error al obtener alumnos:", error);
    }
  };

  const getAlumnoById = async (id) => {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  };

  const createAlumno = async (data) => {
    const res = await axios.post(API_URL, data);
    setAlumnos([...alumnos, res.data]);
  };

  const updateAlumno = async (id, data) => {
    const res = await axios.put(`${API_URL}/${id}`, data);
    setAlumnos(alumnos.map((a) => (a.id === id ? res.data : a)));
  };

  const deleteAlumno = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setAlumnos(alumnos.filter((a) => a.id !== id));
  };

  useEffect(() => {
    getAlumnos();
  }, []);

  return (
    <AlumnoContext.Provider
      value={{
        alumnos,
        getAlumnoById,
        createAlumno,
        updateAlumno,
        deleteAlumno,
      }}
    >
      {children}
    </AlumnoContext.Provider>
  );
};

export const useAlumnos = () => useContext(AlumnoContext);

