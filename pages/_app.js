import Navbar from '@/component/navbar'
import styles from '@/styles/globals.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {motion, AnimatePresence} from 'framer-motion'


const Logo = 'https://cdn.sanity.io/images/cpwmjnrl/production/2bf50a3f3bf642467243c91b94216ea84d7a2a5c-2619x1057.png'


export default function App({ Component, pageProps, router }) {
  const route = useRouter();
  return (
    <div className=''>
       
          <Image width={200} height={200} src={Logo} style={{
            position: 'fixed',
            right: '2%',
            top: '2%',
            zIndex: '1000',
            maxHeight: 'auto',
            
            }}  ></Image>
        
  
  <AnimatePresence mode='wait'>
    <motion.div 
    key={route.route}
    initial='initialState'
    animate="animateState"
    exit='exitState'
    variants={{
      initialState: {
        opacity: 0,
      },
      animateState: {
        opacity: 1,
      },
      exitState:{
        opacity: '',
      },
    }}
    className=' '>
  <Component  key={router.pathname} {...pageProps} className='' />
  </motion.div>
  </AnimatePresence>
  <Navbar className=" font-FallCome text-white mx-auto md:mx-0 lg:mx-4 justify-center fixed w-full flex bottom-12 md:bottom-0 lg:bottom-0 md:flex lg:flex gap-20 text-2xl md:text-3xl lg:text-5xl list-none "/>

  </div>
  )
}
