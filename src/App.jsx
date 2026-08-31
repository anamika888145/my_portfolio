import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="relative gradient text-white">
            <CustomCursor/>
            <ParticlesBackground />

            <Navbar />
           <Home/>
           <About/>
           <Skills/>
           <Projects/>
           <Contact/>
            <footer/>
        </div>
    );
}