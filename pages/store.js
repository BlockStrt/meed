import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Storeone from '@/component/Storeone';





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

  const defaultValues = {
    Qty: { value: "1", label: "1" },
  }
export default function Store(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentProduct, setCurrentProduct] = useState(slides[0]);
    const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
    const [data, setData] = useState(null);
    const onSubmit = data => console.log(data);

    const handlePreviousClick = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
        setCurrentProduct(slides[currentSlide]);
    }
    const handleNextClick = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
        setCurrentProduct(slides[currentSlide]);
    }
    return(
        <main
        // initial={{y: '100%'}}
        // animate={{y: '0%'}}
        // transition={{duration: 0.75, ease: 'easeInOut'}}
        // exit={{opacity: 1}}
         className='  text-white-900 absolute top-0 left-0 w-screen h-screen bg-[#7ED095] lg-px48 px-16 '>
            {/* parent */}
        <Storeone/>

        </main>
    )
}