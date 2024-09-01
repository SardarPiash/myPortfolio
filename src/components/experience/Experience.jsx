import React from "react";
import { MdCheckCircle } from "react-icons/md";

const Experience = () => {
  return (
    <div
      id="experience"
      className="container mx-auto p-6 max-w-full md:max-w-[960px] lg:max-w-[1000px] text-white"
    >
      <div className="flex items-center mb-10">
        <h2 className="text-[24px] md:text-[32px] lg:text-[32px] font-bold">
          Where I’ve Worked
        </h2>
        <div className="ml-6 w-[20%] h-1 bg-gray-200"></div>
      </div>

      <div
        className="mt-[-10px] w-full md:w-[800px] lg:w-[800px] h-[340px]"
        data-aos="fade-up"
      >
        <div>
          <h3 className="text-[22px] font-bold">
            Front-End Developer Intern at American International University
            Bangladesh
          </h3>
          <p className="text-[13px] mt-1 text-gray-400">Aug 2023- Jan 2024</p>

          <ul className="mt-3 space-y-3">
            <li className="text-[15px] flex items-start">
              <MdCheckCircle className="text-gray-400 mr-2 mt-1" />
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
        <div className=" mt-14">
          <h3 className="text-[22px] font-bold">
            Junior Software Enginner at Sheikh Russel Digital Lab (SRDL
            Project)-Automind IT
          </h3>
          <p className="text-[13px] mt-1 text-gray-400">April 2024- Present</p>

          <ul className="mt-3 space-y-3">
            <li className="text-[15px] flex items-start">
              <MdCheckCircle className="text-gray-400 mr-2 mt-1" />
              Developed 2D games and simulations using JavaScript and canvas
              frameworks (PIXI JS, Create JS, Zim JS).
            </li>

            <li className="text-[15px] flex items-start">
              <MdCheckCircle className="text-gray-400 mr-2 mt-1" />
              Collaborated on planning and testing with the software team. .
            </li>
            <li className="text-[15px] flex items-start">
              <MdCheckCircle className="text-gray-400 mr-2 mt-1" />
              Contributed to micro-modular projects like games, simulations,
              gamified learning modules, and interactive graphics.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
