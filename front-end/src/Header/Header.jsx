import React from 'react'
import HeadLogo from './Logo/HeadLogo'
import CartLogo from './Cart/CartLogo'
import Menu_xl from './Menu/Menu_xl'

function Header() {
  return (
    <>
    <div className='flex justify-between p-4'>


        <Menu_xl />
        <HeadLogo />
        <CartLogo />

    </div>
        
    </>
  )
}

export default Header
