import aboutImage from "../img/about-me.png"; 

export default function AboutMe() {
  return (
    <section className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>Sobre Mí</h2>
          <p>
            ¡Hola! Soy Daniela Aguilar, una apasionada de la tecnología con más de 3 años de experiencia en soporte y desarrollo de software. A lo largo de este tiempo, he adquirido habilidades en resolución de problemas, 
            trabajo en equipo y metodologías ágiles.
          </p>
          <p>
            Me motiva seguir aprendiendo y explorando nuevas tecnologías para mejorar como desarrolladora. 
            Disfruto los retos y la oportunidad de contribuir a soluciones innovadoras.
          </p>
        </div>
        <div className="about-img">
          <img src={aboutImage} alt="Daniela Aguilar" />
        </div>
      </div>
    </section>
  );
}
