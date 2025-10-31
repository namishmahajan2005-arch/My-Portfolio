import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { useState } from 'react';
import emailjs from "emailjs-com";


export const Contact = () => {
    const [formdata,setFormdata]=useState({name:'',email:'',message:''});

    const OnChange=(e)=>{
        setFormdata({...formdata,[e.target.name]:e.target.value});
    }
    async function HandleSubmit(e){
        e.preventDefault();
        emailjs.sendForm(
            "service_4vbjj9a",
            "template_xumbkcc",
            e.target,
            "Uw4iEvxiIM7ty88Ju"
        )
        .then(() => {
            alert("Your Message is sent Successfully. I will get back to you shortly.");
            window.location.href="https://namishmahajanportfolio.vercel.app/";
        })
        .catch(() => {
            alert("Failed to send message. Please try again after some time.");
            window.location.href="https://namishmahajanportfolio.vercel.app/";
        });
    };
    return(
    <>
        <div id='Contact' className='py-10 bg-gradient-to-br from-blue-50 to-cyan-50'>
            <div data-aos="slide-down" className='h4 mb-10'>Get In Touch</div>
            <div className='px-4 mx-auto sm:flex xl:w-4/5'>
                <div data-aos="slide-right" className='px-7 sm:w-1/2'>
                    <div className='h5'>Let's Connect</div>
                    <div className='h6'>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!</div>
                    <br></br>
                    <a href='https://github.com/namishmahajan2005-arch' className='flex mt-4 items-center gap-4.5 h-15 p-3 bg-white hover:bg-gray-800 hover:text-white transition-colors group rounded-lg shadow-lg'><FaGithub size={25}/> <span>Github</span></a>
                    <a href='https://www.linkedin.com/in/namish-mahajan-b04572332/' className='flex mt-4 items-center gap-4.5 h-15 p-3 bg-white hover:bg-blue-700 hover:text-white transition-colors group rounded-lg shadow-lg'><FaLinkedin size={25}/><span>LinkedIn</span></a>
                    <a href='mailto:namishmahajan2005.com' className='flex mt-4 items-center gap-4.5 h-15 p-3 bg-white hover:bg-red-600 hover:text-white transition-colors group rounded-lg shadow-lg'><MdOutlineMail size={25}/><span>Email</span></a>
                </div>
                <div data-aos="slide-left" className='px-10 mx-4 my-12 sm:w-1/2 sm:my-0 bg-white shadow-xl rounded-xl '>
                    <form onSubmit={HandleSubmit}>
                        <div className='my-5 pt-5'>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Name
                            </label>
                            <input type="text" id="name" name="name" value={formdata.name} onChange={OnChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Your Name"/>
                            </div>

                            <div className='my-5'>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email
                            </label>
                            <input type="email" id="email" name="email" value={formdata.email} onChange={OnChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="your.email@example.com"/>
                            </div>

                            <div className='my-5'>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea id="message" name="message"
                                value={formdata.message} onChange={OnChange}required rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"                    placeholder="Your message here..."></textarea>
                            </div>
                            <button type="submit" className='my-5 w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-shadow'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
