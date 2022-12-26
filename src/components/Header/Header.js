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
            <div className={` z-50 w-full  py-5  flex flex-col md:flex-row justify-around items-center`}>
                <div className="header-logo flex justify-around around items-center w-full  md:w-1/6">

                    {/* header logo and name  */}

                    <Link to='/' className={`font-bold flex  text-lg md:text-3xl`}>
                        <h1 className=' title-navbar font-extrabold text-4xl'>Tanvir</h1>
                    </Link>

                    <button className='block md:hidden text-[#1e1e1e]  text-xs font-extrabold border bg-[#f7f7f7] border-black rounded-full shadow-black  shadow-inner py-2 px-3 text-center ' onClick={() => setDisplay(!display)}>T</button>
                </div>
                {/* header links  */}
                <div className={`nav-menu flex  md:items-center flex-col md:flex-row   ${display ? 'flex' : 'hidden md:flex'}`} >
                    <div onClick={() => setDisplay(false)} className="nav-menu-link  flex flex-col md:items-center items-start md:flex-row py-12 md:py-1 ">
                        <NavLink className={({ isActive }) => (isActive ? 'md:mx-2 text-base font-semibold   my-2 text-[#f7f7f793] underline ' : 'md:mx-2 text-base font-semibold   my-2')} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'md:mx-2 text-base font-semibold   my-2 text-[#f7f7f793] underline ' : 'md:mx-2 text-base font-semibold   my-2')} to='/projects'>Projects</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'md:mx-2 text-base font-semibold   my-2 text-[#f7f7f793] underline ' : 'md:mx-2 text-base font-semibold   my-2')} to='/skills'>Skills</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'md:mx-2 text-base font-semibold   my-2 text-[#f7f7f793] underline ' : 'md:mx-2 text-base font-semibold   my-2')} to='/about'>About Me</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'md:mx-2 text-base font-semibold   my-2 text-[#f7f7f793] underline ' : 'md:mx-2 text-base font-semibold   my-2')} to='/contact'>Contact Me</NavLink>

                        <button className='bg-[#f7f7f7] text-[#1e1e1e] hover:text-black  hover:bg-[#f7f7f762] font-bold my-2 rounded-lg p-2' onClick={() => openInNewTab("https://drive.google.com/file/d/1PtJ6KrvqK9xbBWcq8H9yMiMNt_zBOW3S/view?usp=sharing")}>Resume</button>


                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;