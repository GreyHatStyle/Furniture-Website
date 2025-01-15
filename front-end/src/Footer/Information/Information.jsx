import React from 'react'

function Information() {
  return (
    <>

    <div className='flex flex-col lg:flex-row lg:justify-around bg-[#F6F6F6] py-[3em] mt-[4em] md:gap-14'>
        <div className='flex flex-col  items-center'>
            {/* Contact Us */}
            <div className='p-5 text-[0.8em] flex flex-col gap-3'>
                <h1 className='text-2xl font-bold'>CONTACT US</h1>
                <hr className='border-t-4 border-red-wood w-[4em] h-3 ' />
                <div className='flex flex-row gap-9'>
                    <h1 className='font-bold'>Address: </h1>
                    <p>XX Commerce Tower, Street Name, New Delhi, India</p>
                </div>
                <div className='flex flex-row gap-4'>
                    <h1 className='font-bold'>Cell-Phone: </h1>
                    <p>+91 - XXXXXXXXXX</p>
                </div>
                <div className='flex flex-row gap-[4em]'>
                    <h1 className='font-bold'>Email: </h1>
                    <p>your-email2010@gmail.com</p>
                </div>
            </div>
        </div>

        <div className='flex flex-row flex-wrap transition-all justify-start sm:justify-evenly md:gap-32'>

            {/* Accounts */}
            <div className='p-5 text-[0.8em] flex flex-col gap-3'>
                <h1 className='text-2xl font-bold'>ACCOUNTS</h1>
                <hr className='border-t-4 block border-red-wood w-[4em] h-3 ' />
                <ul className='list-["⦿"] cursor-pointer pl-5'>
                    <li className='px-2 hover:text-custom-wood transition-all delay-200'>My Account</li>
                    <li className='px-2 hover:text-custom-wood transition-all delay-200'>My Wishlist</li>
                    <li className='px-2 hover:text-custom-wood transition-all delay-200'>My Cart</li>
                    <li className='px-2 hover:text-custom-wood transition-all delay-200'>Sign In</li>
                    <li className='px-2 hover:text-custom-wood transition-all delay-200'>Check Out</li>
                </ul>
            </div>

            {/* Shipping */}
            <div className='p-5 text-[0.8em] flex flex-col gap-3 fmd:justify-around'>
                <h1 className='text-2xl font-bold'>SHIPPING</h1>
                <hr className='border-t-4 block border-red-wood w-[4em] h-3 ' />
                <ul className='list-["⦿"] cursor-pointer pl-5'>
                    <li className='px-2 hover:text-custom-wood transition-all delay-200'>New Products</li>
                    <li className='px-2 hover:text-custom-wood transition-all delay-200'>Top Sellers</li>
                    <li className='px-2 hover:text-custom-wood transition-all delay-200'>Manufacturers</li>
                    <li className='px-2 hover:text-custom-wood transition-all delay-200'>Supliers</li>
                    <li className='px-2 hover:text-custom-wood transition-all delay-200'>Specials</li>
                </ul>
            </div>
        </div>
    
    </div>
    </>
  )
}

export default Information
