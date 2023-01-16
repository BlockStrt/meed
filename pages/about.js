import React, {useRef} from 'react'
import {motion as m} from 'framer-motion'
import { container, item } from '../animation'
import Typewriter from 'typewriter-effect/dist/core'
import VideoBackground from '@/component/video'


export default function About(){
  
    return(
        <>
        <VideoBackground/>
        <m.main
        initial={{y: '100%'}}
        animate={{y: '0%'}}
        transition={{duration: 0.75, ease: 'easeInOut'}}
        exit={{opacity: 1}}
         className=' overflow-hidden  text-white-900 absolute top-0 left-0 w-full h-full bg-[#D0957E] lg-px48 px-16'>
            <div className=' p-1 relative overflow-hidden top-28 md:top-1/3 lg:top-1/3'>
                <m.h1 
                animate={{y:0}} 
                initial={{y: '100%'}}
                transition={{delay: 0.5, duration: 0.5}}
                id='app'
                className=' text-center text-xs md:text-base lg:text-lg  text-white font-MontItalic z-50'
                ref={node => {
                    if (node) console.log('app', node)
                    new Typewriter(app, {
                            strings: ['I am a confident, introspective artist who has finally stopped trying to fit my round self into a square peg hole. My work explores the black beauty we see everyday throughout the world. I currently attend the School of the Art Institute of Chicago (SAIC). I utilize photography, videography, and fashion design to capture the vibrant identities and experiences that often go unnoticed. Since my main focus is fashion design/construction, I’m able to capture personalities and emotions through a unique lens while creating clothing that showcases who I am as a designer. Society has spent years creating a narrative of the African American community, often displaying grief, poverty and violence. I want to change that narrative and show that we can wear, be, and do whatever we want.Other than art, I am passionate about social justice, specifically the empowerment of Black lives and I think that really translates through my work.  Having witnessed numerous social injustices me and six other teenage girls started an organization called Youth for Black Lives, which through social action was recognized internationally for our courage and effectiveness in being advocates for young voices. I was a Chicago Foundation for Women 2017 Impact Award recipient receiving the prestigious Pioneer Award for her activism. I have also been featured in publications such as Teen Vogue, the Chicago Sun Times, and DNA Info'],
                        autoStart: true,
                        delay:0.35 ,
                        pauseFor: 260000 ,
                      });
                }}
                >
                    












                    {/* I am a confident, introspective artist who has finally stopped trying to fit my round self into a square peg hole. My work explores the black beauty we see everyday throughout the world. I currently attend the School of the Art Institute of Chicago (SAIC). I utilize photography, videography, and fashion design to capture the vibrant identities and experiences that often go unnoticed. Since my main focus is fashion design/construction, I’m able to capture personalities and emotions through a unique lens while creating clothing that showcases who I am as a designer. Society has spent years creating a narrative of the African American community, often displaying grief, poverty and violence. I want to change that narrative and show that we can wear, be, and do whatever we want.
                        Other than art, I am passionate about social justice, specifically the empowerment of Black lives and I think that really translates through my work.  Having witnessed numerous social injustices me and six other teenage girls started an organization called Youth for Black Lives, which through social action was recognized internationally for our courage and effectiveness in being advocates for young voices. I was a Chicago Foundation for Women 2017 Impact Award recipient receiving the prestigious Pioneer Award for her activism. I have also been featured in publications such as Teen Vogue, the Chicago Sun Times, and DNA Info. */}

                </m.h1>
            </div>
       
         
        </m.main>
        </>
    )
}