import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import maldives from '../assets/maldives.jpg'
import maldives2 from '../assets/maldives2.jpg'
import maldives3 from '../assets/maldives3.jpg'




const Destination = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4'>
         <h1 className='text-center'>All Inclusive Resorts</h1>
         <p className='py-4 text-center'>On the Caribbeans's Best Beaches</p>
         <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-1'>
         <img  className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={BoraBora} alt="/"/>
         <img className='w-full h-full object-cover' src={BoraBora2} alt="/"/>
         <img className='w-full h-full object-cover' src={maldives3} alt="/"/>
         <img className='w-full h-full object-cover' src={maldives} alt="/"/>
         <img className='w-full h-full object-cover' src={maldives2} alt="/"/>

         </div>
    </div>
  )
}

export default Destination
