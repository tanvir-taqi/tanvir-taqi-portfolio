import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ArrowNav from '../ArrowNav/ArrowNav';
import { motion } from "framer-motion"


const Contact = () => {
    const [emailMsg, setEmailMsg] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_52mxtwo', 'template_fl837d9', form.current, 'RaCrOoOxgfuP7W8Cq')
            .then((result) => {
                if(result.text ==='OK'){
                    setEmailMsg("Thanks for response. Your email is sent succesfully")
                }
            }, (error) => {
                if(error){
                    setErrorMsg("Something went wrong!! Can you please try again!!")
                }
            });
        e.target.reset()
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <motion.div initial={{ opacity: 0, scaleX: 0.5 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1 }}>
            <div>
                <ArrowNav
                    leftLink='/about'
                    rightLink='/'
                ></ArrowNav>

                <div className='relative flex justify-center md:mx-16 '>
                    <div className='md:w-3/4 w-full pb-12'>
                        <h1 className='text-5xl font-bold text-center  my-10'>Contact Me</h1>
                        <p className='text-lg'>{emailMsg}</p>
                        <p className='text-lg'>{errorMsg}</p>
                        <form className=" my-10 p-10 border border-[#f7f7f71c]" ref={form} onSubmit={sendEmail}>
                            <div className="form-control">
                                <label className="label">
                                    Name: 
                                </label>
                                <input required type="text" name='user_name' placeholder="email" className="input input-bordered bg-[#f7f7f7d0] border border-[#f7f7f7] text-[#1e1e1e] tracking-wider text-semibold p-1" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    Email: 
                                </label>
                                <input required type="email" name='user_email' placeholder="Name" className="input input-bordered bg-[#f7f7f7d0] border border-[#f7f7f7] text-[#1e1e1e] tracking-wider text-semibold p-1" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                   Subject: 
                                </label>
                                <input required type="text" name='subject' placeholder="Subject" className="input input-bordered bg-[#f7f7f7d0] border border-[#f7f7f7] text-[#1e1e1e] tracking-wider text-semibold p-1" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    Your message
                                </label>
                                <textarea name="message" className="textarea textarea-bordered h-24 w-full my-3 text-base  bg-[#f7f7f7d0] border border-[#f7f7f7] text-[#1e1e1e] tracking-wider text-semibold p-1" placeholder="Your Message" required></textarea>
                            </div>


                            <div className="form-control mt-6">
                                <input className="btn bg-[#f7f7f7] text-[#1e1e1e] hover:text-black  hover:bg-[#f7f7f762] font-bold my-2 rounded-lg p-2" type="submit" value="Send Message" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;