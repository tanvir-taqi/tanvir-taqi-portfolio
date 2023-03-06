import React from 'react';
import { Link } from 'react-router-dom';
import './SingleProject.css'

const SingleProject = ({ project ,openInProject}) => {
    const {  subtitle ,
        _id,   
        type ,
        projectPhoto ,
        name } = project
        
    return (
        <Link  to={`/project/${_id}`} className='border project-card cursor-pointer  border-[#f7f7f71c] px-2'>
            <div className='relative p-4 md:p-1  overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
                <img
                    className='my-10  h-56 md:h-64 xl:h-80 project-img'
                    src={projectPhoto}
                    alt=''
                />
                <div className='project-details absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-opacity-90 opacity-0 hover:opacity-100'>
                    
                    <div className='project-details-content'>
                    <p className='mb-4 text-lg font-bold '>{name}</p>
                    <br />
                    <p className='text-base font-semibold tracking-wide '>{subtitle}</p>
                    <br />
                    <p className='text-sm font-semibold tracking-wider '>{type}</p>
                    <br />
                    </div>
                    <div className="scanner"></div>
                </div>
            </div>
        </Link>
    );
};

export default SingleProject;