import React from 'react'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gao-4 px-4 py-16'>
       <div className='lg:col-span-2 flex flex-col justify-evenly'>
       <div>
        <h2>LUXURY INCLUDED ACATIONS FOR TWO PEOPLE</h2>
        <p className='py-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

       </div>
       <div className='grid sm:grid-cols-2 gap-8 py-4'>
       <div className='flex flex-col lg:flex-row items-center text-center'>
       <button><RiCustomerService2Fill size={50}/></button>
       <div>
        <h3 className='py-2 '>LEADIG SERVICE</h3>
        <p  className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS-IN-A-ROW</p>
       </div>
       </div>
       <div className='flex flex-col lg:flex-row items-center text-center'>
       <button><MdOutlineTravelExplore size={50}/></button>
       <div>
        <h3 className='py-2 '>LEADIG SERVICE</h3>
        <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS-IN-A-ROW</p>
       </div>
       </div>
      
      
       </div>
       </div>
       <div>
        <div className='border text-center '>
            <p className='pt-2 '>GET AN ADDITIONAL 10% OFF</p>
             <p className='py-4'>10% HOURS LEFT</p>
             <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
               <div className='flex flex-col my-2'>
                <label>Destination</label>
                <select  className='border rounded-md p-2'>
                    <option>Grand Antiga</option>
                    <option>Keywest</option>
                    <option>Borabora</option>
                    <option>Maldives</option>
                </select>
               </div>
               <div className='flex flex-col my-2'>
                <label>Check-in</label>
                <input className='border rounded-md p-2' type="date"/>
               </div>
               <div className='flex flex-col my-4'>
                <label>Check-Out</label>
                <input className='border rounded-md p-2' type="date"/>
               </div>
               <button className='w-full my-4'>Rates & Availibilites</button>
        </form>

       </div>
    </div>
  )
}

export default Search
