import { useState } from 'react'
import {motion as m} from 'framer-motion'
import Gallery from '@/component/Gallery';


export default function About(){

        const [showPopup, setShowPopup] = useState(false);
        const [popupContent, setPopupContent] = useState('');

        function handleClick(content){
            setPopupContent(content);
            setShowPopup(true);
        }

    return(
        <m.main
        initial={{y: '100%'}}
        animate={{y: '0%'}}
        transition={{duration: 0.75, ease: 'easeInOut'}}
        exit={{opacity: 1}}
         className=' overflow-hidden  text-white-900 absolute top-0 left-0 w-screen h-screen bg-red-400 lg-px48 px-16'>
           
            <div className='relative grid grid-rows-3 md:grid-cols-3 gap-3 w-[100%] h-[50%] md:h-[100%] top-32 justify-center display-flex align-items-center m-auto
             '>
                {/* first gallery */}
                <div className='border border-black w-[400px] md:w-[100%] hover:grayscale-100
                hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 '
                onClick={() => handleClick()}
                >
                    
                </div>
                {/* second gallery */}
                <div className='border border-black hover:grayscale-100 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 '
                onClick={() => handleClick('Second content')}
                >

                </div>
                {/* third gallery */}
                <div className='border border-black hover:grayscale-100 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 '
                onClick={() => handleClick('Third content')}
                >

                </div>
                {showPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-[80%] h-[80%]">
                        <p className="text-center">{popupContent}</p>
                        <button className="bg-red-500 text-white py-2 px-4 rounded-full" onClick={() => setShowPopup(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}

            </div>
            
            
        
        </m.main>
    )
}