import React, { useEffect, useState } from 'react';
import ArrowNav from '../ArrowNav/ArrowNav';
import Loader from '../Loader/Loader';
import SingleProject from './SingleProject';
import { motion } from "framer-motion"

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

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    const openInProject = url => {
        // 👇️ setting target to _blank with window.open
        window.open(url, '_blank', 'noopener,noreferrer');
      };

      if(loading){
        return <Loader></Loader>
      }

    return (
        <motion.div initial={{ opacity: 0, scaleX: 0.5 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}>
        <div>
            <ArrowNav
            leftLink='/'
            rightLink='/skills'
            ></ArrowNav>
        
        <div className='flex justify-center flex-col md:mx-16  pb-12 pt-16'>
                <h1 className='text-5xl font-bold text-center  my-10'>Projects</h1>
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
        </div>
        </motion.div>
    );
};

export default Projects;