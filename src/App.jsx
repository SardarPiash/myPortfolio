import { useState } from "react";
import About from "./components/aboutme/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/projects/Projects";
import Footer from "./components/Footer";

export default function App() {
  // const [showToast,setShowToast] = useState(flase)

  // function handleToast(){

  // }
  return (
    <div className=" bg-[#1A1A1A] font-notoSans">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}