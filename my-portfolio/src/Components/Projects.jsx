import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

export const Projects = () => {
    const keyPoints=['Product catalog with search and filters','Secure user authentication & sessions','Shopping cart with real-time updates','Checkout and order management','Responsive design for all devices','Deployed on Render'];
    const usedComponents=['Django','HTML','CSS','JavaScript','Bootstrap']
  return (
    <>  
        <div data-aos="fade-up" id='Projects' className=' py-2 bg-gradient-to-br from-gray-50 to-blue-50'>
            <div className=' mx-auto py-10'>
                <div className='h4 mb-10'>Projects</div>
                <div className=' hover:scale-105 ease-in duration-300 hover:shadow-2xl px-3 sm:flex xl:w-4/5 xl:mx-auto bg-gradient-to-br from-gray-50 to-blue-50'>
                    <div className='bg-gradient-to-br from-blue-500 to-cyan-500 flex justify-center items-center rounded-t-xl py-10 sm:w-35/100 sm:rounded-l-xl sm:rounded-r-none '>
                        <div className='block text-white'><FaShoppingCart size={60}/><span className='flex justify-center bg-white rounded-2xl font-semibold text-blue-600 mt-4 ml-2'>Live</span></div>
                    </div>
                    <div className='px-3 py-4 bg-white rounded-b-xl sm:w-65/100 sm:px-7 sm:rounded-r-xl sm:rounded-l-non'>
                        <div className='h5 mb-4'>E-Commerce Web Application</div>
                        <p>A full-featured e-commerce platform with product catalog, user authentication, shopping cart, checkout, and order management. Built with Django backend and modern frontend technologies.</p>
                        <br></br>
                        <span  className='font-semibold mb-3'>Key Features:</span>
                        <ul>
                            {keyPoints.map((value,index)=>(
                                <li key={index} className='flex gap-1.5 items-center mt-2 font-[350] text-gray-700'><span className='text-green-500'><FaCheckCircle/></span>{value}</li>
                            
                            ))}
                        </ul>
                        <div className='flex gap-2 my-5 sm:gap-5'>
                            {usedComponents.map((item,index)=>(
                                <div className='bg-gray-200 rounded-lg px-2 py-1 text-xs sm:px-3 sm:text-sm' key={index}>{item}</div>
                            ))}
                        </div>
                        <div className='my-3 hover:scale-105'><a href="https://my-ecom-tly7.onrender.com/" className='flex text-blue-500 items-center gap-1.5 '>View Project<span><FaArrowRight/></span></a></div>
                    </div>
                </div>
                <div className='h3 '>More projects coming soon...</div>
            </div>
        </div>
        
    </>
  )
}

