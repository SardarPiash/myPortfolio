import About from "./components/aboutme/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className=" bg-black h-[2000px]">
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}