import React from 'react'

import { FaArrowRight } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { Gift } from 'lucide-react';

export function Project2() {
    const keyPoints=['Structured and scalable backend architecture','Authentication system with secure session handling','Clean and modern UI with reusable components','Product/service showcase with dynamic rendering','Optimized database flow and API integration','Responsive design across all devices','Modular codebase for easy feature expansion','Ongoing development with production deployment planned'];
    const usedComponents=['Django','Django REST','React','Tailwind CSS','Javascript','Sqlite']
    return (
      <>  
        <div className=' hover:scale-105 ease-in duration-300 hover:shadow-2xl px-3 sm:flex xl:w-4/5 xl:mx-auto bg-gradient-to-br from-gray-50 to-blue-50'>
            <div className='flex items-center justify-center sm:w-35/100 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-300 rounded-t-xl py-10 sm:w-35/100 sm:rounded-l-xl sm:rounded-r-none '>
                <div><span className='text-white flex justify-center'><Gift size={60}/></span><span className='flex px-3 justify-center bg-white rounded-2xl font-semibold text-violet-600 mt-4'>Ongoing</span></div>
            </div>
            <div className='px-3 py-4 bg-white rounded-b-xl sm:w-65/100 sm:px-7 sm:rounded-r-xl sm:rounded-l-non'>
                <div className='h5 mb-4'>Enterprise Service Platform (In Progress)</div>
                <p>A full-stack business website developed for a registered enterprise, focusing on scalable backend architecture, efficient data flow, and a clean, modern UI. Currently in active development with core systems implemented.</p>
                <br></br>
                <span  className='font-semibold mb-3'>Key Features:</span>
                <ul>
                  {keyPoints.map((value,index)=>(
                    <li key={index} className='flex gap-1.5 items-center mt-2 font-[350] text-gray-700'><span className='text-green-500'><FaCheckCircle/></span>{value}</li>
                  ))}
                </ul>
                <div className='grid grid-cols-4 lg:flex gap-2 my-5'>
                  {usedComponents.map((item,index)=>(
                    <div className='bg-gray-200 rounded-lg px-2 py-1 flex justify-center items-center text-xs text-center sm:px-3 sm:text-sm' key={index}>{item}</div>
                  ))}
                </div>
                <div className='my-3 hover:scale-105'><a href="#" className='flex text-blue-500 items-center gap-1.5 '>View Project (Coming Soon)<span><FaArrowRight/></span></a></div>
            </div>
        </div>
      </>
    )
  }
