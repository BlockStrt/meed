import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const slides = [
    { image: 'https://cdn.sanity.io/images/cpwmjnrl/production/03413995552f59fbc3e8d98517442fe2db87eed7-3024x4032.jpg',
     title: 'Product 1' ,
     price: '$125',
     description: 'First Product description here '
    },
    { image: 'https://cdn.sanity.io/images/cpwmjnrl/production/4bef8db8bcc0e504998833c604ccc8a4417e1a79-3024x4032.jpg',
     title: 'Product 2' ,
     price: '$225',
     description: 'Second Product description here '
    },
    { image: 'https://cdn.sanity.io/images/cpwmjnrl/production/ba6692d89a30ed33f0b84b9e9598e97de6082645-3024x4032.jpg', 
    title: 'Product 3' ,
     price: '$325',
     description: 'Third Product description here '
    },
    // ...
  ];

  export default function Caroone(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentProduct, setCurrentProduct] = useState(slides[0]);
    const handlePreviousClick = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
        setCurrentProduct(slides[currentSlide]);
    }
    const handleNextClick = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
        setCurrentProduct(slides[currentSlide]);
    }
    return(
        <div className=" w-[100%] md:w-[100%] ">
        {slides.map((slide, index) => (
            <div key={index} className={`relative flex inset-0 z-10 justify-center items-center ${index === currentSlide ? 'block' : 'hidden'}`}>
        
            <img src={slide.image} alt="" className="object-cover p-10 w-full h-[100%] md:h-[100vh] " />
            
            <div className=" top-40 left-10 justify-center items-center mx-auto flex ">
            <button className='text-3xl ' onClick={handlePreviousClick}><ArrowBackIosIcon/></button>
            <button className='text-3xl ' onClick={handleNextClick}><ArrowForwardIosIcon /></button>
            </div>
            
        </div>

        ))}
        </div>
  )}