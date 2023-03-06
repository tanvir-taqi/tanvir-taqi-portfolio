import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';


const ProjectDetails = () => {

    const project = useLoaderData()
    const { subtitle,  live, client, type, source,  details, technologies, projectPhoto, name } = project

    const openInProject = url => {
        // 👇️ setting target to _blank with window.open
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return (
        <div className='relative flex justify-center md:mx-20 pt-16'>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className=' p-4'>
                <img src={projectPhoto} alt="" />
                </div>
                <div className='flex flex-col justify-center items-start p-4'>
                    <h1 className='pb-4 text-3xl font-bold'>{name}</h1>
                    <h1 className='py-2 text-xl font-semibold'>{subtitle}</h1>
                    <h1 className='py-2 text-lg font-bold'>{type}</h1>
                    <h1 className='py-4 text-lg font-normal'><span className='font-bold'>Technologies: </span> <span className='text-black'>{technologies}</span></h1>
                    <h1 className='py-4 text-base text-black font-normal'><Typewriter
                        words={[details]}
                        loop={1}
                        cursor
                        cursorStyle=''
                        typeSpeed={1}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    ></Typewriter></h1>
                    <div className='pt-10'>
                        {
                            live && <p onClick={()=>openInProject(live)} className='cursor-pointer text-base underline hover:text-black'>Live Preview</p>
                        }
                        {
                            client && <p onClick={()=>openInProject(client)} className='cursor-pointer text-base underline hover:text-black'>Source Code - Client Side</p>
                        }
                        {
                            source && <p onClick={()=>openInProject(source)} className='cursor-pointer text-base underline hover:text-black'>Source Code - Server Side</p>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetails;