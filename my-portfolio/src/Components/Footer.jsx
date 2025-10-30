import React from 'react'

const Footer = () => {
    const items=["Home","About","Projects","Skills"];
    const currentYear = new Date().getFullYear();
  return (
    <>
        <footer className='bg-gray-900 text-gray-400 py-8 sm:flex sm:justify-between sm:px-5'>
            <div className='text-center'>© {currentYear} Namish Mahajan. All rights reserved.</div>
            <div className='flex gap-4 justify-center'>
                {items.map((item,index)=>(
                    <a href={`#${item}`} key={index} className='hover:text-white cursor-pointer' >{item}</a>
                ))}
            </div>

        </footer>
    </>
  )
}

export default Footer