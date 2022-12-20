import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const Social = () => {
    return (
        <div className='mx-4 '>
            <ul className='list-none flex  justify-center items-center flex-row md:flex-col md:w-12 bg-gray-700 w-full md:h-48 rounded-full'>
                <li className='mx-4 my-2 border border-black rounded-full flex items-center p-1 text-black hover:bg-black hover:text-white'><a className='text-xl  ' href="https://www.linkedin.com/in/tanvir-taqi/"><FaLinkedin></FaLinkedin></a></li>
                <li className='mx-4 my-2 border border-black rounded-full flex items-center p-1 text-black hover:bg-black hover:text-white'><a className='text-xl  ' href="https://github.com/tanvir-taqi"><FaGithub></FaGithub></a></li>
                <li className='mx-4 my-2 border border-black rounded-full flex items-center p-1 text-black hover:bg-black hover:text-white'><a className='text-xl  ' href="https://www.facebook.com/zioman.tanvir"><FaFacebook></FaFacebook></a></li>
                <li className='mx-4 my-2 border border-black rounded-full flex items-center p-1 text-black hover:bg-black hover:text-white'><a className='text-xl  ' href="https://stackoverflow.com/users/19944629/tanvir-taqi"><FaStackOverflow></FaStackOverflow></a></li>
            </ul>
        </div>
    );
};

export default Social;