import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import SingleProject from './SingleProject';

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [ loading ,  setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        fetch('https://tanvir-taqi-server.vercel.app/projects')
        .then(res => res.json())
        .then(data => {
            setProjects(data)
            setLoading(false)
        })
    },[])

    const openInProject = url => {
        // 👇️ setting target to _blank with window.open
        window.open(url, '_blank', 'noopener,noreferrer');
      };

      if(loading){
        return <Loader></Loader>
      }

    return (
        <div className='flex justify-center flex-col md:mx-16 my-12'>
                <h1 className='text-5xl font-bold text-center text-stone-900 my-10'>Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 m-auto  md:gap-20 '>
            {
                projects.map(project => <SingleProject
                key={projects._id}
                project = {project}
                openInProject={openInProject}
                ></SingleProject>)
            }
        </div>
        </div>
    );
};

export default Projects;