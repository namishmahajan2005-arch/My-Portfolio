import React from 'react'

import { Project1 } from './project1'
import { Project2 } from './project2'

export const Projects = () => {
    
  return (
    <>  
        <div data-aos="fade-up" id='Projects' className=' py-2 bg-gradient-to-br from-gray-50 to-blue-50'>
            <div className=' mx-auto pt-10 pb-7'>
                <div className='h4 mb-10'>Projects</div>
                <div><Project2/></div>
                <div className='mt-15'><Project1/></div>
            </div>
            <div className='h3 mb-9'>More projects coming soon...</div>
        </div>
    </>
  )
}

