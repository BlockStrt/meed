import React, { useState } from 'react';
import {motion as m} from 'framer-motion'
import { useForm, Controller } from 'react-hook-form';
import  ReactSelect from 'react-select';
import ButtonResult from '@/component/ButtonResult';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Storetwo from '@/component/Storetwo';
import Storeone from '@/component/Storeone';



export default function Store(){
    

    return(
        <main
         className='  text-white-900 absolute top-0 left-0 h-screen w-full bg-[#7ED095] lg-px48 px-16 '>
            {/* parent */}
          <Storeone/>
           

        </main>
    )
}