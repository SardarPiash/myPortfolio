import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="w-full px-4 py-4">
            <div className="flex items-center justify-between mx-auto mt-3">
                <div className="flex items-center ml-8">
                    <a href="/" title="Home Page" className="flex items-center">
                        <img src={logo} alt="logo" className="h-8 w-8 md:h-14 md:w-14" />
                    </a>
                </div>
                <div className="flex items-center space-x-1">
                    <div className="hidden md:flex items-center space-x-5 mr-8 font-semibold" style={{color:"#F8F8FF"}}>
                        <a href="/" className="hover:text-gray-500">Home</a>
                        <a href="#about" className="hover:text-gray-500">About</a>
                        <a href="#experience" className="hover:text-gray-500">Experience</a>
                        <a href="#project" className="hover:text-gray-500">Projects</a>
                        <a href="#contact" className="hover:text-gray-500">Contact</a>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            aria-label="Open menu"
                            className="text-white"
                        >
                            <AiOutlineMenu className="text-2xl" />
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden absolute top-0 left-0 right-0 bg-black p-4 flex flex-col space-y-3 shadow-sm">
                    <button
                        onClick={toggleMenu}
                        aria-label="Close menu"
                        className="self-end text-white"
                    >
                        <AiOutlineClose className="text-2xl" />
                    </button>
                    <a href="/" className="hover:text-gray-500 text-white">Home</a>
                    <a href="#about" className="hover:text-gray-500 text-white">About</a>
                    <a href="#experience" className="hover:text-gray-500 text-white">Experience</a>
                    <a href="#project" className="hover:text-gray-500 text-white">Projects</a>
                    <a href="#contact" className="hover:text-gray-500 text-white">Contact</a>
                </div>
            )}
        </header>
    );
}
