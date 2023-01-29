import React, { useState } from 'react';
import {motion as m} from 'framer-motion'
import { useForm, Controller } from 'react-hook-form';
import  ReactSelect from 'react-select';
import ButtonResult from '@/component/ButtonResult';
import { Checkbox } from '@mui/material';



const slides = [
    { image: 'https://cdn.sanity.io/images/7fnjll7q/production/0a42dc30669eeb70ba6785605690b218c2acf923-1024x1024.jpg', description: 'Slide 1 Description' },
    { image: 'https://cdn.sanity.io/images/7fnjll7q/production/6ede803103f3d9791389a347f9b430ae44ba1e61-1024x1024.jpg', description: 'Slide 2 Description' },
    { image: 'https://cdn.sanity.io/images/7fnjll7q/production/0a42dc30669eeb70ba6785605690b218c2acf923-1024x1024.jpg', description: 'Slide 3 Description' },
    // ...
  ];

  const defaultValues = {
    Qty: { value: "1", label: "1" },
  }
export default function Store(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
    const [data, setData] = useState(null);
    const onSubmit = data => console.log(data);

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
         className='  text-white-900 absolute top-0 left-0 w-screen h-screen bg-[#7ED095] lg-px48 px-16 overflow-hidden'>
            {/* parent */}
<div className='grid md:flex  w-[100%] h-[100%]'>
    
          {/* image container */}
    <div className="  w-[50%] h-[100%]">
            {slides.map((slide, index) => (
                <div key={index} className={`relative flex inset-0 z-10 ${index === currentSlide ? 'block' : 'hidden'}`}>
                    
                <img src={slide.image} alt="" className="object-cover p-10" />
                <div className="absolute bottom-0 p-4">
                    {slide.description}
                </div>
                
          </div>
      ))}
    
    </div>
            {/* checkout container */}
        <div className=' w-[50%] h-[80%] grid items-center justify-center '>
            {/* Title pricing container */}
            <div class='inner'>
             <ul>
                <li>
                <h1>This is the container for checkout</h1>
                </li>
                <li class='price'>
                    <p>
                        <strong>$125</strong>
                    </p>
                </li>
             </ul>
             {/* shippig info  */}
                <div>
                    <h2>Details</h2>
                </div>
                <div>
                    <p>please alow 1-2 days for item to ship after payments</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                <label>Quantity</label>
                    <Controller
                        name="Qty"
                        control={control}
                        render={({ field }) => (
                        <ReactSelect
                            isClearable
                            {...field}
                            options={[
                            { value: "1", label: "1" },
                            { value: "2", label: "2" },
                            { value: "3", label: "3" }
                            ]}
                        />
                        )}
                    />
                <label>Coming soon</label>
                    <Controller
                        name="Coming"
                        control={control}
                        render={({ field }) => (
                        <ReactSelect
                            isClearable
                            {...field}
                            options={[
                            { value: "Coming soon", label: "Coming soon" },
                            { value: "Coming soon", label: "Coming soon" },
                            { value: "Coming soon", label: "Coming soon" }
                            ]}
                        />
                        )}
                    />
                    <ButtonResult {...{ data, reset, setValue }} />
                </form>
            
            </div>
        </div>
        
</div>

        </m.main>
    )
}