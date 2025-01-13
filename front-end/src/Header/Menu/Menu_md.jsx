// Menu button for Medium and smaller Width 

import React from 'react'
import { useState } from 'react'

function Menu_md() {
  const [menuStatus, setMenuStatus] = useState("max-h-0")
  
  const setMenu = () =>{
    (menuStatus === 'max-h-0')? setMenuStatus("max-h-screen") : setMenuStatus("max-h-0")
  }
  return (
    <>
    <div className='btn-wood-clr md:hidden'>
      <div className='flex justify-between mx-4'>
        <label className='block py-3 px-[min(3em,8%)] text-white font-bold'>MENU</label>

        <button 
        className='py-3 px-[min(3em,8%)]'
        onClick={setMenu}
        >
        <svg className='fill-white' 
        xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#c9c9c9"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </button>
      </div>
      
      <div className={`flex flex-col items-center px-3 pb-0 overflow-hidden ${menuStatus} 
                      transition-all duration-500`}>
        <button className='bg-white text-gray-600 text-[0.7em] font-semibold w-[100%] 
            border-b-[1px] border-gray-400 text-left 
            p-3 pl-7 hover:text-custom-wood
            hover:transition-all hover:duration-[350ms]'>HOME</button>
        <button className='bg-white text-gray-600 text-[0.7em] font-semibold w-[100%] 
            border-b-[1px] border-gray-400 text-left 
            p-3 pl-7 hover:text-custom-wood
            hover:transition-all hover:duration-[350ms]'>ABOUT</button>
        <button className='bg-white text-gray-600 text-[0.7em] font-semibold w-[100%] 
            border-b-[1px] border-gray-400 text-left 
            p-3 pl-7 hover:text-custom-wood
            hover:transition-all hover:duration-[350ms] mb-3'>CONTACT</button>
      </div>
          
            
       
    </div>
    </>
  )
}

export default Menu_md
