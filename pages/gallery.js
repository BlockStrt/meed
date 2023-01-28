import { useState } from 'react'
import {motion as m} from 'framer-motion'
import Gall from '@/component/Gallery'
import GallTwo from '@/component/Gallerytwo'




export default function Gallery(){


    return(
        <m.main
        initial={{y: '100%'}}
        animate={{y: '0%'}}
        transition={{duration: 0.75, ease: 'easeInOut'}}
        exit={{opacity: 1}}
         className='  text-white-900 absolute top-0 left-0 w-screen h-screen bg-red-400 lg-px48 px-16
         columns-2 overflow-y-hidden'>
          <div className='relative md:columns-3  flex left-0 gap-3 mb-12  text-center mx-auto justify-center
          items-center  '>
            
            <Gall className=''/>
          </div>
          {/* <div className='relative md:columns-3  flex left-0 gap-3 mb-12  text-center mx-auto justify-center
          items-center  '>
            <GallTwo/>
          </div> */}
        
        </m.main>
    )
}