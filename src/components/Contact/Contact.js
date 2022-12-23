import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ArrowNav from '../ArrowNav/ArrowNav';
import { motion } from "framer-motion"


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_52mxtwo', 'template_fl837d9', form.current, 'RaCrOoOxgfuP7W8Cq')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <motion.div initial={{ opacity: 0, scaleX: 0.5 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1 }}>
        <div>
            <ArrowNav
            leftLink='/about'
            rightLink='/'
            ></ArrowNav>

            <div className=' flex justify-center  '>
                <div className='md:w-2/5 w-full pb-12'>
                    <h1 className='text-5xl font-bold text-center text-stone-900 my-10'>Contact Me</h1>
                    <form className="card-body my-10 p-10 border border-gray-700" ref={form} onSubmit={sendEmail}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name: </span>
                            </label>
                            <input required type="text" name='user_name' placeholder="email" className="input input-bordered bg-gray-300 border border-gray-500 p-1" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email: </span>
                            </label>
                            <input required type="email" name='user_email' placeholder="Name" className="input input-bordered bg-gray-300 border border-gray-500 p-1" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject: </span>
                            </label>
                            <input required type="text" name='subject' placeholder="Subject" className="input input-bordered bg-gray-300 border border-gray-500 p-1" />
                        </div>

                        <textarea name="message" className="textarea textarea-bordered h-24 w-full my-3 bg-gray-300 border border-gray-500 p-1" placeholder="Your Message" required></textarea>


                        <div className="form-control mt-6">
                            <input className="btn " type="submit" value="Send Message" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </motion.div>
    );
};

export default Contact;