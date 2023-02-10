import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import  ReactSelect from 'react-select';
import ButtonResult from '@/component/ButtonResult';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';





const slides = [
    { image: 'https://cdn.sanity.io/images/cpwmjnrl/production/f10ea86de9de03961138881e7acaab5a83b9ba0a-7254x7098.jpg',
     title: 'Product 1' ,
     price: '$125',
     description: 'First Product description here '
    },
    { image: 'https://cdn.sanity.io/images/cpwmjnrl/production/dfad3f06940fc8728335a77f78bf96bcd4159e8b-7618x7080.jpg',
     title: 'Product 2' ,
     price: '$225',
     description: 'Second Product description here '
    },
    { image: 'https://cdn.sanity.io/images/cpwmjnrl/production/073e5b1f41641bf9208c17c2a56212a1d38e26fd-7035x7062.jpg', 
    title: 'Product 3' ,
     price: '$325',
     description: 'Third Product description here '
    },
    // ...
  ];

  const defaultValues = {
    Qty: { value: "1", label: "1" },
  }
  export default function Storetwo(){
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
<div className=' md:flex  p-2 h-[100vh]  '>
          {/* image container */}          
    <div className=" w-[100%] md:w-[100%] ">
            {slides.map((slide, index) => (
                <div key={index} className={`relative flex inset-0 z-10 ${index === currentSlide ? 'block' : 'hidden'}`}>
               
                <img src={slide.image} alt="" className="object-cover p-10 h-full md:h-[100vh] " />
                
                <div className=" top-40 left-10 justify-center items-center mx-auto flex ">
                <button className='text-3xl ' onClick={handlePreviousClick}><ArrowBackIosIcon/></button>
                <button className='text-3xl ' onClick={handleNextClick}><ArrowForwardIosIcon /></button>
                </div>
                
          </div>
          
      ))}
    </div>
            {/* checkout container */}
        <div className=' w-[100%] h-[50%] grid items-center  justify-center mx-auto mb-28 '>
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
    )
  }