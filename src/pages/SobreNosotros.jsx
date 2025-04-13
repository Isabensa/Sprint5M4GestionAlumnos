import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SobreNosotros = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-white flex flex-col md:flex-row items-center justify-center gap-20">
      
      {/* TEXTO */}
      <div className="md:w-1/2 text-justify">
        <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
          Sobre Nosotros
        </h1>
        <p className="mb-4">
          Este proyecto fue desarrollado en el 2025 <strong>Sprint 5 de la Diplomatura en Desarrollo Web Fullstack con JavaScript del Nodo Tecnológico
          </strong>. Su objetivo es permitir una gestión sencilla, rápida y visualmente amigable de los alumnos de una institución educativa.
        </p>
        <p className="mb-4">
          Se usaron tecnologías como <strong>React, Tailwind CSS, React Router y MockAPI</strong>, priorizando la experiencia de usuario y el aprendizaje práctico.
        </p>
        <p className="mb-8">
          Soy <strong>Isabel</strong>, docente, madre de dos niños, una niña y dos perras. (Auxilio).
        </p>

        <div className="text-center">
          <Link
            to="/alumnos"
            className="inline-block bg-gray-400 hover:bg-gray-600 text-black px-4 py-2 rounded shadow-md transition"
          >
            Volver
          </Link>
        </div>
      </div>

      <motion.img
        src="/aboutus.jpg"
        alt="Sobre nosotros"
        className="rounded-lg shadow-2xl max-w-[200px] w-full"
        animate={{ x: [-15, 15, -15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default SobreNosotros;
