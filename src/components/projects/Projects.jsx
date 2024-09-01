import React from "react";
import { FiGithub } from "react-icons/fi";
import { TbBrandCodepen } from "react-icons/tb";
import { projectData } from "../../data/Data";
import img1 from "../../assets/img_1.png";
import img2 from "../../assets/img_2.jpg";
import img3 from "../../assets/img_3.png";

const Projects = () => {
  const img = [img1, img2, img3];
  const projects = projectData.map((project, index) => ({
    ...project,
    img: img[index] || null,
  }));

  return (
    <div
      id="projects"
      className="container mx-auto md:ml-[180px] px-5 py-10 max-w-7xl mt-36"
    >
      <div className="flex items-center" data-aos="fade-up">
        <h2 className="text-2xl md:text-4xl  font-bold text-softBlue">
          Some Things I’ve Built
        </h2>
        <div className="ml-6 w-1/5 h-1 bg-softBlue"></div>
      </div>

      <div className="mt-10 space-y-20">
        {projects.map((project, index) => (
          <div>
            <div
              key={index}
              className={` grid grid-cols-1 md:grid-cols-2 gap-5 ${
                index % 2 !== 0 ? "text-right" : ""
              }`}
              data-aos="fade-up"
            >
              {index % 2 !== 0 && (
                <div className=" ">
                  <div className="order-2 md:order-1 text-left md:ml-2 md:mt-1">
                    <div>
                      <h3 className="text-softBlue text-base underline ">
                        Featured Project
                      </h3>
                      <h4 className="text-2xl font-bold text-richGold">
                        {project.title}
                      </h4>
                      <div className="relative">
                        <div className="mt-5 p-6 bg-[#2E2E2E] text-softBlack text-base rounded-md shadow-md">
                          {project.des}
                        </div>
                      </div>
                      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-2 ">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            className="text-richGold md:text-sm"
                            key={techIndex}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-start gap-2 mt-5">
                        <div className="bg-[black] md:w-9 md:h-9 rounded-full flex items-center justify-center">
                          <a href="#" className="text-red">
                            <FiGithub size={23} />
                          </a>
                        </div>
                        <div className="bg-[black] md:w-9 md:h-9 rounded-full flex items-center justify-center">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red"
                          >
                            <TbBrandCodepen size={24} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div
                className={`order-${index % 2 !== 0 ? "1" : "2"} md:order-2`}
              >
                <a
                  href={project.imglink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-auto md:h-64 lg:h-80 object-cover cursor-pointer rounded-sm"
                  />
                </a>
              </div>
              {index % 2 === 0 && (
                <div className="order-2 md:order-3 text-left md:ml-2 md:mt-0">
                  <div>
                    <h3 className="text-softBlue text-base underline">
                      Featured Project
                    </h3>
                    <h4 className="text-2xl font-bold text-richGold">
                      {project.title}
                    </h4>
                    <div className="mt-5 p-6 bg-[#2E2E2E] text-softBlack text-base rounded-md shadow-md">
                      {project.des}
                    </div>
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-2 text-softBlack">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          className="text-richGold md:text-sm"
                          key={techIndex}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-start gap-2 mt-5">
                      <div className="bg-[black] md:w-9 md:h-9 rounded-full flex items-center justify-center">
                        <a href="#" className="text-red">
                          <FiGithub size={23} />
                        </a>
                      </div>
                      <div className="bg-[black] md:w-9 md:h-9 rounded-full flex items-center justify-center">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red"
                        >
                          <TbBrandCodepen size={24} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {projects && index < projects.length - 1 ? (
              <div
                className="w-full h-[1px] md:mt-10 bg-softBlue"
                data-aos="fade-up"
              ></div>
            ) : (
              <div></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
