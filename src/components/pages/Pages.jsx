import React from "react";
import About from "../aboutme/About";
import Contact from "../contact/Contact";
import Experience from "../Experience/Experience";
import Hero from "../Hero";
import Navbar from "../Navbar";
import Projects from "../projects/Projects";

export default function Pages() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
