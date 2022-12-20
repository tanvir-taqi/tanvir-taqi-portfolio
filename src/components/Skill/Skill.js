import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Skill = () => {
    const techSkill = ['Html', 'CSS', 'Bootstrap', 'Tailwind CSS','DaisyUi','Javascript','React.js','Firebase','Node.js','Express Js','MongoDB']
    return (
        <div>
           <div className='flex justify-around items-center w-full'>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
            <div> 
                <h1>Technical Skills</h1>
                <ul>
                    {
                        techSkill.map((ts , i) => <li key={i}><Typewriter
                            words={[ts]}
                            loop={1}
                            cursor
                            cursorStyle=''
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        ></Typewriter></li>)
                    }
                </ul>
            </div>
            <div> 
                <h1>Technical Skills</h1>
                <ul>
                    {
                        techSkill.map((ts , i) => <li key={i}><Typewriter
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
            <div> 
                <h1>Technical Skills</h1>
                <ul>
                    {
                        techSkill.map((ts , i) => <li key={i}><Typewriter
                            words={[ts]}
                            loop={1}
                            cursor
                            cursorStyle=''
                            typeSpeed={200}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        ></Typewriter></li>)
                    }
                </ul>
            </div>
          
        </div>
           </div>
        </div>
    );
};

export default Skill;