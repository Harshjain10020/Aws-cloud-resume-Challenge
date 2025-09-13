import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Hobbies from "./components/Hobbies";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <div id="page-wrap">
        <Header />
        {/* <About /> */}
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        
        <Activities />
        <Hobbies />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
