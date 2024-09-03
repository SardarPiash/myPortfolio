import React from "react";
import { MdCheckCircle } from "react-icons/md";
import { MdWorkHistory } from "react-icons/md";

const Experience = () => {
  return (
    <div
      id="experience"
      className="container mx-auto  p-6 max-w-full md:max-w-[1152px]    text-softBlack" 
    >
      

      <div
        className="mt-[-5px] w-full md:w-[900px] md:mr-5  h-[340px]"
        data-aos="fade-up"
      >
        <div className="flex items-center mb-10 text-softBlue">
        <h2 className="text-[24px] md:text-[32px] lg:text-[32px] font-bold">
          Where I’ve Worked
        </h2>
        <div className="ml-6 w-[20%] h-1 bg-softBlue"></div>
      </div>
        <div className="md:ml-1 ">
        <div className=" mt-8  md:w-[900px]">
          <div className=" flex">
            <div className=" md:my-auto">
        <MdWorkHistory className="text-richGold w-6 h-6"/>
        </div>
        <div className="md:ml-1">
          <h3 className="text-[22px] font-bold text-richGold">
            Front-End Developer Intern at American International University
            Bangladesh
          </h3>
          </div>
          </div>
          </div>
          <p className="text-[13px] mt-1 text-softBlue underline">Aug 2023- Jan 2024</p>

          <ul className="mt-3 space-y-3">
            <li className="text-[15px] flex items-start">
              <MdCheckCircle className="text-gray-400 mr-2 mt-1 md:w-9 md:h-9" />
              Contributed significantly to the development of an advanced CS
              portal and website for American International
              University-Bangladesh (AIUB) using Next.js and laravel, serving as
              a key team member in the front-end development team. Write modern,
              performant, maintainable code for a diverse array of client and
              internal projects.
            </li>

            <li className="text-[15px] flex items-start">
              <MdCheckCircle className="text-gray-400 mr-2 mt-1" />
             
              Expertly integrated backend APIs and databases to provide
              real-time crop data, resulting in substantial enhancements to
              decision-making capabilities.
             
            </li>
          </ul>
        </div>
        <div className=" mt-14  md:w-[900px]">
          <div className=" flex">
            <div className=" md:my-auto">
        <MdWorkHistory className="text-richGold w-6 h-6"/>
        </div>
        <div className="md:ml-2">
          <h3 className="text-[22px] font-bold text-richGold">
            Junior Software Enginner at Sheikh Russel Digital Lab (SRDL
            Project)-Automind IT
          </h3>
          </div>
          </div>
          <p className="text-[13px] mt-1 text-softBlue underline">April 2024- Present</p>

          <ul className="mt-3 space-y-3">
            <li className="text-[13px] flex items-start">
              <MdCheckCircle className="text-gray-400 mr-2 mt-1" />
              <div className="text-[15px]">
              Developed 2D games and simulations using JavaScript and canvas
              frameworks (PIXI JS, Create JS, Zim JS).
              </div>
            </li>

            <li className="text-[13px] flex items-start">
              <MdCheckCircle className="text-gray-400 mr-2 mt-1" />
              <div className="text-[15px]">
              Collaborated on planning and testing with the software team. .
              </div>
            </li>
            <li className="text-[13px] flex items-start">
              <MdCheckCircle className="text-gray-400 mr-2 mt-1" />
              <div className="text-[15px]">
              Contributed to micro-modular projects like games, simulations,
              gamified learning modules, and interactive graphics.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
