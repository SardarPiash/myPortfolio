import React from "react";
import { FiGithub } from "react-icons/fi";
import { TbBrandCodepen } from "react-icons/tb";
import { projectData } from "../../data/Data";
import img1 from "../../assets/tasker.png";
import img2 from "../../assets/movie.png";
import img3 from "../../assets/book.png";
import img4 from "../../assets/aiub.png";
import img5 from "../../assets/construction.png";
import img6 from "../../assets/munchies.png";
import img7 from "../../assets/queue.png";
import img8 from "../../assets/zim.png";
import { Link } from "react-router-dom";

const Projects = () => {
  const img = [img1, img2, img3, img4, img5, img6, img7, img8];
  const projects = projectData.map((project, index) => ({
    ...project,
    img: img[index] || null,
  }));

  return (
    <div
  id="projects"
  className="container mx-auto px-5 py-10 max-w-full md:max-w-[1260px] mt-[500px] md:mt-36  md:mx-auto"
>
  <div className="flex flex-col md:flex-row items-center" data-aos="fade-up">
    <h2 className="text-2xl md:text-4xl font-bold text-softBlue text-center md:text-left">
      Some Things I’ve Built
    </h2>
    <div className="mt-2 md:mt-0 md:ml-6 w-full md:w-1/5 h-1 bg-softBlue"></div>
  </div>

  <div className="mt-10 space-y-10">
    {projects.map((project, index) => (
      <div key={index}>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 ${
            index % 2 !== 0 ? "md:text-right" : ""
          }`}
          data-aos="fade-up"
        >
          {/* Display text content first on mobile */}
          <div className="text-left md:ml-2  md:mt-0">
            <div>
              <h3 className="text-softBlue text-base underline">
                Featured Project
              </h3>
              <h4 className="text-2xl font-bold text-richGold">
                {project.title}
              </h4>
              <div className="mt-5 p-6 bg-[#2E2E2E] text-softBlack text-justify text-sm rounded-md shadow-md">
                {project.des}
              </div>
              <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span className="text-richGold text-sm" key={techIndex}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-start gap-2 mt-5">
                <div className="bg-[black] w-9 h-9 rounded-full flex items-center justify-center">
                  <Link
                    to={project.githublink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red"
                  >
                    <FiGithub size={23} />
                  </Link>
                </div>
                <div className="bg-[black] w-9 h-9 rounded-full flex items-center justify-center">
                  <Link
                    to={project.Livelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red"
                  >
                    <TbBrandCodepen size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Image comes after text content on mobile */}
          <div className="order-last md:order-none">
            <a href={project.imglink} target="_blank" rel="noopener noreferrer">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto md:h-64 md:w-[500px] object-cover cursor-pointer rounded-sm"
              />
            </a>
          </div>
        </div>

        {projects && index < projects.length - 1 && (
          <div
            className="w-full h-[1px] md:w-[1130px] mt-4 md:mt-10 bg-softBlue"
            data-aos="fade-up"
          ></div>
        )}
      </div>
    ))}
  </div>
</div>

  );
};

export default Projects;
