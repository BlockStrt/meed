import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link'
import {useState} from 'react'
import { useRouter } from 'next/router';

export default function Navbar(){
    const router = useRouter();
    const [route, setRoute] = useState(router.route);
  
    return(
      <footer className={` font-Vera text-slate-900 mx-auto md:mx-0 lg:mx-4 p-10  fixed w-full flex bottom-12 md:bottom-0 lg:bottom-0 md:flex lg:flex justify-between text-2xl md:text-3xl lg:text-5xl list-none transition 5s ease-in-out`}>
      
      <Link href={'/'}>
      <li className={route === '/' ? 'text-slate-900' : 'text-white'} onClick={() => setRoute('/')}>
       Home
       </li>
      </Link>
      <Link href={'/about'}>
      <li className={route === '/about' ? 'text-slate-900' : 'text-white'} onClick={() => setRoute('/about')}>
       About
       </li>
      </Link>
      <Link href={'/store'}>
      <li className={route === '/store' ? 'text-slate-900' : 'text-white'} onClick={() => setRoute('/store')}>
       Store
       </li>
      </Link>
      <Link href={'/gallery'}>
      <li className={route === '/gallery' ? 'text-slate-900' : 'text-white'} onClick={() => setRoute('/gallery')}>
       Gallery
       </li>
      </Link>
     </footer>



    )


}







































// import TwitterIcon from '@mui/icons-material/Twitter';
// import { color } from '@mui/system';

// import Link from 'next/link'

// export default function Navbar({route}){
//   const color = route === '/' ? '#1f1f29' : '#FFFF'
//   const color2 = route === '/about' ? '#FFFF' :'#1f1f29'
//     return(
//       <footer className="  font-Balenci text-slate-900 mx-auto md:mx-0 lg:mx-4 p-10  fixed w-full flex bottom-12 md:bottom-0 lg:bottom-0 md:flex lg:flex justify-between text-2xl md:text-3xl lg:text-5xl list-none ">
      
//       <Link href={'/'}>
//       <li style={{
//         color: color
//       }}>
//        Home
//        </li>
//       </Link>
//       <Link href={'/about'}>
//       <li style={{
//         color: color2
//       }}>
//        About
//        </li>
//       </Link>
//       <Link href={'/store'}>
//       <li style={{
//         color: color
//       }}>
//        Store
//        </li>
//       </Link>
//       <Link href={'/gallery'}>
//       <li style={{
//         color: color
//       }}>
//        Gallery
//        </li>
//       </Link>

    
//      </footer>



//     )


// }