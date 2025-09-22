
import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
    <nav className="h-16 bg-background/60 sticky top-0 border-b px-8 backdrop-blur flex items-center">
        <div className='font-bold text-xl'>Zenius</div>
        <ul className='flex w-full justify-end space-x-4 '>
            <li> <Link href={"/"}>Home</Link>   </li>
            <li><Link href={"/about"}>About</Link> </li>
            <li className="buttons"></li>
        </ul>

    </nav>
  )
}

export default NavBar