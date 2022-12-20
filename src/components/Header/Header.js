import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const [display, setDisplay] = useState(false)


    const openInNewTab = url => {
        // 👇️ setting target to _blank with window.open
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className='' >
            <div className={` z-50 w-full header py-5 header-container  flex flex-col md:flex-row justify-around items-center`}>
                <div className="header-logo flex justify-around around items-center w-full  md:w-1/6">

                    {/* header logo and name  */}

                    <Link to='/' className={`font-bold flex  text-lg md:text-3xl`}>
                        <h1 className=' title-navbar font-extrabold text-5xl'>Tanvir</h1>
                    </Link>

                    <button className='block md:hidden text-black from-neutral-900 text-xs font-extrabold border border-black rounded-full shadow-black  shadow-inner py-2 px-3 text-center ' onClick={() => setDisplay(!display)}>T</button>
                </div>
                {/* header links  */}
                <div className={`nav-menu flex  md:items-center flex-col md:flex-row   ${display ? 'flex' : 'hidden md:flex'}`} >
                    <div onClick={() => setDisplay(false)} className="nav-menu-link  flex flex-col md:items-center items-start md:flex-row py-12 md:py-1 ">
                        <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-lg font-semibold   my-2 text-gray-600 ' : 'mr-4 text-lg font-semibold   my-2')} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-lg font-semibold   my-2 text-gray-600 ' : 'mr-4 text-lg font-semibold   my-2')} to='/projects'>Projects</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-lg font-semibold   my-2 text-gray-600 ' : 'mr-4 text-lg font-semibold   my-2')} to='/skills'>Skills</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-lg font-semibold   my-2 text-gray-600 ' : 'mr-4 text-lg font-semibold   my-2')} to='/about'>About Me</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-lg font-semibold   my-2 text-gray-600 ' : 'mr-4 text-lg font-semibold   my-2')} to='/contact'>Contact Me</NavLink>

                        <button className='bg-gray-400 font-bold my-2 rounded-lg p-2' onClick={() => openInNewTab("https://drive.google.com/file/d/1PtJ6KrvqK9xbBWcq8H9yMiMNt_zBOW3S/view?usp=sharing")}>Resume</button>


                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;