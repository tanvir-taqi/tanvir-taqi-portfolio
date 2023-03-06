
import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import ArrowNav from '../ArrowNav/ArrowNav';
import './Home.css'
import { motion } from "framer-motion"

const Home = () => {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const openInNewTab = url => {

        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (

        <div className='py-16  '>
            <ArrowNav
                leftLink='/contact'
                rightLink='/projects'
            ></ArrowNav>
            <div className='flex welcome-msg-box  relative mt-16   '>
                <div className='welcome-msg '>
                    <h1 className='md:text-5xl text-2xl text-black'>
                        <Typewriter
                            words={['Welcome To My ']}
                            loop={1}
                            cursor
                            cursorStyle=''
                            typeSpeed={60}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        ></Typewriter>
                    </h1>
                    <h1 className='md:text-5xl text-2xl text-black'>
                        <Typewriter
                            words={[' Portfolio']}
                            loop={1}
                            cursor
                            cursorStyle=''
                            typeSpeed={60}
                            deleteSpeed={50}
                            delaySpeed={2000}

                        ></Typewriter>
                    </h1>
                    {/* <h1 className=''>Welcome To My </h1>
                    <h1>Portfolio</h1> */}
                </div>
            </div>
            <motion.div initial={{ opacity: 0, scaleX: 0.5 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1 }}>
                <div className='  p-6 md:mx-32 mt-2 flex items-center justify-center'>
                    <div>
                        <h1 className='text-4xl text-[#000]'>I am MD. Tanvir Akbar Taqi</h1>
                        <h1 className='text-lg text-[#1e1e1e] my-4 font-bold'>
                            <Typewriter
                                words={['Web Developer', "Front End Developer", "MERN Stack Developer", "React.JS Developer"]}
                                loop={false}
                                cursor
                                cursorStyle='_'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={800}
                            ></Typewriter>
                        </h1>
                        <button className=' text-lg font-medium hover:bg-[#f7f7f7] hover:text-[#1e1e1e] text-white  bg-[#1e1e1e] border border-[#1e1e1e] duration-700 rounded-2xl px-4 py-1 my-1 ' onClick={() => openInNewTab("https://drive.google.com/file/d/1PtJ6KrvqK9xbBWcq8H9yMiMNt_zBOW3S/view?usp=sharing")}>Resume</button>

                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;