
import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './ThemeButton'

import { Button } from "@/components/ui/button"
const NavBar = () => {
  return (
    <nav className="h-16 bg-background/60 sticky top-0 border-b px-8 backdrop-blur flex items-center">
        <div className='font-bold text-xl'>Zenius</div>
        <ul className='flex w-full justify-end space-x-8 items-center'>
            <li> <Link href={"/"}>Home</Link>   </li>
            <li><Link href={"/about"}>About</Link> </li>
            <li><Link href={"/services"}>Services</Link></li>
            <li><Link href={"/Careers"}>Careers</Link></li>
            <ModeToggle></ModeToggle>
        {/* <Button asChild>
      <Link href="/login">Login</Link>
    </Button> */}
        </ul>

    </nav>
  )
}

export default NavBar