import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-3">
        <img src="/alumnos.jpg" alt="Logo" className="h-10 w-10" />
        <h1 className="text-xl font-semibold">Gestión de Alumnos</h1>
      </div>

      <nav className="flex gap-4">
        <Link
          to="/contacto"
          className="bg-gray-700 px-3 py-1 rounded hover:scale-105 hover:shadow-white transition-transform duration-200"
        >
          Contáctenos
        </Link>
        <Link
          to="/sobre-nosotros"
          className="bg-gray-700 px-3 py-1 rounded hover:scale-105 hover:shadow-white transition-transform duration-200"
        >
          Sobre Nosotros
        </Link>
      </nav>
    </header>
  );
};

export default Header;
