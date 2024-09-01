import { useState } from "react";
import About from "./components/aboutme/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/projects/Projects";

export default function App() {
  // const [showToast,setShowToast] = useState(flase)

  // function handleToast(){

  // }
  return (
    <div className=" bg-black font-notoSans">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}