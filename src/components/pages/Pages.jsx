import React, { useRef, useState } from "react";
import About from "../aboutme/About";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";
import Hero from "../Hero";
import Navbar from "../Navbar";
import Projects from "../projects/Projects";

export default function Pages() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [hero, setHero] = useState(false);
  const [about, setAbout] = useState(false);

  const scrollToSection = (section) => {
    setHero(false);
    if (section === "hero" && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
      setHero(true);
    } else if (section === "about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "experience" && experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "projects" && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      <Navbar scrollToSection={scrollToSection} />
      <div ref={heroRef} className="w-full">
        <Hero />
      </div>
      <div ref={aboutRef} className="w-full">
        <About />
      </div>
      <div ref={experienceRef} className="w-full">
        <Experience />
      </div>
      <div ref={projectsRef} className="w-full">
        <Projects />
      </div>
      <div ref={contactRef} className="w-full">
        <Contact />
      </div>
    </div>
  );
}
