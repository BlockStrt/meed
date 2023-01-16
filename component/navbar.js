import Link from 'next/link'

export default function Navbar(){
    return(
      <footer className="  font-FallCome text-white mx-auto md:mx-0 lg:mx-4 justify-center fixed w-full flex bottom-12 md:bottom-0 lg:bottom-0 md:flex lg:flex gap-20 text-2xl md:text-3xl lg:text-5xl list-none ">
      <Link href={'/'}>
      <li>
       Home
       </li>
      </Link>
      <Link href={'/about'}>
      <li>
       About
       </li>
      </Link>
      <Link href={'/buy'}>
      <li>
       Store
       </li>
      </Link>
      <Link href={'/contact'}>
      <li>
       Contact
       </li>
      </Link>
     </footer>

    )


}