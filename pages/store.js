import React, { useState } from 'react';
import {motion as m} from 'framer-motion'
import { useForm, Controller } from 'react-hook-form';
import  ReactSelect from 'react-select';
import ButtonResult from '@/component/ButtonResult';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';




const slides = [
    { image: 'https://cdn.sanity.io/images/7fnjll7q/production/0a42dc30669eeb70ba6785605690b218c2acf923-1024x1024.jpg',
     title: 'Product 1' ,
     price: '$125',
     description: 'First Product description here '
    },
    { image: 'https://cdn.sanity.io/images/7fnjll7q/production/6ede803103f3d9791389a347f9b430ae44ba1e61-1024x1024.jpg',
     title: 'Product 2' ,
     price: '$225',
     description: 'Second Product description here '
    },
    { image: 'https://cdn.sanity.io/images/7fnjll7q/production/0a42dc30669eeb70ba6785605690b218c2acf923-1024x1024.jpg', 
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
         className='  text-white-900 absolute top-0 left-0 w-screen h-screen bg-[#7ED095] lg-px48 px-16 overflow-hidden'>
            {/* parent */}
<div className='grid md:flex w-[100%] h-[100%] p-2  '>
    
          {/* image container */}
          
    <div className=" w-[100%] md:w-[50%] h-[100%]">
            {slides.map((slide, index) => (
                <div key={index} className={`relative flex inset-0 z-10 ${index === currentSlide ? 'block' : 'hidden'}`}>
               
                <img src={slide.image} alt="" className="object-cover p-10 " />
                
                <div className=" top-40 left-10 w-full justify-center items-center mx-auto flex ">
                <button className='text-3xl ' onClick={handlePreviousClick}><ArrowBackIosIcon/></button>
                <button className='text-3xl ' onClick={handleNextClick}><ArrowForwardIosIcon /></button>
                </div>
                
          </div>
          
      ))}
      
    
    </div>
            {/* checkout container */}
        <div className=' w-[50%] h-[40%] grid items-center justify-center mx-auto mb-28 '>
            {/* Title pricing container */}
            <div className=' '>
             <ul className=''>
                <li>
                <h1 className='text-2xl'>{currentProduct.title}</h1>
                </li>
                <li className='m-1'>
                    <p>
                        <strong>{currentProduct.price}</strong>
                    </p>
                </li>
             </ul>
             {/* shippig info  */}
                <div>
                    <h2 className='m-1'>Details</h2>
                    <div className='w-full border border-black opacity-10'></div>
                </div>
                <div>
                    <p className='mt-4 uppercase mb-4'>please alow 1-2 days for item to ship after payments</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                <label className='p-2 '>Quantity</label>
                <div className='w-full border border-black mb-2 mt-1 opacity-10'></div>
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
                            { value: "3", label: "3" },
                            ]}
                        />
                        )}
                    />
                <label className='p-2'>Coming soon</label>
                <div className='w-full border border-black mb-2 mt-1 opacity-10'></div>
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

        </main>
    )
}