import React from 'react'

export const Skills = () => {
    const skills1 = [
    { name: 'HTML', icon: '🌐', color: 'from-orange-400 to-red-500' },
    { name: 'CSS', icon: '🎨', color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
  ];
  const skills2=[
    { name: 'Django', icon: '🐍', color: 'from-green-500 to-emerald-600' },
    { name: 'Bootstrap', icon: '💜', color: 'from-purple-400 to-pink-500' },
    { name: 'Git', icon: '📦', color: 'from-orange-500 to-red-600' },
    { name: 'GitHub', icon: '🐙', color: 'from-gray-600 to-gray-800' },
  ];

  return (
    <>
        <div data-aos="fade-up" id='Skills' className='py-20'>
            <div className='h4'>Skills</div>
            <div className='grid grid-cols-2 grid-rows-2 gap-2 sm:flex mx-auto px-4 place-content-between mb-2 mt-7 xl:w-4/5'>
                {skills1.map((item1,index)=>(
                    <div className={`bg-gradient-to-br ${item1.color} h-30 flex justify-center items-center rounded-2xl sm:w-23/100 hover:scale-115 transition duration-750 ease-in shadow-xl`} key={index}>
                        <div>
                            <div className='flex justify-center text-5xl'>{item1.icon}</div>
                            <span className='flex justify-center mt-3 text-white font-semibold text-lg'>{item1.name}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-2 grid-rows-2 gap-2 sm:flex sm:mt-5 mx-auto px-4 place-content-between mb-7 xl:w-4/5'>
                {skills2.map((item2,index)=>(
                    <div className={`bg-gradient-to-br ${item2.color} h-30 flex justify-center items-center rounded-2xl sm:w-23/100 hover:scale-115 transition duration-750 ease-in shadow-xl`} key={index}>
                        <div>
                            <div className='flex justify-center text-5xl'>{item2.icon}</div>
                            <span className='flex justify-center mt-3 text-white font-semibold text-lg'>{item2.name}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='h3 py-3 px-3 flex justify-center mx-auto xl:w-3/5'>Continuously learning and expanding my skill set to stay current with the latest web development technologies and best practices.</div>
        </div>
    </>
  )
}
