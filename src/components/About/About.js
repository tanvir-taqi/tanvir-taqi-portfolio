import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ArrowNav from '../ArrowNav/ArrowNav';
import { motion } from "framer-motion"

const About = () => {
    const about = `Tanvir is a MERN stack web developer. He worked on some projects using react.js, node.js, express js, MongoDB, etc. He is very passionate about coding and always ready to learn something new. Web development is a very creative job that requires creativity, passion, patience, and hard work. He always thought about doing something creative and he found it in web development.

    Tanvir is currently studying at Pabna University of Science and Technology. He is having his last year of his bachelor's degree. He is from Naogaon, Bangladesh.
    
    He has learned React.js, Node.js, Express js, MongoDB, firebase, Tailwind CSS, and DaisyUI, and is familiar with Next.js and Material UI, and React Native.`

    useEffect(()=>{
      window.scrollTo(0,0)
  },[])

    return (
      <motion.div initial={{ opacity: 0, scaleX: 0.5 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}>
      <div className=''>
          <ArrowNav
            leftLink='/skills'
            rightLink='/contact'
            ></ArrowNav>
          <div className='pt-16 py-10 mx-16'>
            <h1 className='text-5xl font-bold text-center  my-10'>About Me</h1>
            <p className=' md:p-20 p-6 md:m-16 flex text-lg tracking-wide text-black items-center justify-center'>
            <Typewriter
                        words={[about]}
                        loop={1}
                        cursor
                        cursorStyle=''
                        typeSpeed={1}
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