import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="sticky top-0 w-full  z-50 text-[#D3D3D3] ">
            <div className="flex items-center justify-between mx-auto md:h-[60px]  bg-[black]">
                <div className="flex items-center ml-8">
                    <Link to="/" title="Home Page" className="flex items-center">
                        <img src={logo} alt="logo" className="h-8 w-8 md:h-12 md:w-14 transform scale-150 transition-transform duration-300" />
                    </Link>
                </div>
                <div className="flex items-center space-x-1">
                    <div className="hidden md:flex items-center space-x-5 mr-8 font-semibold text-base" >
                        <Link to="/" className="hover:text-gray-500">Home</Link>
                        <Link to="/" className="hover:text-gray-500">About</Link>
                        <Link to="/" className="hover:text-gray-500">Experience</Link>
                        <Link to="/" className="hover:text-gray-500">Projects</Link>
                        <Link to="/" className="hover:text-gray-500">Contact</Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            aria-label="Open menu"
                            className="text-[#D3D3D3]"
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
                        className="self-end text-[#D3D3D3]"
                    >
                        <AiOutlineClose className="text-2xl" />
                    </button>
                    <Link to="/" className="hover:text-gray-500 text-softBlack">Home</Link>
                    <Link to="#about" className="hover:text-gray-500 text-softBlack">About</Link>
                    <Link to="#experience" className="hover:text-gray-500 text-softBlack">Experience</Link>
                    <Link to="#project" className="hover:text-gray-500 text-softBlack">Projects</Link>
                    <Link to="#contact" className="hover:text-gray-500 text-softBlack">Contact</Link>
                </div>
            )}
        </header>
    );
}
