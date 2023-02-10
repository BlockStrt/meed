import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Storeone from '@/component/Storeone';
import Storetwo from '@/component/Storetwo';





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

    const FirstComponent = () => {
        return <div><Storeone/></div>;
        };
        
        const SecondComponent = () => {
        return <div><Storetwo/></div>;
        };
  
export default function Store(){

     const [selectedTab, setSelectedTab] = useState(1);
      
    return(
        <main
       
         className='  text-white-900 absolute top-0 left-0 w-full bg-[#7ED095] lg-px48 px-16  '>
            {/* parent */}
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div
          onClick={() => setSelectedTab(1)}
          style={{ cursor: 'pointer' }}
        >
          Paintings
          <div className='border w-[50%]  mx-auto mb-5 border-slate-900'></div>

        </div>
        <div
          onClick={() => setSelectedTab(2)}
          style={{ cursor: 'pointer' }}
        >
          Fashion Designs
          <div className='border w-[50%]  mx-auto mb-5 border-slate-900'></div>

        </div>
        

      </div>
      <div>
        {selectedTab === 1 ? <FirstComponent /> : <SecondComponent />}
      </div>
        </main>
    )
}