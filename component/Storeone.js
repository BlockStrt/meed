import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import  ReactSelect from 'react-select';
import ButtonResult from '@/component/ButtonResult';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Caro from './Caroone';





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
  export default function Storeone(){
    const [currentProduct, setCurrentProduct] = useState(slides[0]);
    const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
    const [data, setData] = useState(null);
    const onSubmit = data => console.log(data);

    return(
<div className=' md:flex p-2 h-full items-center mx-auto  '>
          {/* image container */}  
          <div><Caro/></div>  
          
            {/* checkout container */}
        <div className=' w-[100%] h-[50%]  items-center  justify-center mx-auto mb-28 '>
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
