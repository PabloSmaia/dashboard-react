import React from 'react'

function PortfolioItem({item}) {
    const {title, desc, icon} = item
  return (
   <div className='w-full py-2 px-2 items-center justify-center fkex bg-white shadow-2x1 shadow-gray-200'>
          <div className='flex items-center justify-center space-x-4 w-full' >
             <div className='bg-[DB33F4] rounded-full pu-2 px-2'>
             <span>{icon}</span>
             </div> 
             <div className='w-full space-y-1'>
                <h1 className='font-bold'>{title}</h1>
                <p className='text-xs'>{desc}</p>
             </div>
          </div>
   </div>
  )
}

export default PortfolioItem