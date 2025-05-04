import { useEffect } from "react";
import mypicture from "../../assets/myphoto.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaRegCheckCircle } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="about" className="max-w-6xl px-6 py-10 md:mt-6 mx-auto ">
      <div data-aos="fade-up ">
        <div className="flex items-center text-softBlue">
          <h2 className="text-2xl md:text-4xl font-bold mb-10 ">About Me</h2>
          <div className="mt-[-2rem] ml-6 w-1/2 md:w-1/5 h-1 bg-softBlue"></div>
        </div>
        <div>
          <p className="text-base text-justify text-softBlack">
            I’m a Junior Software Engineer with a focus on front-end and game
            development. Currently, I work on the Rokomari live site,
            contributing to feature development using Next.js, TypeScript, JSTL,
            jQuery, SCSS, and gaining experience with Java Spring Boot.
            <br />
            <br />
            Previously, I developed 2D games and simulations at Sheikh Russel
            Digital Lab (SRDL Project) using PIXI JS, Create JS, and Zim JS, and
            helped build a news aggregation portal. During my internship at
            AIUB, I contributed to a CS portal using Next.js and Laravel,
            integrating real-time backend APIs. My skills include React.js,
            Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, and
            familiarity with PHP, Laravel, and Nest.js. I hold a BSc in CSE from
            AIUB with a CGPA of 3.60.
            <br />
            <br />
            <span className=" text-softBlue" data-aos="fade-up">
              Here are a few technologies I’ve been working with recently:
            </span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-16  text-softBlack">
        <div>
          <div className="grid grid-cols-2 mt-3">
            <ul className="text-sm space-y-3" data-aos="fade-up">
              <li className="flex items-center">
                <FaRegCheckCircle className="text-richGold mr-2" /> JavaScript
                (ES6+)
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="text-richGold mr-2" /> JQuery
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="text-richGold mr-2" /> HTML & HTML5
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="text-richGold mr-2" /> CSS & CSS3 & Scss
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="text-richGold mr-2" /> PHP
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="text-richGold mr-2" /> MySQL
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="text-richGold mr-2" /> Postgre SQL
              </li>
            </ul>
            <ul className="text-sm space-y-3" data-aos="fade-up">
              <li className="flex items-center">
                <FaRegCheckCircle className="text-richGold mr-2" /> React.js
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="text-richGold mr-2" /> Next.js (jsx/tsx)
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="text-richGold mr-2" /> Tailwind CSS
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="text-richGold mr-2" /> Zim.js
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="text-richGold mr-2" /> Nest.js (familiarity)
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="text-richGold mr-2" /> Laravel 
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="text-richGold mr-2" /> Spring boot (well known)
              </li>
            </ul>
          </div>
        </div>

        <div data-aos="fade-up" className="flex justify-center md:block mt-5 ">
          <div className="relative w-[270px] h-[300px]">
            <div className="absolute left-9 mt-6 w-[250px] h-[250px] border-2 border-gray-500 rounded"></div>
            <img
              src={mypicture}
              alt="My Photo"
              className="absolute top-[-10px] w-[250px] h-[250px] rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
