import React from 'react'
import { FiArrowDown } from "react-icons/fi";
import "../App.css";


export default function FirstItem() {
  function ScrollToProjects(){
    const eleId=document.getElementById("Projects");
    if(eleId){
      eleId.scrollIntoView({behavior:'smooth'});
    }
  }
  return (
    <>
        <div data-aos="fade-up" id="Home" className='h-screen flex items-center justify-center sm:h-auto md:h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50'>
          <div className=' '> 
            <div className='h1'>Namish Mahajan</div>
            <div className='h2'>Full Stack Developer | React & Django Enthusiast</div>
            <div className='h3'>3rd Year Electronics and Communication Student at National Institute of Technology, Srinagar</div>
            <div className='flex justify-center w-45/100 sm:w-3/10 md:w-2/5 mx-auto my-10 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-110 hover:shadow-xl ease-in duration-300' onClick={ScrollToProjects}><button className='block' >Explore My Work</button></div>
            <div className='flex justify-center my-20 font-thin animate-bounce'><FiArrowDown size={40}/></div>
          </div>
        </div>
    </>
  )
}
