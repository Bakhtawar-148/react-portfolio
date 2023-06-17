import React from 'react';
import HeroImage from "../Assets/Bak.jpg";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";


const HomeBar = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-screen px-4 md:flex-row">     
    <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">A Web Developer</h2>
                <p className="text-white py-4 max-w-md">An experienced web developer with over ten years of development, design, and production across diverse industries. Creates
responsive websites to aid in producing the best user interfaces and user experiences. Leverage analytical skills and strong diligence to deliver creative, original, and efficient web solutions. Possess
excellent skills in digital marketing and technical SEO. Enjoys training colleagues and clients and loves to learn.</p>
            
<div><button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-400 cursor-pointer">
                    Contact
                    <span className="group-hover:rotate-90 duration-400"><MdOutlineKeyboardArrowRight size={26} className="ml-1"/></span>
                    </button>
                    </div>
           
           </div>
                
                <div>
                    <img src={HeroImage} alt="Bakhtawar" className="rounded-2xl mx-auto w-2/3"/>
                </div>
                </div>
                </div>
  )
}

export default HomeBar