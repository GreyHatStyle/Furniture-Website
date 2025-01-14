import React from 'react'
import discounts from './discount-products.json'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Discount() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    }

    const discount_products = Object.entries(discounts);
    console.log(discount_products)

    return (
    
    <>
    <div className='xl:mx-[9em] lg:mx-[9em] md:mx-[4em] sm:mx-[3em] mx-[0.3em]'>
        <Slider {...settings}>
        {
            discount_products.map( ([id, product]) => (
            
            <div 
            key={id}
            className='relative'
            >
                <img src={product.img} alt="" />

                <div className='rounded-full bg-red-wood h-[75px] w-[75px] sm:h-[100px] sm:w-[100px] flex flex-col justify-center items-center text-white leading-3 absolute sm:top-11 sm:left-[23%] top-7 left-[10%]'>
                    <h3 className='text-[0.8em] sm:text-[1em]'>On Sale</h3>
                    <hr className='block mt-2 h-3 border-t-[2.5px] border-solid border-white w-[1.5em]'/>
                    <h3 className='text-[0.7em] sm:text-[1em]'>{product.price}</h3>
                </div>
                <div className='absolute 
                     top-[15%] right-[7%] w-[40%] text-sm
                     '>
                    <h3 className='text-red-wood font-bold text-2xl sm:text-4xl'>Discount {product.discount}</h3>
                    <p className='hidden md:block md:text-md lg:md:text-md xl:text-lg'>{product.about_product}</p>
                </div>
                <button className='bg-red-wood text-sm text-white px-4 py-1 hover:btn-wood-clr transition-colors delay-150
                                    absolute right-[13%]
                                    xl:bottom-[30%] sm:right-[20%]
                                    lg:bottom-[20%]
                                    bottom-[10%] '>
                    BUY NOW    
                </button>    

            </div>
            ))
        
        }
        </Slider>    

    </div>
    </>
  )
}

export default Discount
