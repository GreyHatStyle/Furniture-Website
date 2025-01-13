import React from 'react'
import { useState, useEffect } from 'react'

import HeadLogo from './Logo/HeadLogo'
import CartLogo from './Cart/CartLogo'
import Menu_xl from './Menu/Menu_xl'
import Menu_md from './Menu/Menu_md'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(()=>{
    const handle_scroll = () =>{
      if(window.scrollY > 2){
        setIsScrolled(true);
      }
      else{
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handle_scroll);

    // Cleanup event listner on component or unmount
    return () =>{
      window.removeEventListener("scroll", handle_scroll);
    }
  })

  

  return (
    <>
    <div className={`flex justify-between sticky top-0  transition-colors duration-500
                    ${ (isScrolled) ? "bg-[#EEEEEE] shadow-lg" : "bg-white"} z-10`}>
        <Menu_xl />
        <HeadLogo />
        <CartLogo />
    </div>
      
      <Menu_md />
        
    </>
  )
}

export default Header
