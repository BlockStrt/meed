import { useState } from 'react'
import {motion as m} from 'framer-motion'
import Gall from '@/component/Gallery'
import GallTwo from '@/component/GalleryTwo'





export default function Gallery(){


    return(
        <main
         className='  text-white-900 absolute top-0 left-0 w-full  bg-red-400 lg-px48 px-16
          scrollbar scrollbar-track-yellow-300 scrollbar-thumb-yellow  '>
          
          <div className='relative md:columns-3 left-0 gap-3 mb-12  text-center mx-auto justify-center
          items-center text-4xl  '>
            <h1>Photography</h1>
            <Gall className=''/>
          </div>
          <div className='md:columns-3 text-4xl justify-center items-center'>
          <h1 >Design</h1>
            <GallTwo />
          </div>
          

          {/* <section className='h-screen '>
          <div className='relative md:columns-3 left-0 gap-3 mb-12  text-center mx-auto justify-center
          items-center  '>
            <Gall className=''/>
          </div>
          <h1>
            This Gallery
          </h1>
          </section> */}
         
        </main>
    )
}