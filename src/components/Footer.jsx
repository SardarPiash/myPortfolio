import React from 'react'
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import { Link } from 'react-router-dom';

export default function Footer() {
  const data =[
    'https://github.com/SardarPiash',
    'https://www.linkedin.com/in/abu-shaleh-md-kaium-33968b1b0/',
    'https://www.facebook.com/piash.sardar',
    '#'

  ]
  return (
    <>
    <div className=' md:h-[80px] bg-[black] ' >
         <div className="border-t-[1px] border-softBlue mt-16   pt-4 flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="text-softBlack text-sm text-center lg:text-left md:ml-5">
            © Copyright 2024 “Kaium” All Rights Reserved
          </div>
          <div className="flex items-center mt-4 md:mr-5">
            <span className="text-sm mr-4 text-softBlack">Follow us</span>
            <div className="flex space-x-4">
              {[github,linkedin,facebook, instagram].map((icon, index) => (
                <Link to={data[index]} key={index} className="bg-[white] w-7 h-7 rounded-full flex items-center justify-center">
                  <img className="p-1.5" src={icon} alt={`Social Icon ${index}`} />
                </Link>
              ))}
            </div>
          </div>
        </div>
    </div>
    <div className='w-full h-3 md:h-1 bg-[black]'>
       
    </div>
    </>
  )
}
