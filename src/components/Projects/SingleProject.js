import React from 'react';
import './SingleProject.css'

const SingleProject = ({ project ,openInProject}) => {
    const { name, picture, technology, type, link } = project
    return (
        <div  onClick={()=>openInProject(link)} className='border border-gray-500'>
            <div className='relative p-4 md:p-1  overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
                <img
                    className='my-10  h-56 md:h-64 xl:h-80 project-img'
                    src={picture}
                    alt=''
                />
                <div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-90 opacity-0 hover:opacity-100'>
                    <p className='mb-4 text-lg font-bold text-gray-100'>{name}</p>
                    <br />
                    <p className='text-sm tracking-wide text-gray-300'>{type}</p>
                    <br />
                    <p className='text-sm tracking-wide text-gray-300'>Technologies : {
                        technology.map((tech, index) => <li key={index} > {tech}</li>)
                    }</p>
                </div>
            </div>
        </div>
    );
};

export default SingleProject;