import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ArrowNav from '../ArrowNav/ArrowNav';
import { motion } from "framer-motion"

const About = () => {
    const about = `I am MD. Tanvir Akbar Taqi. I am a web developer. I use MongoDB, Express JS, React.JS, and Node.JS for creating dynamic web applications. I am also familiar with Next.JS, Redux, Typescript, MaterialUI.
   
    I am from Naogaon but currently living in Pabna for my getting my Bachelor of Arts degree from Pabna University of Science and Technology.I am in my final year of my Bachelors Degree. 
   
    I would prefer to describe myself as a quick learner.I am very passionate with programming and I believe that I can build my career in web development. I like creative jobs and I found my interest in web developing.
    
    In next five years I see myself working for a tech giant company and in next ten years, I see myself as a CEO of my own company like modern tech giants.`
    return (
      <motion.div initial={{ opacity: 0, scaleX: 0.5 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}>
      <div className='py-10'>
          <ArrowNav
            leftLink='/skills'
            rightLink='/contact'
            ></ArrowNav>
          <div>
            <h1 className='text-5xl font-bold text-center text-stone-900 my-10'>About Me</h1>
            <p className='banner-box border md:p-20 p-6 md:m-16 flex text-base text-black tracking-wider items-center justify-center'>
            <Typewriter
                        words={[about]}
                        loop={1}
                        cursor
                        cursorStyle=''
                        typeSpeed={0.8}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    ></Typewriter>
            
            </p>
        </div>
      </div>
      </motion.div>

    );
};

export default About;