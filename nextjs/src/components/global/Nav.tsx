"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

function Nav(): React.JSX.Element {
  
  const router = useRouter();

  return (
    <nav className='sticky top-0 px-8 py-4 flex items-center w-full z-50'>
      <Link href={"/"}> 
        <img src="/logo.png" alt="logo" className='h-12 cursor-pointer'/>
      </Link> 
      <div className='navContents flex items-center flex-1 justify-center space-x-8'>
        <Link href={'/'} className="hover:bg-gray-300 text-white-500 px-3 py-2 rounded-md text-sm font-bold">
        Home
        </Link> 
        <Link href={"/blog"} className='text-base opacity-70 hover:opacity-100 text-white'>
            Blog
        </Link> 
        <Link href={"/team"} className='text-white text-base opacity-70 hover:opacity-100'>
            About us
        </Link> 
        <Link href={"/contact"} className='text-white text-base opacity-70 hover:opacity-100'>
          Contact
        </Link> 
      </div>

      <div className='flex align-middle'>
        <div className='h-10 leading-10 bg-btn-sec-red text-center rounded-lg w-44 cursor-pointer opacity-50 hover:opacity-70' onClick={()=>{router.push("/authenticate")}}>
          Connect
        </div>
        
      </div>
    </nav>
  )
}

export default Nav
