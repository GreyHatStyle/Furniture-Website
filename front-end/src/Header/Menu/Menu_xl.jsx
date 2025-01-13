import React from 'react'
import { useState } from 'react'

function Menu_xl() {

    const [openMenu, setOpenMenu] = useState("-100%")


    const setMenuBar = () =>{
        (openMenu === "-100%")? setOpenMenu("0") : setOpenMenu("-100%");
    }

    
  return (
    <>  
    
    <div className='hidden md:block relative'>

        {/* Slide Menu */}
        <div style={{left: openMenu}} className={` bg-slate-300 fixed h-[100vh] top-0 transition-all`}>
            
            <button 
                className='p-4 absolute right-0'
                onClick={setMenuBar}    
            >

            <svg className='fill-black' 
            xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#c9c9c9"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
            </button>

            <ul className='mt-11'>
                {/* Did 40% in px to avoid hover glitch, (hover was not giving color to whole button) */}
                <li>
                    <button className='px-[40%] py-3 hover:bg-slate-400'>Home</button>
                </li>

                <li>
                <button className='px-[40%] py-3 hover:bg-slate-400 ' >About</button>
                </li>

                <li>
                <button className='px-[5em] py-3 hover:bg-slate-400'>Contact</button>
                </li>

            </ul>
        </div>

        {/* Slide Menu Button */}
        <button 
            className='p-4'
            onClick={setMenuBar}
        >
        <svg className='fill-black' 
        
        xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#c9c9c9"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>

        </button>

    </div>

        
    </>
  )
}

export default Menu_xl
