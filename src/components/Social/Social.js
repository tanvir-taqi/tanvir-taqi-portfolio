import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from "react-icons/fa";

const Social = () => {
    return (
        <div className='mx-4 absolute md:fixed md:bottom-6 md:right-2  z-50 '>
            <ul className='list-none flex  justify-center items-center flex-row md:flex-col md:w-12 bg-[#f7f7f71f] w-full md:h-52 rounded-full'>
                <li className='mx-4 my-2 border border-black rounded-full flex items-center p-1 text-black hover:text-white hover:bg-[#1e1e1e] hover:border-transparent hover:-translate-x-1 hover:-translate-y-1 hover:rotate-45'><a className='text-lg   ' href="https://www.linkedin.com/in/tanvir-taqi/"><FaLinkedin></FaLinkedin></a></li>
                <li className='mx-4 my-2 border border-black rounded-full flex items-center p-1 text-black hover:text-white hover:bg-[#1e1e1e] hover:border-transparent hover:-translate-x-1 hover:-translate-y-1 hover:rotate-45'><a className='text-lg   ' href="https://github.com/tanvir-taqi"><FaGithub></FaGithub></a></li>
                <li className='mx-4 my-2 border border-black rounded-full flex items-center p-1 text-black hover:text-white hover:bg-[#1e1e1e] hover:border-transparent hover:-translate-x-1 hover:-translate-y-1 hover:rotate-45'><a className='text-lg   ' href="https://www.facebook.com/zioman.tanvir"><FaFacebook></FaFacebook></a></li>
                <li className='mx-4 my-2 border border-black rounded-full flex items-center p-1 text-black hover:text-white hover:bg-[#1e1e1e] hover:border-transparent hover:-translate-x-1 hover:-translate-y-1 hover:rotate-45'><a className='text-lg   ' href="https://twitter.com/TanvirTaqi"><FaTwitter></FaTwitter></a></li>
                <li className='mx-4 my-2 border border-black rounded-full flex items-center p-1 text-black hover:text-white hover:bg-[#1e1e1e] hover:border-transparent hover:-translate-x-1 hover:-translate-y-1 hover:rotate-45'><a className='text-lg   ' href="https://stackoverflow.com/users/19944629/tanvir-taqi"><FaStackOverflow></FaStackOverflow></a></li>
            </ul>
        </div>
    );
};

export default Social;