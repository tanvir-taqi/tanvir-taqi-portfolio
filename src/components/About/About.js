import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
    const about = `I am MD. Tanvir Akbar Taqi. I am a web developer. I use MongoDB, Express JS, React.JS, and Node.JS for creating dynamic web applications. I am also familiar with Next.JS, Redux, Typescript, MaterialUI.
   
    I am from Naogaon but currently living in Pabna for my getting my Bachelor of Arts degree from Pabna University of Science and Technology.I am in my final year of my Bachelors Degree. 
   
    I would prefer to describe myself as a quick learner.I am very passionate with programming and I believe that I can build my career in web development. I like creative jobs and I found my interest in web developing.
    
    In next five years I see myself working for a tech giant company and in next ten years, I see myself as a CEO of my own company like modern tech giants.`
    return (
        <div>
            <h1 className='text-3xl text-gray-900 font-extrabold text-center'>About Me</h1>
            <p className='banner-box border md:p-20 p-6 md:m-16 flex text-lg text-black tracking-wider items-center justify-center'>
            <Typewriter
                        words={[about]}
                        loop={1}
                        cursor
                        cursorStyle='_'
                        typeSpeed={1}
                        deleteSpeed={50}
                        delaySpeed={800}
                    ></Typewriter>
            
            </p>
        </div>
    );
};

export default About;