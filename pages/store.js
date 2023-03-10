import React, { useState } from 'react';
import {motion as m} from 'framer-motion'
import { useForm, Controller } from 'react-hook-form';
import  ReactSelect from 'react-select';
import ButtonResult from '@/component/ButtonResult';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Storetwo from '@/component/Storetwo';
import Storeone from '@/component/Storeone';


const FirstComponent = () => {
  return <div className=' mt-24 md:mt-0'><Storeone/></div>;
  };
  
  const SecondComponent = () => {
  return <div className=' mt-24 md:mt-0'><Storetwo/></div>;
  };



export default function Store(){
  const [selectedTab, setSelectedTab] = useState(1);

    return(
      <main
      className='  text-white-900 absolute top-0 left-0 w-full bg-[#7ED095] lg-px48 px-16  '>
      {/* parent */}
      <div className='options md:mt-0' style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div
          onClick={() => setSelectedTab(1)}
          style={{ cursor: 'pointer' }}
        >
          Paintings
          <div className='border w-[50%]  mx-auto mb-5 border-slate-900'></div>

        </div>
        <div
          onClick={() => setSelectedTab(2)}
          style={{ cursor: 'pointer', zIndex: '1000', }}
        >
          Fashion Designs
          <div className='border w-[50%]  mx-auto mb-5 border-slate-900'></div>
        </div>
        </div>
        <div className='border w-full opacity-10 mx-auto mt-2 border-slate-600'></div>
        <div>
          {selectedTab === 1 ? <FirstComponent /> : <SecondComponent />}
        </div>

        </main>
     
    )
}