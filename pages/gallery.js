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
         className=' overflow-hidden text-white-900 absolute top-0 left-0 w-screen h-screen bg-red-400 lg-px48 px-16
         '>
          <div className='relative flex md:columns-3 gap-3 mb-12 mt-12 p-10 text-center mx-auto justify-center
          items-center  '>
            <h1>Keali Gallery</h1>
            <Gall className='overflow-auto'/>
          </div>
          {/* <div className='md:columns-3 gap-3 mb-12 mt-12 p-10 text-center '>
            <h1>Keali Gallery</h1>
            <GallTwo/>
          </div> */}
        
        </m.main>
    )
}