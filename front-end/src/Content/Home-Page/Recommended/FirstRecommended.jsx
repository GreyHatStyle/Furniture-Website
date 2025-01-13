import React from 'react'
import small_box from "./assets/small-box.png"
import pillow_stool from "./assets/pillow-stool.png"
import chair from "./assets/chair.png"

function FirstRecommended() {
  return (
    <>
        <div className='flex flex-col gap-5 p-5 items-center lg:flex-row-reverse'>
            {/* Right bigger advertisement */}

            <div className='product-cards max-w-[1220px] relative'>
                <img src={chair} alt="Small Wood Chair" />
                <div className='transition-all absolute top-[25%] left-[55%] text-[0.7em] text-slate-600 
                                sm:text-[1.2em] lg:text-[2em]'>
                    <h1>WELCOME TO OUR</h1>
                    <h1 className='text-[1.4em] font-bold'>FURNITURE GALARY</h1>
                    <p className='hidden text-[0.4em] pr-4 py-2
                                  xl:block 
                                  md:block md:text-[0.6em]
                                  lg:hidden lg:text-[0.4em]' >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nulla officia, accusantium reiciendis dignissimos similique neque eius nam saepe? Laudantium illum molestias a, veniam cupiditate rerum quis impedit commodi quam? Dicta, voluptatibus!
                    </p>
                    <button 
                    className='border-2 px-4 py-2 mt-2 hover:transition-colors hover:delay-100 border-gray-300
                               sm:text-[0.8em] md:text-[0.5em]
                               hover:btn-wood-clr hover:text-white'
                    
                    >
                        SHOP NOW
                    </button>

                </div>
            </div>

            {/* Left Advertisements (two) */}
            <div 
            className='flex flex-col gap-5
                        sm:flex-row
                        lg:flex-col lg:gap-7'
            
            >
                {/* Small Wood Box */}
                <div className='product-cards max-w-[450px] relative  text-slate-700 '>
                    <img 
                    className=''
                    src={small_box} alt="Small Wood Box" />

                    <label className='absolute top-4 left-4 text-[0.8em] text-white btn-wood-clr px-2 py-1 rounded-md'>New</label>
                    <label className='absolute top-4 right-4'>&#8377;299.00</label>
                    <span className='absolute bottom-2 left-4 leading-4 xl:text-[0.9em] lg:text-[0.8em] sm:text-[0.6em] md:text-[1em]
                                    transition-all'>
                        <label className='block text-[1.2em] font-bold '>Product Name</label>
                        <label className='block'>Furniture</label>
                    </span>
                    <button className='absolute bottom-3 right-4 border-2 border-gray-300 px-4 py-1 transition-colors delay-100
                                       hover:btn-wood-clr hover:text-white
                                       sm:text-[0.8em] md:text-[1em]'>
                        Buy now
                    </button>
                </div>

                {/* Small Stool */}
                <div className='product-cards max-w-[450px] relative  text-slate-700'>
                    <img src={pillow_stool} alt="Small Wood Stool" />
                    <label className='absolute top-4 left-4 text-[0.8em] text-white btn-wood-clr px-2 py-1 rounded-md'>New</label>
                    <label className='absolute top-4 right-4'>&#8377;699.00</label>
                    <span className='absolute top-[25%] right-1 text-[0.8em] sm:text-[0.6em] md:text-[1em] w-[40%] transition-all'>
                        <label className='block text-[1.2em] font-bold '>Product Name</label>
                        <p className='text-wrap text-[0.8em] lg:hidden xl:block'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, necessitatibus.</p>
                    </span>
                    <button className='absolute bottom-[10%] left-[58%] border-2 border-gray-300 px-4 py-1 transition-colors delay-100
                                       hover:btn-wood-clr hover:text-white
                                       sm:text-[0.8em] md:text-[1em]'>
                        Buy now
                    </button>
                </div>
            </div>
            
        </div>


    
    </>
  )
}

export default FirstRecommended
