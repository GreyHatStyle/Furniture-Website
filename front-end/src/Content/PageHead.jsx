import React from 'react'
import { Link } from 'react-router-dom'

function PageHead({middle_content, page_name}) {
    const bg_img_url = "./Content/About/about-page.png";

    return (
        <>
            <div 
            style={{backgroundImage: `url(${bg_img_url})`}}
            className='bg-cover bg-center h-[280px]'
            >
                    <div 
                    className='h-[90%] w-[100%] 
                    text-5xl text-white font-bold
                    bg-black/60 flex justify-center items-center
                    cursor-default
                    '>
                        {middle_content}
                    </div>

                    <div
                    className='h-[10%] w-[100%]
                    bg-black/60 text-white
                    pl-[130px]
                    '
                    >
                        <Link to='/'
                        className='hover:text-red-500 transition-all'
                        > HOME </Link>
                        
                        / {page_name}
                    </div>
            </div>
        </>
    )
}

export default PageHead 