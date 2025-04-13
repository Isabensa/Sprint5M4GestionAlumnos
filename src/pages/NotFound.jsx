import { Link } from "react-router-dom";
import { FaRegSadTear } from "react-icons/fa";
import { toast } from "react-toastify";
import { useEffect } from "react";

const NotFound = () => {
    useEffect(() => {
      toast.error(
        "😱 ¡Ups! Esta página se fugó al multiverso... (al igual que mi cintura)", 
        {
          className: "toast-con-sombra",
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          icon: "🚫",
        }
      );
    }, []);

  return (
    <div className="min-h-screen bg-red-700 flex flex-col items-center justify-center text-black text-center p-6">
      <FaRegSadTear className="text-8xl mb-4" />
      <h1 className="text-5xl font-bold">404</h1>
      <p className="text-xl mb-6">Página no encontrada</p>
      <Link
        to="/alumnos"
        className="mt-6 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 shadow transition"
      >
        Volver a Alumnos
      </Link>
    </div>
  );
};

export default NotFound;
