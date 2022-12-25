import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ArrowNav from '../ArrowNav/ArrowNav';
import { motion } from "framer-motion"

const Skill = () => {
    const techSkill = ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS','DaisyUi','Javascript','React.js','Firebase','Node.js','Express Js','MongoDB']
    const toolsSkill = ['VS Code', 'Figma', 'Adobe XD',' Git & GitHub', 'Netlify', 'Vercel', 'Firebase']
    const softSkill = ['Empathy', 'Leadership', 'Good communication skill',' Open minded', 'Strong sense of responsibility']
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <motion.div initial={{ opacity: 0, scaleX: 0.5 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}>
        <div className=''>
            <ArrowNav
            leftLink='/projects'
            rightLink='/about'
            ></ArrowNav>
            <div className='mx-16 pb-12'>
           <h1 className='text-5xl font-bold text-center  my-10'>Skills</h1>
           <div className='flex justify-around items-center w-full'>

           <div className='grid grid-cols-1 md:grid-cols-3 gap-20 my-10 '>
            <div> 
                <h1 className='text-2xl font-extrabold'>Technical Skills</h1>
                <ul>
                    {
                        techSkill.map((ts , i) => <li key={i}><Typewriter
                            words={[ts]}
                            loop={1}
                            cursor
                            cursorStyle=''
                            typeSpeed={150}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        ></Typewriter></li>)
                    }
                </ul>
            </div>
            <div> 
            <h1 className='text-2xl font-extrabold'>Tools I can Use</h1>
                <ul>
                    {
                        toolsSkill.map((ts , i) => <li key={i}><Typewriter
                            words={[ts]}
                            loop={1}
                            cursor
                            cursorStyle=''
                            typeSpeed={150}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        ></Typewriter></li>)
                    }
                </ul>
            </div>
            <div> 
            <h1 className='text-2xl font-extrabold'>Soft Skills</h1>
                <ul>
                    {
                        softSkill.map((ts , i) => <li key={i}><Typewriter
                            words={[ts]}
                            loop={1}
                            cursor
                            cursorStyle=''
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        ></Typewriter></li>)
                    }
                </ul>
            </div>
          
        </div>
           </div>
        </div>
        </div>
        </motion.div>
    );
};

export default Skill;