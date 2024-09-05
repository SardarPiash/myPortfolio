import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar({ scrollToSection }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="sticky top-0 w-full z-50 text-[#D3D3D3]">
            <div className="flex items-center justify-between mx-auto md:h-[60px] bg-[black] w-full">
                <div className="flex items-center ml-4 md:ml-8">
                    <p title="Home Page" className="flex items-center">
                        <img 
                            src={logo} 
                            alt="logo" 
                            className="h-8 w-8 md:h-12 md:w-14 transform scale-125 transition-transform duration-300" 
                        />
                    </p>
                </div>
                <div className="flex items-center space-x-1">
                    <div className="hidden md:flex items-center space-x-5 mr-4 md:mr-8 font-semibold text-base">
                        <button onClick={() => scrollToSection('hero')} className="hover:text-gray-400">Home</button>
                        <button onClick={() => scrollToSection('about')} className="hover:text-gray-400">About</button>
                        <button onClick={() => scrollToSection('experience')} className="hover:text-gray-400">Experience</button>
                        <button onClick={() => scrollToSection('projects')} className="hover:text-gray-400">Projects</button>
                        <button onClick={() => scrollToSection('contact')} className="hover:text-gray-400">Contact</button>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            aria-label="Open menu"
                            className="text-[#D3D3D3] p-2"
                        >
                            <AiOutlineMenu className="text-2xl" />
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-[black] bg-opacity-95  h-screen w-3/5 absolute top-0 right-0 p-4 flex flex-col space-y-3 shadow-md">
                    <button
                        onClick={toggleMenu}
                        aria-label="Close menu"
                        className="self-end text-[#D3D3D3]"
                    >
                        <AiOutlineClose className="text-2xl" />
                    </button>
                    <button onClick={() => { scrollToSection('hero'); toggleMenu(); }} className="hover:text-gray-400 text-xl font-semibold text-left">Home</button>
                    <button onClick={() => { scrollToSection('about'); toggleMenu(); }} className="hover:text-gray-400 text-xl font-semibold text-left">About</button>
                    <button onClick={() => { scrollToSection('experience'); toggleMenu(); }} className="hover:text-gray-400 text-xl font-semibold text-left">Experience</button>
                    <button onClick={() => { scrollToSection('projects'); toggleMenu(); }} className="hover:text-gray-400 text-xl font-semibold text-left">Projects</button>
                    <button onClick={() => { scrollToSection('contact'); toggleMenu(); }} className="hover:text-gray-400 text-xl font-semibold text-left">Contact</button>
                </div>
            )}
        </header>
    );
}
