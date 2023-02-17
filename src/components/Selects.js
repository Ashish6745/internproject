import React from 'react'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import maldives from '../assets/maldives.jpg'
import maldives2 from '../assets/maldives2.jpg'
import maldives3 from '../assets/maldives3.jpg'
import SelectsCard from './SelectsCard'
function Selects() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      

      <SelectsCard bg={BoraBora} text="Borabora"/>
      <SelectsCard bg={BoraBora2} text="Borabora2"/>
      <SelectsCard bg={maldives} text="Maldives"/>
      <SelectsCard bg={maldives2} text="Jamaica"/>
      <SelectsCard bg={maldives} text="Maldives"/>
      <SelectsCard bg={maldives2} text="Jersey"/>
 
    </div>
  )
}

export default Selects

