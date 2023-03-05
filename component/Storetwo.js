import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import  ReactSelect from 'react-select';
import ButtonResult from '@/component/ButtonResult';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardTwo from './CardTwo';





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

  export default function Storetwo(){
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentProduct, setCurrentProduct] = useState(slides[0]);
    const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
    const [data, setData] = useState(null);
    const onSubmit = data => console.log(data);
    const scrollLeft = () => {
        document.getElementById('content').scrollLeft -=200;
    }
    const scrollRight = () => {
        document.getElementById('content').scrollLeft +=200;
    }
    return(
<div className=' md:flex h-screen bg-[#7ED095] relative '>

          {/* image container */}  
         
          <div id='content' className='carousel mx-auto flex w-full  mt-32 md:mt-0 lg-px48  space-x-5 p-4 items-center justify-start overflow-x-scroll
          relative scrollbar-hide scroll-smooth  '>
         <div>
          <CardTwo/>       
         </div>      
         <div>
          <CardTwo/>       
         </div>      
         <div>
          <CardTwo/>       
         </div>      
         <div>
          <CardTwo/>       
         </div>      
         <div>
          <CardTwo/>       
         </div>      
         <div>
          <CardTwo/>       
         </div>      
         <div>
          <CardTwo/>       
         </div>      
         <div>
          <CardTwo/>       
         </div>      
              
</div>
<div className=' p-5 flex relative justify-center'>
            <button onClick={scrollLeft} className='p-4 bg-white z-1000'><ArrowBackIosIcon/></button>
            <button onClick={scrollRight} className='p-4 bg-white z-1000'><ArrowForwardIosIcon/></button>
        </div>
</div>

    )
  }
