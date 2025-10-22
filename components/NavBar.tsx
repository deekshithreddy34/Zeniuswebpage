
import React from 'react'
import Link from 'next/link'
// import { ModeToggle } from './ThemeButton'

import { Button } from "@/components/ui/button"
const NavBar = () => {
  return (
    <nav className="h-16 bg-white/90 sticky top-0 border-b px-8 backdrop-blur flex items-center text-black">
        <img src="https://www.zeniusit.com/assets/images/asset-32x-450x233.png" className='w-25 h-13' />
        <ul className='flex w-full justify-end space-x-8 items-center'>
            <li> <Link href={"/"}  className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full font-semibold">Home</Link>   </li>
            <li><Link href={"/about"}  className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full font-semibold">About</Link> </li>
            <li><Link href={"/services"}  className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full font-semibold">Services</Link></li>
            <li><Link href={"/careers"}  className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full font-semibold">Careers</Link></li>
            <li><Link href={"/contact"}  className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-0 after:bg-cyan-500 after:transition-all after:duration-300 hover:after:w-full font-semibold">Contact Us</Link></li>
            {/* <ModeToggle></ModeToggle> */}
        {/* <Button asChild>
      <Link href="/login">Login</Link>
    </Button> */}
        </ul>

    </nav>
  )
}

export default NavBar