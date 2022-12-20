import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css'

const Home = () => {
    const openInNewTab = url => {
        
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return (
        <div className='my-16'>
            <div className='flex welcome-msg-box relative'>
                <div className='welcome-msg'>
                    <h1 className=''>Welcome To My </h1>
                    <h1>Portfolio</h1>
                </div>
            </div>
            <div className='banner-box border md:p-16 p-6 md:mx-16 mt-2 flex items-center justify-center'>
                <div>
                    <h1 className='text-4xl text-gray-900'>I am MD. Tanvir Akbar Taqi</h1>
                    <h1 className='text-lg text-black font-bold'><Typewriter
                        words={['Web Developer', "Front End Developer", "MERN Stack Developer", "React.JS Developer"]}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={800}
                    ></Typewriter></h1>
                    <button className='bg-gray-400 font-bold my-2 rounded-lg p-2' onClick={()=>openInNewTab("https://drive.google.com/file/d/1PtJ6KrvqK9xbBWcq8H9yMiMNt_zBOW3S/view?usp=sharing") }>Resume</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;