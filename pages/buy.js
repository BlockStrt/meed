import {motion as m} from 'framer-motion'
import { container, item } from '../animation'

export default function About(){
    return(
        <m.main
        initial={{y: '100%'}}
        animate={{y: '0%'}}
        transition={{duration: 0.75, ease: 'easeInOut'}}
        exit={{opacity: 1}}
         className=' overflow-hidden  text-white-900 absolute top-0 left-0 w-full h-full bg-[#7ED095] lg-px48 px-16'>
            <div className=' p-1 relative overflow-hidden top-1/3'>
                <m.h1 
                animate={{y:0}} 
                initial={{y: '100%'}}
                transition={{delay: 0.5, duration: 0.5}}
                className='text-4xl text-center lg:text-right lg:text-9xl text-white font-BlowBrush'>Social Following
                </m.h1>
            </div>
       
            <div className='relative top-2/4 xs:top-[34%] flex gap-40 '>
                <div className='lg:text-2cl text-base font-TrashHand '>
                    <h4> Social Following</h4>
                </div>
                <div className=' lg:text-3xl text-1xl underline'>
                    <m.ul  variants={container} initial="hidden" animate="show" className=' font-TrashHand'>
                        <div className='overflow-hidden'>
                            <m.li variants={item} className="pb-2">IG - <span className='text-white'>7,560</span> followers </m.li>
                        </div>
                        <div className='overflow-hidden'>
                            <m.li variants={item} className="pb-2">Twitter - <span className='text-white'>5,063</span> followers </m.li>
                        </div>
                        <div className='overflow-hidden'>
                            <m.li variants={item} className="pb-2">Youtube - <span className='text-white'>1,140</span> subscribers </m.li>
                        </div>
                        
            
                    </m.ul>
                </div>
            </div>
        </m.main>
    )
}