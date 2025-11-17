import React from 'react'
import '../App.css'
import image from "../assets/my-photo.jpg"

export const About = () => {
  return (
    <div id='About' className='h-4/5 py-15'>
      <div data-aos="slide-down" className='h4'>About Me</div>
      <div className=' w-full sm:flex xl:w-7/10 xl:mx-auto pt-10'>
         <div data-aos="slide-right" className='sm:w-2/5 sm:justify-end lg:pr-15 flex justify-center items-center my-10 '>
          <div className='w-64 h-64 rounded-full bg-[#B88F6A]/40 flex items-center justify-center shadow-xl'>
            <div className="w-60 h-60 rounded-full bg-white flex items-center justify-center overflow-hidden ">
              <img src={image} alt="Profile" className="object-contain"/>
            </div>
          </div>
        </div>
        <div data-aos="slide-left" className='text-lg px-5 sm:w-3/5 sm:px-10'>
          <p>I am a 3rd-year Electronics and Communication student at <span className='text-blue-600'>NIT Srinagar</span>, skilled in frontend technologies including HTML, CSS, JavaScript, and React, as well as backend development with Django.</p>
          <br></br>
          <p>I love building full-stack applications with responsive design and interactive features. My passion lies in creating seamless user experiences while ensuring robust backend functionality.</p>
          <br></br>
          <div className='flex gap-5'>
            <div className='px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium text-center'>Frontend Dev</div>
            <div className='px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium text-center'>Backend Dev</div>
            <div className='px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium text-center'>Full Stack</div>
          </div>
        </div>
      </div>
    </div>
  )
}
