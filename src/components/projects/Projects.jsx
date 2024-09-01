import React from 'react';
import { FiGithub } from "react-icons/fi";
import { TbBrandCodepen } from "react-icons/tb";

const Projects = () => {
  const projects = [
    {
      img: 'path_to_lipsy_image',
      title: 'Lipstick Shop',
      imglink: 'https://lipsy-caf19.web.app/',
      link: 'https://lipsy-caf19.web.app/',
      des: 'A complete niche product website with email and password login. There is a dashboard for admins and another dashboard for users. An admin can add or remove products and manage orders.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'React Bootstrap', 'Heroku']
    },
    {
      img: 'path_to_power_image',
      title: 'Healthcare Related Website',
      imglink: 'https://power-surge-c4f02.web.app/',
      link: 'https://power-surge-c4f02.web.app/',
      des: 'A complete healthcare website with google, email, and password login. A fully responsive website including tablets and smartphones. Users can make an appointment using the appointment form.',
      tech: ['React', 'React-Router', 'Hook Form', 'Netlify', 'React Bootstrap']
    },
    {
      img: 'path_to_gosee_image',
      title: 'Travel website',
      imglink: 'https://go-see-fc074.web.app/',
      link: 'https://go-see-fc074.web.app/',
      des: 'A complete travel agency management system with google login. There is a dashboard for admin to manage bookings, plans, etc. Users can create an account, book a package, etc.',
      tech: ['React', 'Node.js', 'Firebase', 'Tailwind CSS', 'Netlify']
    }
  ];

  return (
    <div id='projects' className="container mx-auto px-5 py-10 max-w-7xl mt-32">
      <div className="flex items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white" data-aos="fade-up">Some Things I’ve Built</h2>
        <div className="ml-6 w-1/5 h-1 bg-white" data-aos="fade-up"></div>
      </div>

      <div className="mt-10 space-y-20">
        {projects.map((project, index) => (
          <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-5 ${index % 2 !== 0 ? 'text-right' : ''}`} data-aos="fade-up">
            {index % 2 !== 0 && (
              <div className="order-2 md:order-1">
                <div>
                  <h3 className="text-gray-400 text-sm">Featured Project</h3>
                  <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                  <div className="relative">
                    <div className="mt-5 p-6 bg-blue-900 text-white text-base rounded-md shadow-md">
                      {project.des}
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-2 text-white">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex}>{tech}</span>
                    ))}
                  </div>
                  <div className="flex justify-end gap-2 mt-5">
                    <a href='#' className="text-white">
                      <FiGithub size={24} />
                    </a>
                    <a href={project.link} target='_blank' rel='noopener noreferrer' className="text-white">
                      <TbBrandCodepen size={24} />
                    </a>
                  </div>
                </div>
              </div>
            )}
            <div className={`order-${index % 2 !== 0 ? '1' : '2'} md:order-2`}>
              <a href={project.imglink} target='_blank' rel='noopener noreferrer'>
                <img src={project.img} alt={project.title} className="w-full h-auto md:h-64 lg:h-80 object-cover cursor-pointer" />
              </a>
            </div>
            {index % 2 === 0 && (
              <div className="order-2 md:order-3">
                <div>
                  <h3 className="text-gray-400 text-sm">Featured Project</h3>
                  <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                  <div className="mt-5 p-6 bg-blue-900 text-white text-base rounded-md shadow-md">
                    {project.des}
                  </div>
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-2 text-white">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex}>{tech}</span>
                    ))}
                  </div>
                  <div className="flex justify-start gap-2 mt-5">
                    <a href='#' className="text-white">
                      <FiGithub size={24} />
                    </a>
                    <a href={project.link} target='_blank' rel='noopener noreferrer' className="text-white">
                      <TbBrandCodepen size={24} />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
