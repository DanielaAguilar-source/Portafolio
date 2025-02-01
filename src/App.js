import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ParticlesBackground />
          <Navbar />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Experience" element={<Experience />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
