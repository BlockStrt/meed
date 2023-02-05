import React, {useRef} from 'react'

import {motion as m} from 'framer-motion'
import Link from 'next/link';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

const content1 = 'https://cdn.sanity.io/images/cpwmjnrl/production/7801e3ed6d46cd375e850c2ae0ec3cfd0af95ef3-200x300.jpg'
const content2 = 'https://cdn.sanity.io/images/cpwmjnrl/production/3e4153622588a94409654806dbad4563057a0102-750x344.jpg'
const content3 = 'https://cdn.sanity.io/images/cpwmjnrl/production/6278dcc6320d574934a625433a643d5a7d689dd1-720x1080.jpg'
const content4 = 'https://assets.teenvogue.com/photos/578905116e85f8db434d46b3/1:1/w_120,c_limit/blm-protest-chicago.JPG'
const content5 = 'https://cdn.sanity.io/images/cpwmjnrl/production/2d1d59c5bdff35229f10c2126b0c183913aa35f1-960x1280.jpg'
const content6 = 'https://cdn.sanity.io/images/cpwmjnrl/production/3e4153622588a94409654806dbad4563057a0102-750x344.jpg'
const content7 = 'https://cdn.sanity.io/images/cpwmjnrl/production/43b791901525f192380e11e1d90aec52f656d0a1-1920x1349.webp'
export default function About(){
  
    return(
        <>
        <main
        // initial={{y: '100%'}}
        // animate={{y: '0%'}}
        // transition={{duration: 0.75, ease: 'easeInOut'}}
        // exit={{opacity: 1}}
         className='text-white-900 w-screen h-screen bg-[#D0957E] lg-px48 px-16'>
            <div className=' p-1 relative  top-28 md:top-1/3 lg:top-1/3 h-screen'>
                <div className='flex justify-center cursor-pointer gap-2'>

                <Link href='https://t.co/lzXOdx22qJ'>
                <InstagramIcon/>
                </Link>
                <Link href='https://t.co/RfzzBiDSek'>
                <LinkedInIcon/>
                </Link>
                <Link href=''>
                <DocumentScannerIcon/>
                </Link>
                </div>
                <m.h1 
                animate={{y:0}} 
                initial={{y: '100%'}}
                transition={{delay: 0.5, duration: 0.5}}
                id='app'
                className=' text-center text-xs md:text-base lg:text-lg pt-5  text-white font-MontItalic z-50'
            
                >
      
                   I am a confident, introspective artist who has finally stopped trying to fit my round self into a square peg hole. My work explores the black beauty we see everyday throughout the world. I currently attend the School of the Art Institute of Chicago (SAIC). I utilize photography, videography, and fashion design to capture the vibrant identities and experiences that often go unnoticed. Since my main focus is fashion design/construction, I’m able to capture personalities and emotions through a unique lens while creating clothing that showcases who I am as a designer. Society has spent years creating a narrative of the African American community, often displaying grief, poverty and violence. I want to change that narrative and show that we can wear, be, and do whatever we want.
                        Other than art, I am passionate about social justice, specifically the empowerment of Black lives and I think that really translates through my work.  Having witnessed numerous social injustices me and six other teenage girls started an organization called Youth for Black Lives, which through social action was recognized internationally for our courage and effectiveness in being advocates for young voices. I was a Chicago Foundation for Women 2017 Impact Award recipient receiving the prestigious Pioneer Award for her activism. I have also been featured in publications such as Teen Vogue, the Chicago Sun Times, and DNA Info. 

                </m.h1>
                <h1 className='text-center pt-10 font-Balenci text-4xl'>Articles</h1>
                <div className='border w-full opacity-10 mt-2 border-slate-600'></div>
            </div>
            
            <section className='h-screen w-screen left-0 absolute bg-[#D0957E] lg-px48 px-16 flex
              space-x-5 overflow-x-scroll overscroll-x-none font-MontItalic font-extrabold'>

                    <Link href='http://voyageatl.com/interview/rising-stars-meet-maxine-wint-of-chicago-traveling-back-and-forth-to-atl/'>
                    <article className=' border border-slate-600 h-[50%] w-[300px] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  md:w-[600px] xl:w-[900px] snap-center bg-transparent p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden
                    '> 
                    <img
                    className='object-cover h-full rounded-full ' src={content1}/>
                        Voyage ATL
                    </article> 
                    </Link>
                    <Link href='https://shoutoutatlanta.com/meet-maxine-wint-fashion-designer-and-photographer/'>
                    <article className=' border border-slate-600 h-[50%] w-[300px] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  md:w-[600px] xl:w-[900px] snap-center bg-transparent p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
                    <img className='object-cover h-full rounded-full ' src={content2}/>
                        Shout Out Atlanta
                    </article> 
                    </Link>
                    <Link href='https://msmagazine.com/2018/04/04/young-feminists-leading-fight-black-lives-chicago/'>
                    <article className=' border border-slate-600 h-[50%] w-[300px] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  md:w-[600px] xl:w-[900px] snap-center bg-transparent p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
                    <img
                    className='object-cover h-full rounded-full ' src={content3}/>
                        MS Magazine
                    </article> 
                    </Link>
                    <Link href='https://www.teenvogue.com/story/teen-activists-shut-down-chicago-streets-peaceful-blm-protest'>
                    <article className=' border border-slate-600 h-[50%] w-[300px] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  md:w-[600px] xl:w-[900px] snap-center bg-transparent p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
                    <img
                    className='object-contain h-full rounded-full ' src={content4}/>
                        Teen Voyage
                    </article> 
                    </Link>
                    <Link href='https://sites.saic.edu/fashion2022/artists/maxine-wint/'>
                    <article className=' border border-slate-600 h-[50%] w-[300px] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  md:w-[600px] xl:w-[900px] snap-center bg-transparent p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
                    <img
                    className='object-cover h-full rounded-full ' src={content5}/>
                        SAIC
                    </article> 
                    </Link>
                    <Link href='https://www.chicagomag.com/city-life/july-2016/black-lives-matter-chi-youth-sit-in-rally/'>
                    <article className=' border border-slate-600 h-[50%] w-[300px] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  md:w-[600px] xl:w-[900px] snap-center bg-transparent p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
                    <img
                    className='object-cover h-full rounded-full ' src={content6}/>
                        Chicago Mag
                    </article> 
                    </Link>
                    <Link href='https://www.teenvogue.com/gallery/kids-teens-youths-ambassadors-womens-march'>
                    <article className=' border border-slate-600 h-[50%] w-[300px] flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  md:w-[600px] xl:w-[900px] snap-center bg-transparent p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
                    <img
                    className='object-cover h-full rounded-full ' src={content7}/>
                        Teen Vogue
                    </article> 
                    </Link>
               
                   
                </section>
               
         
        </main>
        </>
    )
}