import React from 'react'

function AbContent() {
    const abImg = "./Content/About/about-pic.png";

    return (
    <>
    
    <div name="main-content"
    className='
    bg-[#F6F6F6]
    p-6 rounded-md
    flex flex-col items-center
    my-[50px] mx-[20px]

    sm:mx-[50px]
    lg:flex-row md:gap-3 md:content-around 
    lg:mx-[100px] 
    xl:mx-[130px] xl:my-[100px]
    '
    >

        <div style={{backgroundImage: `url(${abImg})`}}
        className='
       
        bg-center
        transition-all
        
        h-[300px] 
        w-[248px]

        sm:w-[390px]
        md:w-[480px] md:h-[440px]
        
        '
        >
          
        </div>

        <div name="to-achieve-the-box-growth-with-absolute" 
        className='lg:absolute lg:right-[120px] lg:pl-[400px] xl:right-[140px]
        '>

            <div name="content"
            className='
            bg-white text-sm
            p-4 my-4 rounded-md
            w-[250px]
            sm:mx-3 
            sm:w-[390px]
            md:w-[480px]
            shadow-md
            
            lg:w-auto
            
            
            '
            >
                <h2 className='text-lg font-bold'>About Us</h2>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis quis vitae commodi debitis veritatis voluptas ipsa, nulla sint temporibus quia officia dolore suscipit cupiditate, nobis, exercitationem excepturi mollitia nihil ipsum.
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut laboriosam ipsum quibusdam adipisci aliquid facere mollitia nemo necessitatibus provident, quos eveniet iure consectetur. Consequuntur perferendis debitis quaerat cumque ducimus totam, esse necessitatibus blanditiis odit at velit obcaecati dolor reprehenderit voluptas?
                </p>

                <br />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem impedit doloribus quae voluptates molestias laudantium temporibus provident ad quod voluptate quos, quis minima, unde velit beatae sed pariatur est veritatis!
                </p>
            </div>
        </div>

    </div>
    
    </>
  )
}

export default AbContent