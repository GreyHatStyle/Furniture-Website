import React from 'react'
import HeadLogo from './Logo/HeadLogo'
import CartLogo from './Cart/CartLogo'
import Menu_xl from './Menu/Menu_xl'
import Menu_md from './Menu/Menu_md'

function Header() {
  return (
    <>
    <div className='flex justify-between'>
        <Menu_xl />
        <HeadLogo />
        <CartLogo />
    </div>
      
      <Menu_md />
        
    </>
  )
}

export default Header
