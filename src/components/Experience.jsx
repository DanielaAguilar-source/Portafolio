//Líneas de tiempo interactivas 
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";//Estilo predeterminado de la linea de tiempo de npm
import { Briefcase, CheckCircle } from "lucide-react";  //iconos

export default function Experience() {
  return (
    <div className="experience-container">
      <h2 className="title-working">Experiencia Laboral</h2>
      <VerticalTimeline>
        <VerticalTimelineElement //define un evento dentro de la linea de tiempo
          className="vertical-timeline-element--work"
          date="Julio 2021 - Enero 2025"
          iconStyle={{ background: "#6C63FF", color: "#fff" }}
          contentStyle={{ background: "rgba(216, 191, 224, 0.8)", color: "#000", borderRadius: "10px", boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)" }}
          icon={<Briefcase />}
        >
          <h3 className="vertical-timeline-element-title ">Desarrollador Junior</h3>
          <br></br>
          <h4 className="vertical-timeline-element-subtitle">Minos IT</h4>
            <p>Colaboré en el desarrollo de requerimientos asignados por el líder de proyecto.</p>
            <p>Realicé pruebas de aplicaciones para garantizar su óptimo funcionamiento.</p>
            <p>Detecté y corregí errores para mejorar la calidad del software.</p>
            <p>Participé en proyectos de frontend y backend, utilizando Vue.js, C#, SQL y más.</p>
          <br></br>
          <h4 className="vertical-timeline-element-subtitle">Aportes Destacados</h4>
            <p>Optimización de funcionalidades en el backend.</p>
            <p>Implementación de interfaces eficientes en el frontend.</p>
            <p>Trabajo en equipo bajo metodologías ágiles.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#4CAF50", color: "#fff" }}
          icon={<CheckCircle />}
        />
      </VerticalTimeline>
    </div>
  );
}
