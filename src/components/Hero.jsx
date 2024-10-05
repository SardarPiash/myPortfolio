import React from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import CV from "../assets/cv.svg";
import { FcViewDetails } from "react-icons/fc";

const Hero = () => {
  return (
    <div className="container mx-auto p-0 max-w-[100%] md:max-w-[1152px]" >
      <div className="px-2 py-[25px] mt-[10px] md:py-0 md:mt-[40px] lg:mt-[55px]  md:ml-[13px]">
        <p className="text-base md:text-base lg:text-base text-softBlack">
          Hi, I'm
        </p>

        <h1
          style={{
            background: "linear-gradient(to right, #ff8c00, #ffd700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          Abu Shaleh Md. Kaium
        </h1>

        <h2 className="text-[35px] md:text-[30px] font-bold text-softBlue tracking-tight lg:w-full">
          Code meets creativity <span className=" text-softBlue">|</span>{" "}
          Bringing creativity to life through code.
        </h2>

        <p className="mt-4 text-[16px] md:text-[18px] lg:text-[16px] tracking-tight w-[90%] md:w-[60%] lg:w-[60%] text-justify text-softBlack">
          I'm a dedicated Front-End Developer with a passion for creating
          intuitive and impactful web experiences. My vision is to innovate and
          craft digital solutions that not only look great but also serve a
          purpose, making technology more accessible and engaging for everyone.
        </p>
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1MvlFcBIZEG5IclF7fVuLwvYGNGlnPJoE/view?usp=sharing",
              "_blank"
            )
          }
          className=" mt-12 px-8 py-6 bg-[#4A4A4A] text-[#FFFFFF] hover:bg-[#2C3E50] hover:text-[#E0E0E0] border border-transparent rounded flex items-center"
        >
          <FcViewDetails className="w-4 h-4" />
          <span className="ml-3">Checkout my resume</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
