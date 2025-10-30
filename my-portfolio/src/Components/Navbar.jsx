import React from 'react'

const items=["Home","About","Projects","Skills","Contact"]

export const Navbar = () => {
  function ScrollIntoSection(sectionId){
    const eleId=document.getElementById(sectionId);
    if(eleId){
      eleId.scrollIntoView({behavior:'smooth'});
    }
  }
  return (
    <>
      <div data-aos="fade-down" className='bg-gradient-to-br from-blue-100 to-white'>
        <header className='flex justify-between px-2 py-7 sm:px-7'>
            <span className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent cursor-pointer hover:scale-105'>NM</span>
            <div className='flex space-x-3 sm:space-x-9'>
                {items.map((item,index)=>{
                    return <div key={index} className='cursor-pointer hover:text-blue-600' onClick={()=>{ScrollIntoSection(item)}}> {item}</div>
                })}
            </div>
        </header>
      </div>
    </>
  )
}




// import React from 'react'

// const items = ["Home", "About", "Projects", "Skills", "Contact"]

// export const Navbar = () => {
//   function ScrollIntoSection(sectionId) {
//     const eleId = document.getElementById(sectionId)
//     if (eleId) {
//       eleId.scrollIntoView({ behavior: 'smooth' })
//     }
//   }

//   return (
//     <div className='bg-gradient-to-br from-blue-100 to-white'>
//       <header className='flex justify-between px-8 py-4'>
//         <span className='text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent cursor-pointer'>
//           NM
//         </span>
//         <div className='flex space-x-8'>
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className='cursor-pointer hover:text-blue-600'
//               onClick={() => ScrollIntoSection(item)}
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </header>
//     </div>
//   )
// }
