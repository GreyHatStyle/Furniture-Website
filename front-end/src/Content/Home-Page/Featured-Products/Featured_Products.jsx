import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import products from './products.json'
import './crousel.css'


function Featured_Products() {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

      const products_array = Object.entries(products)
  return (
    <>
        <h1 className='text-center text-4xl font-bold mt-11'>Featured Products</h1>
        <hr className='block h-3 border-t-[2.5px] border-solid border-red-600 w-[4em] mx-auto mt-3 mb-5' />

        <div className="slider-container w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
            <Slider {...settings}>
                {products_array.map(([id, product]) => (
                    <div 
                    key={id} 
                    className="card w-full px-2 relative hover:shadow-md cursor-pointer rounded-md
                                transition-shadow delay-150 shadow-black">
                        <img src={product.img} alt="" className="w-full h-[200px] object-cover py-1" />
                        <span className={`absolute top-4 left-4 
                              ${(product.condition.toLowerCase() === 'sale') ? "bg-red-wood" : "btn-wood-clr"} px-2 rounded-md text-white`}>{product.condition}</span>
                        <div className="grid grid-cols-2 grid-rows-1 justify-between">
                            <h3 className="p-1 py-3 font-semibold">{product.name}</h3>
                            <h3 className="py-3 text-slate-700 place-self-end">{product.category}</h3>
                            <h3 className="px-3 text-red-wood">{product.price}</h3>
                            <div className="flex px-3 gap-1 place-self-end pb-4">
                                <h3 className=''>{product.rating}</h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    className={
                                      product.rating < 2
                                        ? "fill-red-700"
                                        : product.rating >= 2 && product.rating < 4
                                        ? "fill-yellow-500"
                                        : "fill-green-800"
                                    }
                                >
                                    <path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </>
  )
}

export default Featured_Products