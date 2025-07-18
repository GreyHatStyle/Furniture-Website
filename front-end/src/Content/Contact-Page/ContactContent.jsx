import React, { useState } from 'react'

function ContactContent() {
  const [showThanks, setShowThanks] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowThanks(true);
    setTimeout(() => setShowThanks(false), 2500);
  };

  return (
    <>

    <div 
    className='
    bg-[#F6F6F6]
    my-[50px]
    py-[60px]
    flex flex-col items-center
    md:mx-[50px] gap-7
    lg:mx-[130px]
    p-6
    '>

        <div name="contact-details"
        className='
        flex flex-col items-start gap-2
        p-4 shadow-md text-sm
        bg-white
        md:w-[700px]
        '
        >
            <h1 className='text-3xl mb-3'>Contact Details</h1>
            
            <div className='flex gap-5 justify-between items-center'>
                <svg xmlns="http://www.w3.org/2000/svg"
                className='bg-gray-400 rounded-md p-1 min-w-[48px] min-h-[48px]' 
                height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M450-410h60v-120h120v-60H510v-120h-60v120H330v60h120v120Zm30 251q133-121 196.5-219.5T740-552q0-117.79-75.29-192.9Q589.42-820 480-820t-184.71 75.1Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>

                <div className=''>
                    XX Commerce Tower, Street Name, New Delhi, India
                </div>
            </div>

            <div className='flex gap-5 justify-start items-center'>

                <svg 
                className='bg-gray-400 rounded-md p-1 min-w-[48px] min-h-[48px]' 
                xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M795-120q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19.29 12.86-32.14Q145.71-840 165-840h140q14 0 24 10t14 25l26.93 125.64Q372-665 369.5-653.5t-10.73 19.73L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.15-15 13.15-4 25.85-2l119 26q15 4 25 16.04 10 12.05 10 26.96v135q0 19.29-12.86 32.14Q814.29-120 795-120ZM229-588l81-82-23-110H180q2 42 13.5 88.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z"/></svg>

                <div>
                    +91 - XXXXXXXXXX
                </div>
            </div>

            <div className='flex gap-5 justify-between items-center'>
                <svg 
                className='bg-gray-400 rounded-md p-1 min-w-[48px] min-h-[48px]' 
                xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"/></svg>

                <div>
                    company-email2010@gmail.com
                </div>
            </div>



        </div>

        <form onSubmit={handleSubmit}>

            <div name="send-message-box"
            className='
            flex flex-col items-start gap-4
            p-6 shadow-md text-sm 
            bg-white
            w-full
            sm:w-[427px]
            md:w-[700px]
            '
            >
                <h1 className='text-3xl mb-3 '>Send Message</h1>
                

                <input 
                id='user-name'
                name='user-name'
                type="text" 
                placeholder={"Your name here..."}
                className='
                bg-[#F6F6F6] text-gray-500
                p-3 rounded-md shadow-sm 
                min-w-[240px]
                    
                '
                />

                <input 
                id='user-email'
                name='user-email'
                type="text" 
                placeholder={"Your Email here..."}
                className='
                bg-[#F6F6F6] text-gray-500
                p-3 rounded-md shadow-sm 
                min-w-[240px]
                
                sm:w-[90%]
                md:w-[70%]
                '
                />


                <textarea
                id='user-message'
                name='user-message'
                rows={5} 
                placeholder={"Your Message here..."}
                className='
                bg-[#F6F6F6] text-gray-500
                p-3 rounded-md shadow-sm 
                min-w-[240px]
                
                sm:w-[90%]
                md:w-[70%]
                
                '
                />
                
                <button 
                className='
                bg-custom-wood text-white rounded-md
                px-5 py-3 ml-5 mt-5
                transition-all
                hover:bg-red-wood hover:cursor-pointer
                
                '
                type='submit'>
                    SUBMIT MESSAGE
                </button>
            </div>
        </form>

        {showThanks && (
        <div 
        className="
        fixed top-0 left-0 
        w-full h-full 
        flex items-center justify-center 
        z-100">

          <div 
          className="
          bg-green-400 text-xl text-white font-bold
          shadow-lg rounded-lg p-8 ">
            Thanks for your feedback!
          </div>
        </div>
      )}

    </div>
    </>
  )
}

export default ContactContent