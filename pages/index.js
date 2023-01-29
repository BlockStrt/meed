import Head from 'next/head'
import {motion as m} from 'framer-motion'
import VideoBackground from '@/component/video'




export default function Home() {
  return (
    <>
    <VideoBackground/>
    <m.div
     initial={{x: '100%'}}
     animate={{x: '0%'}}
     transition={{duration: 1.75, ease: 'easeInOut'}}
     exit={{opacity: 1}}
     className="h-screen fixed  mx-auto max-auto overflow-hidden w-screen text-red-300 " >

      <Head>
        <title>Maxine Wint</title>
        <meta name="description" content="Maxine Wint" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>

      <nav  className=' w-full h-24 fixed top-0 flex justify-between p-5 1xl md:text-3xl lg:text-5xl'>
        <div className=' font-FallCome ' >Maxine Wint.</div>
       
      </nav>

      <main className='mx auto h-screen relative top-2/4 w-full flex justify-center  '>
            <div className='w-2/4 relative text-center'>
           
            </div>
      
      </main>
    </m.div>
    </>
  )
}
