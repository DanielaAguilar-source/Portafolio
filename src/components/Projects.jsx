import { Github, ExternalLink } from "lucide-react";
import Portafolio from "../img/Portafolio.png"; 
import Rick from "../img/Rick-Morty.png"

const projects = [
  {
    title: "Rick and Morty",
    description: "Aplicación web que consume la API de Rick and Morty para mostrar información detallada sobre los personajes de la serie. Permite explorar los personajes con imágenes, nombres, especies y estado.",
    image: Rick,
    tech: ["React", "Css", "JavaScript", "Axios"],
    repo: "https://github.com/DanielaAguilar-source/Rick-Morty.git",
    demo: "https://rick-morty-source.netlify.app/",
  },
  {
    title: "Portafolio Personal",
    description: "Portafolio personal, donde expongo mis proyectos, habilidades y experiencia en desarrollo web. La interfaz cuenta con animaciones fluidas y efectos visuales de partículas, lo que ofrece una experiencia interactiva y moderna. Además, es completamente responsivo, adaptándose a distintos dispositivos, desde móviles hasta escritorios.",
    image: Portafolio,
    tech: ["React", "Css", "JavaScript"],
    repo: "https://github.com/DanielaAguilar-source/Portafolio.git",
    demo: "https://mi-portafolio-daniela.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section className="Container-section">
      <div className="container-project">
        <h2>Proyectos Destacados</h2>

        <div className="grid-container">
          {projects.map((project, index) => (
            <div key={index} className="project-content">
              <img src={project.image} alt={project.title} className="object-project" />
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div>
                  {project.tech.map((tech, i) => (
                    <span key={i} >
                      {tech}
                    </span>
                  ))}
                </div>
                <div>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" >
                    <Github size={20} /> Código
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" >
                    <ExternalLink size={20} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
