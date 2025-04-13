import { Link } from "react-router-dom";

const Contacto = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Contáctenos</h1>

      <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-700 p-6 rounded shadow-lg">
        {/* Imagen */}
        <img
          src="/mail.jpg"
          alt="Correo"
          className="w-32 h-32 rounded shadow-lg"
        />

        {/* Información de contacto */}
        <div className="text-left space-y-2">
          <p><strong>Teléfono:</strong> <a href="tel:3834034575" className="underline hover:text-blue-300">3834034575</a></p>
          <p><strong>Email:</strong> <a href="mailto:bensadoncelia@gmail.com" className="underline hover:text-blue-300">bensadoncelia@gmail.com</a></p>
          <p><strong>Facebook:</strong> <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">facebook.com</a></p>
          <p><strong>Instagram:</strong> <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-300">@instagram</a></p>
        </div>
      </div>

      {/* Botón volver */}
      <Link
        to="/alumnos"
        className="mt-8 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-500 shadow transition"
      >
        Volver
      </Link>
    </div>
  );
};

export default Contacto;
