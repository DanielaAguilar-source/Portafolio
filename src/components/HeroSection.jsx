import workPage from "../img/workPage.png";
import { Linkedin, Github } from "lucide-react"; 
export default function HeroSection(props){

    return(
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-img">
                    <img src={workPage} alt="profile" />
                </div>
                <div className="hero-text">
                    <h2>Hola, soy Daniela Aguilar</h2>
                    <br></br>
                    <p>Apasionada por la tecnología y el aprendizaje continuo</p>
                    <p>Experiencia en soporte y desarrollo de software | Explorando nuevas tecnologías</p>
                <div className="hero-socials">
                    <a href="https://www.linkedin.com/in/daniela-aguilar-0b7139201/" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={30} color="#0e76a8" />
                    </a>
                    <a href="https://github.com/DanielaAguilar-source" target="_blank" rel="noopener noreferrer">
                        <Github size={30} color="#333" />
                    </a>
                </div>
                </div>
            </div>
        </div>
    )
}