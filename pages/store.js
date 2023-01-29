import React, { useState } from 'react';
import {motion as m} from 'framer-motion'
import Image from 'next/image'


const slides = [
    { image: 'https://cdn.sanity.io/images/7fnjll7q/production/0a42dc30669eeb70ba6785605690b218c2acf923-1024x1024.jpg', description: 'Slide 1 Description' },
    { image: 'https://cdn.sanity.io/images/7fnjll7q/production/6ede803103f3d9791389a347f9b430ae44ba1e61-1024x1024.jpg', description: 'Slide 2 Description' },
    { image: 'https://cdn.sanity.io/images/7fnjll7q/production/0a42dc30669eeb70ba6785605690b218c2acf923-1024x1024.jpg', description: 'Slide 3 Description' },
    // ...
  ];

export default function Store(){
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePreviousClick = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    }
    const handleNextClick = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
      }
    return(
        <m.main
        initial={{y: '100%'}}
        animate={{y: '0%'}}
        transition={{duration: 0.75, ease: 'easeInOut'}}
        exit={{opacity: 1}}
         className='  text-white-900 absolute top-0 left-0 w-screen h-screen bg-[#7ED095] lg-px48 px-16'>
            {/* parent */}
<div className='flex justify-center w-full'>
          {/* image container */}
    <div className=" justify-center inset-0  items-center w-[50%]">
            {slides.map((slide, index) => (
                <div key={index} className={`absolute flex inset-0 z-10 ${index === currentSlide ? 'block' : 'hidden'}`}>
                <img src={slide.image} alt="" className="w-[500px] fixed object-cover" />
                <div className="absolute bottom-0 p-4">
                    {slide.description}
                </div>
          </div>
      ))}
      <button className='text-5xl text-white z-[999] relative top-0 ' onClick={handleNextClick}>Next</button>
      <button className='text-5xl text-white z-[999] relative top-0' onClick={handlePreviousClick}>Previous</button>
    </div>
            {/* checkout container */}
        <div className=' relative text-4xl  inset-0 w-[50%]'>
            <h1>This is the container for checkout</h1>
            <p>create input fields here</p>
        </div>
</div>

        </m.main>
    )
}