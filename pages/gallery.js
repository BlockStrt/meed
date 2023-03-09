import React, { useState } from 'react';
import Gall from '@/component/Gallery'
import Design from '@/component/Paint'
import Paint from '@/component/Design';


const FirstComponent = () => {
  return <div className='md:columns-3'><Gall/></div>;
  };
  
  const SecondComponent = () => {
  return <div ><Design/></div>;
  };
  const ThirdComponent = () => {
  return <div><Paint/></div>;
  };
  const FourthComponent = () => {
    return <div className=' mt-24 md:mt-0'><Storetwo/></div>;
    };

  

export default function Gallery(){
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedOption, setSelectedOption] = useState();

    return(
        <main
         className='  text-white-900 absolute top-0 left-0 w-full   bg-red-400 lg-px48 px-16
          scrollbar scrollbar-track-yellow-300 scrollbar-thumb-yellow  '>
            <div className='w-full md:flex'>
            <h1 className=' font-mono p-5'
            onClick={() => setSelectedTab(1)}
            style={{ cursor: 'pointer' }}>Photography
            <div className='border w-[50%]  mx-auto mb-5 border-slate-900'></div>
            </h1>
            <h1 className=' font-mono p-5'
            onClick={() => setSelectedTab(2)}
            style={{ cursor: 'pointer' }}>Paintings
            <div className='border w-[50%]  mx-auto mb-5 border-slate-900'></div>
            </h1>
            <h1 className=' font-mono p-5'
            onClick={() => setSelectedTab(3)}
            style={{ cursor: 'pointer' }}>Fashion Design
            <div className='border w-[50%]  mx-auto mb-5 border-slate-900'></div>
            </h1>
          
            </div>
            <div>
        {selectedTab === 1 ? <FirstComponent /> : selectedTab === 2 ? <SecondComponent/> : <ThirdComponent/>}
        </div>

        </main>
    )
}