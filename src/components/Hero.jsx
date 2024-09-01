import React from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import CV from '../assets/cv.svg'
import { FcViewDetails } from "react-icons/fc";

const Hero = () => {
    return (
        <div className="container mx-auto p-0 max-w-[100%] md:max-w-[1152px]">

            <div className="px-2 py-[25px] mt-[10px] md:py-0 md:mt-[40px] lg:mt-[55px]  md:ml-[13px]">
                <p className="text-base md:text-base lg:text-base" style={{color:"#F8F8FF"}}>Hi, I'm</p>

                <h1 className="text-[30px] md:text-[50px]  font-bold text-white">Abu Shaleh Md. Kaium</h1>

                <h2 className="text-[35px] md:text-[30px] font-bold text-gray-400 tracking-tight lg:w-full">
                Code meets creativity <span className=" text-slate-300">|</span> Bringing creativity to life through code.
                </h2>

                <p className="mt-4 text-[16px] md:text-[18px] lg:text-[16px] tracking-tight w-[90%] md:w-[60%] lg:w-[60%] text-justify " style={{color:"#F8F8FF"}}>
                I'm a dedicated Front-End Developer with a passion for creating intuitive and impactful web experiences. My vision is to innovate and craft digital solutions that not only look great but also serve a purpose, making technology more accessible and engaging for everyone.
                </p>

                <a
                    href="https://drive.google.com/file/d/167eNXtPWZecJWF-D4yyZ4zMFf43fRVli/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-12 px-8 py-6 border border-white hover:bg-white text-white hover:text-black  rounded"
                >
                    <div className=" flex" >
                    <div className=" my-auto md:w-4 md:h-4"><FcViewDetails /></div>
                    <div className=" ml-3">Checkout my resume</div>
                    </div>
                </a>
            </div>

            {/* side bio
            <div className="fixed bottom-0 left-3 hidden md:block bg-green-400">
                <ul className="list-none w-10">
                    <li className="mb-4">
                        <a
                            href="https://github.com/sabihaohi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-400"
                        >
                            <FiGithub className="text-2xl" />
                        </a>
                    </li>
                    <li className="mb-4">
                        <a
                            href="https://www.instagram.com/sabihaohi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-400"
                        >
                            <FiInstagram className="text-2xl" />
                        </a>
                    </li>
                    <li className="mb-4">
                        <a
                            href="https://www.linkedin.com/in/sabiha-ohi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-400"
                        >
                            <FiLinkedin className="text-2xl" />
                        </a>
                    </li>
                    <li className="mb-4">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-400"
                        >
                            <FiTwitter className="text-2xl" />
                        </a>
                    </li>
                    <li>
                        <div className="w-0.5 h-24 mx-auto bg-white"></div>
                    </li>
                </ul>
            </div>

            <div className="fixed bottom-0 right-3 hidden md:block bg-green-400">
                <ul className="list-none w-10">
                    <li className="mb-4">
                        <a
                            href="mailto:ohiislam3@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-400 text-lg"
                        >
                            ohiislam3@gmail.com
                        </a>
                    </li>
                    <li>
                        <div className="w-0.5 h-24 mx-auto bg-white"></div>
                    </li>
                </ul>
            </div> */}

        </div>
    );
};

export default Hero;
