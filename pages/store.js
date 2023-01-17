import {motion as m} from 'framer-motion'
import Gallery from '../component/gallery'

export default function About(){
    return(
        <m.main
        initial={{y: '100%'}}
        animate={{y: '0%'}}
        transition={{duration: 0.75, ease: 'easeInOut'}}
        exit={{opacity: 1}}
         className=' overflow-hidden  text-white-900 absolute top-0 left-0 w-full h-full bg-[#7ED095] lg-px48 px-16'>
         
         <Gallery/>



        </m.main>
    )
}