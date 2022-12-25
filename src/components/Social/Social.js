import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const Social = () => {
    return (
        <div className='mx-4 absolute z-50 '>
            <ul className='list-none flex  justify-center items-center flex-row md:flex-col md:w-12 bg-[#f7f7f71f] w-full md:h-48 rounded-full'>
                <li className='mx-4 my-2 border border-black rounded-full flex items-center p-1 text-black hover:border-[#f7f7f7]'><a className='text-lg   ' href="https://www.linkedin.com/in/tanvir-taqi/"><FaLinkedin></FaLinkedin></a></li>
                <li className='mx-4 my-2 border border-black rounded-full flex items-center p-1 text-black hover:border-[#f7f7f7]'><a className='text-lg   ' href="https://github.com/tanvir-taqi"><FaGithub></FaGithub></a></li>
                <li className='mx-4 my-2 border border-black rounded-full flex items-center p-1 text-black hover:border-[#f7f7f7]'><a className='text-lg   ' href="https://www.facebook.com/zioman.tanvir"><FaFacebook></FaFacebook></a></li>
                <li className='mx-4 my-2 border border-black rounded-full flex items-center p-1 text-black hover:border-[#f7f7f7]'><a className='text-lg   ' href="https://stackoverflow.com/users/19944629/tanvir-taqi"><FaStackOverflow></FaStackOverflow></a></li>
            </ul>
        </div>
    );
};

export default Social;