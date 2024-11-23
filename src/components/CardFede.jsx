
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/CardFede.css"; // Estilos de CardFede
import "font-awesome/css/font-awesome.min.css";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit } from "react-icons/fa"; // Importar los íconos de React Icons
import { SiKotlin, SiCsharp, SiDotnet, SiFigma } from "react-icons/si";
import ImagenPerfilFede from "../assets/img/FG2.jpg"; // Imagen de perfil
import marvel2 from "../assets/img/marvel2.png";
import portfolio from "../assets/img/portfolio.png";

const CardFede = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fedeData = {
    name: "Federico Gastaldi",
    role: "Estudiante de Desarrollo de Software",
    description:
      "Apasionado del desarrollo de soluciones innovadoras, especializado en programación y desarrollo web. Me dedico a crear aplicaciones interactivas y eficientes utilizando tecnologías modernas para mejorar la experiencia del usuario.",
    institute: "IFTS N°29",
    links: [
      { icon: "twitter", url: "https://twitter.com/Fedev__" },
      { icon: "instagram", url: "https://www.instagram.com/fedev___/" },
      { icon: "linkedin", url: "https://www.linkedin.com/in/fedegastaldi/" },
      { icon: "github", url: "https://github.com/FedeGastaldi" },
    ],
    skills: [
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaReact />, name: "React" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaGit />, name: "Git" },
      { icon: <SiKotlin />, name: "Kotlin" },
      { icon: <SiCsharp />, name: "C#" },
      { icon: <SiDotnet />, name: ".NET" },
      { icon: <SiFigma />, name: "Figma" },
    ],
    projects: [
      {
        title: "Portfolio Personal",
        image: portfolio, 
        description: "Portfolio personal desarrollado con HTML, CSS y JavaScript",
        link: "https://genuine-elf-1e0b0f.netlify.app/"
      },
      {
        title: "API Marvel",
        image: marvel2, 
        description: "Consumo de la API de Marvel desarrollado con HTML, CSS y JavaScript.",
        link: "https://apimarvel1.netlify.app/"
      },
    ],
  };

  const toggleCard = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="container mx-auto mt-5">
      {/* Botón de navegación con flecha hacia atrás */}
      <Link
        to="/"
        className="absolute top-4 right-4 flex items-center text-blue-400 hover:text-blue-600"
      >
        <i className="fa fa-arrow-left mr-2"></i> Volver a la pantalla principal
      </Link>

      <div className="flex justify-center">
        <div className={`card ${isExpanded ? "expanded" : ""} w-full max-w-md`}>
          <div className="p-5 py-8 shadow-xl rounded-lg relative overflow-hidden">
            {/* Botón para expandir/contraer */}
            <button
              onClick={toggleCard}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white w-8 h-8 flex items-center justify-center transition"
            >
              <i className={`fa ${isExpanded ? "fa-chevron-left" : "fa-chevron-right"}`}></i>
            </button>

            {/* Imagen de Perfil */}
            <div className="text-center">
              <img
                src={ImagenPerfilFede}
                alt={`${fedeData.name}'s Profile`}
                className="w-24 h-24 rounded-full mx-auto"
              />
            </div>

            {/* Información del Usuario */}
            <div className="text-center mt-3">
              <span className="bg-blue-800 text-white px-4 py-1 rounded">
                {fedeData.institute}
              </span>
              <h5 className="mt-2 mb-0 text-xl font-semibold text-white">
                {fedeData.name}
              </h5>
              <span className="text-blue-400">{fedeData.role}</span>
              <div className="mt-3 px-4">
                <p className="text-sm text-gray-300">{fedeData.description}</p>
              </div>

              {/* Enlaces a Redes Sociales */}
              <ul className="flex justify-center mt-4 space-x-4 text-blue-400">
                {fedeData.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`fa fa-${link.icon}`}></i>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contenido adicional al expandir */}
              {isExpanded && (
                <div className="mt-4 text-left text-gray-300">
                  <h3 className="text-blue-400 font-semibold">Más sobre mí</h3>
                  <p>
                    Experiencia en desarrollo frontend y backend, con proyectos destacados en React, Node.js y .NET. Me encanta aprender y explorar nuevas tecnologías para ofrecer
                    soluciones innovadoras.
                  </p>

                  {/* Sección de Habilidades */}
                  <div className="mt-5">
                    <h4 className="text-blue-400 font-semibold">Habilidades</h4>
                    <div className="flex justify-center space-x-4 mt-2">
                      {fedeData.skills.map((skill, index) => (
                        <div key={index} className="text-center">
                          <span className="icon-size">{skill.icon}</span>
                          <p className="text-sm text-gray-300 mt-1">{skill.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sección de Proyectos */}
                  <h4 className="mt-3 text-blue-400 font-semibold">Proyectos</h4>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {fedeData.projects.map((project, index) => (
                      <div key={index} className="project-card border p-4 rounded-lg shadow-lg">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full  object-cover rounded-lg"
                        />
                        <h5 className="mt-3 text-lg font-semibold text-blue-400">{project.title}</h5>
                        <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                        >
                          Ver Proyecto
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Botones de Interacción */}
              <div className="flex justify-center mt-4 space-x-3">
                <button className="border border-blue-400 text-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:text-white transition">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=gastaldifederico69@gmail.com&su=Contacto%20profesional&body=Hola%20Federico,%0A%0AMe%20gustaría%20hablar%20contigo%20sobre%20una%20posible%20colaboración.%0A%0ASaludos,%0A[Tu%20nombre]"
                    target="_blank"
                  >
                    Contactar vía Gmail
                  </a>
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  <a href="https://fedegastaldi.netlify.app/" target="_blank">
                    Portfolio
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFede;

