import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';


const NavBar = () => {

    const [nav, setNav] = useState (false);

    const links = [ 
        {
        id : 1,
        link: "Home"
        },
        {
        id : 2,
        link: "About"
        },  
       {
       id : 4,
       link: "Contact"
       },

]; 

  

    return <div className="flex justify-between items-centre w-full h-20 px-4 py-4 text-white bg-black fixed">
        <div><h1 className="text-4xl font-signature ml-4">Bakhtawar</h1></div>

        <ul className="hidden md:flex">
            {links.map (({ id, link }) => (
                 <li key={id}
                 className="px-4 cursor-pointer capitalize font-meduim text-white hover:scale-100 duration-200">
        {link}
        </li>
        ))}
        </ul>

    <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-white md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      
      {nav && (
        <ul className="flex flex-col justify-centre items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-grey-800 text-white">
                 {links.map (({ id, link}) => (
                 <li 
                 key={id}
                 className="px-4 cursor-pointer capitalize py-6 text-4xl">
        {link}
        </li>
        ))}     
        </ul>
       )}
    </div>

}

export default NavBar